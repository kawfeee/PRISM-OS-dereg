import React, { useState } from "react";
import "../styles/ResourceDetails.css";
import "../styles/CommentSection.css";
import "../styles/Page4Content.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import approveIcon from "../assets/svg/approve.svg";
import transferIcon from "../assets/svg/transfer.svg";

const Page4Content = () => {
  const [additionalInfo, setAdditionalInfo] = useState("");
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
    <div className="page4-content-wrapper">
      {/* GA Clearance Section */}
      <div className="page4-ga-clearance-section">
        <h3 className="page4-section-title">GA Clearance</h3>
        
        <div className="page4-clearance-grid">
          {/* Keys Returned */}
          <div className="page4-clearance-item">
            <label className="page4-clearance-label">Keys Returned</label>
            <div className="page4-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="keysReturned"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="keysReturned"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
            </div>
          </div>

          {/* Gym */}
          <div className="page4-clearance-item">
            <label className="page4-clearance-label">Gym</label>
            <div className="page4-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="gym"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="gym"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="gym"
                  value="NA"
                />
                <span className="radio-label">NA</span>
              </label>
            </div>
          </div>

          {/* Spike Buster Returned */}
          <div className="page4-clearance-item">
            <label className="page4-clearance-label">Spike Buster Returned</label>
            <div className="page4-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="spikeBuster"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="spikeBuster"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="spikeBuster"
                  value="NA"
                />
                <span className="radio-label">NA</span>
              </label>
            </div>
          </div>

          {/* Official Mobile SIM Card/s Returned */}
          <div className="page4-clearance-item">
            <label className="page4-clearance-label">Official Mobile SIM Card/s Returned</label>
            <div className="page4-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="simCard"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="simCard"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="simCard"
                  value="NA"
                />
                <span className="radio-label">NA</span>
              </label>
            </div>
          </div>

          {/* Transport Clearance */}
          <div className="page4-clearance-item">
            <label className="page4-clearance-label">Transport Clearance</label>
            <div className="page4-radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="transport"
                  value="Yes"
                  defaultChecked
                />
                <span className="radio-label">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="transport"
                  value="No"
                />
                <span className="radio-label">No</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="transport"
                  value="NA"
                />
                <span className="radio-label">NA</span>
              </label>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="page4-additional-info">
          <label className="page4-info-label">Additional Information</label>
          <textarea
            className="page4-info-textarea"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="3"
          />
        </div>
      </div>

      {/* Comment Section */}
      <div className="page4-comment-section">
        <div className="page4-comment-field">
          <label className="page4-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="page4-comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="4"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="page4-action-buttons">
        <button 
          onClick={handleApprove}
          className="page4-approve-button"
        >
          <img src={approveIcon} alt="Approve" className="page4-button-icon" />
        </button>
      </div>

      {/* Transfer Workflow Section */}
      <div 
        onClick={handleTransferWorkflow}
        className="page4-transfer-workflow"
      >
        <div className="page4-transfer-workflow-left">
          <img src={transferIcon} alt="Transfer" className="page4-transfer-workflow-icon" />
          <span className="page4-transfer-workflow-text">
            Transfer Workflow
          </span>
        </div>
        <ArrowForwardIosIcon className="page4-transfer-workflow-arrow" />
      </div>

      {/* View Policies */}
      <div 
        onClick={handleViewPolicies}
        className="page4-view-policies"
      >
        <DescriptionOutlinedIcon className="page4-view-policies-icon" />
        <span className="page4-view-policies-text">
          View Policies
        </span>
      </div>
    </div>
  );
};

export default Page4Content;
