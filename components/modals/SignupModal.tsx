import { useLoginModal } from "@/hooks/useLoginModal";
import { useSignupModal } from "@/hooks/useSignupModal";
import { useCallback, useState } from "react";
import { Input } from "../Input";
import { Modal } from "../Modal";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

export const SignupModal = () => {
  const loginModal = useLoginModal();
  const SignupModal = useSignupModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(() => {
    try {
      setIsLoading(true);

      axios.post("/api/signup", {
        email,
        password,
        username,
        name,
      });

      toast.success("Account Created");
      signIn("credentials", {
        email,
        password,
      });
      
      SignupModal.onClose();
    } catch (error) {
      toast.error("Something Went Wrong");
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    loginModal.onOpen();
    SignupModal.onClose();
  }, [isLoading, loginModal, SignupModal]);

  const bodyComponent = (
    <div className="flex flex-col gap-2">
      <Input
        label="Name"
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        disabled={isLoading}
      />
      <Input
        label="Username"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        disabled={isLoading}
      />
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
    <div className="text-neutral-400 flex gap-2">
      <p>Already Have An Account?</p>
      <span
        onClick={onToggle}
        className="font-bold cursor-pointer hover:underline hover:text-white"
      >
        Sign In
      </span>
    </div>
  );

  return (
    <div className="flex justify-center">
      <Modal
        actionLabel="Sign In"
        isOpen={SignupModal.isOpen}
        title="Sign Up"
        onClose={SignupModal.onClose}
        onSubmit={onSubmit}
        body={bodyComponent}
        footer={footerComponent}
      />
    </div>
  );
};
