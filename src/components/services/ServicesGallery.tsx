"use client";

import React, { useState } from "react";
import styles from "./ServicesGallery.module.css";
import { GalleryData } from "../../data/types";

type Props = { data: GalleryData };

export const ServicesGallery: React.FC<Props> = ({ data }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <img
        src={data.images[index].src}
        alt={data.images[index].alt}
        className={styles.image}
      />
      <div className={styles.controls}>
        <button
          onClick={() =>
            setIndex((prev) => (prev > 0 ? prev - 1 : data.images.length - 1))
          }
          aria-label="Previous"
        >
          ←
        </button>
        <span>{data.buttonText}</span>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % data.images.length)}
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
};
