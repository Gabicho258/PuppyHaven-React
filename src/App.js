import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserLogin } from "./Pages/UserLogin/UserLogin";
import { UserRegister } from "./Pages/UserRegister/UserRegister";
import { WalkerProfile } from "./Pages/WalkerProfile/WalkerProfile";
import { GiveUpPetAdoption } from "./Pages/GiveUpPetAdoption/GiveUpPetAdoption";
import { HomePageUser } from "./Pages/HomePageUser/HomePageUser";
import { HomeAdoptPet } from "./Pages/HomeAdoptPet/HomeAdoptPet";

import { Home } from "./Pages/Home/Home";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { AddPet } from "./Pages/AddPet/AddPet";
import { WalkerProfileAccount } from "./Pages/WalkerProfileAccount/WalkerProfileAccount";
import { EditPet } from "./Pages/EditPet/EditPet";
import { ConfirmAdoptPet } from "./Pages/ConfirmAdoptPet/ConfirmAdoptPet";
import { RequestWalk } from "./Pages/RequestWalk/RequestWalk";
import { AdoptTramit } from "./Pages/AdoptTramit/AdoptTramit";
import { MyWalks } from "./Pages/MyWalks/MyWalks";

import { Test } from "./Pages/Test/Test";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />

        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/walker-profile" element={<WalkerProfileAccount />} />
        <Route path="/walker-profile/:id" element={<WalkerProfile />} />
        {/* No se usa */}
        <Route
          path="/give-up-a-pet-for-adoption"
          element={<GiveUpPetAdoption />}
        />
        {/* ///////// */}
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/search-walkers" element={<HomePageUser />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/adopt-pet" element={<HomeAdoptPet />} />

        <Route path="/request-walk" element={<RequestWalk />} />

        <Route path="/adopt-pet-confirm/:id" element={<ConfirmAdoptPet />} />

        <Route path="/edit-pet/:id" element={<EditPet />} />
        <Route path="/adopt-tramit" element={<AdoptTramit />} />
        <Route path="/my-walks" element={<MyWalks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
