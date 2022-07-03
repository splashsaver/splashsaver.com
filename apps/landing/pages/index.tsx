import { Button, Layout, Text, SplashsaverLink as Link } from "@splashsaver/ui";
import { WEB_URL } from "@splashsaver/lib/constants";
import { Container } from "../components/Container";
import { Nav } from "../components/nav/Nav";
import { NextPage } from "next";

const Landing: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <div className="flex flex-col w-full h-full justify-center">
          <h1 className="text-white font-bold text-3xl max-w-4xl">
            Making managing teams easy for startups.
          </h1>
          <Text className="text-lg max-w-lg py-2">
            Splashsaver is a platform trying to simplify the way startup
            founders manage their teams.
          </Text>
          <Link
            className="w-fit"
            href={`${WEB_URL}/auth/signup`}
            target="_blank"
          >
            <Button>Sign up for free &rarr;</Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default Landing;
