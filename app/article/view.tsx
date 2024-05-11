"use client";

import { commonProps } from "@/app/types/common";
import { Typography, Button, Card, CardHeader, CardBody } from "@material-tailwind/react";

const ViewDoc = () => {
  return (
    <div className="flex w-full lg:w-[900px] items-start flex-col gap-10">
        <Typography
            className="text-[#10c8ff] text-[18px] lg:text-[24px]"  {...commonProps}>
            All Article 
        </Typography>
        <Card className="w-full max-w-[48rem] h-[650px] lg:h-[400px] bg-[#1D1B1B] shadow-xl flex flex-col lg:flex lg:flex-row" {...commonProps}>
            <CardHeader
                shadow={false}
                {...commonProps}
                floated={false}
                className="m-0  lg:w-1/2 shrink-0 rounded-md lg:rounded-r-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody {...commonProps}>
                <Typography className="mb-2 text-[#10c8ff] text-[24px]" {...commonProps}>
                Lyft launching cross-platform service this week
                </Typography>
                <Typography className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]" {...commonProps}>
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part
                of the story
                </Typography>
                <a href="#" className="inline-block">
                <Button className="border-2 border-[#10c8ff] text-[#10c8ff] bg-transparent hover:bg-[#10c8ff] hover:text-white" {...commonProps}>
                    Read More
                </Button>
                </a>
            </CardBody>
        </Card>
    </div>
  )
}

export default ViewDoc