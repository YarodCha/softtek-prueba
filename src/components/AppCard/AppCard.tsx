import "./AppCard.css";

interface AppCardProps {
  img: string;
  title: string;
  description: string;
  active: boolean;
}

export const AppCard = ({ img, title, description, active }: AppCardProps) => {
  return (
    <div className={`app-card ${active ? "app-card--active" : ""}`}>
      <img src={img} alt="icon" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};
