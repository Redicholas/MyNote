"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useSession } from "next-auth/react";
import { IFormData } from "@/models/IFormData";

interface IAddNoteFormProps {
  createPost: (formData: IFormData, username: string) => void;
  username: string;
}

export function AddNoteForm({ createPost, username }: IAddNoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session } = useSession();
  username = session?.user?.name as string;

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const formData: IFormData = {
          name: username,
          title: title,
          content: content,
        };
        createPost(formData, username);
      }}
    >
      <Input
        type="text"
        name="title"
        placeholder="Title"
        title="Title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        name="content"
        placeholder="Content"
        title="Content"
        required
        onChange={(e) => setContent(e.target.value)}
      />
      <Button type="submit">Ok</Button>
    </form>
  );
}
