import { prisma } from "@/utils/prisma"
import { NextResponse, NextRequest } from "next/server"

interface Params {
  id: string
}

export const GET = async (req: NextRequest, {params}: {params: Params} ) => {
  const {id} = params

  try {
    const docs = await prisma.documentation.findUnique({
      where: {id},
    })

    return new NextResponse(JSON.stringify(docs, null, 2), {status: 200})
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, null, 2),
      { status: 500 }
    );
  }
}