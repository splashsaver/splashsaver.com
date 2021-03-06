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
    </Head>
  );
};
