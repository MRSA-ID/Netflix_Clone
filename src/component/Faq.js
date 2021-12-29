import React from "react";

function Faq() {
    return(
        <div className="flex w-full justify-center text-white font-roboto bg-black border-b-8 border-gray-800 py-10 lg:py-20">
            <div className=" lg:w-9/12 flex flex-col lg:p-10 gap-5">
                <h1 className="text-center text-3xl lg:text-6xl mb-5">
                    <b>Frequently Asked Questions</b>
                </h1>
                <details className="bg-gray-550 w-full lg:text-3xl">
                    <summary className="p-6 font-semibold">What Is Netflix ?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        Netflix is a streaming service that offers a wide variety of{" "}
                        <br />
                        award-winning TV shows, movies, anime, documentaries, <br />
                        and more on thousands of internet-connected devices. <br />
                        You can watch as much as you want, whenever you want <br />
                        without a single commercial – all for one low monthly price.{" "}
                        <br />
                        There's always something new to discover and new TV <br />
                        shows and movies are added every week! <br />
                    </div>
                </details>
                <details className="bg-gray-550 w-full  lg:text-3xl">
                    <summary className="p-6 font-semibold">How much does Netflix cost?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, <br />
                        or streaming device, all for one fixed monthly fee. Plans <br />
                        range from IDR54,000 to IDR186,000 a month. No extra <br />
                        costs, no contracts. <br />
                    </div>
                </details>
                <details className="bg-gray-550 w-full  lg:text-3xl">
                    <summary className="p-6 font-semibold">Where can i watch?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        Watch anywhere, anytime, on an unlimited number of <br />
                        devices. Sign in with your Netflix account to watch instantly{" "}
                        <br />
                        on the web at netflix.com from your personal computer or on <br />
                        any internet-connected device that offers the Netflix app, <br />
                        including smart TVs, smartphones, tablets, streaming media <br />
                        players and game consoles. <br />
                        You can also download your favorite shows with the iOS, <br />
                        Android, or Windows 10 app. Use downloads to watch while <br />
                        you're on the go and without an internet connection. Take <br />
                        Netflix with you anywhere.
                        <br />
                    </div>
                </details>
                <details className="bg-gray-550 w-full  lg:text-3xl">
                    <summary className="p-6 font-semibold">How do i cancel?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        Netflix is flexible. There are no pesky contracts and no <br />
                        commitments. You can easily cancel your account online in <br />
                        two clicks. There are no cancellation fees – start or stop your{" "}
                        <br />
                        account anytime. <br />
                    </div>
                </details>
                <details className="bg-gray-550 w-full  lg:text-3xl">
                    <summary className="p-6 font-semibold">What can i watch on Netflix?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        Netflix has an extensive library of feature films, <br />
                        documentaries, TV shows, anime, award-winning Netflix <br />
                        originals, and more. Watch as much as you want, anytime <br />
                        you want. <br />
                    </div>
                </details>
                <details className="bg-gray-550 w-full  lg:text-3xl">
                    <summary className="p-6 font-semibold">Is Netflix good for kids?</summary>
                    <hr className="border-black"/>
                    <div className="px-6 py-4">
                        The Netflix Kids experience is included in your membership <br />
                        to give parents control while kids enjoy family-friendly TV <br />
                        shows and movies in their own space. <br />
                        Kids profiles come with PIN-protected parental controls that{" "}
                        <br />
                        let you restrict the maturity rating of content kids can watch{" "}
                        <br />
                        and block specific titles you don’t want kids to see. <br />
                    </div>
                </details>
                <h1 className="text-center text-lg px-10 lg:text-3xl mt-10">
                    Ready to watch? Enter your email to create or restart your membership.
                </h1>
                <form className="container pt-2 mb-5">
                    <div className="px-10 h-16 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-5 lg:gap-0 lg:flex-row mt-6 ">
                        <input
                        className="p-4 w-full border border-gray-300 focus:outline-none text-black text-xl lg:h-full"
                        placeholder="Email address"
                        />
                        <button className=" w-2/5 bg-red-650 filter brightness-150 flex justify-center items-center lg:border-l-2 lg:border-gray-700 hover:bg-red-600  lg:px-4 py-2 lg:h-full rounded-sm ">
                        <span className="lg:text-3xl whitespace-nowrap lg:whitespace-normal font-normal">Get Started</span>
                        <span className="pl-1 pt-1">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 lg:h-7 lg:w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                            </svg>
                        </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Faq;