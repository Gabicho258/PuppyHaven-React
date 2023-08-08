import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { useState } from "react";
import "./_QualificationComponent.scss";

export const QualificationComponent = ({ readOnly, qualification }) => {
  const [isLiked, setIsLiked] = useState(qualification.isLiked);
  const [isDisliked, setIsDisliked] = useState(qualification.isDisliked);
  return (
    <div className="qualificationComponent">
      {!readOnly ? (
        <div className="qualificationComponent__notReadOnly">
          <ThumbUpIcon
            className="qualificationComponent__notReadOnly-like"
            style={{ color: isLiked ? "#0e9e52" : "black" }}
            value={isLiked}
            onClick={() => {
              setIsLiked(true);
              setIsDisliked(false);
              qualification.isLiked = true;
              qualification.isDisliked = false;
              console.log(qualification);
            }}
          />
          <ThumbDownIcon
            className="qualificationComponent__notReadOnly-dislike"
            style={{ color: isDisliked ? "#699bf7" : "black" }}
            value={isDisliked}
            onClick={() => {
              qualification.isLiked = false;
              qualification.isDisliked = true;
              setIsLiked(false);
              setIsDisliked(true);
              console.log(qualification);
            }}
          />
        </div>
      ) : (
        <div className="qualificationComponent__readOnly">
          <ThumbUpIcon style={{ color: isLiked ? "#0e9e52" : "black" }} />
          <ThumbDownIcon style={{ color: isDisliked ? "#699bf7" : "black" }} />
        </div>
      )}
    </div>
  );
};
