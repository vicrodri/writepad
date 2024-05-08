import { useEffect, useRef, useState } from "react";
import { Post } from "../model/Post";
import { deleteDoc, getDocs, doc } from "firebase/firestore";
import { createCollection } from "../firebase/config";

const useHome = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const dbRef = useRef(createCollection<Post>("posts"));

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(dbRef.current);
      const result: Post[] = data.docs.map((item) => ({ ...item.data(), id: item.id }));
      setPostList(result);
    };
    void getPosts();
  }, [dbRef]);

  const deletePost = async (data: Post) => {
    const postToDeleteRef = doc(dbRef.current, "/", data.id);
    console.log(postToDeleteRef);
    try {
      await deleteDoc(postToDeleteRef);
      setPostList(postList.filter((item) => item.id !== data.id));
    } catch (error) {
      console.log("Error", error);
    }
  };

  return {
    postList,
    deletePost,
  };
};

export default useHome;
