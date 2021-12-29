import React from "react";

function DownloadComponent(){
    return(
    <div className="container max-w-full flex flex-col md:flex-row-reverse border-b-8 bg-black text-white h-auto border-gray-800 ">
        <div className="container flex flex-col justify-center items-center text-center md:text-left pt-10 lg:pr-16 ">
            <h1 className="text-xl lg:text-7xl font-bold">Download Your Shows to watch offline.</h1>
            <h2 className="text-lg lg:text-4xl pt-5 px-10 md:px-0 font-medium">Save your favorites easily and always have something to watch.</h2>
        </div>
        <div className="container pt-0 px-10 pb-10">
            <div className="container p-0 lg:p-10">
                <div className="relative">
                    <img className="lg:w-11/12 h-96 object-cover" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="Gambar phone"/>
                    <div className="absolute border-4 transform left-1/2 -translate-x-1/2 bg-black border-gray-800 lg:w-max h-auto flex p-3 lg:p-4 rounded-2xl lg:rounded-3xl items-center bottom-0 ">
                        <div className="h-16 w-16 lg:h-24 lg:w-24 mr-10 ">
                            <img className="w-full h-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" />
                        </div>
                        <div className="mr-12">
                            <p className="lg:text-2xl font-bold">Stranger Things</p>
                            <p className="lg:text-xl text-blue-500">Downloading...</p>
                        </div>
                        <div className="text-blue-500 mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 lg:h-10 w-8 lg:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DownloadComponent