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

    revalidatePath("/documentation");
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
  
    revalidatePath("/documentation")
}

export async function getDocumentationById(id: string) {
  try {
      const article = await prisma.documentation.findUnique({
          where: {
              id: id
          }
      });
      return article;
  } catch (error) {
      console.error("Error fetching documentation by ID:", error);
      return null;
  }
}  