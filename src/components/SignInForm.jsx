import { useState } from "react";
import Button from "./Button";
import { useNavigation, useActionData } from "react-router-dom";
import { countryCodes } from "../utils/dummyDatas";
import { Form } from "react-router-dom";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState({
    countryCode: "+224",
    phoneNumber: "",
  });
  const navigation = useNavigation();
  const actionData = useActionData();
  const revertSignInOption = () => {
    setShowPassword((currentState) => !currentState);
  };
  const onPhoneChange = (e) => {
    const { name, value } = e.target;
    setPhone((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  return (
    <Form method="POST" className="bg-light p-2 rounded">
      {actionData?.phone ? (
        <>
          <div className="mb-3">
            <label
              htmlFor="userPhone"
              className="form-label fw-bold textMainGreen"
            >
              📱 Tel
            </label>
            <input
              type="tel"
              className="form-control "
              id="userPhone"
              name="phone"
              aria-describedby="userPhoneHelp"
              placeholder="Votre numero de tel..."
              readOnly={true}
              value={actionData.phone || ""}
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="userOTP"
              className="form-label fw-bold textMainGreen"
            >
              📲 Code OTP
            </label>
            <input
              type="number"
              className="form-control "
              id="userOTP"
              name="otp"
              aria-describedby="userOtpHelp"
              placeholder="Votre code OTP..."
              defaultValue={""}
            />

            <div id="userOtpHelp" className="form-text">
              Veuillez saisir le code OTP que vous avez recu pour vous
              connecter. Via le <b className="text-danger">+224 625 55 31 73</b>
            </div>
          </div>

          {navigation.state === "submitting" ? (
            <Button width={100} padding="px-1" type="button" disabled={true}>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status"> 🔐 Verification...</span>
            </Button>
          ) : (
            <>
              <Button width={100} padding="px-1" type="submit">
                🔐 Se connecter
              </Button>
              <hr />
              <Button
                color="outline-dark"
                width={100}
                padding="px-1"
                name="request"
                value="reset"
              >
                📱 Modifier le tel
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <input
            name="phone"
            value={phone.countryCode + phone.phoneNumber}
            hidden
          />
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label fw-semibold">
              📱 Tel
            </label>

            {/* Input Group Bootstrap */}
            <div className="input-group">
              {/* Select Indicatif Pays */}
              <select
                className="form-select bg-light text-secondary"
                style={{ maxWidth: "120px" }}
                name="countryCode"
                aria-label="Indicatif pays"
                value={phone.countryCode}
                onChange={onPhoneChange}
                required
              >
                {countryCodes.map((code) => (
                  <option key={code.label} value={code.code}>
                    {code.label}
                  </option>
                ))}
              </select>

              {/* Champ Numéro de Téléphone */}
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Votre numero de telephone"
                value={phone.phoneNumber}
                onChange={onPhoneChange}
                required
              />
            </div>
          </div>
          {showPassword ? (
            <>
              <div className="mb-3">
                <label
                  htmlFor="userPassword"
                  className="form-label fw-bold textMainGreen"
                >
                  🔑 Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="userPassword"
                  required
                />
              </div>
              {navigation.state === "submitting" ? (
                <Button
                  width={100}
                  padding="px-1"
                  type="button"
                  disabled={true}
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span role="status"> 🔐 Verification...</span>
                </Button>
              ) : (
                <Button width={100} padding="px-1" type="submit">
                  🔐 Se connecter
                </Button>
              )}
            </>
          ) : navigation.state === "submitting" ? (
            <Button width={100} padding="px-1" type="button" disabled={true}>
              <span
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status"> Verification...</span>
            </Button>
          ) : (
            <Button width={100} padding="px-1" type="submit">
              📲 Envoyer un code
            </Button>
          )}

          <hr />
          {showPassword ? (
            <div className="text-end">
              <input hidden name="request" value="signInWithPassword" />
              <Button
                color="outline-secondary"
                padding={"py-1 px-3"}
                type="button"
                onClick={revertSignInOption}
              >
                📲 Utiliser un code
              </Button>
            </div>
          ) : (
            <div className="text-end">
              <input hidden name="request" value="signInWithOtp" />
              <Button
                color="outline-secondary"
                padding={"py-1 px-3"}
                type="button"
                onClick={revertSignInOption}
              >
                🔑 Utiliser mon mot de passe
              </Button>
            </div>
          )}
        </>
      )}
    </Form>
  );
};
export default SignInForm;
