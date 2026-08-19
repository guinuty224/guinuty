import { useState } from "react";
import Button from "./Button";
const SignUpForm = () => {
  return (
    <form className="bg-light p-2 rounded">
      <div className="mb-3">
        <label htmlFor="userPhone" className="form-label fw-bold textMainGreen">
          📱 Tel
        </label>
        <input
          type="tel"
          className="form-control "
          id="userPhone"
          aria-describedby="userPhoneHelp"
          placeholder="Votre numero de tel..."
        />

        <div id="userPhoneHelp" className="form-text">
          Vous recevrez un code pour vous creer votre compte et le finaliser.
        </div>
      </div>

      <Button width={100} pBottom={1} pTop={1} type="button">
        📲 Envoyer un code
      </Button>
    </form>
  );
};
export default SignUpForm;
