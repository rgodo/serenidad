"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ServicesGallery.module.css";
import { GalleryData } from "../../data/types";
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { Navigation, Autoplay } from 'swiper/modules';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

type Props = {
  data: GalleryData;
  isMobile?: boolean;
  children?: React.ReactNode;
  onSlideChange?: (swiper: SwiperClass) => void;
  autoplay?: boolean;
};

export const ServicesGallery: React.FC<Props> = ({ data, children, onSlideChange, autoplay = false }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      style={{ position: "relative" }}
      modules={[Navigation, Autoplay]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      autoplay={autoplay}
      onSlideChange={onSlideChange || (() => {})}
      autoHeight={false}
      resizeObserver={false}
    >
      {data.images.map(({ src, alt }, idx) => (
        <SwiperSlide key={idx}>
          <Box sx={{ width: "100%", aspectRatio: "1/1" }}>
            <img
              src={src}
              alt={alt}
              className={styles.imgSwiper}
              width={"100%"}
            />
          </Box>
        </SwiperSlide>
      ))}
      {children}
      <Box className={styles.controlContainer}>
        <button ref={prevRef} className={styles.controlButton}>
          {" "}
          <WestIcon />{" "}
        </button>
        <button ref={nextRef} className={styles.controlButton}>
          {" "}
          <EastIcon />{" "}
        </button>
      </Box>
    </Swiper>
  );
};
