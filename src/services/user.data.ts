import axios from "axios";
import { Plan } from "../interfaces/plan.interface";
import { User } from "../interfaces/user.interface";

export const getRemoteUser = async (): Promise<User> => {
  const { data } = await axios.get<User>(
    `https://rimac-front-end-challenge.netlify.app/api/user.json`
  );
  return data;
};

export const getRemotePlans = async (): Promise<Plan[]> => {
  const { data } = await axios.get<{ list: Plan[] }>(
    `https://rimac-front-end-challenge.netlify.app/api/plans.json`
  );
  return data.list;
};
