"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavMobile = ({ session, providers, signIn, signOut }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="flex">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="perfil"
            onClick={() => {
              setToggleDropdown((prevState) => !prevState);
            }}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/perfil"
                className="dropdown_link capitalize"
                onClick={() => setToggleDropdown(false)}
              >
                mi perfil
              </Link>
              <Link
                href="/crear-prompt"
                className="dropdown_link capitalize"
                onClick={() => setToggleDropdown(false)}
              >
                crear prompt
              </Link>
              <button
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
                className="mt-5 w-full black_btn capitalize"
              >
                sign out
              </button>
            </div>
          )}
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

export default NavMobile;
