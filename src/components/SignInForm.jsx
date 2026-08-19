import { useState } from "react";
import Button from "./Button";
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const revertSignInOption = () => {
    setShowPassword((currentState) => !currentState);
  };
  return (
    <form className="bg-light p-2 rounded">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label fw-bold textMainGreen">
          📧 Email/📱 Tel
        </label>
        <input
          type="text"
          className="form-control fw-bold textMainGreen"
          id="userId"
          aria-describedby="userIdHelp"
          placeholder="Votre addresse email ou numero de tel..."
        />
        {!showPassword && (
          <div id="userIdHelp" className="form-text">
            Vous recevrez un code pour vous connecter
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
            <input type="password" className="form-control" id="userPassword" />
          </div>
          <Button width={100} pBottom={1} pTop={1} type="button">
            🔐 Se connecter
          </Button>
        </>
      ) : (
        <Button width={100} pBottom={1} pTop={1} type="button">
          📲 Envoyer un code
        </Button>
      )}

      <hr />
      {showPassword ? (
        <div className="text-end">
          <Button
            color="outline-secondary"
            pBottom={1}
            pTop={1}
            pStart={3}
            pEnd={3}
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
            pBottom={1}
            pTop={1}
            pStart={3}
            pEnd={3}
            type="button"
            onClick={revertSignInOption}
          >
            🔑 Utiliser mon mot de passe
          </Button>
        </div>
      )}
    </form>
  );
};
export default SignInForm;
