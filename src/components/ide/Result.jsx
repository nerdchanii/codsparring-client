import React from 'react';
import { useSelector } from 'react-redux';

// Component: ResultMessage
function ResultMessage(props) {
  const { idx, stdout, stderr, correct, error } = props;

  // return message component
  return (
    <div className="ResultMessage">
      <div className={`result-message-${idx}`}>
        <div className="result-message-title">
          {`case ${idx + 1}:`}
          <span className={`correct ${correct}`}>{`${correct}`}</span>
        </div>
        <div className="result-message-text">{correct ? stdout : stderr || error}</div>
      </div>
    </div>
  );
}

// Component: Result
function Result() {
  const runCodeResult = useSelector((state) => state.code.result);

  if (runCodeResult.length === 0) {
    return null;
  }

  return (
    <div>
      {runCodeResult.map((eachResult, idx) => (
        <ResultMessage
          key={idx}
          idx={idx}
          stdout={eachResult.stdout}
          stderr={eachResult.stderr}
          correct={eachResult.correct}
          error={eachResult.error}
        />
      ))}
    </div>
  );
}

export default Result;
