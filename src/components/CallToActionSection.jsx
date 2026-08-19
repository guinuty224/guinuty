//Change the unique id to an className
import Button from "../components/Button";
const CallToActionSection = ({ title, text, buttonOneText, buttonTwoText }) => {
  return (
    <section className="callToAction">
      <div className="container text-center">
        <h2 className="text-white">{title}</h2>
        <p className="text-white">{text}</p>
        <form role="sign-in-up">
          <div className="row">
            <div className="col-md-6 text-center text-md-end mb-3 mb-md-0">
              <Button color="warning" pStart={3} pEnd={3} pTop={3} pBottom={3}>
                {buttonOneText}
              </Button>
            </div>
            <div className="col-md-6 text-center text-md-start">
              <Button
                color="outline-light"
                pStart={3}
                pEnd={3}
                pTop={3}
                pBottom={3}
              >
                {buttonTwoText}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
export default CallToActionSection;
