import { NextPage } from "next";
import Layout from "../../components/Layouts/page";
import {motion} from 'framer-motion';

const BillBox: NextPage = () => {
  return (
    <Layout>
       <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="mt-12"
      >
        BillBox
      </motion.div>
    </Layout>
  );
}

export default BillBox;