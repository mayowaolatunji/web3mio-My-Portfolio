import { TTypography } from "../../components/base/Typography";
import { Types } from "@/types/types";


const getData = async (id: string) => {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  const url = `${baseURL}/api/article/${id}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const page = async ({ params }: { params: Types }) => {
  const { id } = params;
  if (!id) {
    return <div>No article ID provided</div>;
  }
  const article = await getData(id);
  
  const articleName = article?.name ?? "";
  const articleDescription = article?.description ?? "";
  const backgroundImageUrl = article?.imageUrl ?? "";

  return (
    <div className="mx-auto container w-full">
      <div className="p-7 lg:p-20">
        <div className="w-full rounded-bl-2xl rounded-br-2xl h-[600px] relative overflow-hidden flex flex-col items-center justify-center gap-6" style={{ backgroundImage: `url('${backgroundImageUrl}')`, backgroundSize: "cover", backgroundPosition: "center" }}>
          <TTypography label={articleName} fontSizeSmall="text-[26px]" fontSizeLarge="lg:text-[35px]" className="uppercase text-center z-[1000]"/>
          <div className="h-36 w-36 rounded-full overflow-hidden border-[#10c8ff] border-2">
            <img src="/assets/photo.png" className="w-full h-full object-cover z-100" alt="Photo" />
          </div>
        </div>

        <TTypography 
          color="text-[#F7F7FCB3]"
          fontSizeSmall="text-[16px]" 
          fontSizeLarge="lg:text-[22px]" 
          className="mt-10"
          label={articleDescription} 
        />
      </div>
    </div>
  )
}

export default page
 