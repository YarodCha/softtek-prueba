import { SelectedPlan } from "../../interfaces/plan.interface";
import "./AppPlan.css";

interface AppCardProps {
  title: string;
  benefits: string[];
  price: number;
  hasDiscount?: boolean;
  isRecommended?: boolean;
  onSelect: (plan: SelectedPlan) => void;
}

export const AppPlan = ({
  title,
  benefits,
  price,
  hasDiscount,
  isRecommended,
  onSelect,
}: AppCardProps) => {
  const calculatedPrice = hasDiscount ? price * 0.95 : price;

  return (
    <div className="app-plan">
      {isRecommended && (
        <span className="app-plan__tag tag">Plan recomendado</span>
      )}
      <div>
        <div className="app-plan__header">
          <h2 className="app-plan__title">{title}</h2>
          {isRecommended ? (
            <img
              className="app-plan__img"
              src="/IcHospitalLight.png"
              alt="icon"
            />
          ) : (
            <img className="app-plan__img" src="/IcHomeLight.png" alt="icon" />
          )}
        </div>
        <div className="app-plan__price-container">
          <span className="app-plan__price-label">Costo del Plan</span>
          {hasDiscount && (
            <span className="app-plan__discount">${price} antes</span>
          )}
          <span className="app-plan__price">${calculatedPrice} al mes</span>
        </div>
        <hr />
        <ul className="app-plan__benefits">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() =>
          onSelect({ name: title, price: calculatedPrice.toString() })
        }
        className="app-plan__button"
        type="button"
      >
        Seleccionar Plan
      </button>
    </div>
  );
};
