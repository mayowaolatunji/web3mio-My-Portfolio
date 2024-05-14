"use server"

import { prisma } from "@/utils/prisma";
import { Types } from "../../types/types"; 
import { revalidatePath } from "next/cache";

export async function createArticle(formData: Types ) {
    try {
        await prisma.article.create({
            data: formData
          });
        
    } catch(error) {
        console.log(error)
    }

    revalidatePath("/article");
}

export async function deleteArticle(inputId: string) {
  try {
    await prisma.article.delete({
      where: {
        id: inputId
      }
    })
  } catch(error) {
      console.log(error)
  }
  
    revalidatePath("/article")
  }