// import "./css/Home.css";
import "../css/Home.css";
function Home() {
  return (
    <>
      <div id="mainFlex">
        <div className="mainTitle">
          <span id="gradCol">One Step Solution</span>
          <span>for immediate</span>
          <span>health concerns.</span>
          <div className="gsButton">
            <button>Get Started</button>
            <div className="backBlue"></div>
          </div>
        </div>
        <div id="heroImg">
          <img src="/coupleDoc.svg"></img>
        </div>
      </div>

      <div className="masterFeature" id='features'>
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
