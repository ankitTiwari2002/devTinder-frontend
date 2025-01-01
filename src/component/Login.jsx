import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId]= useState("ankit@gmail.com");
  const [password, setPassword]= useState("Ankit@123");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogin = async()=>{
    try{
      const user = await axios.post(BASE_URL+"/login",{
        emailId,
        password,
      },{withCredentials: true}
    )
    console.log(user);
    dispatch(addUser(user.data));
    navigate("/");
    }catch(err){
      console.error(err);
    }
  }
  
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={emailId}
                            onChange={(e)=>setEmailId(e.target.value)} 
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        onClick={handleLogin} 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200">     
                        Login
                    </button>
                </form>
                <p className="text-center text-sm text-gray-400 mt-4">
                    {/* Don't have an account?  */}
                    <a href="#" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
  )
}

export default Login