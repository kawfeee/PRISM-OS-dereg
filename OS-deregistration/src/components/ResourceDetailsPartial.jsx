import React from "react";
import "../styles/ResourceDetails.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const ResourceDetailsPartial = () => {
  return (
    <div className="resource-details-section">
      <h2 className="resource-details-title">Resource Details</h2>

      <div className="resource-details-form">
        {/* Name of the OS Resource */}
        <div className="form-field name-field">
          <label className="form-label">
            Name of the OS Resource <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <select className="form-select" defaultValue="Meenakshi Bakiyekar(23523554)">
              <option value="Meenakshi Bakiyekar(23523554)">Meenakshi Bakiyekar(23523554)</option>
              <option value="Ravi Kumar(12345678)">Ravi Kumar(12345678)</option>
              <option value="Anita Singh(87654321)">Anita Singh(87654321)</option>
            </select>
            <ArrowDropDownIcon className="input-icon" />
          </div>
        </div>

        {/* Date of Joining */}
        <div className="form-field date-field">
          <label className="form-label">
            Date of Joining <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              value="24-Sep-2024"
              readOnly
            />
            <CalendarTodayIcon className="input-icon" />
          </div>
        </div>

        {/* Partner Company */}
        <div className="form-field date-field">
          <label className="form-label">
            Partner Company <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              value="Harman Connected Services"
              readOnly
            />
            <CalendarTodayIcon className="input-icon" />
          </div>
        </div>

        {/* Group */}
        <div className="form-field date-field">
          <label className="form-label">
            Group <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              value="Information System & AI Tools"
              readOnly
            />
            <CalendarTodayIcon className="input-icon" />
          </div>
        </div>

        {/* Projects */}
        <div className="form-field projects-field">
          <label className="form-label">
            Projects <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <select className="form-select" defaultValue="IoT_Advanced_Features_(SRI_B)_Y2025">
              <option value="IoT_Advanced_Features_(SRI_B)_Y2025">IoT_Advanced_Features_(SRI_B)_Y2025</option>
              <option value="IoT_Core_Platform_Y2025">IoT_Core_Platform_Y2025</option>
              <option value="Cloud_Migration_Project_Y2024">Cloud_Migration_Project_Y2024</option>
            </select>
            <ArrowDropDownIcon className="input-icon" />
          </div>
        </div>

        {/* Skillset(s) worked on by Resource at SRIB */}
        <div className="form-field skillset-field">
          <label className="form-label">
            Skillset(s) worked on by Resource at SRIB
          </label>
          <textarea
            className="form-textarea"
            value="JS, HTML, CSS & responsive web page development"
            readOnly
            rows="3"
          />
        </div>

        {/* Date of Relieving */}
        <div className="form-field date-relieving-field date-field">
          <label className="form-label">
            Date of Relieving <span className="required">*</span>
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              className="form-input"
              value="24-Sep-2024"
              readOnly
            />
            <CalendarTodayIcon className="input-icon" />
          </div>
        </div>

        {/* Recommended For Further Deployment */}
        <div className="form-field full-width-field">
          <label className="form-label recommended-label">Recommended For Further Deployment?</label>
          <div className="radio-group-horizontal">
            <label className="radio-option">
              <input
                type="radio"
                name="deployment"
                value="Yes"
                defaultChecked
              />
              <span className="radio-label">Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="deployment"
                value="No"
              />
              <span className="radio-label">No</span>
            </label>
          </div>
        </div>

        {/* Reason */}
        <div className="form-field full-width-field">
          <label className="form-label">Reason</label>
          <div className="radio-group-grid">
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Completion of Task Assigned"
                defaultChecked
              />
              <span className="radio-label">Completion of Task Assigned</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Cost Optimization"
              />
              <span className="radio-label">Cost Optimization</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Poor Performance of Resource"
              />
              <span className="radio-label">Poor Performance of Resource</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Project completion / Termination"
              />
              <span className="radio-label">Project completion / Termination</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Replace with SRIB Resource"
              />
              <span className="radio-label">Replace with SRIB Resource</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="reason"
                value="Resource Attrition"
              />
              <span className="radio-label">Resource Attrition</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetailsPartial;
