import React, { useState } from "react";

function TestGenerator() {
  const [notes, setNotes] = useState("");
  const [test, setTest] = useState("");

  const generateTest = async () => {
    // Simulate AI test generation (replace with actual API call)
    const generatedTest = `Sample Test based on notes: ${notes}`;
    setTest(generatedTest);
  };

  return (
    <div>
      <h3>AI Test Generator</h3>
      <textarea
        placeholder="Paste your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={generateTest}>Generate Test</button>
      <div>
        <h4>Generated Test</h4>
        <pre>{test}</pre>
      </div>
    </div>
  );
}

export default TestGenerator;
