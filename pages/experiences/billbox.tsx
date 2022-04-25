import {NextPage} from 'next';
import Layout from '../../components/Layouts/page';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {List, ListItem} from '../../components/List';
import Badge from '../../components/Badge';
import Image from 'next/image';

const BillBox: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="mt-12"
      >
        <div className="h-screen overflow-scroll">
          <div className="container p-2 m-auto text-center">
            <Link href="/experiences">
              <div className="relative w-fit-content top-14 left-1/4 cursor-pointer">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                <p>Back</p>
              </div>
            </Link>
            <h1 className="text-2xl mx-auto border-b w-fit-content font-bold">
              BillBox
            </h1>
            <p className="mt-4">
              This is
              <Link href="https://billbox.billme.co.th">
                <a target="_blank">
                  <span className="ml-1 bg-primary text-primary-content cursor-pointer px-1 rounded">
                    BillBox
                  </span>
                </a>
              </Link>{' '}
              application. <br />
              An application for generate and send financial document—e.g.
              Invoice, Tax Invoice, Receipt, etc. <br />
              Sending an invoice to the customer via email, Line, etc., or
              integrate your system to send the invoice with our API <br />
              <div className="text-left mx-auto w-fit-content">
                <p className="text-xl mt-4">My part in this website is:</p>
                <List className="list-disc list-inside">
                  <ListItem>Create entire structure of the website.</ListItem>
                  <ListItem>Insert content of the website.</ListItem>
                </List>
              </div>
            </p>
            <List className="mt-4 m-auto w-fit-content">
              <ListItem className="flex">
                <Badge>WEBSITE</Badge>
                <Link href="https://billme.co.th" passHref>
                  <a target="_blank">
                    <p className="ml-4 hover:underline cursor-pointer">
                      https://billbox.billme.co.th{' '}
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        size="1x"
                      />
                    </p>
                  </a>
                </Link>
              </ListItem>
              <ListItem className="flex">
                <Badge>STACK</Badge>
                <p className="ml-4 ">React, Typescript</p>
              </ListItem>
            </List>
            <div className="mt-4 flex flex-col w-fit-content m-auto">
              <div>
                <Image
                  src="/images/billbox-website-2.png"
                  alt="Billbox website"
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <Image
                  src="/images/billbox-website.png"
                  alt="Billbox website"
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default BillBox;
