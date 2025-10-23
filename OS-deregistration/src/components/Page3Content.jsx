import React, { useState } from "react";
import "../styles/ResourceDetails.css";
import "../styles/CommentSection.css";
import "../styles/Page3Content.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import approveIcon from "../assets/svg/approve.svg";
import transferIcon from "../assets/svg/transfer.svg";

const Page3Content = () => {
  const [comment, setComment] = useState("");

  const handleApprove = () => {
    console.log("Approve clicked");
  };

  const handleTransferWorkflow = () => {
    console.log("Transfer Workflow clicked");
  };

  const handleViewPolicies = () => {
    console.log("View Policies clicked");
  };

  return (
    <div className="page3-content-wrapper">
      {/* Comment Section */}
      <div className="page3-comment-section">
        <div className="page3-comment-field">
          <label className="page3-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="page3-comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="4"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="page3-action-buttons">
        <button 
          onClick={handleApprove}
          className="page3-approve-button"
        >
          <img src={approveIcon} alt="Approve" className="page3-button-icon" />
        </button>
      </div>

      {/* Transfer Workflow Section */}
      <div 
        onClick={handleTransferWorkflow}
        className="page3-transfer-workflow"
      >
        <div className="page3-transfer-workflow-left">
          <img src={transferIcon} alt="Transfer" className="page3-transfer-workflow-icon" />
          <span className="page3-transfer-workflow-text">
            Transfer Workflow
          </span>
        </div>
        <ArrowForwardIosIcon className="page3-transfer-workflow-arrow" />
      </div>

      {/* View Policies */}
      <div 
        onClick={handleViewPolicies}
        className="page3-view-policies"
      >
        <DescriptionOutlinedIcon className="page3-view-policies-icon" />
        <span className="page3-view-policies-text">
          View Policies
        </span>
      </div>
    </div>
  );
};

export default Page3Content;
