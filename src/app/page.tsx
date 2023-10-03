import PostList from "@/components/PostList";
import { prisma } from "@/db";
import { Post } from "@prisma/client";

async function getPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}

export default async function Home() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <main className="p-4 pt-8 max-w-md mx-auto">
        <div className="flex flex-col">
          {posts.length === 0 && (
            <h3 className="text-center text-lg">No posts</h3>
          )}
          <PostList posts={posts} />
        </div>
      </main>
    </>
  );
}
