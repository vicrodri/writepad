import { useNavigate } from "react-router-dom";
import { auth, createCollection } from "../firebase/config";
import { Post } from "../model/Post";
import { addDoc } from "firebase/firestore";

const useCreatePost = () => {
  const navigate = useNavigate();

  const dbRef = createCollection<Post>("posts");

  const submitForm = async (title: string, description: string) => {
    const postDocument: Partial<Post> = {
      title: title,
      description: description,
      author: {
        name: auth?.currentUser?.displayName ?? "",
        id: auth?.currentUser?.uid ?? "",
      },
    };

    await addDoc(dbRef, postDocument);
    navigate("/");
  };

  return {
    submitForm,
  };
};

export default useCreatePost;
