import React from "react";
import "../styles/ClearanceInformation.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ClearanceInformation = () => {
  return (
    <div className="clearance-information-section">
      <div className="clearance-content">
        <span className="clearance-text">Clearance Information</span>
        <ArrowForwardIosIcon className="clearance-arrow" />
      </div>
    </div>
  );
};

export default ClearanceInformation;
