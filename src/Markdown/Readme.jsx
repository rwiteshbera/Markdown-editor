import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';

const Readme = () => {
  const [createMarkdown, setMarkdown] = useState("");
  return (
    <>
      <div className="center-div">
        <textarea
          className="left-side"
          value={createMarkdown}
          onChange={(event) => setMarkdown(event.target.value)}
        ></textarea>
        <div className="right-side markdown-body">
            <ReactMarkdown>{createMarkdown}</ReactMarkdown>
        </div>

      </div>
    </>
  );
};

export default Readme;
