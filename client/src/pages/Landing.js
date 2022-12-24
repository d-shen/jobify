import main from "../assets/images/main-alternative.svg";
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const { user } = useAppContext();

  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        {/* info */}
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              I'm baby beard plaid vegan austin raclette. YOLO squid DIY,
              taxidermy vibecession kogi distillery green juice tattooed
              humblebrag godard. Pug salvia blue bottle XOXO. Franzen bushwick
              put a bird on it, offal quinoa freegan adaptogen hammock tilde
              authentic keffiyeh praxis keytar.
            </p>
            <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
