"use client";

import { commonProps } from "@/app/types/common";
import { Typography } from "@material-tailwind/react";


const page = () => {
  return (
    <div className="mx-auto container w-full">
      <div className="p-7 lg:p-20">
        <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] relative overflow-hidden flex flex-col items-center justify-center gap-6" style={{ backgroundImage: "url('/assets/inkon.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <Typography
            className="text-[#F7F7FC] text-[26px] lg:text-[35px] uppercase text-center"  {...commonProps}>
            Lyft launching cross-platform service this week
          </Typography>
          <div className="h-36 w-36 rounded-full overflow-hidden border-[#10c8ff] border-2">
            <img src="/assets/photo.png" className="w-full h-full object-cover z-100" alt="Photo" />
          </div>
        </div>

        <Typography
          className="text-[#F7F7FCB3] text-[16px] lg:text-[22px] mt-10"  {...commonProps}>
            In a web3 technical writing role, a profound understanding of Web3 technologies is paramount for effectively communicating the intricacies of decentralized and blockchain-based frameworks. As Web3 represents a transformative shift in internet dynamics, a deep grasp of the fundamental concepts is needed to articulate their implications and applications clearly, My proficiency in Web3 technical content writing, coupled with a background in web development, equips me with a unique skill set to produce documentation that not only elucidates the complexities of decentralized and blockchain frameworks but also guides users and developers seamlessly. <br />
            In a web3 technical writing role, a profound understanding of Web3 technologies is paramount for effectively communicating the intricacies of decentralized and blockchain-based frameworks. As Web3 represents a transformative shift in internet dynamics, a deep grasp of the fundamental concepts is needed to articulate their implications and applications clearly, My proficiency in Web3 technical content writing, coupled with a background in web development, equips me with a unique skill set to produce documentation that not only elucidates the complexities of decentralized and blockchain frameworks but also guides users and developers seamlessly. <br />
            In a web3 technical writing role, a profound understanding of Web3 technologies is paramount for effectively communicating the intricacies of decentralized and blockchain-based frameworks. As Web3 represents a transformative shift in internet dynamics, a deep grasp of the fundamental concepts is needed to articulate their implications and applications clearly, My proficiency in Web3 technical content writing, coupled with a background in web development, equips me with a unique skill set to produce documentation that not only elucidates the complexities of decentralized and blockchain frameworks but also guides users and developers seamlessly. <br />
            In a web3 technical writing role, a profound understanding of Web3 technologies is paramount for effectively communicating the intricacies of decentralized and blockchain-based frameworks. As Web3 represents a transformative shift in internet dynamics, a deep grasp of the fundamental concepts is needed to articulate their implications and applications clearly, My proficiency in Web3 technical content writing, coupled with a background in web development, equips me with a unique skill set to produce documentation that not only elucidates the complexities of decentralized and blockchain frameworks but also guides users and developers seamlessly. <br />
            
        </Typography>
      </div>
    </div>
  )
}

export default page
 