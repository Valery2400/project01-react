import "./style.css";
import Button from "../Button/Button";

function Feedback() {
  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">0</div>
          <Button name="LIKE" />
        </div>
        <div className="like-dislike-container">
       
          <Button name="DISLIKE" />
          <div className="result">0</div>
        </div>
      </div>
      <Button name="RESET RESULTS" />
    </div>
  );
}

export default Feedback;