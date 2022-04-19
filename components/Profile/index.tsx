import Image from "next/image";
import TextWithEmoji from "../TextWithIcon";

const Profile = () => {
  return (
    <div className="h-screen flex justify-center">
      <div className="container h-full flex flex-col justify-center p-6 w-1/2 bg-secondary">
        <div className="m-auto">
          <h1 className="text-4xl">Personal Info </h1>
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
        </div>
      </div>
      <div className="container p-2 w-1/2 bg-white flex flex-col justify-center items-center">
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