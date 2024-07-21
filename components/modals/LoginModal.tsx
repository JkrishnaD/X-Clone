import { useLoginModal } from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import { useSignupModal } from "@/hooks/useSignupModal";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const signupModal = useSignupModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, seIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    try {
      seIsLoading(true);
      //Add Login Authentication
    } catch (error) {
      alert(error);
    } finally {
      seIsLoading(false);
    }
  }, [loginModal]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    loginModal.onClose();
    signupModal.onOpen();
  }, [loginModal, signupModal, isLoading]);

  const bodyComponent = (
    <div className="flex flex-col gap-2">
      <Input
        label="Email"
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        disabled={isLoading}
      />
      <Input
        label="Password"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        disabled={isLoading}
      />
    </div>
  );
  const footerComponent = (
    <div className="flex gap-2 pt-2 text-neutral-400 text-md">
      <p>New User</p>
      <span
        className="font-semibold hover:underline hover:text-white cursor-pointer"
        onClick={onToggle}
      >
        Sign Up
      </span>
    </div>
  );
  return (
    <div className="flex justify-center">
      <Modal
        actionLabel="Sign In"
        isOpen={loginModal.isOpen}
        title="Sign In"
        onClose={loginModal.onClose}
        onSubmit={onSubmit}
        body={bodyComponent}
        footer={footerComponent}
      />
    </div>
  );
};
