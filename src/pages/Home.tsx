const Home = () => {
  return (
    <div className=" w-full min-h-screen">
      <div className=" flex flex-col items-center gap-4 justify-center w-full min-h-screen">
        <div className=" w-44 h-44 rounded-md">
          <img
            src="/zayat.png"
            alt=""
            className=" w-full h-full object-cover rounded-md"
          />
        </div>
        <p className=" text-2xl font-bold">Welcome to Zayat App</p>
      </div>
    </div>
  );
};

export default Home;
