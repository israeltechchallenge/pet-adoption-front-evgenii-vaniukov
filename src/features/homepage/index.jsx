"use client";
import { AuthContextProvider } from "@/features/auth/context/auth_context";
import { HomePage } from "./pages/home_page";

export function Home() {
  return (
    <AuthContextProvider>
      <HomePage />
    </AuthContextProvider>
  );
}
