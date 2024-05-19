import React from "react";

const EmailButton = () => {
  const handleClick = () => {
    const recipient = "aaa@gmail.com";
    const subject = encodeURIComponent("固定的邮件主题");
    const body = encodeURIComponent("这是邮件的正文部分");

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return <button onClick={handleClick}>Sent Email</button>;
};

export default EmailButton;
