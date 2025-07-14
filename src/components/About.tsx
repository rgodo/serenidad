"use client";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import aboutContent from "../data/about.json";
import {
  getHexOffsets,
  getRowMarginBottom,
  getRowMarginLeft,
  hexImageOrEmpty,
} from "./utils/honeycombUtils";
import { scrollToSection } from "./utils/functions/scroll";

const HEX_SIZE_DESKTOP = 220;
const HEX_SIZE_MOBILE = 220;

const honeycombRowsDesktop = [
  ["/about-hex-1.png", "/about-hex-2.png", null],
  ["/about-hex-3.png", "/about-hex-4.png", null],
  [null, null, null],
];

const honeycombRowsMobile = [
  ["/about-hex-1.png", "/about-hex-2.png"],
  ["/about-hex-3.png", "/about-hex-4.png"],
];

function TextContent({ content }: { content: typeof aboutContent }) {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: { xs: "100%", md: "100%" },
        pt: { xs: 0, md: 3 },
        mr: { md: 8 },
        ml: { xs: 0, md: 15 },
        px: { xs: 2, md: 0 },
        zIndex: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily:
            "'Perpetua', 'Palatino Linotype', 'Book Antiqua', Palatino, serif",
          mb: 2,
          color: "#383838",
          fontSize: { xs: "2rem", md: "2.3rem" },
          letterSpacing: "-1.2px",
          paddingBottom: 2,
          borderBottom: "2px solid #E1952D",
        }}
      >
        {content.title}
      </Typography>
      <Typography
        sx={{
          color: "#494949",
          mb: 3,
          fontSize: { xs: "1.07rem", md: "1.13rem" },
          lineHeight: 1.3,
          whiteSpace: "pre-line",
          pl: { xs: 0, md: 0 },
        }}
      >
        {(content.paragraph as any[]).map((part, idx) => (
          <span
            key={idx}
            style={{
              fontWeight: part.fontWeight || 400,
              color: part.color || "#494949",
              fontFamily: part.fontFamily || "'Assistant', serif",
              verticalAlign: part.verticalAlign,
              fontSize: part.fontSize,
              textDecoration: part.textDecoration,
              marginRight: 2,
            }}
          >
            {part.text}
          </span>
        ))}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#8B7669",
          color: "#8B7669",
          background: "#fff",
          fontWeight: 400,
          fontFamily: "'Assistant', Arial, sans-serif",
          fontSize: "0.97rem",
          borderRadius: "4px",
          textTransform: "none",
          px: 3.5,
          py: 1.05,
          boxShadow: "none",
          "&:hover": {
            background: "#f3f3e8",
            borderColor: "#b9b98f",
          },
          mb: 6,
          maxWidth: "100%",
          display: "block",
          mx: { xs: "auto", md: 0 },
        }}
        onClick={() => {
          scrollToSection("locations");
        }}
      >
        <strong>Ver aqui</strong> las parroquias presentes en la región de
        O&#39;Higgins.
      </Button>
    </Box>
  );
}

type HoneycombProps = {
  isMobile: boolean;
};

