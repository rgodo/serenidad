"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import differencesData from "../data/diferences.json";
import {
  getHexOffsets,
  getRowMarginBottom,
  getRowMarginLeft,
} from "./utils/honeycombUtils";

// (types unchanged)
type HoneycombCell = {
  icon: string;
  title: string;
  highlight: string | null;
} | null;

type DifferencesData = {
  title: (string | { text: string; highlight: boolean })[];
  honeycomb: HoneycombCell[][];
};

// --- Helper: Render the Title with highlighted word(s) ---
function DifferencesTitle({
  titleParts,
}: {
  titleParts: DifferencesData["title"];
}) {
  return (
    <Typography
      sx={{
        color: "#fff",
        fontWeight: 400,
        fontSize: "2.5rem",
        mb: 2,
        lineHeight: 1.15,
        letterSpacing: "0.02em",
        maxWidth: 320,
        position: "relative",
        zIndex: 2,
      }}
    >
      {titleParts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : part.highlight ? (
          <b key={i} style={{ fontWeight: 800 }}>
            {part.text}
          </b>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </Typography>
  );
}

function renderIcon(icon: string) {
  return (
    <Box
      sx={{
        width: 60,
        height: 60,
        justifySelf: 'center'
      }}
    >
      <img
        src={`icons/${icon}.svg`}
        alt={icon}
        style={{ width: 50, height: 50 }}
      />
    </Box>
  );
}

type HoneycombProps = {
  isMobile: boolean;
  renderCell: (cell: any, index: number) => React.ReactNode;
};

function Honeycomb({ isMobile, renderCell }: HoneycombProps) {
  const HEX_SIZE = 220;
  const HEX_SIZE_DESKTOP = 290;
  const honeycombRowsDesktop = differencesData.honeycomb;
  const honeycombRowsMobile = differencesData.honeycombMobile;
  const rows = isMobile ? honeycombRowsMobile : honeycombRowsDesktop;

  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: isMobile ? HEX_SIZE * 2.4 : HEX_SIZE_DESKTOP * 3.4,
        mt: isMobile ? 0 : -1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        maxHeight: '743px',
        overflow: { md: 'hidden' }
      }}
    >
      {rows.map((row, i) => (
        <Box
          key={`row-${i}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mb: getRowMarginBottom(i, rows, isMobile ? HEX_SIZE : HEX_SIZE_DESKTOP),
            ml: getRowMarginLeft(isMobile, row, i, isMobile ? HEX_SIZE : HEX_SIZE_DESKTOP),
            marginTop: {
              xs: i === 0 ? `-${isMobile ? HEX_SIZE : HEX_SIZE_DESKTOP / 2}px`: 0,
              md: i === 0 ? '-80px' :0
            }
          }}
        >
          {row.map((cell, j) => {
            const { mt, mr, ml } = getHexOffsets(isMobile, row, j, isMobile ? HEX_SIZE : HEX_SIZE_DESKTOP);
            return (
              <Box
                key={`hex-${i}-${j}`}
                sx={{
                  width: isMobile? HEX_SIZE: HEX_SIZE_DESKTOP,
                  height: isMobile? HEX_SIZE: HEX_SIZE_DESKTOP,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  mt,
                  mr,
                  ml,
                }}
              >
                {cell ? (
                  renderCell(cell, i * row.length + j)
                ) : (
                  <img
                    src="hex-empty_.svg"
                    alt={`Hex ${i + 1}-${j + 1}`}
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}

function Differences() {
  const backgroundUrl = "differences-background.png"; // Update as needed
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        width: "100%",
        backgroundImage: `url(${backgroundUrl})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: isMobile ? "flex-start" : "center",
        flexDirection: isMobile ? "column" : "row",
        px: isMobile ? 0 : 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: isMobile ? "flex-start" : "start",
          minWidth: 350,
          zIndex: 2,
          alignItems: { xs: "center", md: "end" },
          mt: isMobile ? 10 : -40,
          mb: { xs: '2rem', md: 0 },
          mx: 4,
        }}
      >
        <DifferencesTitle titleParts={differencesData.title} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Honeycomb
          isMobile={isMobile}
          renderCell={(cell) =>
            cell && (
              <Box
                sx={{
                  height: '100%',
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor: "rgba(0, 0, 0, 0.50)",
                  backdropFilter: "blur(4px)",
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  display: 'grid',
                  alignContent: 'center'

                }}
              >
                {renderIcon(cell.icon)}
                <Typography
                  sx={{
                    fontWeight: 200,
                    fontFamily: "Assistant, serif",
                    fontSize: "1rem",
                    mx: 3,
                  }}
                >
                  {cell.title}
                  {cell.highlight && (
                    <span style={{ fontWeight: 800 }}> {cell.highlight}</span>
                  )}
                </Typography>
              </Box>
            )
          }
        />
      </Box>
    </Box>
  );
}

export default Differences;
