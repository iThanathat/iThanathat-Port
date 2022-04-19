import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <div className="overflow-scroll">
      <Header />
      <Introduction />
      <Profile />
    </div>
  )
}

export default Home
