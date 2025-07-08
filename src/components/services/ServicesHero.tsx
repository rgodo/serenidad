// components/services/ServicesHero.tsx
import React from "react";
import styles from "./ServicesHero.module.css"; // (see below)
import { IconStar, IconUser } from "./Icons";
import { HeroData } from "../../data/types";

type Props = { data: HeroData };

const ICONS: Record<string, React.ReactNode> = {
  star: <IconStar />,
  user: <IconUser />,
};

export const ServicesHero: React.FC<Props> = ({ data }) => (
  <section
    className={styles.hero}
    style={{ backgroundImage: `url(${data.bgImage})` }}
  >
    <div className={styles.content}>
      <h4 style={{ color: "#768837", marginBottom: "5px" }}>{data.title}</h4>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 300,
          marginTop: "10px",
          maxWidth: "250px",
          marginBottom: "5px",
        }}
      >
        {data.subtitle}
      </h1>
      <p
        style={{
          fontFamily: "Assistant, serif",
          borderTop: "solid",
          borderColor: "#E1952D",
          borderWidth: 0.8,
          paddingTop: 15,
          marginTop: 5,
        }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      <ul style={{ padding: 0, marginLeft: 15 }}>
        {data.highlights.map((h, idx) => (
          <li
            key={idx}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              marginBottom: 28,
              listStyle: "none",
              fontFamily: "Assistant, serif",
            }}
          >
            <img
              src={`/icons/${h.icon}.svg`}
              alt=""
              style={{ width: 28, minWidth: 28, marginTop: 3 }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, lineHeight: 1.25 }}>
                {h.text}
              </div>
              <div
                style={{
                  marginTop: 2,
                  fontWeight: 400,
                  color: "#444",
                  fontSize: 16,
                }}
              >
                {h.subtext}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a
        href={data.cta.link}
        className={styles.cta}
        style={{ fontFamily: "Assistant, serif" }}
      >
        {data.cta.text}
      </a>
    </div>
  </section>
);
