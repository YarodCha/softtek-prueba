import { useNavigate } from "react-router-dom";
import { getRemoteUser } from "../services/user.data";
import { LoginFormData } from "../pages/AppLogin/schema";

export function useAuthentication() {
  const navigate = useNavigate();

  const login = async (data: LoginFormData) => {
    const user = await getRemoteUser();
    navigate("/plans");
    localStorage.setItem("documentType", data.documentType);
    localStorage.setItem("documentNumber", data.documentNumber);
    localStorage.setItem("cellphone", data.cellphone);
    localStorage.setItem("userName", user.name);
    localStorage.setItem("userLastname", user.lastName);
    localStorage.setItem("userBirthday", user.birthDay);
  };

  const getLocalUser = () => {
    const name = localStorage.getItem("userName");
    const lastName = localStorage.getItem("userLastname");
    const birthDay = localStorage.getItem("userBirthday");
    const documentType = localStorage.getItem("documentType");
    const documentNumber = localStorage.getItem("documentNumber");
    const cellphone = localStorage.getItem("cellphone");

    if (
      !name ||
      !lastName ||
      !birthDay ||
      !documentType ||
      !documentNumber ||
      !cellphone
    ) {
      return;
    }

    return {
      name,
      lastName,
      birthDay,
      documentType,
      documentNumber,
      cellphone,
    };
  };

  const logOut = () => {
    navigate("/", { replace: true });
    localStorage.clear();
  };

  return {
    login,
    getLocalUser,
    logOut,
  };
}
