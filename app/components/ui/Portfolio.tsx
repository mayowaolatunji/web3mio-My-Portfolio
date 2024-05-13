"use client"

import { FC, useState } from "react";
import { Space } from "antd";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { commonProps } from "@/app/types/common";

export interface PortfolioProps {}
export const Portfolio: FC<PortfolioProps> = () => {
  const [activeTab, setActiveTab] = useState("article");
  const data = [
    {
      label: "Article",
      value: "article",
      desc: ``,
    },
    {
      label: "Documentation",
      value: "documentation",
      desc: ``,
    },
    {
      label: "Tutorial",
      value: "tutorial",
      desc: ``,
    },
  ];
 
  return (
    <div className="mx-auto custom-container w-full h-full flex flex-col justify-center gap-6 items-center p-4 lg:py-10 lg:p-7" id="portfolio">
        <Space>
            <div className="w-[100px] lg:w-[500px] h-1 bg-[#fff]"></div>
            <Typography className="mb-2 text-[#fff] text-[18px] lg:text-[32px]" {...commonProps}>
              MY PORTFOLIO
            </Typography>
            <div className="w-[100px] lg:w-[500px] h-1 bg-[#fff]"></div>
        </Space>

        <div className="">
          <Tabs value="article">
            <TabsHeader {...commonProps}
              className="bg-transparent"
              indicatorProps={{
                className: "bg-[#515175] shadow-md text-white",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value} {...commonProps} className="text-white text-sm lg:text-base" onClick={() => setActiveTab(value)}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody {...commonProps}>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  { value === "tutorial" && (
                    <div className="flex flex-col p-10 items-center justify-center w-full max-w-[48rem] h-[650px] lg:h-[400px] shadow-xl">
                      <Typography className="mb-4 text-[#fff] text-[24px] text-center lg:text-left" {...commonProps}>
                        Welcome to our tutorial section!
                      </Typography>
                      <Button {...commonProps} variant="outlined" className="text-white border-white">
                        Start Learning
                      </Button>
                    </div>
                  )}
                  { value === "article" && (
                    <div className="flex flex-col items-center justify-center gap-10 mt-8 overflow-y-auto max-h-[1950px] lg:max-h-[1300px]">

                      <Card className="w-full max-w-[55rem] h-[650px] lg:h-[400px] bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row gap-0 lg:gap-15" {...commonProps}>
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
                          <Typography className="mb-2 text-[#fff] text-[24px]" {...commonProps}>
                            Lyft launching cross-platform service this week
                          </Typography>
                          <Typography className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]" {...commonProps}>
                            Like so many organizations these days, Autodesk is a company in
                            transition. It was until recently a traditional boxed software company
                            selling licenses. Yet its own business model disruption is only part
                            of the story
                          </Typography>
                          <a href="#" className="inline-block">
                            <Button variant="outlined" {...commonProps} className="text-white border-white">
                              Read More
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                </div>
                  )}
                  { value === "documentation" && (
                    <div className="flex flex-col items-center justify-center gap-10 mt-8 overflow-y-auto max-h-[1950px] lg:max-h-[1300px]">
                      <Card className="w-full max-w-[55rem] h-[650px] lg:h-[400px] bg-[#515175] shadow-xl flex flex-col lg:flex lg:flex-row gap-0 lg:gap-15" {...commonProps}>
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
                          <Typography className="mb-2 text-[#fff] text-[24px]" {...commonProps}>
                            Lyft launching cross-platform service this week
                          </Typography>
                          <Typography className="mb-8 font-normal text-[#F7F7FCB3] text-[18px]" {...commonProps}>
                            Like so many organizations these days, Autodesk is a company in
                            transition. It was until recently a traditional boxed software company
                            selling licenses. Yet its own business model disruption is only part
                            of the story
                          </Typography>
                          <a href="#" className="inline-block">
                            <Button variant="outlined" {...commonProps} className="text-white border-white">
                              Read More
                            </Button>
                          </a>
                        </CardBody>
                      </Card>
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
    </div>
  );
};