import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./_WalkerProfile.scss";

export const WalkerProfile = () => {
  const name = "Gabriel Steven Machicao Quispe";
  const likes = 18;
  const dislikes = 7;
  const walkerInfo = [
    18,
    "Estudiante",
    "Jose Luis Bustamante y Rivero",
    "Novato",
  ];
  /*
  const walkerInfo = {
    age: 18,
    occupation: "Estudiante",
    district: "Jose Luis Bustamante y Rivero",
    rank: "Novato",
  };
  */
  const walkerAvailability = {
    monday: "15:00 - 18:00",
    tuesday: "",
    wednesday: "14:00 - 17:00",
    thursday: "",
    friday: "",
    saturday: "12:00 - 1:30",
    sunday: "",
  };
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <>
      <NavBar />
      <section>
        <div className="left">
          <div className="left__user">
            <Avatar
              className="left__user-avatar"
              alt={name}
              src="/static/images/avatar/1.jpg"
              variant="rounded"
              sx={{ width: 200, height: 200 }}
            />
            <div className="left__user-info">
              <h3 className="left__user-info-name">{name}</h3>
              <ul className="left__user-info-list">
                {walkerInfo.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="left__divider"></hr>
          <div className="left__description">
            <h4 className="left__description-title">Descripción</h4>
            <p className="left__description-des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              cursus, odio ac hendrerit rutrum, velit nisi finibus justo, sit
              amet sollicitudin nisl est at urna. Mauris dapibus justo a
              consequat feugiat. Nulla a magna luctus, lacinia leo id, hendrerit
              nulla. Sed eu ultrices ligula. Nullam laoreet, metus id commodo
              viverra, est libero feugiat neque, nec cursus turpis urna vitae
              erat. Sed in velit risus. Etiam eget augue vitae risus malesuada
              viverra. Aliquam id augue ac mauris sagittis semper non a elit.
            </p>
          </div>
          <div className="left__buttons">
            <Button variant="contained">Retroceder</Button>
            <Button variant="contained">Hacer una cita</Button>
            <Button variant="contained">Ver Comentarios</Button>
          </div>
        </div>
        <div className="right">
          <table className="right__userAvailability">
            <thead>
              <tr>
                <th>Dias disponibles</th>
                <th>Horarios disponibles</th>
              </tr>
            </thead>
            <tbody>
              {days.map((item) => {
                if (walkerAvailability[item] === "") return <></>;
                return (
                  <tr>
                    <td>{item}</td>
                    <td>{walkerAvailability[item]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="rigth__userCalification">
            <div className="rigth__userCalification-likes">
              <ThumbUpIcon />
              <p>{likes}</p>
              <p>Me gusta</p>
            </div>
            <div className="rigth__userCalification-dislikes">
              <ThumbDownIcon />
              <p>{dislikes}</p>
              <p>No me gusta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
