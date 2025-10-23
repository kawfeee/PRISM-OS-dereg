import React from "react";
import "../styles/ResourceDetails.css";
import "../styles/Page8Content.css";

const Page8Content = () => {
  return (
    <div className="page8-content-wrapper">
      <div className="page8-rate-section">
        <h3 className="page8-rate-title">
          Rate the Resource - <span className="page8-rate-subtitle">(* Based on your Experience of working with her/him )</span>
        </h3>

        {/* Attitude */}
        <div className="page8-rating-row">
          <label className="page8-rating-label">Attitude</label>
          <div className="page8-rating-options">
            <label className="radio-option">
              <input type="radio" name="attitude" value="Excellent" defaultChecked />
              <span className="radio-label">Excellent</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="attitude" value="Above Average" />
              <span className="radio-label">Above Average</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="attitude" value="Average" />
              <span className="radio-label">Average</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="attitude" value="Poor" />
              <span className="radio-label">Poor</span>
            </label>
          </div>
        </div>

        {/* Performance */}
        <div className="page8-rating-row">
          <label className="page8-rating-label">Performance</label>
          <div className="page8-rating-options">
            <label className="radio-option">
              <input type="radio" name="performance" value="Excellent" />
              <span className="radio-label">Excellent</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="performance" value="Above Average" defaultChecked />
              <span className="radio-label">Above Average</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="performance" value="Average" />
              <span className="radio-label">Average</span>
            </label>
          </div>
        </div>

        {/* Technical / Functional Skills */}
        <div className="page8-rating-row">
          <label className="page8-rating-label">Technical / Functional Skills</label>
          <div className="page8-rating-options">
            <label className="radio-option">
              <input type="radio" name="technicalSkills" value="Excellent" />
              <span className="radio-label">Excellent</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="technicalSkills" value="Above Average" />
              <span className="radio-label">Above Average</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="technicalSkills" value="Average" defaultChecked />
              <span className="radio-label">Average</span>
            </label>
          </div>
        </div>

        {/* GHR Confirmation Checkbox */}
        <div className="page8-ghr-confirmation">
          <label className="page8-checkbox-container">
            <input type="checkbox" defaultChecked className="page8-checkbox-input" />
            <span className="page8-checkbox-checkmark"></span>
            <span className="page8-checkbox-label">
              I Confirm that the resource name has been removed from the GHR
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Page8Content;
