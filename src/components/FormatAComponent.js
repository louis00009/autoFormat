import React, { useState } from "react";

const FormatAComponent = () => {
  const [studentLastName, setStudentLastName] = useState("");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentInfo, setStudentInfo] = useState("");

  const unsecuredCopyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = studentInfo;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setIsCopied(true);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const handleConfirm = () => {
    const info = `***Raised YARD PHOTO $${studentLastName}, to vendor ${studentFirstName}***, SO: ${studentId} ***invoice not sent will SD after vehicle sold***  `;

    // const info = `Student information: ${studentLastName}, ${studentFirstName}, ${studentId}`;

    setStudentInfo(info);
  };

  const handleReset = () => {
    setStudentLastName("");
    setStudentFirstName("");
    setStudentId("");
    setStudentInfo("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(studentInfo);
  };

  return (
    <div>
      <p>{studentInfo}</p>
      <input
        type="text"
        placeholder="YARD PHOTO Prices"
        value={studentLastName}
        onChange={(e) => setStudentLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="raisedInvoiceNumber"
        value={studentFirstName}
        onChange={(e) => setStudentFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="salesOrderNumber"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      {/* <button onClick={handleConfirm}>Confirm</button> */}
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleCopy}>Copy</button> */}
      <button onClick={unsecuredCopyToClipboard}>Copy</button>
      
      <button onClick={unsecuredCopyToClipboard}>Copy(Invoice Sent)</button>
    </div>
  );
};

export default FormatAComponent;
