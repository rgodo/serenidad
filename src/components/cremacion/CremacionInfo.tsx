"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}
interface CremacionInfoProps {
  intro: string;
  sectionTitle: string;
  description: string;
  bullets: string[];
  buttonText: string;
  gallery: GalleryItem[];
}

const CremacionInfo: React.FC<CremacionInfoProps> = ({
  intro,
  sectionTitle,
  description,
  bullets,
  buttonText,
  gallery,
}) => {
  // State for gallery image index
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Handle arrow navigation
  const prevImage = () =>
    setGalleryIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  const nextImage = () =>
    setGalleryIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  const currentImage = gallery[galleryIndex];

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
      gap={{ xs: 4, md: 8 }}
      my={{ xs: 4, md: 8 }}
    >
      {/* LEFT SIDE: Text */}
      <Box sx={{ ml: 5 }}>
        <Typography
          variant="h5"
          fontWeight={600}
          mb={2}
          fontFamily={"EBGaramond, serif"}
        >
          {intro}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          mb={2}
          fontFamily={"EBGaramond, serif"}
        >
          {sectionTitle}
        </Typography>
        <Typography
          variant="body1"
          mb={2}
          dangerouslySetInnerHTML={{ __html: description }}
          fontFamily={"Assistant, serif"}
        />
        <List sx={{ mb: 2 }}>
          {bullets.map((item, idx) => (
            <ListItem key={idx} disableGutters>
              <ListItemIcon sx={{ minWidth: 32 }}>
                <CircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={
                  <span
                    dangerouslySetInnerHTML={{ __html: item }}
                    style={{
                      display: "inline",
                      fontFamily: "Assistant, serif",
                    }}
                  />
                }
              />
            </ListItem>
          ))}
        </List>

        <Button variant="contained" color="primary">
          {buttonText}
        </Button>
      </Box>

      {/* RIGHT SIDE: Simple Carousel */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "90%",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 2,
            mb: 1,
            aspectRatio: "1 / 1",
            bgcolor: "#f8f8f8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Arrows (left/right) */}
          <IconButton
            onClick={prevImage}
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: 1,
              zIndex: 2,
              "&:hover": { bgcolor: "grey.200" },
            }}
            aria-label="previous image"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <img
            src={currentImage.image}
            alt={currentImage.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
          <IconButton
            onClick={nextImage}
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              bgcolor: "white",
              boxShadow: 1,
              zIndex: 2,
              "&:hover": { bgcolor: "grey.200" },
            }}
            aria-label="next image"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
        {/* Title & description below image */}
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{ textAlign: "center", mt: 1 }}
        >
          {currentImage.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center" }}
        >
          {currentImage.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default CremacionInfo;
