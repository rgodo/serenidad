// components/services/ServicesPlans.tsx
import React, { useState } from "react";
import styles from "./ServicesPlans.module.css";
import { PlanData } from "../../data/types";
import { PlanModal } from "./PlanModal";
import { useIsMobile } from "./useIsMobile"; // from previous answer
import { Typography } from "@mui/material";

type Props = { plans: PlanData[] };

export const ServicesPlans: React.FC<Props> = ({ plans }) => {
  const [openPlan, setOpenPlan] = useState<PlanData | null>(null);
  const isMobile = useIsMobile();

  return (
    <section
      className={styles.plans}
      style={{ fontFamily: "Assistant, serif" }}
    >
      <h2 className={styles.title}>Planes funerarios disponibles</h2>
      <div className={styles.grid}>
        {plans.map((plan, i) => (
          <div className={styles.card} key={i}>
            <img src={plan.image} alt={plan.title} className={styles.image} />
            <Typography
              sx={{
                fontWeight: 700,
                fontFamily: 'Assistant, sans-serif',
                fontSize: '18px',
                textAlign: 'left',
                width: '100%',
                mb: 0
              }}
            >{plan.title}</Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: 'Assistant, sans-serif',
                fontSize: '16px',
                lineHeight: 1,
                textAlign: 'left',
                width: '100%'
              }}
            >{plan.description}</Typography>
            <button className={styles.cta} onClick={() => setOpenPlan(plan)}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
      {openPlan && (
        <PlanModal
          open={!!openPlan}
          onClose={() => setOpenPlan(null)}
          plan={openPlan}
          isMobile={isMobile}
        />
      )}
    </section>
  );
};
