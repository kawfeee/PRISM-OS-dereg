import React, { useState } from "react";
import "../styles/CommentSection.css";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import submitIcon from "../assets/svg/submit.svg";

const CommentSection = () => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("Comment submitted:", comment);
    // Add your submit logic here
  };

  return (
    <div className="comment-section">
      {/* Comment Field */}
      <div className="comment-field">
        <label className="comment-label">
          Comment (Max 500 Chars)
        </label>
        <textarea
          className="comment-textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength={500}
          placeholder="xxx-xxx-xx-xxx-x"
          rows="4"
        />
      </div>

      {/* Footer with View Policies and Submit button */}
      <div className="comment-footer">
        <div className="view-policies">
          <DescriptionOutlinedIcon className="policies-icon" />
          <span className="policies-text">View Policies</span>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          <img src={submitIcon} alt="Submit" className="submit-icon" />
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
