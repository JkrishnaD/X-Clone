"use client";
import { LoginModal } from "@/components/modals/LoginModal";
import { SignupModal } from "@/components/modals/SignupModal";
import { Layout } from "@/pages/Layout";

export default function Home() {
  return (
    <>
      <SignupModal />
      <LoginModal />
      <Layout />
    </>
  );
}
