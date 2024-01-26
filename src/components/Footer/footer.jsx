import React from 'react'
import vector from "../../assets/icons/Vector.svg"
const footer = () => {
    return (
        <div>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                    <div className="grow w-full px-8 py-12 border-2 border-solid border-white max-md:max-w-full max-md:px-5">
                        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                                <div className="flex grow items-stretch gap-3 max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6982c147adeb6c2880ffb3d885061ec9ec96ab8294a45543ad67e645318a14f?"
                                        className="aspect-[1.03] object-contain object-center w-[34px] fill-[linear-gradient(91deg,#C6F1F7_-4.01%,#F983E9_36.14%,#B877FF_77.44%,#C2E9CD_106.11%)] overflow-hidden shrink-0 max-w-full"
                                    />
                                    <div className="text-base font-semibold bg-clip-text grow my-auto title">
                                        Influenzilla
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                                <div className="text-xs font-semibold bg-clip-text w-full max-md:mt-10 title">
                                    bespoke design and marketing services
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch max-md:max-w-full">
                        <div className="flex items-stretch justify-between gap-0 px-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="flex grow basis-[0%] flex-col justify-center items-stretch px-14 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    ABOUT
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    SERVISES
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    CASES
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center px-16 py-8 border-2 border-solid border-white items-start max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    TEAM
                                </div>
                            </div>
                            <img
                                loading="lazy"
                                srcSet={vector} alt='vector'
                                className="aspect-[0.99] object-contain object-center w-[67px] overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                        <div className="flex items-stretch justify-between gap-0 px-5 max-md:max-w-full max-md:flex-wrap">
                            <div className="flex grow basis-[0%] flex-col justify-center items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    BOOST PROGRAM
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    PRODUCTS
                                </div>
                            </div>
                            <div className="flex basis-[0%] flex-col justify-center items-stretch px-14 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    BOOK
                                </div>
                            </div>
                            <div className="flex grow basis-[0%] flex-col justify-center items-center px-16 py-8 border-2 border-solid border-white max-md:px-5">
                                <div className="justify-center text-center text-xs font-medium bg-clip-text title">
                                    BLOG
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
