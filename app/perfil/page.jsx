"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Perfil";

const MiPerfil = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, []);

  const handleEdit = (post) => {
    router.push(`editar-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const confirmado = confirm(
      "Estás seguro de que quieres eliminar este prompt?"
    );
    if (confirmado) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const postFiltrados = posts.filter((miPost) => miPost._id !== post._id);

        setPosts(postFiltrados);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      nombre="Mi"
      desc="Bienvenido a tu pagina personal personalizada"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MiPerfil;
