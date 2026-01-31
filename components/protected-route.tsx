"use client";

import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles: string[];
}

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const router = useRouter();

  useEffect(() => {
    const role = Cookies.get("role");

    if (!role) {
      router.replace("/auth/login");
      return;
    }

    const userRoles = role.split(",");
    const hasAccess = userRoles.some((r) => allowedRoles.includes(r));

    if (!hasAccess) {
      router.replace("/home");
    }
  }, [router, allowedRoles]);

  return <>{children}</>;
}
