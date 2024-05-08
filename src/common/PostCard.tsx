import { FC } from "react";
import { Post } from "../model/Post";
import { auth } from "../firebase/config";
import { getLocalStorageItem } from "../utils/Utils";

interface CardProps {
  post: Post;
  handleDelete: (data: Post) => void;
}

export const PostCard: FC<CardProps> = ({ post, handleDelete }: CardProps) => {
  const isAuth: boolean = getLocalStorageItem("isAuth") ?? false;

  const onClickDelete = () => {
    handleDelete(post);
  };

  return (
    <div className='card'>
      <p className='title'>{post.title}</p>
      <p className='description'>{post.description}</p>
      <p className='control'>
        <span className='author'>{post.author.name}</span>
        {isAuth && post.author.id === auth.currentUser?.uid ? (
          <span className='delete' onClick={onClickDelete}>
            <i className='bi bi-trash3'></i>
          </span>
        ) : null}
      </p>
    </div>
  );
};
