import React, { useState } from "react";
import Input from "../InputFields/Input";
import "./Post.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import { listContainer } from "../../utils/listContainers";
export default function PostForm(props) {
  const {setOpen} = props;
  const [title, setTitle] = useState("Add a title");
  const [description, setDescription] = useState("Add some description");
  const [selectedIdx, setSelectedIdx] = useState(0);

  const tags = listContainer.tags;
  const dispatch = useDispatch();
  const handlePost = () => {
    setOpen(false);

    const newPost = {
        title: title,
        description: description,
        tag: selectedIdx
    };

    dispatch(createPost(newPost));
  }
  return (
    <>
      <section className="makepost-container">
        <div className="makepost-navigation">
          <p className="makepost-save" onClick={handlePost}>Post</p>
        </div>
        <Input
          data={title}
          inputType="textarea"
          setData={setTitle}
          label="Title"
          classStyle="makepost-title"
        />

        <Input
          data={description}
          inputType="textarea"
          setData={setDescription}
          label="Description"
          classStyle="makepost-desc"
        />

        <label htmlFor="">Tags</label>

        <div className="makepost-tags">
          {tags.map((tag, idx) => {
            return (
              <button 
              key={idx}
              className={`${
                selectedIdx === idx
                  ? `makepost-tags-selected-${tag}`
                  : `makepost-tags-${tag}`
              }`}
              onClick={() => setSelectedIdx(idx)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}
