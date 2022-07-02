import { Button, Layout, Text, SplashsaverLink as Link } from "@splashsaver/ui";
import { WEB_URL } from "@splashsaver/lib/constants";
import { Container } from "../components/Container";
import { Nav } from "../components/nav/Nav";

const Landing = () => {
  return (
    <Layout>
      <Nav />
      <div className="flex flex-col w-full">
        {/* Hero section */}
        <div className="flex flex-col h-screen justify-center items-center text-center">
          <div>slkdmf</div>
          <h1 className="text-white font-bold text-5xl max-w-3xl tracking-tight">
            Splashsaver - Making managing teams easy for startups.
          </h1>
          <Text className="text-2xl mt-4 max-w-2xl mb-4">
            Splashsaver is a platform trying to simplify the way startup
            founders manage their teams.
          </Text>
          <Link href={`${WEB_URL}/auth/signup`} target="_blank">
            <Button className="p-7 px-7 text-xl">
              Sign up for free &rarr;
            </Button>
          </Link>
        </div>
        {/* Another section */}
        <section className="flex items-center flex-col w-full py-20 bg-gray-900">
          <h1 className="text-white font-bold text-4xl tracking-tight">
            Some title text here
          </h1>
          <Text className="text-lg">something here idk</Text>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
