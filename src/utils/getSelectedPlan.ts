import { SelectedPlan } from "../interfaces/plan.interface";

export const getSelectedPlan = (): SelectedPlan | null => {
  const planName = localStorage.getItem("planName");
  const planPrice = localStorage.getItem("planPrice");

  if (!planName || !planPrice) {
    return null;
  }

  return {
    name: planName,
    price: planPrice,
  };
};
