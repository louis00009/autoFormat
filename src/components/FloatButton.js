import React, { useState } from "react";
import { message, Tooltip, FloatButton } from "antd";

const FloatButtonComponent = () => {
  const [ComponentInfoGeneralR, setComponentInfoGeneralR] = useState("");

  const handleFloatButton2Click = () => {
    const textArea = document.createElement("textarea");
    textArea.value = ComponentInfoGeneralR.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      message.success("Copied to clipboard! Check Email status pls!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  const handleFloatButton3Click = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "Tran-dam other";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      message.success("Copied Tran-dam other to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  const handleFloatButton4Click = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "AUTOROLA MANAGEMENT FEE";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      message.success("Copied AUTOROLA MANAGEMENT FEE to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <FloatButton.Group shape="circle" style={{ right: 24 }}>
      <Tooltip title="Copy TRAN-DAM OTHER">
        <FloatButton 
          style={{ marginBottom: 25 }}
          icon="O" 
          onClick={handleFloatButton3Click} 
        />
      </Tooltip>

      <Tooltip title="Copy AUTOROLA MANAGEMENT FEE">
        <FloatButton 
          style={{ marginBottom: 25 }}
          icon="M" 
          onClick={handleFloatButton4Click} 
        />
      </Tooltip>

      {/* <Tooltip title="Copy desc for SO">
        <FloatButton 
          icon="R" 
          onClick={handleFloatButton2Click} 
        />
      </Tooltip> */}
    </FloatButton.Group>
  );
};

export default FloatButtonComponent;