import React, { useState, useEffect } from "react";
import TabComponent from "../src/components/formater";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentWOVR from "./components/ComponentWOVR";
import ComponentPayout from "./components/ComponentPayout";
import TranDamDrawer from "./components/TranDamDrawer";
import "./App.css";

import { Col, Row, Button } from "antd";

// import { useState } from 'react';
// import { CopyToClipboard } from "react-copy-to-clipboard";

const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

const FormatAComponent = () => {
  const [studentLastName, setStudentLastName] = useState("35.75");
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [studentInfo, setStudentInfo] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // const info = `Hi, my name is ${studentLastName}, my last name is ${studentFirstName}, this is my student id: ${studentId}`;
    const info = `***Raised YARD PHOTO $${formatPrice(
      studentLastName
    )}, to vendor ${studentFirstName}***, SO: ${studentId} ***invoice not sent will SD after vehicle sold***  `;

    setStudentInfo(info);
  }, [studentLastName, studentFirstName, studentId]);

  const handleReset = () => {
    setStudentLastName("35.75");
    setStudentFirstName("");
    setStudentId("");
  };

  const unsecuredCopyToClipboard = () => {
    if (/[a-zA-Z]/.test(studentId)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
    }
    if (studentFirstName.slice(0, 3).toLowerCase() === "aau") {
      const textArea = document.createElement("textarea");
      textArea.value = studentInfo;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } else {
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
  };

  // Main copyToClipboard function
  const copyToClipboard = (content) => {
    if (window.isSecureContext && navigator.clipboard) {
      // Use standard clipboard API
      navigator.clipboard.writeText(content).then(() => {
        setIsCopied(true);
      });
    } else {
      // Fallback method
      unsecuredCopyToClipboard(content);
    }
  };
  //added to fix

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <div className="container">
      <h2>Invoice Note Helper</h2>
      <div className="text-container">
        <p
          style={{
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : studentInfo}
        </p>
      </div>
      <b style={{ color: "red" }}>
        Note! default prices for Photo is 35.75(32.5 put this in system) NO
        Autorola Fee Apply!
      </b>{" "}
      <br></br>
      <br></br>
      {/* <div className="input-container">
        <div>
          <label>YARD PHOTO Prices:</label>
          <input
            type="number"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Raised Invoice Number:</label>
          <input
            type="text"
            placeholder="Raised Invoice Number"
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Sales Order Number:</label>
          <input
            type="text"
            placeholder="Sales Order Number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>

        
        <br></br>



        <div className="button-container">
          <button onClick={handleReset}>Reset</button>
          {/* <button onClick={handleCopy}>Copy</button> */}
      {/* <button onClick={unsecuredCopyToClipboard}>Copy</button>
        </div>

      </div> */}
      <div className="input-container">
        <div className="input-row">
          <label>YARD PHOTO Prices:</label>
          <input
            type="number"
            value={studentLastName}
            onChange={(e) => setStudentLastName(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Raised Invoice Number:</label>
          <input
            type="text"
            placeholder="Raised Invoice Number"
            value={studentFirstName}
            onChange={(e) => setStudentFirstName(e.target.value)}
          />
        </div>
        <div className="input-row">
          <label>Sales Order Number:</label>
          <input
            type="text"
            placeholder="Sales Order Number"
            value={studentId}
            maxLength="6"
            pattern="\d*"
            onChange={(e) => setStudentId(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button onClick={handleReset}>Reset</button>
          <button onClick={unsecuredCopyToClipboard}>Copy</button>
        </div>
      </div>
    </div>
  );
};

const FormatBComponent = () => {
  const [courseName, setCourseName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseTutors, setCourseTutors] = useState("");

  // 以此类推,为B,C,D格式定义对应的组件

  return <div>{/* 为B格式定义相应的输入框和按钮 */}</div>;
};

const formats = [
  { name: "Towing Company", content: <ComponentB /> },
  { name: "Photo Note", content: <FormatAComponent /> },
  { name: "MD", content: <ComponentC /> },
  { name: "WOVR", content: <ComponentWOVR /> },
  { name: "Payout", content: <ComponentPayout /> },
  // { name: "Payout", content: <ComponentPayout /> },
];

const App = () => {
  return (
    <div>
      <TabComponent formats={formats} />
      {/* <ComponentB /> */}
      <TranDamDrawer style={{ marginBottom: '0px' }} />
      
    </div>
  );
};

export default App;
