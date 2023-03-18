"use cleint";

import React from "react";
import Link from "next/link";

function ClientSideRoute({
  children,
  route
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <Link href={route} className="no-underline" target="_blank">{children}</Link>;
}

export default ClientSideRoute;
