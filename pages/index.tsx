import type {NextPage} from 'next';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <Layout>
      <Introduction />
      <Profile />
    </Layout>
  );
};

export default Home;
