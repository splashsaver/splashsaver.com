import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const ChangelogPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="Changelog - Splashsaver" description="Changelog" />
      <Nav />
      <Container>
        <InfoPageWrapper title="Changelog"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default ChangelogPage;
