import {
  Button,
  Layout,
  SplashsaverLink as Link,
  AuthInputWrapper,
  Text,
  AuthForm,
  Error,
  Input,
  Label,
} from "@splashsaver/ui";
import { LANDING_URL } from "@splashsaver/lib/constants";
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
      <AuthForm onSubmit={signupSubmitHandler}>
        {error && <Error className="text-center mb-5" message={error} />}
        <h1 className="font-bold text-xl mb-2 text-white">Sign Up</h1>

        <Text className="mb-4 max-w-xs">
          Sign up today and start using splashsaver to manage your teams.
        </Text>
        <AuthInputWrapper>
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
        </AuthInputWrapper>
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
          <Label>Password (At least 8 characters)</Label>
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
        <Button>Sign up for free</Button>
        <div className="mt-4 max-w-xs">
          <Text>
            By signing up, you agree to our{" "}
            <Link
              className="hover:underline text-sm"
              href={`${LANDING_URL}/terms`}
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="hover:underline text-sm"
              href={`${LANDING_URL}/privacy`}
            >
              Privacy Policy
            </Link>
            .
          </Text>
        </div>
      </AuthForm>
    </Layout>
  );
};

export default SignUp;
