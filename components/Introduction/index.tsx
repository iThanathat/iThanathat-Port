import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Introduction = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container p-2 w-1/2">
        <div className="text-center">
          <Image
            src="/images/Me.JPG"
            alt="iThanathat"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
      <div
        className="container p-6 w-1/2 h-full bg-primary flex flex-col justify-center"
        style={{wordBreak: 'break-word'}}
      >
        <div className="m-auto">
          <h1 className="text-4xl">
            {"Hi, I'm"} <strong className="text-primary-content">Brain</strong>{' '}
            👋🏼
          </h1>
          <h1 className="text-4xl font-bold text-primary-content mt-4">
            {"Welcome to iThanathat's Space."}
          </h1>
          <div className="mt-4">
            <div className="text-primary-content flex items-center">
              <p className="text-2xl">💻</p>
              <p className="ml-6 text-xl">
                Software engineer based in Bangkok, Thailand.
              </p>
            </div>
            <br />
            <div className="text-primary-content flex items-center">
              <p className="text-2xl">📸</p>
              <p className="ml-6 text-xl">Part-time Photographer.</p>
            </div>
            <br />
            <div className="text-primary-content flex items-center">
              <p className="text-2xl">💼</p>
              <p className="ml-6 text-xl">
                Working at Billme Venture Co., Ltd.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly mt-6">
            <Link href={'https://github.com/iThanathat'}>
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="cursor-pointer text-primary-content"
              />
            </Link>
            <Link href={'https://www.facebook.com/ithanathat'}>
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="cursor-pointer text-primary-content"
              />
            </Link>
            <Link href={'https://www.instagram.com/ithanathat/'}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="cursor-pointer text-primary-content"
              />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/thanathat-surakhup-275200190/'}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="cursor-pointer text-primary-content"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
