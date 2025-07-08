import React from "react";

export const getHexOffsets = (
  isMobile: boolean,
  row: any[],
  j: number,
  HEX_SIZE: number
) => {
  let mt = null,
    mr = null,
    ml = null;
  // Offsets for desktop 3-column rows
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
  return { mt, mr, ml };
};

export const getRowMarginBottom = (i: number, rows: any[], HEX_SIZE: number) =>
  i < rows.length - 1 ? `-${HEX_SIZE * 0.99}px` : 0;

export const getRowMarginLeft = (
  isMobile: boolean,
  row: any[],
  i: number,
  HEX_SIZE: number
) => (!isMobile && row.length === 3 && i % 2 === 1 ? `${HEX_SIZE / 500}px` : 0);

export const hexImageOrEmpty = (
  cell: string | null,
  i: number,
  j: number,
  emptyHexSrc: string = "/hex-empty.svg"
) =>
  cell ? (
    <img
      src={cell}
      alt={`Hex ${i + 1}-${j + 1}`}
      style={{ width: "100%", height: "auto" }}
    />
  ) : (
    <img
      src={emptyHexSrc}
      alt={`Hex ${i + 1}-${j + 1}`}
      style={{ width: "100%", height: "100%" }}
    />
  );
