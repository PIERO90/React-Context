import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import { Following } from "./views/Following";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/following" element={<Following />} />
      </Routes>
    </div>
  );
};
export default App;
