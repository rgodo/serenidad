"use client";

import React, { useState } from "react";
import {
  Box,
  Typography
} from "@mui/material";
import { GalleryData } from "../../data/types";
import styles from "./CremacionInfo.module.css";
import { ServicesGallery } from "../services/ServicesGallery";
import { scrollToSection } from "../utils/functions/scroll";
interface CremacionInfoProps {
  intro: string;
  sectionTitle: string;
  description: string;
  bullets: string[];
  buttonText: string;
  gallery: GalleryData;
  isMobile?: boolean
}

const CremacionInfo: React.FC<CremacionInfoProps> = ({
  intro,
  sectionTitle,
  description,
  bullets,
  buttonText,
  gallery,
  isMobile
}) => {
  const [currentData, setCurrentData] = useState(gallery.images[0]);

  return (
    <section>
      <Box
        sx={{
          width: '100%',
          paddingY: '2rem',
          position: 'relative',
          display: { md: 'grid' },
          alignItems: { md: 'center' },
          gridTemplateColumns: { md: '1fr 1fr'},
          maxWidth: {md: '1071px'},
          mx: { md: 'auto' }
        }}
      >
        <Box>
          <div className={styles.content}>
            <span style={{ color: "#768837", marginBottom: "5px", fontWeight: 700 }}>{intro}</span>
            <Typography
              sx={{
                fontSize: {xs: '1.875rem', md: '2.5rem'},
                fontWeight: 400,
                marginTop: "10px",
                maxWidth: { xs: '100%', md: "510px" },
                marginBottom: "5px",
                lineHeight: {xs: 1.2, md: 1},
                paddingBottom: '1rem',
                borderBottom: "solid",
                borderColor: "#E1952D",
                borderWidth: "2px",
              }}
            >
              {sectionTitle}
            </Typography>
            <Typography
              style={{
                fontFamily: "Assistant, serif",
                paddingTop: 15,
                marginTop: 5,
                color: '#484846'
              }}
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <ul style={{ padding: 0, marginLeft: 15, paddingInlineStart: '2rem' }}>
              {bullets.map((text, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: "Assistant, serif",
                    color: '#484846',
                  }}
                  dangerouslySetInnerHTML={{ __html: text }}
                >
                </li>
              ))}
            </ul>
            <a
              // href={data.cta.link}
              className={styles.cta}
              style={{ fontFamily: "Assistant, serif", cursor: 'pointer' }}
              onClick={() => { scrollToSection('anforas')}}
            >
              {buttonText}
            </a>
          </div>
        </Box>
        <Box
          sx={{
            maxWidth: {md: '535px'}
          }}
        >
          <ServicesGallery data={gallery} isMobile={isMobile} autoplay={true} onSlideChange={(e) => {
            setCurrentData(gallery.images[e.activeIndex])
          }} />
          <div
            style={{
              maxWidth: '100%',
            }}
          >
            <h4
              style={{
                fontFamily: "Assistant, serif",
                marginBottom: "0.5rem",
                marginTop: 0,
                fontWeight: 700,
                color: "#484846",
              }}
            >
              {currentData.title}
            </h4>
            <p
              style={{
                fontFamily: "Assistant, serif",
                marginTop: 0,
                fontWeight: 600,
                lineHeight: 1.1,
                fontSize: "0.98rem",
                color: "#484846",
              }}
            >
              {currentData.description}
            </p>
          </div>
        </Box>
      </Box>
    </section>
  )
  // return (
  //   <Box
  //     display="grid"
  //     maxWidth={{ xs: '100vw', md: 1440 }}
  //     gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
  //     gap={{ xs: 4, md: 8 }}
  //     my={{ xs: 4, md: 8 }}
  //   >
  //     {/* LEFT SIDE: Text */}
  //     <Box sx={{ ml: 5 }}>
  //       <Typography
  //         variant="h5"
  //         fontWeight={600}
  //         mb={2}
  //         fontFamily={"EBGaramond, serif"}
  //       >
  //         {intro}
  //       </Typography>
  //       <Typography
  //         variant="h5"
  //         fontWeight={600}
  //         mb={2}
  //         fontFamily={"EBGaramond, serif"}
  //       >
  //         {sectionTitle}
  //       </Typography>
  //       <Typography
  //         variant="body1"
  //         mb={2}
  //         dangerouslySetInnerHTML={{ __html: description }}
  //         fontFamily={"Assistant, serif"}
  //       />
  //       <List sx={{ mb: 2 }}>
  //         {bullets.map((item, idx) => (
  //           <ListItem key={idx} disableGutters>
  //             <ListItemIcon sx={{ minWidth: 32 }}>
  //               <CircleIcon fontSize="small" />
  //             </ListItemIcon>
  //             <ListItemText
  //               primary={
  //                 <span
  //                   dangerouslySetInnerHTML={{ __html: item }}
  //                   style={{
  //                     display: "inline",
  //                     fontFamily: "Assistant, serif",
  //                   }}
  //                 />
  //               }
  //             />
  //           </ListItem>
  //         ))}
  //       </List>

  //       <Button variant="contained" color="primary">
  //         {buttonText}
  //       </Button>
  //     </Box>

  //     {/* RIGHT SIDE: Simple Carousel */}
  //     <Box>
  //       <ServicesGallery data={gallery} isMobile={isMobile} />
  //       {/* Title & description below image */}
  //       <Typography
  //         variant="subtitle1"
  //         fontWeight={600}
  //         sx={{ textAlign: "center", mt: 1 }}
  //       >
  //         Lorem Ipsum{/* {currentImage.title} */}
  //       </Typography>
  //       <Typography
  //         variant="body2"
  //         color="text.secondary"
  //         sx={{ textAlign: "center" }}
  //       >
  //         Lorem Ipsum{/* {currentImage.description} */}
  //       </Typography>
  //     </Box>
  //   </Box>
  // );
};

export default CremacionInfo;
