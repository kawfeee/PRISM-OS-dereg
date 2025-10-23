import React, { useState } from "react";
import "../styles/ResourceDetails.css";
import "../styles/CommentSection.css";
import "../styles/Page5Content.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import approveIcon from "../assets/svg/approve.svg";
import transferIcon from "../assets/svg/transfer.svg";

const Page5Content = () => {
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
    <div className="page5-content-wrapper">
      {/* Corp Security Section */}
      <div className="page5-corp-security-section">
        <h3 className="page5-section-title">Corp Security</h3>
        
        <div className="page5-security-grid">
          {/* ID Card Returned */}
          <div className="page5-security-item">
            <label className="page5-security-label">ID Card Returned</label>
            <div className="page5-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="idCardReturned"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="idCardReturned"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
            </div>
          </div>

          {/* Security Pledge Doc Submitted */}
          <div className="page5-security-item">
            <label className="page5-security-label">Security Pledge Doc Submitted</label>
            <div className="page5-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="securityPledge"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="securityPledge"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
            </div>
          </div>

          {/* Vehicle Pass */}
          <div className="page5-security-item">
            <label className="page5-security-label">Vehicle Pass</label>
            <div className="page5-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="vehiclePass"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="vehiclePass"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="vehiclePass"
                  value="NA"
                />
                <span className="radio-label">NA</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="page5-comment-section">
        <div className="page5-comment-field">
          <label className="page5-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="page5-comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="4"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="page5-action-buttons">
        <button 
          onClick={handleApprove}
          className="page5-approve-button"
        >
          <img src={approveIcon} alt="Approve" className="page5-button-icon" />
        </button>
      </div>

      {/* Transfer Workflow Section */}
      <div 
        onClick={handleTransferWorkflow}
        className="page5-transfer-workflow"
      >
        <div className="page5-transfer-workflow-left">
          <img src={transferIcon} alt="Transfer" className="page5-transfer-workflow-icon" />
          <span className="page5-transfer-workflow-text">
            Transfer Workflow
          </span>
        </div>
        <ArrowForwardIosIcon className="page5-transfer-workflow-arrow" />
      </div>

      {/* View Policies */}
      <div 
        onClick={handleViewPolicies}
        className="page5-view-policies"
      >
        <DescriptionOutlinedIcon className="page5-view-policies-icon" />
        <span className="page5-view-policies-text">
          View Policies
        </span>
      </div>
    </div>
  );
};

export default Page5Content;
