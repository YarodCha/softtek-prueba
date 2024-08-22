import { useNavigate } from "react-router-dom";
import { getRemotePlans } from "../services/user.data";
import { useEffect, useState } from "react";
import { useAuthentication } from "./useAuthentication";
import { Plan, SelectedPlan } from "../interfaces/plan.interface";
import { calculateAge } from "../utils/calculateAge";

export function usePlans() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([]);
  const { getLocalUser } = useAuthentication();
  const age = calculateAge(getLocalUser()?.birthDay || "01-01-2000");
  const filteredPlans = plans.filter((p) => p.age > age);

  useEffect(() => {
    getRemotePlans().then((plans) => setPlans(plans));
  }, []);

  const selectPlan = async (plan: SelectedPlan) => {
    localStorage.setItem("planName", plan.name);
    localStorage.setItem("planPrice", plan.price);
    navigate("/summary");
  };

  return {
    filteredPlans,
    selectPlan,
  };
}
