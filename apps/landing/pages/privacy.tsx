import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const PrivacyPage: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy - Splashsaver"
        description="Splashsaver Privacy Policy"
      />
      <Nav />
      <Container>
        <InfoPageWrapper title="Splashsaver Privacy Policy"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
