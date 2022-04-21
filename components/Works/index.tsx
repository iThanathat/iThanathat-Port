import Image from 'next/image';
import {motion} from 'framer-motion';
import {fadeInUp} from './animate';
import {WorksDetail} from './detail';

const Works = () => {
  return (
    <div className="h-screen">
      <div className="pt-4 placeholder:h-fit-content grid grid-cols-2 w-full m-auto">
        {WorksDetail.map(detail => {
          return (
            <motion.div
              key={`detail-${detail.alt}`}
              variants={fadeInUp}
              className="p-2 h-fit-content text-center"
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
