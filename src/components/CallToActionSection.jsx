import { Link } from "react-router-dom";
import Button from "../components/Button";

const CallToActionSection = ({
  title,
  text,
  buttonOne = {},
  buttonTwo = {},
}) => {
  return (
    <section className="callToAction">
      <div className="container text-center">
        <h2 className="text-white">{title}</h2>
        <p className="text-white">{text}</p>

        <div className="row">
          <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
            {buttonOne.offcanvasId ? (
              <Button
                color="warning"
                padding="p-3"
                type="button"
                offcanvasId={buttonOne.offcanvasId}
              >
                {buttonOne.text}
              </Button>
            ) : (
              <Link to={buttonOne.link}>
                <Button color="warning" padding="p-3" type="button">
                  {buttonOne.text}
                </Button>
              </Link>
            )}
          </div>
          <div className="col-md-6 text-center text-md-start">
            {buttonTwo.offcanvasId ? (
              <Button
                color="outline-light"
                padding="p-3"
                type="button"
                offcanvasId={buttonTwo.offcanvasId}
              >
                {buttonTwo.text}
              </Button>
            ) : (
              <Link to={buttonTwo.link}>
                <Button color="outline-light" padding="p-3" type="button">
                  {buttonTwo.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionSection;
