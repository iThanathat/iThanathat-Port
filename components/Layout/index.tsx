import Head from "next/head";
import { useState } from "react";
import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div data-theme={isDarkTheme ? "night" : "corporate"} className="overflow-scroll">
      <Head>
        <title>{`iThanathat's Space`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="iThanathat's Personal Space" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      </Head>
      <NavBar isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme(!isDarkTheme)}/>
      {children}
    </div>
  )
};

export default Layout;