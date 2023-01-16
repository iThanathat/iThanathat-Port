import { NextPage } from "next";
import Layout from "../../components/Layouts/page";
import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "../../components/Badge";
import { List, ListItem } from "../../components/List";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/future/image";

const BillPouch: NextPage = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="mt-12"
      >
        <div className="h-screen overflow-scroll">
          <div className="container p-2 m-auto text-center">
            <Link href="/experiences">
              <div className="back-button">
                <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                <p>Back</p>
              </div>
            </Link>
            <h1 className="content-large mx-auto border-b w-fit-content font-bold">
              BillPouch
            </h1>
            <p className="page-paragraph">
              An application for receiving an invoice created by
              <Link href="https://billbox.billme.co.th">
                <span className="ml-1 bg-primary text-primary-content cursor-pointer px-1 rounded">
                  BillBox
                </span>
              </Link>{" "}
              . Check invoices sent from the merchant, and you can immediately
              pay and notify your merchant by uploading a payment slip. And if
              your merchant integrates the system with a payment gateway, you
              can get your transaction reconciled instantly at the moment.
              <div className="text-left mx-auto w-fit-content">
                <p className="text-xl mt-4">My part in this website is:</p>
                <List className="list-disc list-inside">
                  <ListItem>Building an invoice detail page.</ListItem>
                  <ListItem>Integrate system with payment gateway.</ListItem>
                </List>
              </div>
            </p>
            <List className="mt-4 m-auto w-fit-content">
              <ListItem className="flex">
                <Badge>WEBSITE</Badge>
                <p className="ml-4">https://billpouch.billme.co.th</p>
              </ListItem>
              <ListItem className="flex">
                <Badge>STACK</Badge>
                <p className="ml-4 ">React, Typescript</p>
              </ListItem>
            </List>
            <div className="mt-4 flex flex-col w-fit-content m-auto">
              <div>
                <Image
                  src="/images/billpouch-website.png"
                  alt="Billpouch website"
                  width={600}
                  height={350}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4">
                <Image
                  src="/images/billpouch-website-2.png"
                  alt="Billpouch QR"
                  width={300}
                  height={450}
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

export default BillPouch;
