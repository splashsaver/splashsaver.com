import {
  Button,
  Layout,
  SplashsaverLink as Link,
  Input,
  Label,
} from "@splashsaver/ui";
import { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signupSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      return setError("Password length must be at least 8 characters.");
    }

    setError("");
  };

  return (
    <Layout>
      <div className="flex-1 h-full"></div>
      <form
        onSubmit={signupSubmitHandler}
        className="flex flex-col justify-center border-l pl-6 border-stone-800 ml-auto mr-12 w-96 rounded"
      >
        <p className="text-red-500 text-xs text-center mb-5">
          {error && error}
        </p>
        <h1 className="font-bold text-xl text-white">Sign Up</h1>
        <p className="text-gray-400 text-sm mb-4 max-w-xs">
          Sign up today and start using splashsaver to manage your teams.
        </p>
        <InputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            required={true}
            placeholder="John Doe"
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            required={true}
            placeholder="john@doe.com"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Password (8 characters)</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={password}
            required={true}
            placeholder="********"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
        </InputWrapper>
        <Button>Sign up for free</Button>
        <div className="mt-4 text-gray-400 text-xs max-w-xs">
          By signing up, you agree to our{" "}
          <Link className="hover:underline text-xs" href="/terms">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="hover:underline text-xs" href="/privacy">
            Privacy Policy
          </Link>
          .
        </div>
      </form>
    </Layout>
  );
};

const InputWrapper = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-col mb-4">{children}</div>;
};

export default SignUp;
