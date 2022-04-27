import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {useState} from 'react';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {List, ListItem} from '../List';
import {motion} from 'framer-motion';

const Introduction = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageOne = () => {
    return (
      <div
        className="introduction-content-right"
        style={{wordBreak: 'break-word'}}
      >
        <div className="flex flex-col justify-between h-full">
          <div
            className="arrow-right cursor-pointer"
            onClick={() => setCurrentPage(2)}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              size="2x"
              className="text-secondary"
            />
          </div>
          <motion.div
            className="flex flex-col my-auto mx-auto"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.0}}}
            exit={{opacity: 0}}
          >
            <h1 className="content-title">
              <strong className="text-primary-focus">{"Hi, I'm Brain"}</strong>{' '}
              👋🏼
            </h1>
            <h1 className="content-title font-bold text-primary-content mt-3">
              {"Welcome to iThanathat's Space."}
            </h1>
            <div className="mt-6">
              <div className="text-primary-content flex items-center">
                <p className="content-large">
                  Software engineer based in Bangkok, Thailand.
                </p>
              </div>
              <div className="text-primary-content flex items-center mt-1">
                <p className="content-large">
                  Working at Billme Venture Co., Ltd.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col mt-6"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1.0}}}
            exit={{opacity: 0}}
          >
            <div>
              <h1 className="pb-1 border-b border-primary-content w-fit-content content-large text-primary-content font-bold">
                Contact
              </h1>
            </div>
            <div>
              <p className="content-large text-primary-content mt-4">
                Email: ithanathat.brain@gmail.com
              </p>
            </div>
            <div className="flex justify-center mt-6">
              <Link href={'https://github.com/iThanathat'} passHref>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="cursor-pointer text-primary-content"
                />
              </Link>
              <Link href={'https://www.facebook.com/ithanathat'} passHref>
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className="cursor-pointer text-primary-content ml-9"
                />
              </Link>
              <Link href={'https://www.instagram.com/ithanathat/'} passHref>
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="cursor-pointer text-primary-content ml-9"
                />
              </Link>
              <Link
                href={
                  'https://www.linkedin.com/in/thanathat-surakhup-275200190/'
                }
                passHref
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="cursor-pointer text-primary-content ml-9"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  const pageTwo = () => {
    return (
      <div
        className="introduction-content-right"
        style={{wordBreak: 'break-word'}}
      >
        <div className="flex h-full">
          <div
            className="arrow-left cursor-pointer"
            onClick={() => setCurrentPage(1)}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="2x"
              className="text-secondary"
            />
          </div>
          <div className="flex flex-col justify-evenly h-full">
            <motion.div
              className="text-primary-content"
              initial={{opacity: 0}}
              animate={{opacity: 1, transition: {duration: 1.0}}}
              exit={{opacity: 0}}
            >
              <h1 className="content-title text-primary-content pb-1 border-b border-primary-content w-fit-content font-bold">
                Why iThanathat ?
              </h1>
              <div>
                <p className="content-normal text-primary-content mt-4 indent-10">
                  {`
                    iThanathat comes from the idea of the letter "i" in Apple products—e.g. iPhone, iMac, etc. And because I'm a fan of Apple products, so I combine
                    my name with the letter "i". And that's iThanathat!
                  `}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="text-primary-content"
              initial={{opacity: 0}}
              animate={{opacity: 1, transition: {duration: 1.0}}}
              exit={{opacity: 0}}
            >
              <h1 className="content-title text-primary-content pb-1 border-b border-primary-content w-fit-content font-bold">
                whoami ?
              </h1>
              <List className="list-disc list-inside">
                <ListItem className="content-normal">
                  Full Name: Thanathat Surakhup
                </ListItem>
                <ListItem className="content-normal">
                  Part-time Photographer
                </ListItem>
                <ListItem className="content-normal">
                  Into Jazz / Classical Music
                </ListItem>
              </List>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="introduction-page-container">
      <div className="introduction-content-left">
        <div className="text-center">
          <Image
            src="/images/Me.JPG"
            alt="iThanathat"
            width={370}
            height={370}
            layout="responsive"
            className="rounded-full"
          />
        </div>
      </div>
      {currentPage === 1 ? pageOne() : pageTwo()}
    </div>
  );
};

export default Introduction;
