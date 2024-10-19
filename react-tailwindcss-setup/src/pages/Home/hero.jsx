import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import PrimaryBtn from "../../components/Button/PrimaryBtn";

const Hero = () => {
  //dummy data for coreusel
  const swiperData = [
    {
      id: 1,
      bgImg: "https://static.toiimg.com/thumb/imgsize-23456,msid-101689456,width-600,resizemode-4/101689456.jpg",
      slogan: "Keep your body",
      title: "Burning",
      desc: "Get ready to burn off some serious fat with our high quality products.",
    },
    {
      id: 2,
      bgImg: "https://pbs.twimg.com/media/FqmzcsuaYAIQiDl.jpg:large",
      slogan: "Just Believe In",
      title: "Yourself",
      desc: "We are here to help you achieve your goals.",
    },
    {
      id: 3,
      bgImg: "https://source.unsplash.com/random/?yoga",
      slogan: "Grow Your Body",
      title: "Strength",
      desc: "Make your body stronger with our high quality products.",
    },
  ];
  return (
    <>
      <div className="w-full h-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper w-full h-auto"
        >
          {/**/}
          {/*loop the carousle content here*/}
          {swiperData.map((data) => (
            <SwiperSlide key={data.id}
            className="w-full h-[70vh] relative"
            style={{
              backgroundImage: `url(${data.bgImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/*this is the overlap box with some black bg color*/}
            <div className="w-full h-full bg-black/80 absolute top-0 left-0 -z-10"></div>
            {/**/}
            <div className="w-full h-full flex items-center justify-center flex-col z-10 lg:px-24 md:px-16 sm:px-6 px-4" >
              <h5 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-indigo-400 font-semibold mb-2 uppercase">
                {data.slogan}
              </h5>
              <h1 className="lg:text-8x1 md:text-7x1 sm:text-5xl text-5xl font-bold  text-white mb-4 uppercase">
                {data.title}
              </h1>
              <p className="lg:text-lg md:text-base sm:text-base text-base text-gray-500 font-medium mb-6 text-center">
                {data.desc}
              </p>
              <PrimaryBtn className="lg:w-[15%] md:w-[35%] sm:w-[75] w-80 h-14 mt-5 text-xl font-semibold rounded-full">Get Started</PrimaryBtn>
            </div>
          </SwiperSlide>))}
          
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
