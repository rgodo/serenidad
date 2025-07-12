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
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
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
              background: "#fff",
              borderRadius: 4,
              boxShadow: 2,
              minHeight: 420,
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
                  borderRadius: 16,
                  boxShadow: "0 2px 8px 0 rgba(0,0,0,0.05)",
                  background: "#fafafa",
                }}
              />
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              mb={1.5}
              sx={{ minHeight: 48, textAlign: "center" }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", flex: 1 }}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
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
