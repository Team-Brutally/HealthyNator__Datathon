import React, { useState, useEffect } from "react";
import HeaderPostLogin from "../components/HeaderPostLogin";
import Chip from "../components/Chip";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelScheduleSendRoundedIcon from "@mui/icons-material/CancelScheduleSendRounded";
import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "../App";

function HealthAI() {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [summary, setSummary] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChipClick = (symptom) => {
    // Handle the click event, you can update the state or perform other actions
    console.log(symptom);
    if (selectedSymptoms.includes(symptom)) {
      // If selected, remove it from the array
      setSelectedSymptoms((prev) => prev.filter((s) => s !== symptom));
    } else {
      // If not selected, add it to the array
      setSelectedSymptoms((prev) => [...prev, symptom]);
    }

    // inputSetter();

    console.log(selectedSymptoms);
  };

  useEffect(() => {
    // Effect to run after the state changes
    setInputValue(
      selectedSymptoms.length > 0
        ? "My symptoms are " + selectedSymptoms.join(", ")
        : ""
    );
  }, [selectedSymptoms]);

  const inputSetter = () => {
    setInputValue(selectedSymptoms.join(", "));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const userObject = JSON.parse(localStorage.getItem("user"));
  const [messages, setMessages] = useState(() => {
    // Fetch messages from local storage on component mount
    const storedMessages = localStorage.getItem("healthAiMessages");
    return storedMessages
      ? JSON.parse(storedMessages)
      : [
          { message: "Hello! How can I help you?", isSender: false },
          { message: "Hi there! I have a question.", isSender: true },
        ];
  });

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    console.log(inputValue);
    const msg = {
      message: inputValue,
      isSender: true,
    };

    setMessages((prevMessages) => [...prevMessages, msg]);

    setInputValue("");
    // fetchDataWithHistory()
    // console.log(inputValue);
    fetchDataWithHistory(inputValue);
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("healthAiMessages", JSON.stringify(messages));
    }, 2000);
  }, [messages]);

  const symptoms = [
    "Cough",
    "Fever",
    "Headache",
    "Fatigue",
    "Shortness of breath",
    "Sore throat",
    "Loss of taste or smell",
    "Muscle or body aches",
    "Chills",
    "Nausea or vomiting",
    "Diarrhea",
    "Runny or stuffy nose",
    "Dry cough",
    "Difficulty breathing",
    "Chest pain",
    "Confusion",
    "Bluish lips or face",
    "Rash",
    "Joint pain",
    "Abdominal pain",
    "Dizziness",
    "Fainting",
    "Loss of Appetite",
    "Vommitting",
    "Whooping Cough",
    "Chest Palpitations",
    "Ear Pain",
    "Neck Pain",
    "Back Pain",
    "Knee Pain",
    "Shoulder Pain",
    "Elbow Pain",
    "Wrist Pain",
    "Ankle Pain",
    "Difficulty Swallowing",
    "Heartburn",
    "Constipation",
    "Forgetfullness",
    "Hazyness",
    "Halucinations",
    "Blurry Vision",
    "Blindness",
    "Deafness",
    "Tinnitus",
    "Vertigo",
    "Numbness",
    "Tingling",
    "Weakness",
    "Frostbite",
    "Sunburn",
    "Skin Mole",
    "Yellow Skin",
    "Yellow Eyes",
    "Red Eyes",
    "Bloody Nose",
    "Heavyness in Head",
    "Pressure behind Eyes",
    "Ear Bleeding",
    "Increased Apettite",
    "Clumsiness",
    "Tooth Pain",
    "Jaw Pain",
    "Depression",
    "Anxiety",
    "Irritative",
    "Swelling",
    "Rashes",
    "Lacerations",
    "Fatigue",
    "Tinted Nails",
    "Brittle Nails",
    // Add more symptoms here as needed
  ];

  const [response, setResponse] = useState(null);

  const fetchDataWithHistory = async (prompt) => {
    try {
      setIsLoading(true);
      console.log(prompt);
      const response = await axios.post("http://localhost:3000/history", {
        prompt,
      });
      console.log(response.data); // Log the response data
      // Handle the response here
      const modelResponse = {
        message: response.data.response,
        isSender: false,
      };
      console.log(modelResponse);
      setMessages((prevMessages) => [...prevMessages, modelResponse]);
    } catch (error) {
      console.error(error); // Log the error
      // Handle the error here
    } finally {
      setIsLoading(false);
    }
  };

  const finalUserObject = userObject
    ? Object.fromEntries(
        Object.entries(userObject).slice(0, -7) // Remove the last 7 fields
      )
    : userDetails;

  console.log(finalUserObject);

  // useEffect(() => {
  //   fetchDataWithHistory("I am having ulcers in my mouth");
  // }
  // , []);
  return (
    <div>
      <HeaderPostLogin name={finalUserObject.name} />
      <div className="w-[100vw] h-[80vh] flex items-center justify-center    mt-10 ">
        <div className="h-full w-[90%] flex gap-x-6 ">
          <div
            style={{ flex: "30%" }}
            className="  h-full w-full  bg-[#222] rounded-2xl px-6 py-10 font-semibold overflow-y-auto"
          >
            <p className="w-[70%] h-[15%] text-4xl border-b">
              Select your symptoms
            </p>
            <div className="max-h-[80%] w-full gap-x-4 gap-y-2  flex flex-wrap py-8  ">
              {symptoms.map((symptom) => (
                <Chip
                  symptom={symptom}
                  onClick={() => handleChipClick(symptom)}
                ></Chip>
              ))}
            </div>
          </div>

          <div
            style={{ flex: "70%" }}
            className=" h-full w-full flex flex-col gap-y-6  "
          >
            <div className="h-[85%] bg-[#222] rounded-2xl">
              <div className="w-[100%] h-[100%] flex flex-col font-inter gap-y-2 overflow-y-auto scrollbar-hidden px-4 py-8">
                {/*This is from receiver  */}

                {messages.map((msg, index) => {
                  if (!msg.isSender) {
                    return (
                      <div
                        className="flex h-fit w-full items-center gap-x-2"
                        key={index}
                      >
                        <div
                          className="bg-[#2F8953] text-xl rounded-3xl h-fit max-w-[45%] flex flex-col items-start justify-start px-8 py-2.5 break-words self-start bg-operator-message-bg text-black"
                          style={{ borderTopLeftRadius: 0 }}
                        >
                          {msg.addLink === true && (
                            <>
                              <h3 className="font-bold">
                                This was the Summary for your symptoms, Pls Take
                                Care
                              </h3>
                              <Link
                                to="/bookdoc"
                                className="text-[#000088]  underline"
                              >
                                Connect to Recommended Doctors
                              </Link>
                            </>
                          )}
                          <ReactMarkdown>{msg.message}</ReactMarkdown>
                        </div>
                      </div>
                    );
                  } else if (msg.isSender) {
                    return (
                      <div
                        className="bg-[#ECECEC] text-xl rounded-3xl h-fit max-w-[45%] flex flex-col items-start justify-start px-8 py-2.5 break-words self-end bg-darkOrange text-black  "
                        style={{ borderTopRightRadius: 0 }}
                      >
                        <ReactMarkdown>{msg.message}</ReactMarkdown>
                      </div>
                    );
                  }
                })}
                {isLoading && (
                  <div className="flex h-fit w-full items-center gap-x-2">
                    <div
                      className="bg-[#2F8953] text-xl rounded-3xl h-fit max-w-[45%] flex flex-col items-start justify-start px-8 py-2.5 break-words self-start bg-operator-message-bg text-black"
                      style={{ borderTopLeftRadius: 0 }}
                    >
                      Loading....
                    </div>
                  </div>
                )}
              </div>
            </div>

            <form
              className="h-[15%] bg-[#fff] rounded-2xl flex gap-x-4 "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter a symptom"
                className="w-[80%] h-full px-8 outline-none rounded-2xl text-2xl text-black"
                onChange={handleInputChange}
                value={inputValue}
              />
              <div className="w-[10%] h-full rounded-xl py-6 px-4 flex justify-center items-center">
                <button
                  className="w-[50%] h-full py-6 ml-5 mr-2 bg-[#eb2929] px-4 rounded-2xl flex items-center justify-center"
                  onClick={() => {
                    setMessages([]);
                    localStorage.removeItem("healthAiMessages");
                  }}
                >
                  <DeleteIcon />
                </button>
                <button
                  type="button"
                  className="w-[90%] h-full py-6 bg-[#FF0404] px-4 rounded-2xl flex justify-center items-center"
                  onClick={async () => {
                    const storedMessages =
                      localStorage.getItem("healthAiMessages");
                    const parsedMessages = JSON.parse(storedMessages);

                    for (let i = 0; i < parsedMessages.length; i++) {
                      if (parsedMessages[i].isSender === false) {
                        setInput(
                          (prev) => prev + parsedMessages[i].message + " "
                        );
                      }
                    }
                    console.log('Hello');
                    console.log(input);

                    try {
                      setIsLoading(true);
                      const response = await axios.post(
                        "http://localhost:3000/history",
                        {
                          prompt: "Give the summary in 5 lines of the data given below without specifying any names, give only the summary "+input,
                          data: input,
                        }
                      );
                      console.log(response.data);

                      setMessages([
                        ...messages,
                        {
                          message: response.data.response,
                          isSender: false,
                          addLink: true,
                        },
                      ]);
                    } catch (e) {
                      console.log(e);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                >
                  <CancelScheduleSendRoundedIcon />
                </button>
              </div>
              <div className="w-[10%] h-full rounded-xl py-6 mr-2 flex justify-center items-center">
                <button className="w-[90%] h-full py-6 bg-[#345B2E] px-4 rounded-2xl flex items-center justify-center">
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthAI;
