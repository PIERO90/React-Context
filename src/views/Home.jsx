import { useContext } from "react";
import Gallery from "../components/Gallery";
import { FollowContext } from "../context/ContextProvider";

const Home = () => {
  return (
    <div className="App">
      <h1>Usuarios Foro</h1>
      <Gallery />
    </div>
  );
};
export default Home;
