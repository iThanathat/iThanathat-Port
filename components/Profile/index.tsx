import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import TextWithEmoji from "../TextWithIcon";
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="container h-full flex flex-col justify-center p-6 w-1/2 bg-secondary">
        <div className="m-auto">
          <h1 className="text-4xl text-secondary-content">Personal Info </h1>
          <div className="mt-4">
            <TextWithEmoji icon={'👦🏻'} text="Name: Thanathat Surakhup" textColor="text-secondary-content"/>
            <br />
            <TextWithEmoji icon={'👋🏼'} text="Nick Name: Brain" textColor="text-secondary-content"/>
            <br />
            <TextWithEmoji icon={'🎂'} text="Date of Birth: 5th of August 1996" textColor="text-secondary-content"/>
            <br />
            <TextWithEmoji icon={'📧'} text="Email: ithanathat.brain@gmail.com" textColor="text-secondary-content"/>
            <br />
            <TextWithEmoji icon={'📱'} text="Tel: 080-988-xxxx" textColor="text-secondary-content" />
          </div>
          <div className="flex flex-col mt-6">
            <Link href={`https://github.com/iThanathat`}>
              <div className="flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faGithub} size="2x"  className="text-primary-content"/>
                <p className="ml-6 text-xl text-secondary-content">https://github.com/iThanathat</p>
              </div>
            </Link>
            <br />
            <Link href={`https://www.facebook.com/ithanathat`}>
              <div className="flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} size="2x" className="text-primary-content" />
                <p className="ml-6 text-xl text-secondary-content">https://www.facebook.com/ithanathat</p>
              </div>
            </Link>
            <br />
            <Link href={`https://www.instagram.com/ithanathat`}>
              <div className="flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} size="2x" className="text-primary-content" />
                <p className="ml-6 text-xl text-secondary-content">https://www.instagram.com/ithanathat</p>
              </div>
            </Link>
            <br />
            <Link href={`https://www.linkedin.com/in/thanathat-surakhup-275200190/`}>
              <div className="flex items-center cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-primary-content" />
                <p className="ml-6 text-xl text-secondary-content">https://www.linkedin.com/in/thanathat-surakhup-275200190</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container p-2 w-1/2 flex flex-col justify-center items-center">
        <Image
          src="/images/AnimojiMe.png"
          alt="iThanathat"
          width={300}
          height={300}
          className="rounded-full bg-yellow-200"
        />
      </div>
    </div>
  )
}

export default Profile;