// import "./css/Home.css";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Home() {
  return (
    <>
      <div id="mainFlex">
        <div className=" absolute top-[40%] left-[60%]">
          <div className="w-full h-full rainbow flex -z-0">
            <div className="h-[250px] w-[450px] bg-blue-600  ">hi</div>
          </div>
        </div>
        <div className="mainTitle z-10">
          <span id="gradCol">One Step Solution</span>
          <span>for immediate</span>
          <span>health concerns.</span>
          <div className="gsButton">
            <ScrollLink
              to="/sign"
              id="signUp"
              style={{
                cursor: "pointer",
              }}
            >
              <Link to="sign">
                <span className="yay">Get Started</span>
              </Link>
            </ScrollLink>
            <div className="backBlue"></div>
          </div>
        </div>
        <div id="heroImg" className="z-10">
          <img src="/coupleDoc.svg"></img>
        </div>
      </div>

      <div className="masterFeature" id="features">
        <div className="featureHead">
          <span>
            <h2>FEATURES WE PROVIDE</h2>
          </span>
          <span>
            <h1>Symptom relief at home</h1>
          </span>
          <span>Our AI powered by LLM helps in variety of ailments.</span>
        </div>
        <div className="embCard">
          <span className="featImg">
            <img src="/food.svg"></img>
          </span>
          <span className="featTit">Remedies Recommendation</span>
          <span className="featDes">
            We provide immediate aid recommendations to ease symptoms of a wide
            variety of diseases
          </span>
        </div>
        <div className="embCard">
          <span className="featImg">
            <img src="/bot.svg"></img>
          </span>
          <span className="featTit">Interactive Chatbot</span>
          <span className="featDes">
            Solve your queries by interacting with our bot.
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;
