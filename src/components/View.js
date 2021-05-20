import React from "react";
import "./View.css";

const View = ({ children, popup, onPopupClick }) => {
  return (
    <div className="Canvas">
      <div className="Layout">
        {popup && (
          <div className="Overlay" onClick={onPopupClick}>
            {popup}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default View;
