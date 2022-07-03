import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <InfoPageWrapper title="About"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default AboutPage;
