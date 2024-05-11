"use client"

import { Typography, Button } from "@material-tailwind/react";
import { FC } from "react";
import { commonProps } from "@/app/types/common";

export interface AboutProps {}
export const About: FC<AboutProps> = () => {

  return (
    <div className="mx-auto custom-container w-full h-full lg:h-[750px] flex flex-col justify-center gap-10 items-center p-3 lg:py-10" id="about">
        <Typography
          className="text-[#10c8ff] text-[20px] lg:text-[32px]"  {...commonProps}>
          ABOUT ME
        </Typography>
        <div className="flex flex-col lg:flex lg:flex-row items-start w-full h-full gap-10">
          <div className="w-full lg:w-[500px] h-full border-2 border-[#10c8ff] shadow-lg">
            <img src="/assets/photo.png" className="w-full h-full object-cover" alt="Photo" />
          </div>
          <div className="w-full lg:w-[60%] flex items-start justify-start h-full flex-col gap-12">
            <div>
              <Typography
                className="text-[#FCFCF7] text-[20px] lg:text-[28px]"  {...commonProps}>
                My Background
              </Typography>
              <Typography
                className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"  {...commonProps}>
                  My experince in the web3 rabbit hole started with a leap into web3 Research & content writing 4 years back. However my background in Process engineering and Software development fostered my interest into technical communications. <br /> This array of conscious choices has equiped me, over the yesrs, with the requisite skills and knowledge that helps me bridge gap between technical concepts and simplicity.
              </Typography>
            </div>
            <div>
              <Typography
                className="text-[#FCFCF7] text-[20px] lg:text-[28px]"  {...commonProps}>
                Skills & Technologies
              </Typography>
              <Typography
                className="text-[#F7F7FCB3] font-normal text-[14px] lg:text-[18px]"  {...commonProps}>
                 Proficient in utilizing technical writing tools, such as MS Word and Adobe Acrobat RoboHelp, as well as MadCap Flare and SnagIt. Familiar with graphics software, including Figma, Adobe Photoshop Illustrator, Microsoft Visio, and Canva. Database software, CMS/LMS, and API documentation software such as Postman and Swagger. <br /> Documentation: Docs-as-code Documentation, Document permission & source Control, AP Style, Knowledge-base Management, intuitive UX writing, on-chain & 0ff-chain data analysis. <br /> <br />
  
                Languages & Frameworks: Javascript, React, Solidity GraphQL, Python, REST, Github/Gitbook, Markdown.
              </Typography>
            </div>
            <Button {...commonProps} className="bg-[#10c8ff] text-[#F7F7FC] hover:bg-transparent hover:text-[#10c8ff] hover:border-2 hover:border-[#10c8ff]" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
    </div>
  );
};