"use client";
import { React, useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Logo from "./Logo";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Logo />
      <NavDesktop
        session={session}
        providers={providers}
        signIn={signIn}
        signOut={signOut}
      />
      <NavMobile
        session={session}
        providers={providers}
        signIn={signIn}
        signOut={signOut}
      />
    </nav>
  );
};

export default Nav;
