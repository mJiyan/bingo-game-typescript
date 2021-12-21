const Bingo = () => {
  return (
    <>
      <div className="border border-black p-2 sm:p-1 bg-white">
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black bg-black">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed"></p>
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs text-white">B</p>
          </div>
        </div>
      </div>
      <div className="border border-black p-2 sm:p-1 bg-white">
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black bg-black">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed"></p>
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs text-white">I</p>
          </div>
        </div>
      </div>
      <div className="border border-black p-2 sm:p-1 bg-white">
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black bg-black">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed"></p>
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs text-white">N</p>
          </div>
        </div>
      </div>
      <div className="border border-black p-2 sm:p-1 bg-white">
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black bg-black">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed"></p>
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs text-white">G</p>
          </div>
        </div>
      </div>
      <div className="border border-black p-2 sm:p-1 bg-white">
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black bg-black">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed"></p>
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs text-white">O</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bingo;
