// components/services/ServicesPlans.tsx
import React, { useState } from "react";
import styles from "./ServicesPlans.module.css";
import { PlanData } from "../../data/types";
import { PlanModal } from "./PlanModal";
import { useIsMobile } from "./useIsMobile"; // from previous answer

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
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
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
