import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`iThanathat's Space`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="iThanathat's Personal Space" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center justify-center">
        <div className="p-2 w-1/2 bg-white">
          <div className="text-center">
            <Image
              src="/images/Me.png"
              alt="iThanathat"
              width={300}
              height={300}
              className="rounded-full bg-yellow-200"
            />
          </div>
        </div>
        <div className="p-6 w-1/2 h-full bg-primary flex flex-col justify-center" style={{wordBreak: 'break-word'}}>
          <div className="m-auto">
            <h1 className="text-4xl">{`Hi, I'm`} <strong className="text-primary-content">Brain</strong> 👋🏼</h1>
            <h1 className="text-4xl font-bold text-primary-content mt-4">{`Welcome to iThanathat's Space.`}</h1>
            <div className="mt-4">
              <div className="text-primary-content flex items-center">
                <p>💻</p>
                <p className="ml-6">Software engineer based in Bangkok, Thailand.</p>
              </div>
              <br/>
              <div className="text-primary-content flex items-center">
                <p>📸</p>
                <p className="ml-6">Part-time Photographer.</p>
              </div>
              <br/>
              <div className="text-primary-content flex items-center">
                <p>💼</p>
                <p className="ml-6">Working at Billme Venture Co., Ltd.</p>
              </div>
            </div>
            <div className="flex justify-evenly mt-6">
              <Link href={`https://github.com/iThanathat`}>
                <FontAwesomeIcon icon={faGithub} size="2x" className="cursor-pointer"/>
              </Link>
              <Link href={`https://www.facebook.com/ithanathat`}>
                <FontAwesomeIcon icon={faFacebook} size="2x" className="cursor-pointer"/>
              </Link>
              <Link href={`https://www.instagram.com/ithanathat/`}>
                <FontAwesomeIcon icon={faInstagram} size="2x" className="cursor-pointer"/>
              </Link>
              <Link href={`https://www.linkedin.com/in/thanathat-surakhup-275200190/`}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="cursor-pointer"/>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
