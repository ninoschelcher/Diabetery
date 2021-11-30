import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Entries from "../components/Entries";

const EntryOverview = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const diaryEntries = [];
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.getItem(localStorage.key(i));
      if (item) {
        const diaryItem = JSON.parse(item);
        diaryItem.localId = parseInt(localStorage.key(i));
        diaryEntries.push(diaryItem);
      }
    }
    const finalEntries = diaryEntries.sort((a, b) => (a.timeAdded < b.timeAdded) ? -1 : ((a.timeAdded > b.timeAdded) ? 1 : 0))
    console.log(finalEntries);
    setEntries(finalEntries);
  }, []);

  return (
    <div className="page-container max-w-sm m-auto bg-white font-inter rounded shadow-xl max-h-5/6 mt-10">
      <div>
        <div className="border-b p-6 bg-lightwhite rounded">
          <h1 className="font-bold text-3xl text-black">Dagboek Overzicht</h1>
          <h2 className="font-bold text-grey mt-2">{entries.length} items in dagboek</h2>
        </div>
        <div className="p-6">
          <Link to="/new-entry">
            <button className="w-full font-bold font-inter border py-2 rounded border-greenmid bg-greenlight text-greendark mb-4">
              Nieuw item toevoegen.
            </button>
          </Link>
          <div className="h-80 overflow-y-auto">
            {entries.length >= 1 ? (
              <Entries entries={entries} />
            ) : (
              <p className="flex font-bold mt-12 w-2/3 m-auto text-black text-center">Er staan nog geen items in je dagboek, voeg er snel één toe.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryOverview;
