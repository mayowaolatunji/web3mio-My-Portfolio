"use client";

import { commonProps } from "@/app/types/common";
import { Typography, Button, Textarea, Input } from "@material-tailwind/react";
import { Space } from "antd";

const CreateDoc = () => {
  return (
    <div className="flex w-full lg:w-[500px] items-start flex-col">
          <Typography
            className="text-[#fff] text-[18px] lg:text-[24px]"  {...commonProps}>
            Create New Article 
          </Typography>

          <form className="flex flex-col items-start w-full gap-10 mt-5 lg:mt-10">
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Project Name
              </Typography>
              <Input
                size="lg"
                placeholder="Project name"
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}          />
            </Space>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Short Description
              </Typography>
              <Textarea
                size="lg"
                placeholder="Short Description"
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            
              />
            </Space>
            <Space direction="vertical" className="w-full lg:w-[400px]">
              <Typography
                className="text-[#F7F7FC] font-normal text-[16px] lg:text-[20px]"  {...commonProps}>
                Description
              </Typography>
              <Textarea
                size="lg"
                placeholder="Description"
                className=" !border-[#F7F7FC] border-2 focus:!border-[#515175] w-[400px]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          />
            </Space>

            <Button {...commonProps} className="bg-[#515175] w-[200px]" size="lg">
              Save
            </Button>
          </form>
        </div>
  )
}

export default CreateDoc