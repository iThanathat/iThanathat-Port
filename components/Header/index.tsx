import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>{`iThanathat's Space`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="iThanathat's Personal Space" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};

export default Header;