import { useState } from "react";
import Button from "./Button";
import { useNavigation, useActionData } from "react-router-dom";
import { countryCodes } from "../utils/dummyDatas";
import { Form } from "react-router-dom";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData();
  const revertSignInOption = () => {
    setShowPassword((currentState) => !currentState);
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
              required
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
            <Button width={100} padding="px-1" type="submit">
              🔐 Se connecter
            </Button>
          )}
        </>
      ) : (
        <>
          <div className="mb-3">
            <label
              htmlFor="userId"
              className="form-label fw-bold textMainGreen"
            >
              📱 Tel
            </label>
            <input
              type="tel"
              className="form-control fw-bold textMainGreen"
              id="userId"
              name="phone"
              aria-describedby="userIdHelp"
              placeholder="Votre addresse email ou numero de tel..."
              required
            />
            {!showPassword && (
              <div id="userIdHelp" className="form-text">
                Vous recevrez un code pour vous connecter via le{" "}
                <b className="text-danger">+224 625 55 31 73</b>
              </div>
            )}
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
