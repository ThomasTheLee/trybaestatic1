export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className=" w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-3 lg:my-3">
            <img width={100} src="/images/logo.png" alt="easybank logo" />
          </div>
        </nav>
      </div>  
      {/* <div className="bg-header-mobile bg-custom-mobile-header-size absolute w-full h-full bg-no-repeat lg:hidden"></div> */}
      <div className="bg-header-desktop absolute w-full h-full bg-no-repeat lg:hidden bg-cover"></div>
       <div className="bg-header-desktop absolute w-full h-full  bg-norepeat hidden lg:block bg-cover"></div>
     


      <div className="container h-screen relative">
        <div className="h-full flex flex-col justify-end pb-4 lg:pb-0 lg:w-96 lg:justify-center">
          <div className="h-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <h1 className="text-4xl font-semibold lg:text-5xl text-white">
              Next <span className="text-yellow-500 ">generation </span>Event ticketing
            </h1>
            <p className="text-white text-xs lg:text-base leading-5 mb-7 lg:text-white">
              Take your event planning online. Your Trybae app will handle all your ticketing needs.
            </p>
            <div className="flex">
            <button className="mb-7 focus:outline-none ">
              <a href="">
                <img src="images/playstore.png" alt="" className="h-40"/>
              </a>
            </button>
            <button className="mb-7 focus:outline-none  ml-5">
              <a href="">
                <img src="images/applestore.png" alt="" className="h-40"/>
              </a>
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
