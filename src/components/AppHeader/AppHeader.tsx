import "./AppHeader.css";

export const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="app-header__container container-max-width">
        <img src="/logo.png" alt="logo rimac" />
        <nav className="app-header__nav">
          <span className="app-header__message hide-for-mobile">
            ¡Compra por este medio!
          </span>
          <a href="tel:+0114116001" className="app-header__mobile">
            <img src="/phone_icon.png" alt="phone icon" />
            <span>(01) 411 6001</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
