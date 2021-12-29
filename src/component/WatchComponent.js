import React, {useEffect} from "react";
import "./index.css"

function WatchComponent(){
  useEffect(() => {
    catchHeight()
  }, [])
  function catchHeight(){
    const resize_ob = new ResizeObserver(function(entries){
        let rect = entries[0].contentRect;
        // let height = rect.height;  
        let width = rect.width;
        let contentVideo = document.querySelector('#contentVideo')
        // contentVideo.style.height = `calc(${height + 'px'} / ${2})`
        contentVideo.style.width = `calc(${width + 'px'} / ${1.6})`
        // contentVideo.style.top = `calc(${height + 'px'} - 50px)`
    });
    resize_ob.observe(document.querySelector('#imageDekstop'))
  }
    return(
    <div className="container max-w-full flex flex-col md:flex-row border-b-8 bg-black text-white h-auto border-gray-800">
        <div className="container flex flex-col justify-center items-center text-center md:items-start md:text-left pt-10 lg:pl-16">
            <h1 className="text-xl lg:text-6xl font-bold">Watch everywhere.</h1>
            <h2 className="text-lg lg:text-4xl pt-5 px-10 md:px-0 font-medium ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
        </div>
        <div className="container p-10 ">
          <div className="container relative">
            <div className="relative z-20" >
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-id.png"  id="imageDekstop"/>
            </div>
            <div id="contentVideo" className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 z-10 widthVideo">
              <video autoPlay playsInline muted loop className="w-full">
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-id.m4v" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
    </div>
    )
}

export default WatchComponent