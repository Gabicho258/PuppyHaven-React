import React from "react";
import { QualificationComponent } from "../QualificationComponent/QualificationComponent";
import "./_Comment.scss";

export const Comment = ({ author, qualification, comment }) => {
  return (
    <div className="commentContainer">
      <div className="commentContainer__top">
        <h3 className="commentContainer__top-author">{author}</h3>
        <QualificationComponent
          className="commentContainer__top-qualification"
          readOnly={true}
          qualification={qualification}
        />
      </div>
      <hr className="commentContainer__divider" />
      <p className="commentContainer__comment">{comment}</p>
    </div>
  );
};
