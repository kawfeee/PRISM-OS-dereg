import React, { useState } from "react";
import "../styles/ResourceDetails.css";
import "../styles/CommentSection.css";
import "../styles/Page2Content.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import rejectIcon from "../assets/svg/reject.svg";
import approveIcon from "../assets/svg/approve.svg";
import transferIcon from "../assets/svg/transfer.svg";

const Page2Content = () => {
  const [comment, setComment] = useState("");

  const handleReject = () => {
    console.log("Reject clicked");
  };

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
    <div className="page2-content-wrapper">
      {/* Rate the Resource Section */}
      <div className="resource-details-section page2-rating-section">
        <div className="resource-details-form">
          <div className="form-field full-width-field">
            <label className="form-label">
              Rate the Resource - <span className="field-sublabel">( * Based on your Experience of working with her/him )</span>
            </label>
            
            {/* Attitude */}
            <div className="rating-section">
              <label className="rating-label">Attitude</label>
              <div className="radio-group-horizontal">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attitude"
                    value="Excellent"
                    defaultChecked
                  />
                  <span className="radio-label">Excellent</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attitude"
                    value="Above Average"
                  />
                  <span className="radio-label">Above Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attitude"
                    value="Average"
                  />
                  <span className="radio-label">Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="attitude"
                    value="Poor"
                  />
                  <span className="radio-label">Poor</span>
                </label>
              </div>
            </div>

            {/* Performance */}
            <div className="rating-section">
              <label className="rating-label">Performance</label>
              <div className="radio-group-horizontal">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="performance"
                    value="Excellent"
                  />
                  <span className="radio-label">Excellent</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="performance"
                    value="Above Average"
                    defaultChecked
                  />
                  <span className="radio-label">Above Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="performance"
                    value="Average"
                  />
                  <span className="radio-label">Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="performance"
                    value="Poor"
                  />
                  <span className="radio-label">Poor</span>
                </label>
              </div>
            </div>

            {/* Technical / Functional Skills */}
            <div className="rating-section">
              <label className="rating-label">Technical / Functional Skills</label>
              <div className="radio-group-horizontal">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="technicalSkills"
                    value="Excellent"
                  />
                  <span className="radio-label">Excellent</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="technicalSkills"
                    value="Above Average"
                  />
                  <span className="radio-label">Above Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="technicalSkills"
                    value="Average"
                    defaultChecked
                  />
                  <span className="radio-label">Average</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="technicalSkills"
                    value="Poor"
                  />
                  <span className="radio-label">Poor</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <div className="page2-comment-section">
        <div className="page2-comment-field">
          <label className="page2-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="page2-comment-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            placeholder="xxx-xxx-xx-xxx-x"
            rows="4"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="page2-action-buttons">
        <button 
          onClick={handleReject}
          className="page2-reject-button"
        >
          <img src={rejectIcon} alt="Reject" className="page2-button-icon" />
        </button>
        <button 
          onClick={handleApprove}
          className="page2-approve-button"
        >
          <img src={approveIcon} alt="Approve" className="page2-button-icon" />
        </button>
      </div>

      {/* Transfer Workflow Section */}
      <div 
        onClick={handleTransferWorkflow}
        className="page2-transfer-workflow"
      >
        <div className="page2-transfer-workflow-left">
          <img src={transferIcon} alt="Transfer" className="page2-transfer-workflow-icon" />
          <span className="page2-transfer-workflow-text">
            Transfer Workflow
          </span>
        </div>
        <ArrowForwardIosIcon className="page2-transfer-workflow-arrow" />
      </div>

      {/* View Policies */}
      <div 
        onClick={handleViewPolicies}
        className="page2-view-policies"
      >
        <DescriptionOutlinedIcon className="page2-view-policies-icon" />
        <span className="page2-view-policies-text">
          View Policies
        </span>
      </div>
    </div>
  );
};

export default Page2Content;
