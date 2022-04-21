import {NextPage} from 'next';
import Works from '../../components/Works';
import {motion} from 'framer-motion';
import Layout from '../../components/Layouts/page';

const Experiences: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="mt-12"
      >
        <Works />
      </motion.div>
    </Layout>
  );
};

export default Experiences;
