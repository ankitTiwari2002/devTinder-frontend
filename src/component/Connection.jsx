import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnection } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.Connection);
  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connection", {
        withCredentials: true,
      });
      dispatch(addConnection(res?.data?.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };
  useEffect(() => {
    fetchConnection();
  }, []);
  if (!connections) return;
  if (connections.length === 0) return <h1>can not find any connection</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-white text-3xl">Connections</h1>

      {connections.map((connection) => {
        const { _id, firstName, lastName, photourl, age, gender, about } =
          connection;

        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-full object-cover"
                src={photourl}
              />
            </div>
            <div className="text-left mx-4 ">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="w-full h-full flex justify-end items-start">
              <Link to={"/chat/" + _id}>
                <button className="bg-black px-3 py-4 bottom-0 rounded-xl text-lg font-bold">
                  chat
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connection;
