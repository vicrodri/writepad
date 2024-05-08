import { FC, FormEvent, useMemo, useState } from "react";
import useCreatePost from "./useCreatePost";
import { useTitle } from "../utils/useTitle";

export const CreatePost: FC = () => {
  const { submitForm } = useCreatePost();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const disabled = useMemo(() => {
    return title == null || title === "" || description == null || description === "" ? true : false;
  }, [description, title]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    void submitForm(title, description);
  };

  useTitle("Create Post");
  return (
    <section className='create'>
      <div className='heading'>
        <h1>Add new post</h1>
      </div>
      <form className='createPost' onSubmit={handleSubmit}>
        <input
          type='text'
          className='title'
          name='title'
          placeholder='title'
          maxLength={50}
          required
          value={title}
          onChange={(event: FormEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)}
        />
        <textarea
          className='description'
          name='description'
          placeholder='description'
          maxLength={600}
          required
          value={description}
          onChange={(event: FormEvent<HTMLTextAreaElement>) => setDescription(event.currentTarget.value)}
        />
        <button type='submit' className='submit' disabled={disabled}>
          Create
        </button>
      </form>
    </section>
  );
};
