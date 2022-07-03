import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="About - Splashsaver" description="About" />
      <Nav />
      <Container>
        <InfoPageWrapper title="About"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default AboutPage;
