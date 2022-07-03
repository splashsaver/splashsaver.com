import { Layout } from "@splashsaver/ui";
import { NextPage } from "next";
import { Container } from "../components/Container";
import { InfoPageWrapper } from "../components/InfoPageWrapper";
import { Nav } from "../components/nav/Nav";
import { Seo } from "../components/seo/Seo";

const CompanyPage: NextPage = () => {
  return (
    <Layout>
      <Seo title="Company - Splashsaver" description="Company" />
      <Nav />
      <Container>
        <InfoPageWrapper title="Company"></InfoPageWrapper>
      </Container>
    </Layout>
  );
};

export default CompanyPage;
