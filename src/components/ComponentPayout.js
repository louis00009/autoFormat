import React, { useState, useEffect } from "react";
import "./ComponentB.css";
import {
  Table,
  Button,
  message,
  Col,
  Row,
  FloatButton,
  Modal,
  Tooltip,
  Radio,
} from "antd";
import SearchComponent from "./SearchComponent";

//for floaticon
import {
  CommentOutlined,
  CustomerServiceOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
// import { FloatButton } from 'antd';

const ComponentB = () => {
  //for invoice 1
  const [payoutPriceWithoutGST, setpayoutPriceWithoutGST] = useState("");
  const [payoutMakeModel, setpayoutMakeModel] = useState("");
  const [payoutRego, setpayoutRego] = useState("");
  const [payoutClaimNo, setpayoutClaimNo] = useState("");
  const [payoutVendor, setpayoutVendor] = useState("");
  const [payoutFrom, setpayoutFrom] = useState("");

  // for invoice 2
  const [payoutInvoiceTwo, setpayoutInvoiceTwo] = useState("");

  //do not touch below
  const [vendorInvoiceNumber, setVendorInvoiceNumber] = useState("");
  const [vendorName, setvendorName] = useState("");
  const [vendorTotalPrice, setVendorTotalPrice] = useState("");
  const [vendorInvoicePurpose, setVendorInvoicePurpose] = useState("Payout");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [raisedInvoiceNumber, setRaisedInvoiceNumber] = useState("");
  const [raisedInvoicePurpose, setRaisedInvoicePurpose] = useState("");
  const [raisedInvoicePrice, setRaisedInvoicePrice] = useState("");
  const [salesOrderNumber, setSalesOrderNumber] = useState("");
  const [componentInfo, setComponentInfo] = useState("");
  const [componentInfo2, setComponentInfo2] = useState("");
  const [componentInfoPO, setComponentInfoPO] = useState("");
  const [componentInfoPO2, setComponentInfoPO2] = useState("");
  const [ComponentInfoGeneralR, setComponentInfoGeneralR] = useState("");

  const [isCopied, setIsCopied] = useState(false);

  //for calculator
  // 计算 vendorTotalPrice(NO GST), Profit(5%) 和 Profit(10%)

  const vendorTotalPriceNoGst = vendorTotalPrice / 1.1;
  const profit5Percent = vendorTotalPriceNoGst * 0.05;
  const profit10Percent = vendorTotalPriceNoGst * 0.1;
  // for new Left hand side
  const payoutTotalPriceNoGst = payoutPriceWithoutGST / 1.1;
  const payoutTotalPriceNoGst2 = payoutInvoiceTwo / 1.1;

  const profit5PercentIN2 = payoutTotalPriceNoGst2 * 0.05;
  const profit10PercentIn2 = payoutTotalPriceNoGst2 * 0.1;

  // default open float icon
  const [groupOpen, setGroupOpen] = useState(true);

  // control the 2000 popup
  const [visible, setVisible] = useState(false);
  const [vendorValue, setVendorValue] = useState("");
  const [options, setOptions] = useState([]);
  const [isA2b, setIsA2b] = useState(false);

  const A2bOptions = [
    {label: 'Yes', value:true},
    {label: 'No', value:false}
  ]
  
  const handleConfirm = () => {
    // Handle confirm logic here
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "Vendor Total Price",
      dataIndex: "vendorTotalPrice",
      key: "vendorTotalPrice",
      render: (value) => (
        <div>
          {value}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "Vendor Total Price (NO GST)",
      dataIndex: "vendorTotalPriceNoGst",
      key: "vendorTotalPriceNoGst",
      render: (value) => (
        <div>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "MarkUp (5%)",
      dataIndex: "profit5Percent",
      key: "profit5Percent",
      render: (value) => (
        <div>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "MarkUp (10%)",
      dataIndex: "profit10Percent",
      key: "profit10Percent",
      render: (value) => (
        <div style={{ color: isA2b ? 'red' : 'black', fontWeight: isA2b ? 'bold' : 'normal' }}>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
  ];

  const columns2 = [
    {
      title: "Invoice-2 Total Price (NO GST)",
      dataIndex: "payoutTotalPriceNoGst2",
      key: "payoutTotalPriceNoGst2",
      render: (value) => (
        <div>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "Invoice-2 MarkUp (5%)",
      dataIndex: "profit5PercentIN2",
      key: "profit5PercentIN2",
      render: (value) => (
        <div>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "Invoice-2 MarkUp (10%)",
      dataIndex: "profit10PercentIn2",
      key: "profit10PercentIn2",
      render: (value) => (
        <div>
          {formatPrice(value)}
          <Button
            onClick={() => {
              // navigator.clipboard.writeText(formatPrice(value));
              const textArea = document.createElement("textarea");
              textArea.value = value;
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              try {
                document.execCommand("copy");
                // setIsCopied(true);
                message.success("Copied to clipboard!");
              } catch (err) {
                console.error("Unable to copy to clipboard", err);
              }
              document.body.removeChild(textArea);
            }}
          >
            Copy
          </Button>
        </div>
      ),
    },
  ];

  // 准备 Table 的数据
  const data = [
    {
      key: "1",
      vendorTotalPrice: vendorTotalPrice,
      vendorTotalPriceNoGst: vendorTotalPriceNoGst.toFixed(2),
      profit5Percent: profit5Percent.toFixed(2),
      profit10Percent: profit10Percent.toFixed(2),
    },
  ];

  // 准备 Table2 的数据
  const data2 = [
    {
      key: "1",
      payoutInvoiceTwo: payoutInvoiceTwo,
      payoutTotalPriceNoGst2: payoutTotalPriceNoGst2.toFixed(2),
      profit5PercentIN2: profit5PercentIN2.toFixed(2),
      profit10PercentIn2: profit10PercentIn2.toFixed(2),
    },
  ];

  //

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const onChange3 = ({ target: { value } }) => {
    // console.log('radio3 checked', value);
    setIsA2b(value);
  };

  // const unsecuredCopyToClipboard = (text) => {
  //   const textArea = document.createElement("textarea");
  //   textArea.value = componentInfo;
  //   document.body.appendChild(textArea);
  //   textArea.focus();
  //   textArea.select();
  //   try {
  //     document.execCommand("copy");
  //     setIsCopied(true);
  //   } catch (err) {
  //     console.error("Unable to copy to clipboard", err);
  //   }
  //   document.body.removeChild(textArea);
  //   setTimeout(() => {
  //     setIsCopied(false);
  //   }, 2000);
  // };

  // email notification
  const vendorNameConditions = [
    payoutVendor.toLowerCase() === "comcover",
    payoutVendor.toLowerCase() === "car rental",
    payoutVendor.toLowerCase() === "cri",
    payoutVendor.toLowerCase() === "car rental insurence",
    payoutVendor.toLowerCase() === "rentsure",
    payoutVendor.toLowerCase() === "recoversure",
    payoutVendor.toLowerCase() === "dkg fleet insurance company",
    payoutVendor.toLowerCase() === "dkg fleet",
    payoutVendor.toLowerCase() === "dkg",
    payoutVendor.toLowerCase() === "fuse fleet underwriting pty ltd",
    payoutVendor.toLowerCase() === "fuse fleet",
    payoutVendor.toLowerCase() === "fuse",
  ];

  const unsecuredCopyToClipboard = () => {
    if (purchaseOrderNumber.slice(0, 3).toLowerCase() === "kin") {
      console.log("Po number is correct");
    } else {
      alert("Wrong PO number, Start from 'Kin'.");
      return;
    }
    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
    }
    if (Number(raisedInvoicePrice) >= 2000) {
      // message.warning("Please Sent email,Change email subject!");
      setVisible(true);
    }
    // 验证前三位字母是否为 "Kin"
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
      // 如果是 "Kin",则复制到剪贴板
      const textArea = document.createElement("textarea");
      textArea.value = componentInfo;
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
      // 如果不是 "Kin",则提示用户输入有误
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
    // sent email notification
    if (vendorNameConditions.some((condition) => condition)) {
      // message.warning("please sent email to " + payoutVendor + " !");
      alert("please sent email to " + payoutVendor + " !");
    }
  };

  const unsecuredCopyToClipboard2 = () => {
    if (purchaseOrderNumber.slice(0, 3).toLowerCase() === "kin") {
      console.log("Po number is correct");
    } else {
      alert("Wrong PO number, Start from 'Kin'.");
      return;
    }
    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
    }
    if (Number(raisedInvoicePrice) > 2000) {
      // message.warning("Please Sent email,Change email subject!");
      setVisible(true);
    }

    // 验证前三位字母是否为 "Kin"
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
      // 如果是 "Kin",则复制到剪贴板
      const textArea = document.createElement("textarea");
      textArea.value = componentInfo2;
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
      // 如果不是 "Kin",则提示用户输入有误
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
    // sent email notification
    if (vendorNameConditions.some((condition) => condition)) {
      // message.warning("please sent email to " + payoutVendor + " !");
      alert("please sent email to " + payoutVendor + " !");
    }
  };

  const unsecuredCopyToClipboardPO = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfoPO;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
      message.success("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  const unsecuredCopyToClipboardPO2 = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfoPO2;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
      message.success("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  useEffect(() => {
    const infoPO = `Payout figure to: ${vendorName}\nPayout: $${formatPrice(
      payoutTotalPriceNoGst
    )}+\n\nMake/Model: ${payoutMakeModel}\nRego: ${payoutRego} / Claim No: ${payoutClaimNo}\nVendor:${payoutVendor}`;
    const infoPO2 = `Payout figure to: ${vendorName}\nPayout: $${formatPrice(
      payoutTotalPriceNoGst2
    )}+\n\nMake/Model: ${payoutMakeModel}\nRego: ${payoutRego} / Claim No: ${payoutClaimNo}\nVendor:${payoutVendor}`;
    // const infoPO2 = `Payout figure to: ${payoutFrom}\n
    // PAYOUT: $${formatPrice(payoutTotalPriceNoGst2)}+\n
    // Make/Model: ${payoutMakeModel}\n
    // Rego: ${payoutRego} / Claim No: ${payoutClaimNo}\n
    // Vendor:${payoutVendor}
    // `

    const infoGeneralR = `Payout\n\nMake/Model: ${payoutMakeModel}\nRego: ${payoutRego} / Claim No: ${payoutClaimNo}\nTowing: ${vendorName}`;

    const info = `***Received Invoice: ${vendorInvoiceNumber} from ${vendorName} for ${vendorInvoicePurpose}: $${formatPrice(
      vendorTotalPriceNoGst
    )}+ ***PO: ${purchaseOrderNumber}***Raised invoice: ${raisedInvoiceNumber} to ${payoutVendor} for ${vendorInvoicePurpose}: $${formatPrice(
      raisedInvoicePrice
    )} ***SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;

    const oldinfo = `Vendor Invoice Number: ${vendorInvoiceNumber}Vendor Total Price: ${formatPrice(
      vendorTotalPrice
    )}Vendor Invoice Purpose: ${vendorInvoicePurpose}Purchase Order Number: ${purchaseOrderNumber}Raised Invoice Number: ${raisedInvoiceNumber}\nRaised Invoice Purpose: ${raisedInvoicePurpose}\nRaised Invoice Price: ${formatPrice(
      raisedInvoicePrice
    )}Sales Order Number: ${salesOrderNumber}`;

    const info2 = `***Received Invoice: ${vendorInvoiceNumber} from ${vendorName} for ${vendorInvoicePurpose}: $${formatPrice(
      vendorTotalPriceNoGst
    )}+ ***PO: ${purchaseOrderNumber}***Raised invoice: ${raisedInvoiceNumber} to ${payoutVendor} for ${vendorInvoicePurpose}: $${formatPrice(
      raisedInvoicePrice
    )} ***SO: ${salesOrderNumber} ***INV SENT***`;

    setComponentInfo(info);
    setComponentInfo2(info2);
    setComponentInfoPO(infoPO);
    setComponentInfoPO2(infoPO2);
    setComponentInfoGeneralR(infoGeneralR);

    if (payoutPriceWithoutGST === "" || payoutInvoiceTwo === "") {
      setVendorTotalPrice(payoutPriceWithoutGST || payoutInvoiceTwo);
    } else {
      setVendorTotalPrice(
        Number(payoutPriceWithoutGST) + Number(payoutInvoiceTwo)
      );
    }
  }, [
    payoutVendor,
    payoutPriceWithoutGST,
    payoutMakeModel,
    payoutRego,
    payoutClaimNo,
    payoutVendor,
    payoutFrom,
    //
    payoutInvoiceTwo,
    //
    vendorInvoiceNumber,
    vendorName,
    vendorTotalPrice,
    vendorInvoicePurpose,
    purchaseOrderNumber,
    raisedInvoiceNumber,
    raisedInvoicePurpose,
    raisedInvoicePrice,
    salesOrderNumber,
    payoutPriceWithoutGST,
    payoutInvoiceTwo,
  ]);

  const handleReset = () => {
    setVendorInvoiceNumber("");
    setvendorName("");
    setVendorTotalPrice("");
    setVendorInvoicePurpose("Payout");
    setPurchaseOrderNumber("");
    setRaisedInvoiceNumber("");
    setRaisedInvoicePurpose("");
    setRaisedInvoicePrice("");
    setSalesOrderNumber("");
  };
  const handleResetPO = () => {
    setvendorName("");
    setpayoutPriceWithoutGST("");
    setpayoutInvoiceTwo("");
    setpayoutMakeModel("");
    setpayoutRego("");
    setpayoutClaimNo("");
    setpayoutVendor("");
    setpayoutFrom("");
  };

  const handleResetexceptvn = () => {
    setVendorInvoiceNumber("");
    setVendorTotalPrice("");
    setVendorInvoicePurpose("");
    setPurchaseOrderNumber("");
    setRaisedInvoiceNumber("");
    setRaisedInvoicePurpose("");
    setRaisedInvoicePrice("");
    setSalesOrderNumber("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(componentInfo);
    setIsCopied(true);
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleCopy2 = () => {
    navigator.clipboard.writeText(componentInfo2);
    setIsCopied(true);
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleFloatButton1Click = () => {
    // 处理第一个按钮的点击事件
    console.log("Button 1 clicked");
  };

  const handleFloatButton2Click = () => {
    const textArea = document.createElement("textarea");
    textArea.value = ComponentInfoGeneralR;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
      message.success("Copied to clipboard! Check Email status pls!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className="container">
      {/* <h4>Invoice Note Helper</h4> */}

      <Row>
        <Col span={11}>
          <div className="text-container">
            <p
              style={{
                color: isCopied ? "red" : "inherit",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {isCopied ? (
                "Information successfully copied to the clipboard"
              ) : (
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {componentInfoPO}
                </p>
              )}
            </p>
          </div>
          <div className="text-container">
            <p
              style={{
                color: isCopied ? "red" : "inherit",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {isCopied ? (
                "Information successfully copied to the clipboard"
              ) : (
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                  {componentInfoPO2}
                </p>
              )}
            </p>
          </div>
        </Col>
        {/* <Row></Row> */}
        <Col span={11} offset={1}>
          <div className="text-container">
            <p
              style={{
                color: isCopied ? "red" : "inherit",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {isCopied ? (
                "Information successfully copied to the clipboard"
              ) : (
                <p style={{ fontSize: "14px" }}>{componentInfo}</p>
              )}
            </p>
          </div>

          <div className="text-container">
            <p
              style={{
                color: isCopied ? "red" : "inherit",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {isCopied ? (
                "Information successfully copied to the clipboard"
              ) : (
                <p style={{ fontSize: "14px" }}>{componentInfo2}</p>
              )}
            </p>
          </div>
        </Col>
        {/* <Col span={11} style={{ margin: '10px' }}>
        <div className="text-container">
        <p
          style={{
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : <p style={{ fontSize: '14px' }}>{componentInfo2}</p>}
        </p>
      </div>
      </Col> */}
      </Row>

      {/* <div className="text-container">
        

        <p
          style={{
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : componentInfo2}
        </p>
      </div> */}
      {/* input box for first half part */}
      <Row>
        <Col span={12}>
          <div className="input-row">
            <label>Payout Figure to:</label>
            <input
              type="text"
              // value={payoutFrom}
              // onChange={(e) => setpayoutFrom(e.target.value)}
              value={vendorName}
              onChange={(e) => setvendorName(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Final price(IN-1):</label>
            <input
              type="number"
              value={payoutPriceWithoutGST}
              onChange={(e) => setpayoutPriceWithoutGST(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Final price(IN-2):</label>
            <input
              type="number"
              value={payoutInvoiceTwo}
              onChange={(e) => setpayoutInvoiceTwo(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Rego:</label>
            <input
              type="text"
              value={payoutRego}
              onChange={(e) => setpayoutRego(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Make/Model:</label>
            <input
              type="text"
              value={payoutMakeModel}
              onChange={(e) => setpayoutMakeModel(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Claim:</label>
            <input
              type="text"
              value={payoutClaimNo}
              onChange={(e) => setpayoutClaimNo(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Vendor name:</label>
            {/* <input
              type="text"
              value={payoutVendor}
              onChange={(e) => setpayoutVendor(e.target.value)}
            /> */}

            <SearchComponent
              payoutVendor={payoutVendor}
              setPayoutVendor={setpayoutVendor}
            />
          </div>
          <div className="input-row">
        <label>Is A2b</label>
        {/* <Radio.Group options={A2bOptions} onChange={onChange3} value={value3} optionType="button" /> */}
        {/* <Radio.Group options={A2bOptions} onChange={onChange3} value={value3} optionType="button" /> */}
        <Radio.Group options={A2bOptions} onChange={onChange3} value={isA2b} optionType="button" />
      </div>

          <Button type="primary" danger="true" onClick={handleResetPO}>
            Reset PO
          </Button>
          {/* <button onClick={handleResetexceptvn}>Reset-Keep VN</button> */}
          <Button
            type="primary"
            danger="true"
            onClick={unsecuredCopyToClipboardPO}
          >
            Copy PO(IN-1)
          </Button>
          <Button
            type="primary"
            danger="true"
            onClick={unsecuredCopyToClipboardPO2}
          >
            Copy PO(IN-2)
          </Button>
          <Table
            style={{ marginTop: "20px" }}
            columns={columns2}
            dataSource={data2}
            pagination={false}
          />
        </Col>

        <Col span={12}>
          <div className="input-row">
            <label>Vendor Invoice Number:</label>
            <input
              type="text"
              value={vendorInvoiceNumber}
              onChange={(e) => setVendorInvoiceNumber(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Vendor name:</label>
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setvendorName(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Vendor Invoice Purpose:</label>
            <input
              type="text"
              value={vendorInvoicePurpose}
              onChange={(e) => setVendorInvoicePurpose(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Vendor Total Price:</label>
            <input
              type="number"
              value={vendorTotalPrice}
              onChange={(e) => setVendorTotalPrice(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Purchase Order Number:</label>
            <input
              type="text"
              value={purchaseOrderNumber}
              onChange={(e) => setPurchaseOrderNumber(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Raised Invoice Number:</label>
            <input
              type="text"
              value={raisedInvoiceNumber}
              onChange={(e) => setRaisedInvoiceNumber(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Sales Order Number:</label>
            <input
              type="text"
              value={salesOrderNumber}
              maxLength="6"
              pattern="\d*"
              onChange={(e) => setSalesOrderNumber(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Raised Invoice Price:</label>
            <input
              type="number"
              value={raisedInvoicePrice}
              onChange={(e) => setRaisedInvoicePrice(e.target.value)}
            />
          </div>

          <div className="input-row">
            <label>Raised Invoice Purpose:</label>
            <input
              type="text"
              value={raisedInvoicePurpose}
              onChange={(e) => setRaisedInvoicePurpose(e.target.value)}
              placeholder="Leave it empty"
            />
          </div>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleResetexceptvn}>Reset-Keep VN</button>
          {/* <button onClick={handleCopy}>Copy</button>
      <button onClick={handleCopy2}>Copy(Invoice Sent)</button> */}
          <button onClick={unsecuredCopyToClipboard}>Copy</button>
          <button onClick={unsecuredCopyToClipboard2}>
            Copy(Invoice Sent)
          </button>
        </Col>
      </Row>

      {/* <div className="container"> */}
      <Table
        style={{ marginTop: "-65px" }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          bottom: 24,
          right: 24,
        }}
      >
        {/* <FloatButton
          style={{ marginBottom: 50 }}
          icon="P"
          onClick={handleFloatButton1Click}
        /> */}
        <Tooltip title="Copy desc for SO">
          <FloatButton icon="R" onClick={handleFloatButton2Click} />
        </Tooltip>
        <Modal
          title={<span className="custom-modal-title">Confirmation</span>}
          open={visible}
          onOk={handleConfirm}
          onCancel={handleCancel}
        >
          <p>Copy Success! BUT </p>
          <p>
            {" "}
            <ExclamationCircleOutlined /> Please send email and change the
            email subject! Please attach the sublet invoice to email, thanks!
          </p>
        </Modal>
      </div>

      {/* </div> */}
    </div>
  );
};

export default ComponentB;
