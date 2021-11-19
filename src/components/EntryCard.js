import { useState } from "react";
import { BsTrash } from "react-icons/bs";

import Arrow from "../components/Arrow";

import BloodGlucose from "../assets/emojis/bloodglucose.svg";
import Carbs from "../assets/emojis/carbs.svg";
import Insulin from "../assets/emojis/insulin.svg";
import EmojiVerySad from "../assets/emojis/0-2.svg";
import EmojiSad from "../assets/emojis/2-4.svg";
import EmojiContent from "../assets/emojis/4-6.svg";
import EmojiHappy from "../assets/emojis/6-8.svg";
import EmojiVeryHappy from "../assets/emojis/8-10.svg";

const EntryCard = ({ item }) => {
  const [showExtraInfo, setShowExtraInfo] = useState(false);

  const deleteDiaryItem = (id) => {
    localStorage.removeItem(id);
    window.location.reload();
  };

  return (
    <ul className="flex items-center">
      <div className="flex items-center w-full">
        <li className="bg-white shadow-lg font-inter mb-4 rounded w-full border-lightwhite border-2">
          <div className="border-b border-graytrans">
            <div className="px-4 py-2 flex justify-between">
              <div className="text-left">
                <p className="font-bold text-sm text-black">{item.dateAdded}</p>
                <p className=" text-lightgrey font-semibold text-xs">
                  Toegevoegd om {item.timeAdded}
                </p>
              </div>
              <img
                className="w-10"
                alt="feeling"
                src={
                  item.emotion === "verysad"
                    ? EmojiVerySad
                    : item.emotion === "sad"
                    ? EmojiSad
                    : item.emotion === "content"
                    ? EmojiContent
                    : item.emotion === "happy"
                    ? EmojiHappy
                    : item.emotion === "veryhappy"
                    ? EmojiVeryHappy
                    : ""
                }
              ></img>
            </div>
          </div>
          <div className="px-4 py-5 border-b border-graytrans">
            <ul className="flex flex-row justify-between">
              <li className="flex items-center">
                <img className="mr-1" src={BloodGlucose} alt="bloodglucose" />
                <p className="font-semibold text-sm">{item.bloodsugar} mmol/L</p>
              </li>
              <li className="flex items-center">
                <img className="mr-1" src={Insulin} alt="insulin" />
                <p className="font-semibold text-sm">{item.insuline} units</p>
              </li>
              <li className="flex items-center">
                <img className="mr-1" src={Carbs} alt="carbs" />
                <p className="font-semibold text-sm">{item.carbs} gram </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between p-4">
              <p className="text-sm font-semibold">Meer informatie</p>
              {!showExtraInfo ? (
                <Arrow
                  type="right"
                  onClick={() => {
                    setShowExtraInfo(true);
                  }}
                />
              ) : (
                <Arrow
                  type="bottom"
                  onClick={() => {
                    setShowExtraInfo(false);
                  }}
                />
              )}
            </div>
            {showExtraInfo && (
              <div className="px-4 pb-4">
                <p className="text-sm">{item.extrainfo}</p>
                <div
                  className="flex items-center mt-4 cursor-pointer"
                  onClick={() => deleteDiaryItem(item.localId)}
                >
                  <BsTrash className="mr-1 text-red-600 text-xs" />
                  <p className="text-xs text-red-600"> Verwijder Item</p>
                </div>
              </div>
            )}
          </div>
        </li>
      </div>
    </ul>
  );
};

export default EntryCard;
