import {NextPage} from 'next';
import {motion} from 'framer-motion';
import Introduction from '../components/Introduction';
import Layout from '../components/Layouts/page';

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div initial="initial" animate="animate" exit={{opacity: 0}}>
        <Introduction />
      </motion.div>
    </Layout>
  );
};

export default Home;