function Honeycomb({ isMobile }: HoneycombProps) {
  const HEX_SIZE = isMobile ? HEX_SIZE_MOBILE : HEX_SIZE_DESKTOP;
  const rows = isMobile ? honeycombRowsMobile : honeycombRowsDesktop;

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: isMobile ? HEX_SIZE * 2 : HEX_SIZE * 3,
        width: '100%',
        mt: isMobile ? 0 : -7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        mb: 4,
        bgcolor: isMobile? 'white' : 'transparent',
      }}
    >
      {rows.map((row, i) => (
        <Box
          key={`row-${i}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: isMobile && i === 0 ? `-${(HEX_SIZE/2)-20}px`: 0,
            mb: getRowMarginBottom(i, rows, HEX_SIZE),
            ml: getRowMarginLeft(isMobile, row, i, HEX_SIZE),
          }}
        >
          {row.map((cell, j) => {
            const { mt, mr, ml } = getHexOffsets(isMobile, row, j, HEX_SIZE);
            return (
              <Box
                key={`hex-${i}-${j}`}
                sx={{
                  width: HEX_SIZE,
                  height: HEX_SIZE,
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
                {hexImageOrEmpty(cell, i, j)}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}

const About = () => {
  const content = aboutContent;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        py: { xs: 0, md: 3 },
        px: { xs: 0, md: 3 },
        background: "#efefef",
        gap: { xs: 0, md: 0 },
        minHeight: { md: 540 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isMobile ? (
        <>
          <Honeycomb isMobile={isMobile} />
          <TextContent content={content} />
        </>
      ) : (
        <>
          <TextContent content={content} />
          <Honeycomb isMobile={isMobile} />
        </>
      )}
    </Box>
  );
};

export default About;

/*
"use client";

import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import aboutContent from "../data/about.json";

const HEX_SIZE_DESKTOP = 220;
const HEX_SIZE_MOBILE = 220;

const honeycombRowsDesktop = [
  ["/about-hex-1.png", "/about-hex-2.png", null],
  ["/about-hex-3.png", "/about-hex-4.png", null],
  [null, null, null],
];

const honeycombRowsMobile = [
  ["/about-hex-1.png", "/about-hex-2.png"],
  ["/about-hex-3.png", "/about-hex-4.png"],
];

// Hexagon wrapper style
const hexWrapperStyle = (isImage: boolean) => ({
  width: HEX_SIZE_DESKTOP,
  height: HEX_SIZE_DESKTOP,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  position: "relative" as const,
});

// Hexagon mask style
const hexMaskStyle = {
  width: "100%",
  height: "auto",
};

const hexEmptyMaskStyle = {
  width: "100%",
  height: "100%",
};

function TextContent({ content }: { content: typeof aboutContent }) {
  return (
    <Box
      sx={{
        flex: 1,
        maxWidth: { xs: "100%", md: "100%" },
        mr: { md: 2 },
        ml: { xs: 0, md: 2 },
        px: { xs: 2, md: 0 },
        zIndex: 1,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily:
            "'Perpetua', 'Palatino Linotype', 'Book Antiqua', Palatino, serif",
          mb: 2,
          color: "#383838",
          fontSize: { xs: "2rem", md: "2.3rem" },
          letterSpacing: "-1.2px",
        }}
      >
        {content.title}
      </Typography>
      <Typography
        sx={{
          color: "#494949",
          mb: 3,
          fontSize: { xs: "1.07rem", md: "1.13rem" },
          lineHeight: 1.3,
          whiteSpace: "pre-line",
          pl: { xs: 0, md: 0 },
        }}
      >
        {(content.paragraph as any[]).map((part, idx) => (
          <span
            key={idx}
            style={{
              fontWeight: part.fontWeight || 400,
              color: part.color || "#494949",
              fontFamily: part.fontFamily || "'Assistant', Arial, sans-serif",
              verticalAlign: part.verticalAlign,
              fontSize: part.fontSize,
              textDecoration: part.textDecoration,
              marginRight: 2,
            }}
          >
            {part.text}
          </span>
        ))}
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderColor: "#c6c6b0",
          color: "#575544",
          background: "#fff",
          fontWeight: 400,
          fontFamily: "'Assistant', Arial, sans-serif",
          fontSize: "0.97rem",
          borderRadius: "4px",
          textTransform: "none",
          px: 3.5,
          py: 1.05,
          boxShadow: "none",
          "&:hover": {
            background: "#f3f3e8",
            borderColor: "#b9b98f",
          },
          mb: 6,
          maxWidth: "100%",
          display: "block",
          mx: { xs: "auto", md: 0 },
        }}
      >
        {content.ctaText}
      </Button>
    </Box>
  );
}

type HoneycombProps = {
  isMobile: boolean;
};

function Honeycomb({ isMobile }: HoneycombProps) {
  const HEX_SIZE = isMobile ? HEX_SIZE_MOBILE : HEX_SIZE_DESKTOP;
  const rows = isMobile ? honeycombRowsMobile : honeycombRowsDesktop;

  return (
    <Box
      sx={{
        flex: 1,
        minWidth: isMobile ? HEX_SIZE * 2 : HEX_SIZE * 3,
        maxWidth: isMobile ? HEX_SIZE * 2.4 : HEX_SIZE * 3.4,
        mt: isMobile ? 0 : -7,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      {rows.map((row, i) => (
        <Box
          key={`row-${i}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mb: i < rows.length - 1 ? `-${HEX_SIZE * 0.99}px` : 0,
            ml:
              !isMobile && row.length === 3 && i % 2 === 1
                ? `${HEX_SIZE / 500}px`
                : 0,
          }}
        >
          {row.map((cell, j) => {
            // Offsets for desktop (3-column)
            let mt = null,
              mr = null,
              ml = null;
            if (!isMobile && row.length === 3) {
              if (j === 0) {
                mt = HEX_SIZE * 0.11;
                mr = -HEX_SIZE * 0.03;
              }
              if (j === 2) {
                mt = -HEX_SIZE * 0.11;
                ml = -HEX_SIZE * 0.03;
              }
            } else {
              if (j === 0) {
                mt = HEX_SIZE * 0.11;
                mr = -HEX_SIZE * 0.03;
              }
              if (j === 2) {
                mt = -HEX_SIZE * 0.11;
                ml = -HEX_SIZE * 0.03;
              }
            }
            return (
              <Box
                key={`hex-${i}-${j}`}
                sx={{
                  width: HEX_SIZE,
                  height: HEX_SIZE,
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
                  <img
                    src={cell}
                    alt={`Hex ${i + 1}-${j + 1}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                ) : (
                  <img
                    src="/hex-empty.svg"
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

const About = () => {
  const content = aboutContent;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "center", md: "flex-start" },
        justifyContent: "center",
        py: { xs: 0, md: 3 },
        px: { xs: 0, md: 3 },
        background: "#efefef",
        gap: { xs: 6, md: 0 },
        minHeight: { md: 540 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {isMobile ? (
        <>
          <Honeycomb isMobile={isMobile} />
          <TextContent content={content} />
        </>
      ) : (
        <>
          <TextContent content={content} />
          <Honeycomb isMobile={isMobile} />
        </>
      )}
    </Box>
  );
};

export default About;
*/
