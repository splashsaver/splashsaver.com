import Head from "next/head";

interface SeoProps {
  title?: string | undefined;
  description: string;
}

export const Seo = ({ title, description }: SeoProps) => {
  return (
    <Head>
      <title>
        {title
          ? title
          : "Splashsaver - Making managing teams easy for startups."}
      </title>
      <meta name="theme-color" content="#BB86FC" />
      <meta name="description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content="https://splashsaver.com/" />
      <meta property="og:site_name" content="Splashsaver" />
      <meta property="og:type" content="website" />
    </Head>
  );
};
