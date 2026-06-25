import React, { useState } from "react";

function FeedbackCollector() {
  const [feedback, setFeedback] = useState("");
  const [count, setCount] = useState(0);

  const handleFeedback = (type) => {
    setFeedback(type);
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Feedback Collector</h2>

      <button onClick={() => handleFeedback("Good")}>😊 Good</button>
      <button onClick={() => handleFeedback("Average")} style={{ margin: "0 10px" }}>
        😐 Average
      </button>
      <button onClick={() => handleFeedback("Poor")}>😞 Poor</button>

      {feedback && (
        <div style={{ marginTop: "20px" }}>
          <h3>Selected Feedback: {feedback}</h3>

          {feedback === "Good" && (
            <p>Thank you for your positive feedback!</p>
          )}

          {feedback === "Average" && (
            <p>We'll try to improve.</p>
          )}

          {feedback === "Poor" && (
            <p>Sorry for the inconvenience.</p>
          )}

          <h3>Total Feedback Given: {count}</h3>
        </div>
      )}
    </div>
  );
}

export default FeedbackCollector;