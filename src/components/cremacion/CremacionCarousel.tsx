"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CremacionCarousel.module.css";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { scrollToSection } from "../utils/functions/scroll";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  planStandar: boolean;
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
      id='anforas'
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
      <Box sx={{ px: '30px', position: 'relative'}}>
        <Swiper
          spaceBetween={24}
          slidesPerView={4}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          style={{ maxWidth: 1080, margin: "0 auto", marginBottom: 24 }}
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
                  width: '%',
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  p: 2,
                  Width: '252px'
                  // minHeight: 420,
                }}
              >
                <Box sx={{
                  position: 'relative',
                  width: '100%'
                }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      maxWidth: '130px',
                      margin: '0 auto'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  {item.planStandar && <Box sx={{
                    bgcolor: '#E1952D',
                    textAlign: 'center',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    position: 'absolute',
                    py: '0.5rem'
                  }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "14px",
                        fontFamily: "Assistant, serif",
                        color: 'white'
                      }}
                    >
                      Incluida en plan Éstandar*
                    </Typography>
                  </Box>}
                </Box>
                <Typography
                  fontWeight={700}
                  mb={0}
                  sx={{
                    minHeight: 48,
                    textAlign: "left",
                    fontSize: "20px",
                    fontFamily: "Assistant, serif",
                    color: '#3C3C3C',
                    mt: {xs: '1rem', md: '0.5rem'}
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{
                    fontWeight: '400',
                    textAlign: "left",
                    flex: 1,
                    fontSize: "12px",
                    fontFamily: "Assistant, serif",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Box className={styles.controlContainer}>
          <button ref={prevRef} className={styles.controlButton}>
            &#10094;
          </button>
          <button ref={nextRef} className={styles.controlButton}>
            &#10095;
          </button>
        </Box>
      </Box>

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
          onClick={() => { scrollToSection('contacto')}}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default CremacionCarousel;
