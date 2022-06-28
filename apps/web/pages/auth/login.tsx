import {
  Button,
  Layout,
  SplashsaverLink as Link,
  Input,
  Label,
} from "@splashsaver/ui";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signupSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="flex-1 h-full"></div>
      <form
        onSubmit={signupSubmitHandler}
        className="flex flex-col justify-center border-l pl-6 border-stone-800 ml-auto mr-12 w-96"
      >
        <p className="text-red-500 text-xs text-center mb-5">
          {error && error}
        </p>
        <h1 className="font-bold text-xl mb-2 text-white">Login</h1>
        <p className="text-gray-400 text-sm mb-4 max-w-xs">Welcome back!</p>
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
          <Label>Password</Label>
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
        <Button>Login</Button>
      </form>
    </Layout>
  );
};

const InputWrapper = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex flex-col mb-4">{children}</div>;
};

export default Login;
