import { useNavigation, useActionData } from "react-router-dom";

import Button from "./Button";
import { Form } from "react-router-dom";
const SignUpForm = () => {
  const navigation = useNavigation();
  const actionData = useActionData();

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

          <Button width={100} padding="px-1" type="submit">
            🔐 Se connecter
          </Button>
        </>
      ) : (
        <>
          {" "}
          <div className="mb-3">
            <label
              htmlFor="userFullname"
              className="form-label fw-bold textMainGreen"
            >
              👤 Nom complet
            </label>
            <input
              type="text"
              className="form-control "
              id="userFullname"
              name="fullname"
              aria-describedby="userFullnameHelp"
              placeholder="Votre nom complet ..."
              required
            />

            {/* <div id="userFullnameHelp" className="form-text">
          Vous recevrez un code pour vous creer votre compte et le finaliser.
        </div> */}
          </div>
          <div class="mb-3">
            <label
              htmlFor="userRole"
              className="form-label fw-bold textMainGreen"
            >
              Je suis...
            </label>
            <select
              className="form-select"
              aria-label="Activer ou desactiver la connexion par code OTP..."
              id="userRole"
              name="role"
              required
            >
              <option value="entrepreneur"> Entrepreneur</option>
              <option value="investisseur"> Investisseur</option>
            </select>
          </div>
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
              required
            />

            <div id="userPhoneHelp" className="form-text">
              Vous recevrez un code pour vous creer votre compte et le
              finaliser.
            </div>
          </div>
          {navigation.state === "submitting" ? (
            <Button width={100} padding="px-1" disabled="true">
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
        </>
      )}
    </Form>
  );
};
export default SignUpForm;
