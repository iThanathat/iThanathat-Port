import {NextPage} from 'next';
import Layout from '../components/Layout';
import Introduction from '../components/Introduction';
import Profile from '../components/Profile';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-12">
        <Introduction />
        <Profile />
      </div>
    </Layout>
  );
};

export default Home;
