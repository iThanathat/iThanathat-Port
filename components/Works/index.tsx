import Image from 'next/image';
import {motion} from 'framer-motion';
import {fadeInUp} from './animate';
import {WorksDetail} from './detail';
import {useRouter} from 'next/router';

const Works = () => {
  const router = useRouter();

  return (
    <div className="h-screen">
      <div className="pt-4 h-fit-content grid grid-cols-2 w-full m-auto">
        {WorksDetail.map(detail => {
          return (
            <motion.div
              key={`detail-${detail.alt}`}
              variants={fadeInUp}
              className="p-2 h-fit-content text-center cursor-pointer"
              onClick={() => router.push(`${detail.href}`)}
            >
              <Image
                src={detail.imageSrc}
                alt={detail.alt}
                width={450}
                height={300}
                className="rounded-lg"
              />
              <h1>{detail.title}</h1>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
