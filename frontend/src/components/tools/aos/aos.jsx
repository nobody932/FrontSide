"use client"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOS = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
};

export default AOS;
