import Link from "next/link";
import type { LinkProps } from "next/link";
import { useRouter } from "next/router";
import React from "react";
import type { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

export const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const isHomeSite = useRouter().asPath === "/";

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!isHomeSite) return;
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
