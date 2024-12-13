"use client";

import React, { useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import CanyonImage from "../../../../public/images/pexels-belle-co-99483-342005.jpg";
import MountainSnow from "../../../../public/images/pexels-eberhardgross-1366919.jpg";
import Volcano from "../../../../public/images/pexels-oidonnyboy-3762284.jpg";
import Cascad from "../../../../public/images/pexels-pixabay-358457.jpg";
import Cliff from "../../../../public/images/pexels-tobiasbjorkli-2387966.jpg";
import { useScroll, useTransform, motion } from "motion/react";

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: CanyonImage,
      scale: scale4,
    },
    {
      src: MountainSnow,
      scale: scale5,
    },
    {
      src: Volcano,
      scale: scale6,
    },
    {
      src: Cascad,
      scale: scale8,
    },
    {
      src: Cliff,
      scale: scale9,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div style={{ scale }} key={index} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="canyon" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
