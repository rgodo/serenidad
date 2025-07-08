"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography, Button } from "@mui/material";

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
}) => (
  <Box sx={{ my: { xs: 4, md: 8 }, px: { xs: 1, md: 6 }, textAlign: "center" }}>
    <Typography variant="h5" fontWeight={600} mb={4}>
      {title}
    </Typography>
    <Swiper
      spaceBetween={24}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      style={{ maxWidth: 900, margin: "0 auto", marginBottom: 24 }}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>
          <Box
            sx={{
              px: 2,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{ flex: "0 0 160px", mr: { md: 4 }, mb: { xs: 2, md: 0 } }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: 160,
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 16,
                }}
              />
            </Box>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="subtitle1" fontWeight={600}>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
    <Box mt={3}>
      <Button color="primary" variant="contained">
        {buttonText}
      </Button>
    </Box>
  </Box>
);

export default CremacionCarousel;
