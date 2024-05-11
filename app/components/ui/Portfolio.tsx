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
    <div className="mx-auto custom-container w-full h-full lg:h-[1300px] flex flex-col justify-center gap-6 items-start p-3 lg:py-10" id="portfolio">
        <Space>
            <Typography className="mb-2 text-[#10c8ff] text-[18px] lg:text-[32px]" {...commonProps}>
              MY PORTFOLIO
            </Typography>
            <div className="w-[220px] lg:w-[500px] h-1 bg-[#10c8ff]"></div>
        </Space>

        <div className="">
          <Tabs value="html">
            <TabsHeader {...commonProps}
              className="bg-transparent"
              indicatorProps={{
                className: "bg-[#10c8ff] shadow-md text-white",
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
                  { value === "tutorial" ? (
                    <div className="flex flex-col items-center justify-center">
                      <Typography className="mb-4 text-[#10c8ff] text-[24px]" {...commonProps}>
                        Welcome to our tutorial section!
                      </Typography>
                      <Button className="border-2 border-[#10c8ff] text-[#10c8ff] bg-transparent hover:bg-[#10c8ff] hover:text-white" {...commonProps}>
                        Start Learning
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
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
                  )}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
    </div>
  );
};