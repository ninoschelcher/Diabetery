import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Arrow from "../components/Arrow";

import EmojiVerySad from "../assets/emojis/0-2.svg";
import EmojiSad from "../assets/emojis/2-4.svg";
import EmojiContent from "../assets/emojis/4-6.svg";
import EmojiHappy from "../assets/emojis/6-8.svg";
import EmojiVeryHappy from "../assets/emojis/8-10.svg";

const formValues = {
  id: "",
  bloodsugar: "",
  dateAdded: "",
  timeAdded: "",
  carbs: "",
  insuline: "",
  extrainfo: "",
  emotion: "",
};

const NewEntry = () => {
  const [values, setValues] = useState(formValues);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const entryId = Math.floor(Math.random() * 1000);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const time = addZero(today.getHours()) + ":" + addZero(today.getMinutes());

    today = dd + ". " + mm + ". " + yyyy;

    values.dateAdded = today;
    values.timeAdded = time;
    values.id = Math.floor(Math.random() * 1000);

    localStorage.setItem(entryId, JSON.stringify(values));
    navigate("/");
  };

  const addZero = (time) => {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  };

  return (
    <div className="page-container max-w-sm m-auto  bg-white font-inter rounded shadow-xl">
      <div>
        <div className="border-b p-6">
          <Link to="/">
            <Arrow type="left" />
          </Link>
          <h1 className="font-bold text-3xl text-black mt-4">Nieuw Dagboek Item</h1>
        </div>
        <div className="p-6">
          <form>
            <h2 className="font-bold text-lightgrey mb-3"> algemene informatie</h2>
            <div className="flex justify-between mb-2">
              <label className="text-grey font-bold text-sm flex-grow" htmlFor="bloodsugar">
                Huidig Bloedsuiker:
              </label>
              <input
                type="number"
                placeholder="mmol/L"
                min="1"
                max="25"
                name="bloodsugar"
                id="bloodsugar"
                className="w-1/4 border-b text-center font-bold text-lightgrey border-greytrans pl-3 mr-8 placeholder-opacity-50"
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <div className="flex justify-between mb-3">
              <label className="text-grey font-bold text-sm" htmlFor="carbs">
                Gegeten Koolhydraten:
              </label>
              <input
                type="number"
                placeholder="gram"
                name="carbs"
                id="carbs"
                className="w-1/4 border-b font-bold text-center text-lightgrey border-greytrans pl-3 mr-8 placeholder-opacity-50"
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <div className="flex justify-between">
              <label className="text-grey font-bold text-sm" htmlFor="insuline">
                Toegebrachte Insuline
              </label>
              <input
                type="number"
                placeholder="units"
                name="insuline"
                id="insuline"
                className="w-1/4 border-b font-bold text-center border-greytrans text-lightgrey pl-3 mr-8 placeholder-opacity-50"
                onChange={(e) => handleOnChange(e)}
                required
              />
            </div>
            <h2 className="font-bold text-lightgrey mt-4"> hoe voel je je?</h2>
            <div className="flex justify-between my-3">
              <div>
                <input
                  type="radio"
                  name="emotion"
                  value="verysad"
                  id="verysad"
                  className="checked:border-black hidden"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <label htmlFor="verysad">
                  <img className="w-14" src={EmojiVerySad} alt="verysad"></img>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="emotion"
                  value="sad"
                  id="sad"
                  className="checked:border-black hidden"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <label htmlFor="sad">
                  <img className="w-14" src={EmojiSad} alt="sad"></img>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="emotion"
                  value="content"
                  id="content"
                  className="checked:border-black hidden"
                  onChange={(e) => handleOnChange(e)}
                  required
                />
                <label htmlFor="content">
                  <img className="w-14" src={EmojiContent} alt="content"></img>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="emotion"
                  value="happy"
                  id="happy"
                  className="checked:border-black hidden"
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="happy">
                  <img className="w-14" src={EmojiHappy} alt="happy"></img>
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="emotion"
                  value="veryhappy"
                  id="veryhappy"
                  className="checked:border-black hidden"
                  onChange={(e) => handleOnChange(e)}
                />
                <label htmlFor="veryhappy">
                  <img className="w-14" src={EmojiVeryHappy} alt="veryhappy"></img>
                </label>
              </div>
            </div>
            <textarea
              className="w-full text-xs bg-lightwhite font-bold text-lightgrey border-greytrans border rounded-sm mb-4 pl-2 pt-1 placeholder-lightgrey"
              id="extrainfo"
              name="extrainfo"
              rows="5"
              placeholder="extra informatie"
              value={values.extrainfo}
              onChange={(e) => handleOnChange(e)}
            ></textarea>
          </form>
          <button
            className="w-full font-bold font-inter border py-2 rounded border-bluemid bg-bluelight text-bluedark"
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Item toevoegen aan dagboek.{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
