import "./App.css";
import { AppFooter } from "./components/AppFooter/AppFooter";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { AppLogin } from "./pages/AppLogin/AppLogin";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppLogin />
      <AppFooter />
    </div>
  );
}

export default App;
