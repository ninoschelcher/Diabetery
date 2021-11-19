import React from "react";
import { Routes, Route } from "react-router-dom";

import EntryOverview from "./pages/EntryOverview";
import NewEntry from "./pages/NewEntry";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EntryOverview />} />
      <Route path="new-entry" element={<NewEntry />} />
    </Routes>
  );
};

export default App;
