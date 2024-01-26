import React from 'react'
import vector from "../../assets/icons/Vector.svg"

const navbar = () => {
    return (
        <div>
            <div className="gap- flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[40%] max-md:w-full max-md:ml-0">
                    <div className="grow w-full px-8 py-12 border-2 border-solid border-white max-md:max-w-full max-md:px-5">
                        <div className="gap- flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                                <div className="flex grow items-stretch gap-3 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e79e838d8f81016886af37b9e53435b77345f4388d0ef1776368c7c66b7ab5ac?"
                                        className="aspect-[1.03] object-contain object-center w-[34px] fill-white overflow-hidden shrink-0 max-w-full"
                                    />
                                    <h1 className="text-white text-base font-semibold grow my-auto">
                                        Influenzilla
                                    </h1>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                                <h2 className="text-white text-xs font-semibold max-md:mt-10">
                                    bespoke design and marketing services
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full">
                        <div className="flex items-stretch justify-between gap-0 px-5 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-stretch px-14 py-8 border-t-2 border-r-2 border-l-2 border-solid border-white max-md:px-5">
                                ABOUT
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-center px-16 py-8 border-t-2 border-r-2 border-solid border-white max-md:px-5">
                                SERVISES
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-center px-16 py-8 border-t-2 border-r-2 border-solid border-white max-md:px-5">
                                CASES
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow px-14 py-8 border-t-2 border-r-2 border-solid border-white items-start max-md:px-5">
                                TEAM
                            </h2>
                            <img
                                loading="lazy"
                                srcSet={vector} alt='vector'
                                className="aspect-[0.99] object-contain px-2 object-center w-10 overflow-hidden shrink-0 max-w-full border-r-2 border-t-2 border-solid border-white cursor-pointer"
                            />
                        </div>
                        <div className="flex items-stretch justify-between gap-0 px-5 max-md:max-w-full max-md:flex-wrap max-sm:hidden">
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                BOOST PROGRAM
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                PRODUCTS
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium items-stretch px-14 py-8 border-2 border-solid border-white max-md:px-5">
                                BOOK
                            </h2>
                            <h2 className=" cursor-pointer justify-center text-white text-center text-xs font-medium grow items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                BLOG
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar
