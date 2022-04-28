import {NextPage} from 'next';
import Layout from '../../components/Layouts/page';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Badge from '../../components/Badge';
import {List, ListItem} from '../../components/List';
import Link from 'next/link';

const Billme: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{opacity: 0}}
        className="mt-12"
      >
        <div className="h-screen">
          <div className="container p-2 m-auto text-center">
            <Link href="/experiences">
              <div className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                <p>Back</p>
              </div>
            </Link>
            <h1 className="content-large mx-auto border-b w-fit-content font-bold">
              Billme Landing Page
            </h1>
            <p className="mt-4">
              This is a landing page for advertising
              <Link href="https://billbox.billme.co.th">
                <span className="ml-1 bg-primary text-primary-content cursor-pointer px-1 rounded">
                  BillBox
                </span>
              </Link>{' '}
              application. <br />
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
                      https://billme.co.th{' '}
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
                  src="/images/billme-website.png"
                  alt="Billme website"
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <Image
                  src="/images/billme-website-2.png"
                  alt="Billme website"
                  width={600}
                  height={300}
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

export default Billme;
