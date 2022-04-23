import {NextPage} from 'next';
import {motion} from 'framer-motion';
import Introduction from '../components/Introduction';
// import Profile from '../components/Profile';
import Layout from '../components/Layouts/page';

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        // className="mt-12"
      >
        <Introduction />
        {/* <Profile /> */}
      </motion.div>
    </Layout>
  );
};

export default Home;
