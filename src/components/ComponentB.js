import React, { useState, useEffect } from "react";
import "./ComponentB.css";

import { Table, Button, message, Tooltip,Radio,Row,Col } from "antd";
import SearchComponent from "./SearchComponent";
import FloatButtonComponent from "./FloatButton";
import { SearchOutlined } from '@ant-design/icons';

// this is Towing company
const ComponentB = () => {
  const [vendorInvoiceNumber, setVendorInvoiceNumber] = useState("");
  const [vendorName, setvendorName] = useState("");
  const [vendorTotalPrice, setVendorTotalPrice] = useState("");
  const [vendorInvoicePurpose, setVendorInvoicePurpose] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [raisedInvoiceNumber, setRaisedInvoiceNumber] = useState("");
  const [raisedInvoicePurpose, setRaisedInvoicePurpose] = useState("");
  const [raisedInvoicePrice, setRaisedInvoicePrice] = useState("");
  const [salesOrderNumber, setSalesOrderNumber] = useState("");
  const [componentInfo, setComponentInfo] = useState("");
  const [componentInfo2, setComponentInfo2] = useState("");

  const [isCopied, setIsCopied] = useState(false);
  const [isCopied2, setIsCopied2] = useState(false);
  const [isA2b, setIsA2b] = useState(false);
  // for vendor name make below element = payout//
  const [payoutVendor, setpayoutVendor] = useState("");

  // for Towing notes
  const [componentInfoCarNote, setComponentInfoCarNote] = useState("");
  const [carRego, setCarRego] = useState("");
  const [carModel, setCarModel] = useState("");
  const [carClaim, setCarClaim] = useState("");
  const [carCollect, setCarCollect] = useState("");
  const [carTowTo, setCarTowTo] = useState("");


  const A2bOptions = [
    {label: 'Yes', value:true},
    {label: 'No', value:false}
  ]
  // const payoutVendor = vendorName;
  // const setpayoutVendor = setvendorName;

  //for calculator
  // 计算 vendorTotalPrice(NO GST), Profit(5%) 和 Profit(10%)

  const vendorTotalPriceNoGst = vendorTotalPrice / 1.1;
  const profit5Percent = vendorTotalPriceNoGst * 0.05;
  const profit10Percent = vendorTotalPriceNoGst * 0.1;

  // for top bottons
  //Storage/Admin: 255.2+ //Photos: 30+ //Admin fee: 30+ //Service call/Drop off://Disposal: Sharp test: Postage:// Admin/Photo/Plate removal
  const [purposeButtons, setPurposeButtons] = useState([
    "TRANSPORT",
    "STORAGE",
    "ADMIN FEE",
    "PHOTOS",
    "SERVICE CALL",
    "DROP OFF",
    "DISPOSAL",
    "SHARP TEST",
    "POSTAGE",
    "PLATE REMOVAL",
  ]);
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

  //

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
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

  const vendorNameConditions = [
    payoutVendor.toLowerCase() === "comcover",
    payoutVendor.toLowerCase() === "car rental",
    payoutVendor.toLowerCase() === "cri",
    payoutVendor.toLowerCase() === "car rental insurance",
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
    if (payoutVendor === "") {
      // setpayoutVendor("Vendor");
      alert("Vendor can not be empty!");
    }

    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
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
    if (payoutVendor === "") {
      // setpayoutVendor("Vendor");
      alert("Vendor can not be empty!");
    }

    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
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
        setIsCopied2(true);
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
      setTimeout(() => {
        setIsCopied2(false);
      }, 2000);
    } else {
      // 如果不是 "Kin",则提示用户输入有误
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
    // sent email notification
    if (vendorNameConditions.some((condition) => condition)) {
      // message.warning("please sent email to " + vendorName + " !");
      alert("please sent email to " + payoutVendor + " !");
    }
  };

  const unsecuredCopyToClipboardInv = () => {
    if (vendorInvoiceNumber === "") {
      // setpayoutVendor("Vendor");
      alert("Copy Failed, can not be empty!");
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = vendorInvoiceNumber;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        message.success("Copied to clipboard!");
        // setIsCopied(true);
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
    }

    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
  };

  const copyToClipboard = (text) => {
    // navigator.clipboard.writeText(text);
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      message.success("Copied to clipboard!");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  useEffect(() => {
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

    const infoCarNote = `Transport service \n\nRego: ${carRego}\nMake: ${carModel}\nClaim no:${carClaim} \n\nCollect From:${carCollect}\nDeliver To:${carTowTo}\nTow Operator:${vendorName}`;

    setComponentInfo(info);
    setComponentInfo2(info2);
    setComponentInfoCarNote(infoCarNote)
  }, [
    vendorInvoiceNumber,
    vendorName,
    vendorTotalPrice,
    vendorInvoicePurpose,
    purchaseOrderNumber,
    raisedInvoiceNumber,
    raisedInvoicePurpose,
    raisedInvoicePrice,
    salesOrderNumber,
    payoutVendor,
    carRego,
    carModel,
    carClaim,
    carCollect,
    carTowTo
  ]);

  const handleReset = () => {
    setVendorInvoiceNumber("");
    setvendorName("");
    setVendorTotalPrice("");
    setVendorInvoicePurpose("");
    setPurchaseOrderNumber("");
    setRaisedInvoiceNumber("");
    setRaisedInvoicePurpose("");
    setRaisedInvoicePrice("");
    setSalesOrderNumber("");
    setpayoutVendor("");
  };

  const handleCarInfoReset = () => {
    setCarRego("");
    setCarModel("");
    setCarClaim("");
    setCarCollect("");
    setCarTowTo("");
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
    setpayoutVendor("");
  };
  const handleResetfire = () => {
    setVendorInvoiceNumber("");
    setPurchaseOrderNumber("");
    setRaisedInvoiceNumber("");
    setRaisedInvoicePurpose("");
    // setRaisedInvoicePrice("");
    setSalesOrderNumber("");
    setpayoutVendor("");
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

  const onChange3 = ({ target: { value } }) => {
    // console.log('radio3 checked', value);
    setIsA2b(value);
  };

  return (
    <div className="container">
      {/* <h4>Invoice Note Helper</h4> */}

      {/* <p>
        Transport/Storage/Admin: 255.2+ //Photos: 30+ //Admin fee: 30+ //Service
        call/Drop off://Disposal: Sharp test: Postage:// Admin/Photo/Plate
        removal
      </p> */}

      {purposeButtons.map((item, index) => (
        <Button
          onClick={() => copyToClipboard(item)}
          type="default"
          key={index}
          style={{ width: "7.5%", marginBottom: 8 }}
        >
          {item}
        </Button>
      ))}

      <div className="text-container">
        <p
          style={{
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : componentInfo}
        </p>

        <p
          style={{
            color: isCopied2 ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied2
            ? "Information successfully copied to the clipboard"
            : componentInfo2}
        </p>
      </div>

    <Row>
      <Col span={15}>
      <div className="input-row">
        <label>Vendor Invoice Number:</label>
        <input
          type="text"
          value={vendorInvoiceNumber}
          onChange={(e) => setVendorInvoiceNumber(e.target.value)}
        />
        <button onClick={unsecuredCopyToClipboardInv}>Copy</button>
      </div>
      <div className="input-row">
        <label>Towing Company:</label>
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
        <label>Vendor name:</label>
        {/* <input
          type="text"
          value={vendorName}
          onChange={(e) => setvendorName(e.target.value)}
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
      </Col>

        {/* right part */}
      <Col span={9}>
        <div className="input-row">
          <label>Car Rego:</label>
          <input
            type="text"
            value={carRego}
            onChange={(e) => setCarRego(e.target.value)}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              // Construct the search URL
              const searchUrl = `http://139.159.151.95:3979/cardetails/searchcar?rego=${carRego}`;

              // Send the request
              fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                  // Handle the response data
                  console.log(data);

                  setCarClaim(data.carClaim)
                  setCarModel(data.carMake)
                  setCarCollect(data.TowFrom)
                  setCarTowTo(data.TowTo)

                })
                .catch((error) => {
                  // Handle any errors
                  console.error(error);
                });
            }}
          >
            Search
  </Button>
        </div>

        <div className="input-row">
          <label>Car Model:</label>
          <input
            type="text"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Claim No:</label>
          <input
            type="text"
            value={carClaim}
            onChange={(e) => setCarClaim(e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Collect From:</label>
          <input
            type="text"
            value={carCollect}
            onChange={(e) => setCarCollect(e.target.value)}
          />
        </div>

        <div className="input-row">
          <label>Tow To:</label>
          <input
            type="text"
            value={carTowTo}
            onChange={(e) => setCarTowTo(e.target.value)}
          />
        </div>

        <button 
          onClick={() => {
            // navigator.clipboard.writeText(formatPrice(value));
            const textArea = document.createElement("textarea");
            textArea.value = componentInfoCarNote.toUpperCase();
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
          >Copy</button>

          <button onClick={handleCarInfoReset}>Reset</button>

      </Col>
    </Row>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleResetexceptvn}>Reset-Keep VN</button>
      {/* <button onClick={handleResetfire}>🔥</button> */}
      <Tooltip title="When you have more invoice in the same purpose & company">
        <Button onClick={handleResetfire} danger>
        
        </Button>
      </Tooltip>
      {/* <button onClick={handleCopy}>Copy</button>
      <button onClick={handleCopy2}>Copy(Invoice Sent)</button> */}
      <button onClick={unsecuredCopyToClipboard}>Copy</button>
      <button onClick={unsecuredCopyToClipboard2}>Copy(Invoice Sent)</button>

      <div className="container">
        <Table
          style={{ marginTop: "20px" }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
      <FloatButtonComponent />
    </div>
  );
};

export default ComponentB;
