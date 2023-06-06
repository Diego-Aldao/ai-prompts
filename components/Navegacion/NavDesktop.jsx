import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavDesktop = ({ session, signIn, signOut, providers }) => {
  return (
    <div className="sm:flex hidden">
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/crear-prompt" className="black_btn capitalize">
            crear prompt
          </Link>
          <button
            type="button"
            onClick={signOut}
            className="outline_btn capitalize"
          >
            sign out
          </button>

          <Link href="/perfil">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="perfil"
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                key={provider.name}
                type="button"
                onClick={() => signIn(provider.id)}
                className="black_btn capitalize"
              >
                sign in
              </button>
            ))}
        </>
      )}
    </div>
  );
};

export default NavDesktop;
