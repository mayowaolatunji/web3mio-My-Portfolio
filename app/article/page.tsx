"use client";

import { commonProps } from "@/app/types/common";
import { Typography } from "@material-tailwind/react";
import CreateDoc from "./create";
import ViewDoc from "./view";

const page = () => {
  return (
    <div className="min-h-screen gap-5 lg:gap-10 flex flex-col w-full mx-auto container items-center justify-start p-5 lg:p-20">
      <Typography
        className="text-[#F7F7FC] text-[21px] lg:text-[32px]"  {...commonProps}>
        Article
      </Typography>

      <div className="flex flex-col-reverse lg:flex lg:flex-row items-start gap-5">
        <CreateDoc />
        <ViewDoc />
      </div>
    </div>
  )
}

export default page
