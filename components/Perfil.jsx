import React from "react";
import PromptCard from "./PromptCard";

const Perfil = ({ nombre, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="capitalize head_text text-left">
        <span className="blue_gradient">{nombre} perfil</span>
      </h1>
      <p className="desct text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Perfil;
