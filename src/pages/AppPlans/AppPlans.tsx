import { useForm } from "react-hook-form";
import { AppCard } from "../../components/AppCard/AppCard";
import { AppPlan } from "../../components/AppPlan/AppPlan";
import { AppTopBar } from "../../components/AppTopBar/AppTopBar";
import { useAuthentication } from "../../hooks/useAuthentication";
import { usePlans } from "../../hooks/usePlans";

import "./AppPlans.css";

export function AppPlans() {
  const { filteredPlans, selectPlan } = usePlans();
  const { logOut } = useAuthentication();
  const { register, watch } = useForm();

  const selectedOption = watch("price");

  return (
    <div className="app-plans">
      <AppTopBar step={1} />
      <div className="app-plans__container container-max-width">
        <button type="button" onClick={() => logOut()}>
          Volver
        </button>
        <div className="app-plans__info">
          <div>
            <h1 className="app-plans__title">
              Rocío ¿Para quién deseas cotizar?
            </h1>
            <p className="app-plans__description">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>
          <div className="app-plans__selector">
            <div>
              <input
                type="radio"
                value="para-mi"
                id="price1"
                {...register("price")}
                hidden
              />
              <label htmlFor="price1">
                <AppCard
                  title="Para mí"
                  description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
                  img="/IcProtectionLight.png"
                  active={selectedOption === "para-mi"}
                />
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="para-otro"
                id="price2"
                {...register("price")}
                hidden
              />
              <label htmlFor="price2">
                <AppCard
                  title="Para alguien más"
                  description="Realiza una cotización para uno de tus familiares o cualquier persona."
                  img="/IcAddUserLight.png"
                  active={selectedOption === "para-otro"}
                />
              </label>
            </div>
          </div>
        </div>
        {selectedOption && (
          <div className="app-plans__list">
            {filteredPlans.map((fp) => (
              <AppPlan
                key={fp.name}
                title={fp.name}
                price={fp.price}
                benefits={fp.description}
                hasDiscount={selectedOption === "para-otro"}
                isRecommended={fp.name === "Plan en Casa y Clínica"}
                onSelect={(plan) => selectPlan(plan)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
