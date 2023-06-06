import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 flex-center">
      <Image
        width={30}
        height={30}
        className="object-contain"
        src="/assets/images/logo.svg"
        alt="logo de PromptVerse"
      />
      <p className="logo_text">PromptVerse</p>
    </Link>
  );
};

export default Logo;
