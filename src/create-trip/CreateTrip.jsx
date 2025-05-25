import { AiOutlineLoading3Quarters } from "react-icons/ai";
import React, { useState } from "react";
import { AI_PROMPT, budgetInfo, noOfPeople } from "@/components/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/Services/AiModal";
import Header from "@/components/custom/Header";
import { db } from "@/Services/fireBase";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [finalData, setFinalData] = useState({
    destination: "",
    noOfDays: 0,
    noOfPeople: "",
    budget: "",
  });

  const mail = useSelector((store)=>store.user.mail);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const processInput = (name, data) => {
    setFinalData({
      ...finalData,
      [name]: data,
    });
  };

  const inputValidate = async () => {
    if(!finalData?.budget||!finalData?.destination||!finalData?.noOfPeople||!finalData?.noOfDays){
      toast("Please fill all the columns!");
    }
    
    console.log(finalData);

    const prompt = AI_PROMPT
    .replace("{location}",finalData.destination)
    .replace("{totalDays}",finalData.noOfDays)
    .replace("{budgetType}",finalData.budget)
    .replace("noOfPerson",finalData.noOfPeople);

    setLoading(true);
    const response = await chatSession.sendMessage(prompt);
    const listOfHotels = response?.response?.candidates[0]?.content?.parts[0]?.text;
    console.log(listOfHotels);
    const json_data = await JSON.parse(listOfHotels);
    console.log(json_data);
    await saveAiData(json_data);
    setLoading(false);
  };

  const saveAiData = async (trip) => {
    setLoading(true);
    const docId = Date.now().toString();
    await setDoc(doc(db, "AiTrip", docId), {
      userSelection : finalData,
      tripData : trip,
      userEmail : mail,
      id : docId
    });
    setLoading(false);
    navigate("/view-trip/"+docId);
  }
  return (
    <div>
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-50 xl:10px px-5 mt-10">
      <h2 className="text-3xl font-bold pb-4">
        Tell us your travel preferences
      </h2>
      <p className="text-gray-500">
        Just provide some basic information, and our trip planner will generate
        a customized intinerary based on your preference
      </p>
      <div>
        <div className=" mt-20 ">
          <h2 className="text-xl font-medium">
            What is your destination choice?
          </h2>
          <input
            type="text"
            className="border border-slate-400 mt-2 w-8/12 rounded-lg h-10 px-2"
            placeholder="Ex. Mumbai"
            onChange={(e) => {
              processInput("destination", e.target.value);
            }}
          />
        </div>
        <div className=" mt-10">
          <h2 className="text-xl font-medium">What is the number of days?</h2>
          <input
            type="text"
            className="border border-slate-400 mt-2 w-8/12 rounded-lg h-10 px-2"
            placeholder="Ex. 3"
            onChange={(e) => {
              processInput("noOfDays", e.target.value);
            }}
          />
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-medium">What is your budet?</h2>
          <div className="flex gap-4 w-8/12 mt-2">
            {budgetInfo.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    finalData.budget == item.name && "border-2 border-gray-950 shadow-lg"
                  } flex flex-col border border-gray-400 w-4/12 rounded-lg p-2 cursor-pointer`}
                  onClick={() => processInput("budget", item.name)}
                >
                  <p>{item.logo}</p>
                  <h2 className="text-xl font-medium">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl font-medium">
            What do you plan on travelling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-4 w-8/12 mt-2">
            {noOfPeople.map((item, index) => (
              <div
                key={index}
                className={`${
                    finalData.noOfPeople == item.name && "border-2 border-gray-950 shadow-lg"
                  } border border-gray-400 rounded-lg p-4 cursor-pointer`}
                onClick={() => processInput("noOfPeople", item.name)}
              >
                <p>{item.logo}</p>
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10 flex justify-end w-8/12" onClick={inputValidate}>
          <Button disabled={loading}>
            {(loading) ? <AiOutlineLoading3Quarters className="animate-spin"/> : "Generate trip"}
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateTrip;
