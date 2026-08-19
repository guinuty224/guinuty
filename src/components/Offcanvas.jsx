import { createPortal } from "react-dom";
import Button from "./Button";
import SignInForm from "./SignInForm";

const Offcanvas = ({
  id,
  title,
  children,
  noHorizontalPadding = false,
  user,
}) => {
  return (
    <>
      {createPortal(
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id={id}
          aria-labelledby={`${id}Label`}
          style={{ backgroundColor: "#f5f5f4" }}
        >
          <div className="offcanvas-header">
            {user ? (
              <div className="row">
                <div className="col-3">
                  <span className="fs-1 border p-1 rounded bg-light">👤</span>
                </div>
                <div className="col-9">
                  <h5
                    className="offcanvas-title fw-bold textMainGreen ps-2"
                    id={`${id}Label`}
                  >
                    {user.fullname}
                  </h5>
                  <small className="ps-2">{user.type}</small>
                </div>
              </div>
            ) : (
              <h5
                className="offcanvas-title fw-bold textMainGreen"
                id={`${id}Label`}
              >
                {title}
              </h5>
            )}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div
            className={` offcanvas-body ${noHorizontalPadding && "ps-0 pe-0"}`}
          >
            {children}
          </div>
        </div>,
        document.getElementById("portal-root"),
      )}
    </>
  );
};

export default Offcanvas;
