"use server";

import { AddNoteForm } from "@/components/AddNoteForm";
import { prisma } from "@/db";
import { IFormData } from "@/models/IFormData";
import { redirect } from "next/navigation";

export async function createPost(formData: IFormData, username: string) {
  await prisma.post.create({
    data: {
      name: username,
      title: formData.title,
      content: formData.content,
      userId: 1,
    },
  });

  redirect("/");
}

export default async function AddPost() {
  let username = "";
  return (
    <>
      <main className="p-4 pt-8 max-w-md mx-auto">
        <h2 className="text-center text-xl">Add Note</h2>
        <AddNoteForm createPost={createPost} username={username} />
      </main>
    </>
  );
}
