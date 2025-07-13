"use client";

import React, { useEffect, useRef } from "react";
import styles from "./ServicesGallery.module.css";
import { GalleryData } from "../../data/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@mui/material';
import { Navigation } from 'swiper/modules';

type Props = { data: GalleryData, isMobile?: boolean };

export const ServicesGallery: React.FC<Props> = ({ data, isMobile }) => {
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
      style={{position: 'relative'}}
      modules={[Navigation]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {
        data.images.map( ({src, alt}, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ width: "100%", aspectRatio: '1/1'}}>
              <img src={src} alt={alt} className={styles.imgSwiper} />
            </Box>
          </SwiperSlide>
        ))
      }
      <Box
        sx={{
          bgcolor: '#E1952D',
          textAlign: 'center',
          paddingY: '0.5rem',
          color: 'white'
        }}
      >
        <span style={{
          fontWeight: 700,
        }}> ¡Ver Planes! </span>
      </Box>
      <Box className={styles.controlContainer}>
        <button ref={prevRef} className={styles.controlButton} dangerouslySetInnerHTML={{ __html: isMobile ? "&#10094;" : "&#8592;" }}></button>
        <button ref={nextRef} className={styles.controlButton} dangerouslySetInnerHTML={{ __html: isMobile ? "&#10095;" : "&#8594;" }}></button>
      </Box>
    </Swiper>
  );
};
