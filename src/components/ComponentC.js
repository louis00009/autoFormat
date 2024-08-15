import React, { useState, useEffect } from "react";
import "./ComponentB.css";
import { message,Button } from "antd";
import FloatButtonComponent from "./FloatButton";
import CalcTable from "./CalcTable";
import { SearchOutlined } from '@ant-design/icons';

// This is MD
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
  // const [componentInfosent, setComponentInfoSent] = useState("");
  const [componentInfo2, setComponentInfo2] = useState("");
  const [componentInfo3, setComponentInfo3] = useState("");
  const [componentInfo4, setComponentInfo4] = useState("");
  const [componentInfo5, setComponentInfo5] = useState("");
  //wovr
  const [componentInfo8, setComponentInfo8] = useState("");
  //photo notes
  const [componentInfo6, setComponentInfo6] = useState("");
  //WOVER
  const [componentInfo7, setComponentInfo7] = useState("");
  //Transport with no Rego
  const [componentInfoTransNoRego, setComponentInfoTransNoRego] = useState("");
  //Storage with no Rego
  const [componentInfoStorageNoRego, setComponentInfoStorageNoRego] = useState("");

  const [isCopied, setIsCopied] = useState(false);
  //control Photo
  const [isCopied2, setIsCopied2] = useState(false);
  //control Wovr
  const [isCopied3, setIsCopied3] = useState(false);

  // MD general notes
  const [mdMakeModel, setmdMakeModel] = useState("");
  const [mdRego, setmdRego] = useState("");
  const [mdClaimNo, setmdClaimNo] = useState("");

    //Storage
    const [StorageVisible, setStorageVisible] = useState(false);
    const [StorageInputValue, setStorageInputValue] = useState("");

  //transport
  const [TransportVisible, setTransportVisible] = useState(false);
  const [TransportFromValue, setTransportFromValue] = useState("");
  const [TransportToValue, setTransportToValue] = useState("");
  const [TransportTowCompany, setTransportTowCompany] = useState("");

  //for buttons 
  const [purposeButtons,setPurposeButtons] = useState(['TRANSPORT','STORAGE','WOVR','ADMIN FEE','PHOTOS','SERVICE CALL','DROP OFF','DISPOSAL','SHARP TEST','POSTAGE','PLATE REMOVAL'])


  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const unsecuredCopyToClipboard = () => {
    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
    }
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
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
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
  };

  const handleDoubleClickTransport = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfoTransNoRego.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Transport note No Rego copy success for SO-General");
  };

  const unsecuredCopyToClipboard2 = () => {
    //So validation 6 numbers
    if (/[a-zA-Z]/.test(salesOrderNumber)) {
      alert("SO should Only contain Numbers!");
      return;
    } else {
      console.log("SO check pass");
    }
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
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
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
  };
  const handleDoubleClickStorage = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfoStorageNoRego.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select(); 
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Storage note No Rego copy success for SO-General");
  };

  const unsecuredCopyToClipboard3 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo3.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Transport note copy success for SO-General");
  };
  const unsecuredCopyToClipboard4 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo4.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select(); 
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Storage note copy success for SO-General");
  };
  const unsecuredCopyToClipboard5 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo5.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Photo note copy success for SO-General");
  };
  const unsecuredCopyToClipboard8 = () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo8.toUpperCase();
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      // setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
    // setTimeout(() => {
    //   setIsCopied(false);
    // }, 2000);
    message.success("Photo note copy success for SO-General");
  };

  const unsecuredCopyToClipboard6 = () => {
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
      // 如果是 "Kin",则复制到剪贴板
      const textArea = document.createElement("textarea");
      textArea.value = componentInfo6;
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
  };
  const unsecuredCopyToClipboard7 = () => {
    if (raisedInvoiceNumber.slice(0, 3).toLowerCase() === "aau") {
      // 如果是 "Kin",则复制到剪贴板
      const textArea = document.createElement("textarea");
      textArea.value = componentInfo7;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied3(true);
      } catch (err) {
        console.error("Unable to copy to clipboard", err);
      }
      document.body.removeChild(textArea);
      setTimeout(() => {
        setIsCopied3(false);
      }, 2000);
    } else {
      // 如果不是 "Kin",则提示用户输入有误
      alert("Wrong Raised invoice number, Start from 'AAU'.");
    }
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
    const info = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
      raisedInvoicePrice
    )} ***SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;

    const oldinfo = `Vendor Invoice Number: ${vendorInvoiceNumber}Vendor Total Price: ${formatPrice(
      vendorTotalPrice
    )}Vendor Invoice Purpose: ${vendorInvoicePurpose}Purchase Order Number: ${purchaseOrderNumber}Raised Invoice Number: ${raisedInvoiceNumber}\nRaised Invoice Purpose: ${raisedInvoicePurpose}Raised Invoice Price: ${formatPrice(
      raisedInvoicePrice
    )}Sales Order Number: ${salesOrderNumber}`;

    const info2 = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
      raisedInvoicePrice
    )} ***SO: ${salesOrderNumber} ***INV SENT***`;
    // notes for geneal
    const info3 = `Transport service \n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo} \n\nCollect From: ${TransportFromValue}\nDeliver To: ${TransportToValue}\nTow Operator: ${TransportTowCompany}`;
    const info9 = `Transport service \n\nCollect From: ${TransportFromValue}\nDeliver To: ${TransportToValue}\nTow Operator: ${TransportTowCompany}`;

    const info4 = `Storage for ${StorageInputValue}\n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`;
    const info10 = `Storage for ${StorageInputValue}`;
    const info5 = `Photo Charges\n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`;
    const info8 = `WOVR \n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`;

    //photo notes
    const info6 = `***Raised YARD PHOTO $35.75, to vendor ${raisedInvoiceNumber} ***, SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;
  
    const info7 = `***Raised WOVR $27.5, to vendor*** ${raisedInvoiceNumber} ***SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;

     // update visible for storage for 
     if (raisedInvoicePurpose.toLowerCase().includes('storage')) {
      setStorageVisible(true);
    }else if (raisedInvoicePurpose.toLowerCase().includes('transport')) {
      setTransportVisible(true);
    } else {
      setStorageVisible(false);
      setTransportVisible(false);
    }

    setComponentInfo(info);
    setComponentInfo2(info2);
    setComponentInfo3(info3);
    setComponentInfo4(info4);
    setComponentInfo5(info5);
    setComponentInfo6(info6);
    setComponentInfo7(info7);
    setComponentInfo8(info8);
    setComponentInfoTransNoRego(info9);
    setComponentInfoStorageNoRego(info10);
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
    mdClaimNo,
    mdMakeModel,
    mdRego,
    StorageInputValue,
    TransportFromValue,
    TransportToValue,
    TransportTowCompany,
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
    setTransportFromValue("");
    setTransportToValue("");
    setTransportTowCompany("");
  };
  const handleResetbutkeepcar = () => {
    setmdClaimNo("");
    setmdMakeModel("");
    setmdRego("");
    setVendorInvoiceNumber("");
    setvendorName("");
    setVendorTotalPrice("");
    setVendorInvoicePurpose("");
    setPurchaseOrderNumber("");
    setRaisedInvoiceNumber("");
    setRaisedInvoicePurpose("");
    setRaisedInvoicePrice("");
    setSalesOrderNumber("");
    setTransportFromValue("");
    setTransportToValue("");
    setTransportTowCompany("");
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

  return (
    <div className="container">
      <h2>Invoice Note Helper</h2>
    
       {purposeButtons.map((item, index) => (
          <Button onClick={() => copyToClipboard(item)} type="primary"  key={index} style={{ width: '7%', marginBottom: 8 }}>
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
            : componentInfo6}
        </p>
        <p
          style={{
            color: isCopied3 ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied3
            ? "Information successfully copied to the clipboard"
            : componentInfo7}
        </p>
      </div>
      <b>For Storage, you should have 3 records in one SO</b>
      <br></br>
      <b
        style={{
          color: "red",
        }}
      >
        1. Storage Fee - Day Rate*Days 2. Admin Fees 3. Autorola management Fees
        (1+2)*0.05{" "}
      </b>
      <br></br>
      <b style={{ color: "blue" }}>
        Note! Only need raisedInvoiceNumber and SO for Photo Fee(32.5 put this
        in system) NO Autorola Fee Apply!
      </b>
      <br></br>
      <br></br>
      <div className="input-row">
        <label>Rego:</label>
        <input
          type="text"
          value={mdRego}
          onChange={(e) => setmdRego(e.target.value)}
        />
         <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={() => {
              // Construct the search URL
              const searchUrl = `http://139.159.151.95:3979/cardetails/searchcar?rego=${mdRego}`;

              // Send the request
              fetch(searchUrl)
                .then((response) => response.json())
                .then((data) => {
                  // Handle the response data
                  console.log(data);
                  setmdClaimNo(data.carClaim)
                  setmdMakeModel(data.carMake)
                  setTransportFromValue(data.TowFrom)
                  setTransportToValue(data.TowTo)
                  setTransportTowCompany(data.TowingCompany)
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
        <label>Make/Model:</label>
        <input
          type="text"
          value={mdMakeModel}
          onChange={(e) => setmdMakeModel(e.target.value)}
        />
      </div>

      <div className="input-row">
        <label>Claim:</label>
        <input
          type="text"
          value={mdClaimNo}
          onChange={(e) => setmdClaimNo(e.target.value)}
        />
      </div>
    
      
      <div className="input-row">
        <label>Invoice Purpose:</label>
        <input
          type="text"
          value={raisedInvoicePurpose}
          onChange={(e) => setRaisedInvoicePurpose(e.target.value)}
        />
      </div>

      <div className="input-row" style={{ display: StorageVisible ? '' : 'none' }}>
          <label>Storage for:</label>
          <input
            type="text"
            value={StorageInputValue}
            placeholder="Ex: 30 days @ 25/day"
            // onChange={(e) => {
            //   const newValue = e.target.value;
            //   setStorageInputValue(newValue);
            //   setComponentInfo4(`Storage for ${newValue}\n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`);
            // }}
            onChange={(e) => setStorageInputValue(e.target.value)}
          />
        </div>

        <div className="input-row" style={{ display: TransportVisible ? '' : 'none' }}>
          <label>TOW FROM:</label>
          <input
            type="text"
            value={TransportFromValue}
            onChange={(e) => setTransportFromValue(e.target.value)}
          />
        </div>

        <div className="input-row" style={{ display: TransportVisible ? '' : 'none' }}>
          <label>TOW TO:</label>
          <input
            type="text"
            value={TransportToValue}
            onChange={(e) => setTransportToValue(e.target.value)}
          />
        </div>

        <div className="input-row" style={{ display: TransportVisible ? '' : 'none' }}>
          <label>TOW Company:</label>
          <input
            type="text"
            value={TransportTowCompany}
            onChange={(e) => setTransportTowCompany(e.target.value)}
          />
        </div>

      <div className="input-row">
        <label style={{ color: "blue" }}>Raised Invoice Number:</label>
        <input
          type="text"
          value={raisedInvoiceNumber}
          onChange={(e) => setRaisedInvoiceNumber(e.target.value)}
        />
      </div>

      <div className="input-row">
        <label style={{ color: "blue" }}>Sales Order Number:</label>
        <input
          type="text"
          value={salesOrderNumber}
          maxLength="6"
          pattern="\d*"
          onChange={(e) => setSalesOrderNumber(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>Invoice Price:</label>
        <input
          type="number"
          value={raisedInvoicePrice}
          onChange={(e) => setRaisedInvoicePrice(e.target.value)}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleResetbutkeepcar}>Reset(Carinfo)</button>
      {/* <button onClick={handleCopy}>Copy</button> */}

      <button onClick={unsecuredCopyToClipboard} >Copy Note</button>
      <button onClick={unsecuredCopyToClipboard2} >Copy(Invoice Sent)</button>
      <button onClick={unsecuredCopyToClipboard6}>CP Photo Note</button>
      <button onClick={unsecuredCopyToClipboard7}>CP WOVR</button>
      <br></br>

      {/* <button onClick={unsecuredCopyToClipboard2}>Copy</button> */}
      <button
        onClick={unsecuredCopyToClipboard3}
        style={{ backgroundColor: "#f5655b" }}
      >
        Copy(Transport)
      </button>
      <button
        onClick={handleDoubleClickTransport}
        style={{ backgroundColor: "#1a8784" }}
      >
        Trans NoReg
      </button>
      <button
        onClick={unsecuredCopyToClipboard4}
        onDoubleClick={handleDoubleClickStorage}
        style={{ backgroundColor: "#f5655b" }}
      >
        Copy(Storage)
      </button>
      <button
        onClick={handleDoubleClickStorage}
      
        style={{ backgroundColor: "#1a8784" }}
      >
        Storage NoReg
      </button>
      <button
        onClick={unsecuredCopyToClipboard5}
        style={{ backgroundColor: "#f5655b" }}
      >
        Copy(Photo)
      </button>
      <button
        onClick={unsecuredCopyToClipboard8}
        style={{ backgroundColor: "#f5655b" }}
      >
        Copy(WOVR)
      </button>
      <FloatButtonComponent />

      <CalcTable />

    </div>
  );
};

export default ComponentB;
