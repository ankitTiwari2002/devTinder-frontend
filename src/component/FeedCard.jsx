const FeedCard = ({ user }) => {
  const { photourl, firstName, gender, age, about } = user;
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full min-h-96">
      {/* Image Section */}
      <div
        className="h-1/2 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${photourl})` }}
      ></div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-2xl font-bold">
          {firstName}, {age}
        </h2>
        <p className="text-sm text-gray-400 capitalize">{gender}</p>

        {/* About Section */}
        <p className="text-gray-300 mt-2">{about}</p>
      </div>

      {/* Actions Section */}
      <div className="flex justify-between p-4 border-t border-gray-700">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Dislike
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Like
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
