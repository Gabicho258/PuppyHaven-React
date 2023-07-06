import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogin } from "./Pages/UserLogin/UserLogin";
import { UserRegister } from "./Pages/UserRegister/UserRegister";
import { WalkerProfile } from "./Pages/WalkerProfile/WalkerProfile";
import { GiveUpPetAdoption } from "./Pages/GiveUpPetAdoption/GiveUpPetAdoption";
import { HomePageUser } from "./Pages/HomePageUser/HomePageUser";
import { HomeAdoptPet } from "./Pages/HomeAdoptPet/HomeAdoptPet";
import { Test } from "./Pages/Test/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/walker-profile" element={<WalkerProfile />} />
        <Route
          path="/give-up-a-pet-for-adoption"
          element={<GiveUpPetAdoption />}
        />
        <Route path="/home-page-user" element={<HomePageUser />} />
        <Route path="/adopt-pet" element={<HomeAdoptPet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
