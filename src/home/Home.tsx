import { FC } from "react";
import { PostCard } from "../common";
import { Post } from "../model/Post";
import useHome from "./useHome";
import { useTitle } from "../utils/useTitle";

export const Home: FC = () => {
  const { postList, deletePost } = useHome();
  useTitle("Home");
  return (
    <>
      <section>
        {postList.map((item: Post) => (
          <PostCard key={item.id} post={item} handleDelete={(data) => void deletePost(data)} />
        ))}
      </section>
    </>
  );
};
