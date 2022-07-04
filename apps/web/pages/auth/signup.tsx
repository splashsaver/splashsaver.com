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
import { LANDING_URL, WEB_URL } from "@splashsaver/lib/constants";
import { Seo } from "../../components/seo/Seo";
import { useState } from "react";
import { Cover } from "../../components/Cover";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signupSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 8) {
      return setError("Password length must be at least 8 characters.");
    }

    setError("");

    const data = { name, email, password };

    fetch("/api/auth/signup", {
      body: JSON.stringify({ ...data }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout>
      <Seo title="Sign Up - Splashsaver" description="Sign up for an account" />
      <Cover />
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
        <div className="mb-4 max-w-xs">
          <Text>
            Have an account already?{" "}
            <Link className="hover:underline" href={`${WEB_URL}/auth/login`}>
              Click here
            </Link>
          </Text>
        </div>
        <Button>Sign up for free</Button>
        <div className="mt-4 max-w-xs">
          <Text>
            By signing up, you agree to our{" "}
            <Link
              className="hover:underline"
              href={`${LANDING_URL}/terms`}
              target="_blank"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              className="hover:underline"
              href={`${LANDING_URL}/privacy`}
              target="_blank"
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
