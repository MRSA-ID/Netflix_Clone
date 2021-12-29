import React from "react";

function TvComponent(){
    return(
    <div className="container max-w-full flex flex-col md:flex-row border-b-8 bg-black text-white h-auto border-gray-800">
        <div className="container flex flex-col justify-center items-center text-center md:items-start md:text-left pt-10 lg:pl-16">
            <h1 className="text-xl lg:text-7xl font-bold">Enjoy on your TV.</h1>
            <h2 className="text-lg lg:text-4xl pt-5 px-10 md:px-0 font-medium ">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className="container pt-0 px-10 pb-10 ">
          <div className="container relative lg:pl-24">
            <div className="relative z-20">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
            </div>
            <div className="absolute top-16 left-14 w-3/4 lg:w-2/3 lg:top-16 lg:left-40 z-10">
              <video autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
    </div>
    )
}

export default TvComponent