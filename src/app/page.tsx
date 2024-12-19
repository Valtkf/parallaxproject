"use client";

import { useEffect } from "react";
import ZoomParallax from "./components/ZoomParallax/index";
import styles from "./page.module.css";
import Lenis from "@studio-freight/lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className={styles.main}>
      <h1 className="font-bold text-white text-8xl text-center">
        Zoom Parallax
      </h1>
      <ZoomParallax />
    </main>
  );
}
