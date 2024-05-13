"use client";

import Link from "next/link"
import { FC } from "react";
import { Typography } from "@material-tailwind/react";
import { commonProps } from "@/app/types/common";

export interface FooterProps {}
export const Footer: FC<FooterProps> = () => {

    return (
        <footer className="w-full h-[450px] lg:h-full bg-[#32325D] p-8">
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <Typography
              className="mr-4 cursor-pointer py-1.5 logo"  {...commonProps}>
              <Link href="/">
                WEB<span className="logo_span">3</span>MIO
              </Link>
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
              <li>
                <Typography
                  className="font-normal transition-colors text-[#F7F7FC] hover:text-blue-500 focus:text-blue-500"
                  {...commonProps}
                >
                  Services
                </Typography>
              </li>
              <li>
                <Typography
                  className="font-normal transition-colors text-[#F7F7FC] hover:text-blue-500 focus:text-blue-500"
                  {...commonProps}
                >
                  Portfolio
                </Typography>
              </li>
              <li>
                <Typography
                  className="font-normal transition-colors text-[#F7F7FC] hover:text-blue-500 focus:text-blue-500"
                  {...commonProps}
                >
                  About
                </Typography>
              </li>
            </ul>
          </div>
          <hr className="my-8 border-[#F7F7FC]" />
          <Typography className="text-center text-[#F7F7FC] font-normal" {...commonProps}>
            &copy; Copyright 2024
          </Typography>
        </footer>
      );
};