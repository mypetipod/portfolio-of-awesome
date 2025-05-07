"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

const pathPrefix = process.env.NEXT_PUBLIC_PATH_PREFIX || "";

interface PrefixedLinkProps extends LinkProps {
  children: ReactNode;
}

const PrefixedLink = ({ href, children, ...props }: PrefixedLinkProps) => {
  const prefixedHref =
    typeof href === "string"
      ? `${pathPrefix}${href}`.replace(/\/{2,}/g, "/")
      : href; // handle URL objects too

  return (
    <Link href={prefixedHref} {...props}>
      {children}
    </Link>
  );
};

export default PrefixedLink;
