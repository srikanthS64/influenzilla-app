import React from 'react'
import header1 from "../../assets/imgs/header-1.png"
import img1 from "../../assets/imgs/img-1.png"
import banner1 from "../../assets/imgs/banner-1.png"
import banner2 from "../../assets/imgs/banner-2.png"
import banner3 from "../../assets/imgs/banner-3.png"
import banner4 from "../../assets/imgs/banner-4.png"
import header2 from "../../assets/imgs/header-2.png"
import Navbar from '../../components/Navbar/navbar'
import Footer from "../../components/Footer/footer"
const home = () => {
    return (
        <div className="bg-neutral-900 flex flex-col pb-12">
            <Navbar />
            <div className="flex-col overflow-hidden self-stretch relative flex h-[790px] w-full items-center pt-12 max-md:max-w-full text-white">
                <img
                    loading="lazy"
                    srcSet={header1} alt='header1'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1236px] flex-col mt-64 items-start max-md:max-w-full max-md:mt-10">
                    <div className="flex justify-between gap-5 px-5 items-start text-white max-sm:ml-44">
                        <h2 className="text-3xl font-[250] bg-clip-text title">2023</h2>
                        <p className="text-xs bg-clip-text w-20 self-stretch title">
                            hi there, let's get started!
                        </p>
                    </div>{" "}
                    <div className="self-stretch flex justify-between gap-5 mt-16 pr-3 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-sm:ml-5">
                        <div className="flex flex-col items-end max-md:max-w-full w-[500px]">
                            <p className="text-5xl absolute w-28 ml-24 font-light self-center bg-clip-text max-md:text-4xl title max-sm:absolute max-sm:ml-0 max-sm:w-20">
                                ˜˜˜˜˜˜˜˜˜˜
                            </p>{" "}
                            <h1 className="text-6xl font-light bg-clip-text self-stretch mt-3 max-md:max-w-full max-md:text-4xl title">
                                Influence your <br />audience
                            </h1>
                            <span className=' text-lg w-56  text-white absolute top-[230px] ml-20 max-sm:hidden'>boost your brand with our marketing expertise</span>

                        </div>{" "}
                        <div className="flex flex-col mt-3.5 items-end">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de32be50cfe8e8b7f1a906e7ca687e934bfd078a2d8cf165dbaf82afeba70d2?"
                                className="aspect-[1.04] object-contain object-center w-[29px] stroke-[1px] stroke-white overflow-hidden max-w-full mr-48"
                            />{" "}
                            <p className="text-sm bg-clip-text w-[220px] mt-6 title items-end">
                                We believe in the power of digital media to transform businesses
                                and connect them with their audiences in meaningful ways.
                            </p>
                        </div>
                    </div>
                </div>{" "}
                <div className="relative bg-black bg-opacity-70 self-centre items-center justify-center w-full mt-24 px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                    <div className=" flex max-md:flex-col max-md:items-stretch max-md:gap-0 self-center items-center justify-center gap-20">
                        <div className="flex flex-col items-stretch w-52 max-md:w-full max-md:ml-0">
                            <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                <div className="text-base bg-clip-text title">digital branding</div>{" "}
                                <div className="bg-white flex shrink-0 h-0.5 flex-col mt-6" />
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-56 ml-5 max-md:w-full max-md:ml-0">
                            <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                <div className="text-[title] bg-clip-text title">
                                    influence marketing
                                </div>{" "}
                                <div className="bg-white flex shrink-0 h-0.5 flex-col mt-6" />
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-56 ml-5 max-md:w-full max-md:ml-0">
                            <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                <div className="text-base bg-clip-text title">content creation</div>{" "}
                                <div className="bg-white flex shrink-0 h-0.5 flex-col mt-7" />
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-56 ml-5 max-md:w-full max-md:ml-0">
                            <div className="relative flex flex-col items-stretch my-auto max-md:mt-10">
                                <div className="text-base bg-clip-text title">design</div>{" "}
                                <div className="bg-white flex shrink-0 h-0.5 flex-col mt-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>{" "}
            <div className=" container flex w-full flex-col mt-10 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5  self-center">
                <div className="flex max-w-full justify-between gap-5 self-start items-end max-md:flex-wrap w-[700px] max-sm:ml-0">
                    <h1 className="text-xs bg-clip-text mt-16 max-md:mt-10 text-white w-56 title">
                        London 2006
                    </h1>{" "}
                    <p className="text-neutral-200 text-sm self-stretch max-md:max-w-full title w-[400px]">
                        Our creative design bureau is based in the heart of London and
                        specializes in digital branding, website design, and influence
                        marketing. <br />
                        <br />
                        We believe in the power of digital media to transform businesses and
                        connect them with their audiences in meaningful ways.
                    </p>
                </div>
                <div className="self-stretch mt-12 max-md:max-w-full max-md:mt-10 ">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 items-center self-center justify-centre">
                        <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col max-md:max-w-full max-md:mt-10 max-sm:-mt-0">
                                <h1 className="text-6xl font-light bg-clip-text max-md:max-w-full max-md:text-4xl w-[500px] text-white title max-sm:w-80 max-sm:font-bold">
                                    We turn your digital dreams into reality
                                </h1>{" "}
                                <p className="text-5xl font-light tracking-tighter bg-clip-text mt-3.5 max-md:max-w-full max-md:text-4xl title max-sm:absolute max-sm:w-24 max-sm:mt-28 max-sm:ml-20">
                                    ˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜˜
                                </p>{" "}
                                <div className="flex max-w-full justify-between gap-5 self-start items-end max-md:flex-wrap w-[700px] max-sm:ml-0 max-sm:mt-10">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8cbf0ac9a8fe6fdb1423c5c26407a344b0cb6a3af5b0faa759cec618972522?"
                                        className="aspect-[2.75] object-contain object-center w-[77px] stroke-[1px] stroke-white overflow-hidden shrink-0 max-w-full"
                                    />{" "}
                                    <p className="text-neutral-200 text-sm self-stretch max-md:max-w-full title w-[400px]">
                                        Our creative design bureau is based in the heart of London and
                                        specializes in digital branding, website design, and influence
                                        marketing. <br />
                                        <br />
                                        We believe in the power of digital media to transform businesses and
                                        connect them with their audiences in meaningful ways.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex bg-[#202020] flex-col items-center self-center justify-center ml-52 w-[23%] max-md:w-full max-md:ml-0 lg:hidden">
                            <img
                                loading="lazy"
                                srcSet={img1} alt='img1'
                                className="aspect-[0.87] object-contain object-center w-[266px] overflow-hidden shrink-0 max-w-full max-md:mt-10 max-sm:hidden -mt-10"
                            />
                            <h1 className=' title pb-10'>since 2024</h1>
                        </div>
                    </div>
                </div>
                <div className="   mt-40 max-md:max-w-full max-md:mr-1.5 max-md:mt-10 ">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0  ">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="flex-col overflow-hidden relative flex min-h-[289px] pl-12 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet={banner1} alt='banner1'
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                />{" "}
                                <div className="relative text-white text-4xl font-light mt-16 max-md:mt-10">
                                    01
                                </div>{" "}
                                <div className="relative justify-center text-neutral-200 text-sm max-w-[263px] mt-14 max-md:mt-10">
                                    We create unique brand identities that resonate with your
                                    target audience and help you stand out in a crowded
                                    marketplace
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex-col overflow-hidden relative flex min-h-[294px] grow pl-12 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet={banner2} alt='banner2'
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                />{" "}
                                <div className="relative text-white text-4xl font-light mt-16 max-md:mt-10">
                                    02
                                </div>{" "}
                                <div className="relative justify-center text-neutral-200 text-sm max-w-[268px] mt-12 max-md:mt-10">
                                    We build custom websites that are visually stunning, easy to
                                    navigate, and optimized for search engines
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                <div className="self-stretch max-md:max-w-full max-md:mr-1.5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 ">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="flex-col overflow-hidden relative flex min-h-[288px] grow pl-12 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet={banner3} alt='banner3'
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                />{" "}
                                <div className="relative text-white text-4xl font-light mt-16 max-md:mt-10">
                                    03
                                </div>{" "}
                                <div className="relative justify-center text-neutral-200 text-sm max-w-[257px] mt-12 max-md:mt-10">
                                    We develop influencer campaigns that help you reach a wider
                                    audience, build brand awareness, and drive conversions
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 ">
                            <div className="flex-col overflow-hidden relative flex min-h-[288px] grow pl-12 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
                                <img
                                    loading="lazy"
                                    srcSet={banner4} alt='banner4'
                                    className="absolute h-full w-full object-cover object-center inset-0"
                                />{" "}
                                <div className="relative text-white text-4xl font-light mt-16 max-md:mt-10">
                                    04
                                </div>{" "}
                                <div className="relative justify-center text-neutral-200 text-sm max-w-[242px] mt-12 max-md:mt-10">
                                    We produce high-quality content that engages your audience,
                                    builds trust, and reinforces your brand message
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </div>{" "}

            <div className=" container flex w-full flex-col self-center items-center justify-center px-20 max-md:max-w-full max-md:px-5 mt-20">
                <p className="text-5xl font-light tracking-tighter w-28 bg-clip-text  self-center items-end whitespace-nowrap max-md:text-4xl max-md:mt-10 title max-sm:absolute max-sm:-mt-[1800px]">
                    ˜˜˜˜˜˜˜˜˜˜˜˜˜˜
                </p>
                <h2 className="text-6xl font-light bg-clip-text self-stretch w-[800px] mx-4 max-md:max-w-full max-md:text-4xl max-md:mr-2.5 title max-sm:w-72 max-sm:font-bold max-sm:text-4xl max-sm:mt-10">
                    Help our clients achive their business objectives
                </h2>{" "}
                <div className="self-stretch flex items-s justify-between gap-5 xl:gap-40 lg:gap-10 mt-10 mx-4 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10 ">
                    <div className="flex flex-col items-stretch max-sm:hidden">
                        <h1 className="text-xs bg-clip-text whitespace-nowrap title ">
                            London 2006
                        </h1>{" "}
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de32be50cfe8e8b7f1a906e7ca687e934bfd078a2d8cf165dbaf82afeba70d2?"
                            className="aspect-[1.04] object-contain object-center w-[29px] stroke-[1px] stroke-white overflow-hidden max-w-full mt-[498px] self-start max-md:mt-10"
                        />
                    </div>{" "}
                    <div className="flex flex-col items-stretch max-md:max-w-full">
                        <div className="max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                                    <div className="text-neutral-200 text-sm max-md:mt-10 title">
                                        Influenzilla is a leading design and marketing agency that
                                        offers creative solutions to businesses of all sizes. Our
                                        team of experts specializes in creating unique and effective
                                        designs that help our clients stand out in a crowded market.
                                        <br />
                                        <br />
                                        Our mission is to help our clients achieve their business
                                        objectives through innovative and effective design
                                        solutions. We believe that great design is more than just
                                        aesthetics. It's about creating a seamless user experience
                                        that engages and delights your audience.
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="text-neutral-200 text-sm max-md:max-w-full max-md:mt-10 title">
                                        We take pride in our ability to understand the unique needs
                                        and goals of each of our clients, and to develop customized
                                        solutions that exceed their expectations. Our team of
                                        talented designers and marketers work closely with our
                                        clients to create a cohesive brand identity, effective
                                        marketing strategies, and user-friendly websites and
                                        applications.
                                        <br />
                                        <br />
                                        We offer a wide range of services, including branding, web
                                        design, social media marketing, graphic design, and more.
                                        Our goal is to help our clients achieve success by providing
                                        them with the tools and resources they need to grow their
                                        business.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-9 max-md:max-w-full">
                            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col w-full pt-11 border-2 border-solid border-white items-start">
                                        <div>
                                            <img
                                                loading="lazy"
                                                srcSet={img1} alt='img1'
                                                className="aspect-square object-contain object-center w-[40%] overflow-hidden max-w-full ml-12 max-md:ml-2.5"
                                            />
                                        </div>
                                        <div className="self-stretch flex flex-col items-stretch mt-14 pl-12 pr-20 py-11 border-t-2 border-solid border-white max-md:mt-10 max-md:px-5">
                                            <h1 className="text-3xl font-light bg-clip-text whitespace-nowrap title">
                                                Branding
                                            </h1>
                                            <p className="text-neutral-200 text-sm mt-6 title">
                                                Our team of experts specializes in creating unique and
                                                effective designs{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col w-full pt-11 border-2 border-solid border-white items-start">
                                        <div className=' flex'>
                                            <img
                                                loading="lazy"
                                                srcSet={img1} alt='img1'
                                                className="aspect-square object-contain object-center w-[40%] overflow-hidden max-w-full ml-12 max-md:ml-2.5"
                                            />
                                            <img
                                                loading="lazy"
                                                srcSet={img1} alt='img1'
                                                className="aspect-square object-contain absolute object-center w-[8%]  overflow-hidden max-w-full ml-20 max-md:ml-2.5 -mt-0.5"
                                            />
                                        </div>
                                        <div className="self-stretch flex flex-col mt-14 pl-12 pr-20 py-11 border-t-2 border-solid border-white items-start max-md:mt-10 max-md:px-5">
                                            <div className="text-3xl font-light bg-clip-text whitespace-nowrap title">
                                                Design
                                            </div>
                                            <div className="text-neutral-200 text-sm mt-6 title">
                                                Innovative and effective design solutions for business
                                                of our clients
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                                    <div className="flex grow flex-col w-full pt-8 border-2 border-solid border-white items-start">
                                        <img
                                            loading="lazy"
                                            srcSet={img1} alt='img1'
                                            className="aspect-square object-contain object-center w-[40%] overflow-hidden max-w-full ml-12 max-md:ml-2.5"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet={img1} alt='img1'
                                            className="aspect-square object-contain absolute object-center w-[8%]  overflow-hidden max-w-full ml-20 max-md:ml-2.5 mt-0.5"
                                        />
                                        <img
                                            loading="lazy"
                                            srcSet={img1} alt='img1'
                                            className="aspect-square object-contain absolute object-center w-[8%]  overflow-hidden max-w-full ml-28 max-md:ml-2.5 mt-0.5"
                                        />
                                        <div className="self-stretch flex flex-col items-stretch mt-14 pl-12 pr-20 py-11 border-t-2 border-solid border-white max-md:mt-10 max-md:px-5">
                                            <div className="text-3xl font-light bg-clip-text whitespace-nowrap title">
                                                Marketing
                                            </div>
                                            <div className="text-neutral-200 text-sm mt-6 title">
                                                Our team of experienced designers and marketing
                                                professionals work closely{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <p className="text-neutral-200 self-stretch text-sm w-[432px] max-w-full mt-9 title">
                            We specialize in creating unique and innovative designs that not only
                            capture the essence of your business but also help you achieve your
                            goals. We believe that great design is about creating a seamless user
                            experience that engages and delights your audience, and we work hard
                            to ensure that every design we create meets this high standard.
                            <br />
                            <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex-col overflow-hidden self-stretch relative flex w-full items-center mt-20 px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <img
                    loading="lazy"
                    srcSet={header2} alt='header2'
                    className="absolute h-full w-full object-cover object-center inset-0"
                />
                <div className="relative flex w-full max-w-[1169px] items-stretch justify-between gap-5 mt-9 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                    <h1 className="text-xs bg-clip-text title w-20">
                        hi there, let's get started!
                    </h1>{" "}
                    <div className="flex items-stretch justify-between gap-5">
                        <h1 className="text-white text-xs title w-20">
                            hi there, let's get started!
                        </h1>
                        <h1 className="text-white text-xs title w-20">
                            hi there, let's get started!
                        </h1>
                    </div>
                </div>{" "}
                <div className="relative flex w-full max-w-[1169px] items-stretch justify-between gap-5 mt-40 mb-5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <div className="flex flex-col items-end max-md:max-w-full">
                        <p className="justify-center text-5xl font-light tracking-tighter bg-clip-text max-md:text-4xl title">
                            ˜˜˜˜˜˜˜˜
                        </p>{" "}
                        <h1 className="justify-center text-6xl font-light bg-clip-text self-stretch mt-2 max-md:max-w-full max-md:text-4xl title w-[350px]">
                            Expertise and experience
                        </h1>
                    </div>{" "}
                    <p className="text-sm bg-clip-text  mt-16 self-end max-md:mt-10 title w-[400px]">
                        We believe that building long-lasting relationships with our clients
                        is key to achieving success. We are passionate about what we do, and
                        we are committed to delivering exceptional results for every client
                        we work with.
                    </p>
                </div>
            </div>{" "}
            <div className="self-center flex w-full max-w-[1251px] justify-between gap-5 mt-24 mb-52 items-start max-md:max-w-full max-md:flex-wrap max-md:my-10">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec8cbf0ac9a8fe6fdb1423c5c26407a344b0cb6a3af5b0faa759cec618972522?"
                    className="aspect-[2.75] object-contain object-center w-[77px] stroke-[1px] stroke-white overflow-hidden shrink-0 max-w-full title"
                />{" "}
                <div className="self-stretch px-5 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <p className="text-neutral-200 text-sm max-md:max-w-full max-md:mt-10 title w-[400px]">
                                Our team of talented designers and marketers works closely with
                                each of our clients, taking the time to understand their unique
                                needs and goals, and developing customized solutions that exceed
                                their expectations. <br />
                                <br />
                                We take pride in our ability to create a cohesive brand
                                identity, effective marketing strategies, and user-friendly
                                websites and applications that help our clients achieve success.
                            </p>
                        </div>{" "}
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <p className="text-neutral-200 text-sm max-md:max-w-full max-md:mt-10 title w-[400px]">
                                So if you're a start-up looking to create a strong brand
                                identity, or an established business looking to revamp your
                                marketing strategy, we have the expertise and experience to help
                                you succeed. <br />
                                <br />
                                Contact us today to learn more about our services and how we can
                                help your business grow. We look forward to hearing from you and
                                starting this exciting journey together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default home
