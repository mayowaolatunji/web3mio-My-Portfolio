"use server"

import { prisma } from "@/utils/prisma";
import { Types } from "../../types/types"; 
import { revalidatePath } from "next/cache";

export async function createDocs(formData: Types ) {
    try {
        await prisma.documentation.create({
            data: formData
          });
        
    } catch(error) {
        console.log(error)
    }

    revalidatePath("/");
}

export async function deleteDocs(inputId: string) {
  try {
    await prisma.documentation.delete({
      where: {
        id: inputId
      }
    })
  } catch(error) {
      console.log(error)
  }
  
    revalidatePath("/article")
  }