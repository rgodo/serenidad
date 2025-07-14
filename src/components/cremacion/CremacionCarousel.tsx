"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CremacionCarousel.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import { useEffect, useRef } from "react";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface CremacionCarouselProps {
  title: string;
  items: CarouselItem[];
  buttonText: string;
}

const CremacionCarousel: React.FC<CremacionCarouselProps> = ({
  title,
  items,
  buttonText,
}) => {
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
    <Box
      sx={{ my: { xs: 4, md: 8 }, px: { xs: 1, md: 6 }, textAlign: "center" }}
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            xs: "1.25rem",
          },
          fontFamily: "Assistant, serif",
          mb: "1.5rem",
        }}
      >
        {title}
      </Typography>
      <Swiper
        spaceBetween={24}
        slidesPerView={4}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ maxWidth: 950, margin: "0 auto", marginBottom: 24 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                p: 2,
                // minHeight: 420,
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 160,
                  height: 160,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: 160,
                    height: 160,
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Typography
                fontWeight={700}
                mb={0}
                sx={{
                  minHeight: 48,
                  textAlign: "center",
                  fontSize: "1.25rem",
                  fontFamily: "Assistant, serif",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  flex: 1,
                  fontSize: "0.75rem",
                  fontFamily: "Assistant, serif",
                }}
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </Box>
          </SwiperSlide>
        ))}
        <Box className={styles.controlContainer}>
          <button ref={prevRef} className={styles.controlButton}>
            &#10094;
          </button>
          <button ref={nextRef} className={styles.controlButton}>
            &#10095;
          </button>
        </Box>
      </Swiper>
      <Box>
        <Button
          sx={{
            color: "#8B7669",
            border: "2px solid #8B7669",
            paddingX: "1rem",
            paddingY: "0.5rem",
            fontFamily: "Assistant, serif",
            textTransform: "none",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default CremacionCarousel;
