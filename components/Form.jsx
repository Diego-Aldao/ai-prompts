import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, solicitando, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} y compartir increibles prompts con el mundo, deja a tu
        imaginación desatarse con cualquier plataforma impulsada por
        inteligencia artificial
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 capitalize">
            tu prompt IA
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Escribe tu prompt aqui"
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 capitalize">
            tag{" "}
            <span className="font-normal">
              (#producto, #desarrolloweb, #idea)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 capitalize">
            cancelar
          </Link>
          <button
            type="submit"
            disabled={solicitando}
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded-full"
          >
            {solicitando ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
