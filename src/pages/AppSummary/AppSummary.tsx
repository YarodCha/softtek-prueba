import { useNavigate } from "react-router-dom";
import { AppTopBar } from "../../components/AppTopBar/AppTopBar";
import { useAuthentication } from "../../hooks/useAuthentication";
import { getSelectedPlan } from "../../utils/getSelectedPlan";

import "./AppSummary.css";

export function AppSummary() {
  const { getLocalUser } = useAuthentication();
  const navigate = useNavigate();
  const user = getLocalUser();
  const selectedPlan = getSelectedPlan();

  if (!user || !selectedPlan) {
    navigate(-1);
    return null;
  }

  return (
    <div className="app-summary">
      <AppTopBar step={2} />
      <div className="app-summary__container container-max-width">
        <button onClick={() => navigate(-1)}>Volver</button>
        <div className="app-summary__card">
          <h1>Resumen del seguro</h1>
          <div className="app-summary__person">
            <span>Precios calculados para:</span>
            <span>
              {user.name} {user.lastName}
            </span>
          </div>
          <hr />
          <div className="app-summary__payment">
            <b>Responsable de pago</b>
            <span>
              {user.documentType}: {user.documentNumber}
            </span>
            <span>Celular: {user.cellphone}</span>
          </div>
          <div className="app-summary__plan">
            <b>Plan elegido</b>
            <span>{selectedPlan.name}</span>
            <span>Costo del Plan: ${selectedPlan.price} al mes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
