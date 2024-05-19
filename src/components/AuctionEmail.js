import React from "react";

const EmailButton = () => {
  const handleClick = () => {
    const recipient = "aaa@gmail.com";
    const subject = encodeURIComponent("固定的邮件主题");
    const body = encodeURIComponent(`
    <div>
ZHANBO LIU
<b>Business Analyst & Data Administrator</b>

<img src="public\companylogo.png"><b>Australia</b>
201, 12-14 Cato Street,
Hawthorn East. Victoria 3123
 
Tel: +61 3 9020 0820
Email: zbl@autorola.com.au
Web: www.autorola.com.au

</div>
    `);

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return <button onClick={handleClick}>Sent Email</button>;
};

export default EmailButton;
