import Feed from "@components/Feed";
import React from "react";

const Inicio = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center capitalize">
        descrubre y comparte
        <span className="orange_gradient text-center block">
          prompts impulsados por IA
        </span>
      </h1>
      <p className="desc text-center">
        PromptVerse es una herramienta de prompts de inteligencia artificial de
        código abierto para que el mundo moderno descubra, cree y comparta
        prompts creativos.
      </p>
      <Feed />
    </section>
  );
};

export default Inicio;
