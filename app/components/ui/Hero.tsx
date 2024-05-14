"use client"

import { Typography, Button, Tooltip } from "@material-tailwind/react";
import { FC, useState, useEffect } from "react";
import { commonProps } from "@/types/common";
import { Space } from "antd";

export interface HeroProps {}
export const Hero: FC<HeroProps> = () => {
  const [showAltImage, setShowAltImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      setShowAltImage(scrollPosition > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="mx-auto container w-full h-full relative flex flex-col lg:flex-row lg:flex justify-evenly items-start lg:items-center lg:pt-15 p-5 lg:p-0" id="hero">
        <div className="w-full lg:w-[600px] relative">
          <div className="w-[220px] lg:w-[300px] h-1 bg-[#fff] mb-7 lg:mb-10"></div>
          <Typography
            className="text-[#F7F7FC] text-[16px] lg:text-[22px]"  {...commonProps}>
            Hi There!
          </Typography>
          <Typography
            className="text-[#515175] text-[22px] lg:text-[47px]"  {...commonProps}>
            Welcome to my Portfolio
          </Typography>
          <Typography
            className="text-[#F7F7FC] text-[20px] lg:text-[37px]"  {...commonProps}>
            I am Mayowa Olatunji, a web3 Technical Writer.
          </Typography>
          <Typography
              className="text-[#F7F7FCB3] font-normal text-[16px] lg:text-[28px] w-full"  {...commonProps}>
              I specialize in distilling the complexity of web3 technologies into clear, accessible content that fosters seamless communication between projects and their respective audiences.
          </Typography>
          <Space size={15} className="mt-4">
            <Button {...commonProps} className="bg-[#515175]">
              Contact Me
            </Button>
            <Button {...commonProps} variant="outlined" className="text-white border-white">
              Download CV
            </Button>
          </Space>

          <div className="flex items-start w-full mt-10 gap-5">
            <Typography
              className="text-[#fff] text-[14px] uppercase"  {...commonProps}>
              follow me on 
            </Typography>
            <Tooltip content="Twitter(X)">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30" className="cursor-pointer">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z" fill="#fff"></path>
              </svg>
            </Tooltip>
            <Tooltip content="Telegram">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" className="cursor-pointer">
                <path d="M 19.976562 3.1210938 L 19.611328 3.2695312 C 19.611328 3.2695312 6.6375504 8.5740484 2.6132812 10.267578 L 2.0019531 10.525391 L 2.0019531 12.779297 L 6.9472656 14.755859 L 8.6796875 19.996094 L 10.251953 20.005859 L 12.955078 17.720703 L 16.355469 20.996094 L 18.808594 20.996094 L 21.964844 3.875 L 19.976562 3.1210938 z M 19.646484 5.4179688 L 17.146484 18.980469 L 13.044922 15.029297 L 10.224609 17.410156 L 11 14.375 L 17.28125 8 L 17.082031 7.7988281 C 17.082031 7.7988281 10.706702 11.473998 8.0019531 13.023438 L 4.5371094 11.638672 C 9.0770415 9.7455758 18.697943 5.8058761 19.646484 5.4179688 z " fill="white"></path>
              </svg>
            </Tooltip>
            <Tooltip content="Medium">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 72 72" className="cursor-pointer">
                <path d="M45.049,14C57.06,14,58,14.94,58,26.951v18.098C58,57.06,57.06,58,45.049,58H26.951C14.94,58,14,57.06,14,45.049V26.951	C14,14.94,14.94,14,26.951,14H45.049z M29.713,44.151c4.502,0,8.151-3.649,8.151-8.151c0-4.502-3.649-8.151-8.151-8.151	c-4.502,0-8.151,3.649-8.151,8.151C21.562,40.502,25.212,44.151,29.713,44.151z M42.713,43.757c2.228,0,4.034-3.473,4.034-7.757	c0-4.284-1.806-7.757-4.034-7.757c-2.228,0-4.034,3.473-4.034,7.757C38.679,40.284,40.485,43.757,42.713,43.757z M48.98,42.928	c0.775,0,1.403-3.102,1.403-6.928s-0.628-6.928-1.403-6.928c-0.775,0-1.403,3.102-1.403,6.928S48.205,42.928,48.98,42.928z" fill="white"></path>
              </svg>
            </Tooltip>
            <Tooltip content="Github">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30" className="cursor-pointer">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" fill="white"></path>
              </svg>
            </Tooltip>
          </div>
        </div>
        <div className="w-full lg:w-[550px]  relative">
          {/* <div className="absolute z-[-10] top-[170px] left-[-40px] hidden lg:block">
            <svg width="325" height="750" viewBox="0 0 462 977" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M289.065 484.49L0.792554 69.9892L209.058 0.902126L461.055 393.617L289.065 484.49Z" stroke="#fff"/>
            </svg>
          </div>
          <div className="absolute z-[-10] top-[-110px] right-[-40px] hidden lg:block">
            <svg width="320" height="750" viewBox="0 0 379 480" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.770121 459.146L213.26 1.15021L377.968 146.129L165.991 561.812L0.770121 459.146Z" stroke="#fff"/>
            </svg>
          </div> */}
          {showAltImage ? (
            <img src="/assets/photo.png" className="w-full h-full object-cover z-100" alt="Photo" />
          ) : (
            <img src="/assets/photo1.png" className="w-full h-full object-cover z-100" alt="Photo" />
          )}
        </div>
    </div>
  );
};