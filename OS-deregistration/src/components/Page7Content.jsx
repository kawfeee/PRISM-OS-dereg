import React, { useState } from "react";
import "../styles/ResourceDetails.css";
import "../styles/CommentSection.css";
import "../styles/Page7Content.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import approveIcon from "../assets/svg/approve.svg";
import transferIcon from "../assets/svg/transfer.svg";

const Page7Content = () => {
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
    <div className="page7-content-wrapper">
      {/* Comment Section */}
      <div className="page7-comment-section">
        <div className="page7-comment-field">
          <label className="page7-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="page7-comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="4"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="page7-action-buttons">
        <button 
          onClick={handleApprove}
          className="page7-approve-button"
        >
          <img src={approveIcon} alt="Approve" className="page7-button-icon" />
        </button>
      </div>

      {/* Transfer Workflow Section */}
      <div 
        onClick={handleTransferWorkflow}
        className="page7-transfer-workflow"
      >
        <div className="page7-transfer-workflow-left">
          <img src={transferIcon} alt="Transfer" className="page7-transfer-workflow-icon" />
          <span className="page7-transfer-workflow-text">
            Transfer Workflow
          </span>
        </div>
        <ArrowForwardIosIcon className="page7-transfer-workflow-arrow" />
      </div>

      {/* View Policies */}
      <div 
        onClick={handleViewPolicies}
        className="page7-view-policies"
      >
        <DescriptionOutlinedIcon className="page7-view-policies-icon" />
        <span className="page7-view-policies-text">
          View Policies
        </span>
      </div>
    </div>
  );
};

export default Page7Content;
