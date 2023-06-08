"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [copiado, setCopiado] = useState("");
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creador.image}
            alt="imagen_usuario"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creador.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creador.email}
            </p>
          </div>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={
              copiado === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
      {session?.user.id === post.creador._id && pathname === "/perfil" && (
        <div className="mt-5 flex-end gap-4 border-t border-gray-100 pt-3">
          <p
            className="capitalize font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            editar
          </p>
          <p
            className="capitalize font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            eliminar
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
