"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CrearPrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [solicitando, setSolicitando] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const crearPrompt = async (e) => {
    e.preventDefault();

    setSolicitando(true);

    try {
      const response = await fetch("/api/prompt/nuevo", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSolicitando(false);
    }
  };

  return (
    <Form
      type="Crear"
      post={post}
      setPost={setPost}
      solicitando={solicitando}
      handleSubmit={crearPrompt}
    />
  );
};

export default CrearPrompt;
