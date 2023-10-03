import React from "react";
import { Card } from "./ui/card";
import { Post } from "@prisma/client";

interface IPostListProps {
  posts: Post[];
}

const PostList = ({ posts }: IPostListProps) => {
  return (
    <section>
      {posts
        .map((post) => (
          <Card key={post.id} className="p-4 transition mb-4">
            <h2 className="text-2xl underline text-center mb-4">
              {post.title}
            </h2>
            <p className="mb-8">{post.content}</p>
            <p className="text-right text-sm font-light italic">{post.name}</p>
          </Card>
        ))
        .reverse()}
    </section>
  );
};

export default PostList;
