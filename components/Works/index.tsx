import Image from 'next/image';
import {motion} from 'framer-motion';
import {WorksDetail} from './detail';
import {useRouter} from 'next/router';

const Works = () => {
  const router = useRouter();
  const variants = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="h-screen">
      <div className="work-list-container">
        {WorksDetail.map(detail => {
          return (
            <motion.div
              key={`detail-${detail.alt}`}
              variants={variants}
              className="p-2 h-fit-content w-fit text-center cursor-pointer mx-auto"
              onClick={() => router.push(`${detail.href}`)}
            >
              <Image
                src={detail.imageSrc}
                alt={detail.alt}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <div className="mt-4">
                <h1 className="text-xl">{detail.title}</h1>
                <p>{detail.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
