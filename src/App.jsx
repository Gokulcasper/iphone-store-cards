import axios from "axios";
import { useEffect, useState } from "react";
import CreateMobile from "./components/CreateMobile";
import Mobiles from "./components/Mobiles";

export default function App() {
  const [mobiles, setMobiles] = useState([]);

  const getAllMobiles = async () => {
    let allMobiles = await axios.get("http://localhost:5001/mobiles");
    console.log("all Mobiles:", allMobiles);

    setMobiles(allMobiles.data.data);
  };

  useEffect(() => {
    getAllMobiles();
  }, []);

  return (
    <div className="flex space-y-7 flex-col items-start justify-start w-full h-screen bg-slate-300">
      <h3 className="text-center text-3xl w-full font-bold">Create Mobile</h3>
      <CreateMobile />
      <div className="flex w-full ">
        {mobiles.map((mobile) => (
          <Mobiles key={mobile._id} mobileDetails={mobile} />
        ))}
      </div>
    </div>
  );
}
