"use client";
import { LoginModal } from "@/components/modals/LoginModal";
import { SignupModal } from "@/components/modals/SignupModal";
import { Layout } from "@/pages/Layout";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <SessionProvider>
      <Toaster/>
      <SignupModal />
      <LoginModal />
      <Layout />
    </SessionProvider>
  );
}
