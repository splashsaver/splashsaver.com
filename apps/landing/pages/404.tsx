import { Layout, Button, Text } from "@splashsaver/ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      <Seo
        title="404 - Page not found"
        description="This page doesn't exist."
      />
      <Nav />
      <Container className="justify-center">
        <Text>Oops!</Text>
        <h1 className="text-white font-bold text-3xl">404 - Page not found.</h1>
        <Button className="mt-4 w-fit" onClick={() => router.back()}>
          Click here to return
        </Button>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
