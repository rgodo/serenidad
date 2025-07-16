// components/services/PlanModal.tsx
import React, { useEffect, useRef, useState } from "react";
import styles from "./PlanModal.module.css";
import { scrollToSection } from "../utils/functions/scroll";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box } from "@mui/material";

interface PlanModalProps {
  open: boolean;
  onClose: () => void;
  plan: any; // Use your proper Plan type here!
  isMobile: boolean;
}

export const PlanModal: React.FC<PlanModalProps> = ({
  open,
  onClose,
  plan,
  isMobile,
}) => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  // Close with Esc
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={isMobile ? styles.modalMobile : styles.modalDesktop}
        ref={ref}
      >
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className={isMobile ? styles.bodyMobile : styles.bodyDesktop}>
          {/* Gallery */}
          <div className={styles.galleryWrap}>
            <Box
              sx={{
                width: "100%",
                aspectRatio: 5 / 6,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                src={plan.gallery[current]}
                className={styles.galleryImg}
                alt={plan.title}
              />
            </Box>
            <div className={styles.galleryDots}>
              {plan.gallery.map((_: string, i: number) => (
                <span
                  key={i}
                  className={current === i ? styles.dotActive : styles.dot}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            {/* Arrows for desktop only */}
            {!isMobile && (
              <>
                <button
                  className={styles.arrow + " " + styles.arrowLeft}
                  onClick={() =>
                    setCurrent(
                      current === 0 ? plan.gallery.length - 1 : current - 1
                    )
                  }
                >
                  <ArrowCircleLeftIcon />
                </button>
                <button
                  className={styles.arrow + " " + styles.arrowRight}
                  onClick={() =>
                    setCurrent((current + 1) % plan.gallery.length)
                  }
                >
                  <ArrowCircleRightIcon />
                </button>
              </>
            )}
          </div>
          {/* Info */}
          <div className={styles.infoWrap}>
            <span className={styles.subtitle}>{plan.subtitle}</span>
            <h2 className={styles.title}>{plan.title}</h2>
            <div className={styles.urnBlock}>
              <b>Descripción de urna:</b> <br />
              <span style={{ fontWeight: 600 }}>
                {plan.urnDescription}
              </span>{" "}
              <br />
              <span style={{ fontWeight: 600 }}>Medidas:</span>{" "}
              {plan.urnMeasures}
            </div>
            <div className={styles.divider} />
            <div>
              <b>Incluye:</b>
              <ul className={styles.includes}>
                {plan.includes.map((item: string, i: number) => (
                  <li
                    key={i}
                    style={
                      plan.boldIncludes && plan.boldIncludes.includes(i)
                        ? { fontWeight: 600 }
                        : {}
                    }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={styles.cta}
              onClick={() => {
                scrollToSection("contacto");
                onClose();
              }}
            >
              ¡Contáctenos Ahora!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
