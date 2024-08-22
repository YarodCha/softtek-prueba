import "./AppTopBar.css";

interface AppTopBarProps {
  step: number;
}

export const AppTopBar = ({ step }: AppTopBarProps) => {
  return (
    <div className="app-top-bar">
      <div
        className={`app-top-bar__item ${
          step === 1 ? "app-top-bar__item--active" : ""
        }`}
      >
        <span className="app-top-bar__number">1</span>
        <span>Planes y coberturas</span>
      </div>
      <span className="app-top-bar__separator"></span>
      <div
        className={`app-top-bar__item ${
          step === 2 ? "app-top-bar__item--active" : ""
        }`}
      >
        <span className="app-top-bar__number">2</span>
        <span>Resumen</span>
      </div>
    </div>
  );
};
