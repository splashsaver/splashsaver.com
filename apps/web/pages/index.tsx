import { TOKEN_IDENTIFIER, WEB_URL } from "@splashsaver/lib/constants";
import { Button, Layout } from "@splashsaver/ui";
import { Seo } from "../components/seo/Seo";
import { useRouter } from "next/router";

const Web = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    const token = localStorage.getItem(TOKEN_IDENTIFIER);

    if (!token) router.push(`${WEB_URL}/auth/signup`);
  }

  return (
    <Layout>
      <Button>hello</Button>
    </Layout>
  );
};

export default Web;
