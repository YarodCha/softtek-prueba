import "./AppFooter.css";

export const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__container container-max-width">
        <div className="app-footer__logo">
          <img
            className="hide-for-mobile"
            src="/logo_dark_v.png"
            alt="logo rimac"
          />
          <img
            className="hide-for-desktop"
            src="/logo_dark_h.png"
            alt="logo rimac"
          />
        </div>
        <span className="app-footer__copyright">
          &copy; 2024 RIMAC Seguros y Reaseguros.
        </span>
      </div>
    </footer>
  );
};
