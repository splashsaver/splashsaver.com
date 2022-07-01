import {
  Button,
  Layout,
  AuthInputWrapper,
  SplashsaverLink as Link,
  AuthForm,
  Text,
  Error,
  Input,
  Label,
} from "@splashsaver/ui";
import { WEB_URL } from "@splashsaver/lib/constants";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="flex-1 h-full"></div>
      <AuthForm onSubmit={loginSubmitHandler}>
        {error && <Error className="text-center mb-5" message={error} />}
        <h1 className="font-bold text-xl mb-2 text-white">Login</h1>
        <Text className="mb-4 max-w-xs">Welcome back!</Text>
        <AuthInputWrapper>
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
        </AuthInputWrapper>
        <AuthInputWrapper>
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
        </AuthInputWrapper>
        <Button>Login</Button>
        <div className="mt-4 max-w-xs">
          <Text>
            Don't already have an account?{" "}
            <Link className="hover:underline" href={`${WEB_URL}/auth/signup`}>
              Click here
            </Link>
          </Text>
        </div>
      </AuthForm>
    </Layout>
  );
};

export default Login;
