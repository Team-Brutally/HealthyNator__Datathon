import React, { useState, useEffect } from "react";
import HeaderPostLogin from "../components/HeaderPostLogin";
import Chip from "../components/Chip";

function HealthAI() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

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
    console.log(inputValue);
    const msg = {
      message: inputValue,
      isSender: true,
    };
    setMessages((prevMessages) => [...prevMessages, msg]);

    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem("healthAiMessages", JSON.stringify(messages));
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
    // Add more symptoms here as needed
  ];

  return (
    <div>
      <HeaderPostLogin name="Parth B" />
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
                          className="bg-[#2F8953] text-xl rounded-3xl h-fit max-w-[45%] flex items-start justify-start px-8 py-2.5 break-words self-start bg-operator-message-bg text-black"
                          style={{ borderTopLeftRadius: 0 }}
                        >
                          {msg.message}
                        </div>
                      </div>
                    );
                  } else if (msg.isSender) {
                    return (
                      <div
                        className="bg-[#ECECEC] text-xl rounded-3xl h-fit max-w-[45%] flex items-start justify-start px-8 py-2.5 break-words self-end bg-darkOrange text-black  "
                        style={{ borderTopRightRadius: 0 }}
                      >
                        {msg.message}
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <form
              className="h-[15%] bg-[#fff] rounded-2xl flex gap-x-4 "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter a symptom"
                className="w-[90%] h-full px-8 outline-none rounded-2xl text-2xl text-black"
                onChange={handleInputChange}
                value={inputValue}
              />
              <div className="w-[10%] h-full rounded-xl py-6 px-4 flex justify-center items-center">
                <button className="w-[90%] h-full py-6 bg-[#345B2E] px-4 rounded-2xl">
                  <img
                    src={require("../assets/send-2.svg")}
                    className="h-full w-full "
                    alt=""
                  />
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
