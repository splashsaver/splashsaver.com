import { Layout, Button, Text } from "@splashsaver/ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Container } from "../components/Container";
import { Nav } from "../components/nav/Nav";

const NotFoundPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <Nav />
      <Container className="justify-center">
        <Text>Oops!</Text>
        <h1 className="text-white font-bold text-3xl">404 - Page not found.</h1>
        <Button className="mt-2" onClick={() => router.back()}>
          Click here to return
        </Button>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
