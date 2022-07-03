import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";

const TermsPage: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <InfoPageWrapper title="Terms of Service"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default TermsPage;
