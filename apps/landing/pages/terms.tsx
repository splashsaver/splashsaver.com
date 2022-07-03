import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const TermsPage: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="Terms of Service - Splashsaver"
        description="Terms of Service"
      />
      <Nav />
      <Container>
        <InfoPageWrapper title="Terms of Service"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default TermsPage;
