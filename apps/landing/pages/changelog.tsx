import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";

const ChangelogPage: NextPage = () => {
  return (
    <Layout>
      <Nav />
      <Container>
        <InfoPageWrapper title="Changelog"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default ChangelogPage;
