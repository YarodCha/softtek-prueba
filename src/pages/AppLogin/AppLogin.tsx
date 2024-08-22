import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData, schema } from "./schema";
import { useAuthentication } from "../../hooks/useAuthentication";

import "./AppLogin.css";

export const AppLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { login } = useAuthentication();

  const onSubmit = async (data: LoginFormData) => {
    await login(data);
  };

  return (
    <main className="login">
      <div className="login__container container-max-width">
        <aside className="login__left hide-for-mobile">
          <div>
            <img
              className="login__left-image"
              src="/portada_login.png"
              alt="portada"
            />
          </div>
        </aside>
        <aside className="login__right">
          <div>
            <div className="login__header">
              <div className="login__header--mobile">
                <div>
                  <span className="tag">Seguro Salud Flexible</span>
                  <h1 className="login__title">Creado para ti y tu familia</h1>
                </div>
                <img
                  className="hide-for-desktop"
                  src="/portada_login_mobile.png"
                  alt="portada mobile"
                />
              </div>
              <hr className="hide-for-desktop" />
              <p className="login__description">
                Tu eliges cuánto pagar. Ingresa tus datos, cotiza y recibe
                nuestra asesoría. 100% online.
              </p>
            </div>
            <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="input-select">
                  <select id="document" {...register("documentType")}>
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Nro. de documento"
                    {...register("documentNumber")}
                  />
                </div>
                <p className="form-error">{errors.documentNumber?.message}</p>
              </div>
              <div className="login__cellphone">
                <input
                  type="text"
                  placeholder="Celular"
                  {...register("cellphone")}
                />
                <p className="form-error">{errors.cellphone?.message}</p>
              </div>
              <div
                className={`login__checkbox ${
                  errors.ppCheck ? "form-control-invalid" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="privacy_policy"
                  {...register("ppCheck")}
                />
                <label htmlFor="privacy_policy">
                  Acepto la Política de Privacidad
                </label>
              </div>
              <div
                className={`login__checkbox ${
                  errors.ccpCheck ? "form-control-invalid" : ""
                }`}
              >
                <input
                  type="checkbox"
                  id="commercial_communication_policy"
                  {...register("ccpCheck")}
                />
                <label htmlFor="commercial_communication_policy">
                  Acepto la Política Comunicaciones Comerciales
                </label>
              </div>
              <a className="login__privacy_policy" href="">
                Aplican Términos y Condiciones
              </a>
              <div>
                <button type="submit" className="login__submit">
                  Cotiza aqui
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
      <img
        src="./blur-asset.png"
        className="login__img-blur-right hide-for-mobile"
      ></img>
      <img
        src="./blur-asset1.png"
        className="login__img-blur-right hide-for-desktop"
      ></img>
      <img
        src="./blur-asset-left.png"
        className="login__img-blur-left hide-for-mobile"
      ></img>
      <img
        src="./blur-asset-left2.png"
        className="login__img-blur-left hide-for-desktop"
      ></img>
    </main>
  );
};
