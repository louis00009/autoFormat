import React, { useState, useEffect } from "react";
import "./ComponentB.css";
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
  const [componentInfo2, setComponentInfo2] = useState("");
  const [componentInfo3, setComponentInfo3] = useState("");
  const [componentInfo4, setComponentInfo4] = useState("");

  const [isCopied, setIsCopied] = useState(false);

// MD general notes
  const [mdMakeModel, setmdMakeModel] = useState("");
  const [mdRego, setmdRego] = useState("");
  const [mdClaimNo, setmdClaimNo] = useState("");

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

  const unsecuredCopyToClipboard3= () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo3;
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

  }
  const unsecuredCopyToClipboard4= () => {
    const textArea = document.createElement("textarea");
    textArea.value = componentInfo4;
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

  }

  // const unsecuredCopyToClipboard2 = (text) => {
  //   const textArea = document.createElement("textarea");
  //   textArea.value = componentInfo2;
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

  useEffect(() => {
    const info = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
      raisedInvoicePrice
    )} ***SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;

    const oldinfo = `Vendor Invoice Number: ${vendorInvoiceNumber}Vendor Total Price: ${formatPrice(
      vendorTotalPrice
    )}Vendor Invoice Purpose: ${vendorInvoicePurpose}Purchase Order Number: ${purchaseOrderNumber}Raised Invoice Number: ${raisedInvoiceNumber}\nRaised Invoice Purpose: ${raisedInvoicePurpose}Raised Invoice Price: ${formatPrice(
      raisedInvoicePrice
    )}Sales Order Number: ${salesOrderNumber}`;

    // const info2 = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
    //   raisedInvoicePrice
    // )} ***SO: ${salesOrderNumber} ***INV SENT***`;

    const info3 = `Transport Fee\n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`;

    const info4 = `Storage Fee\n\nRego: ${mdRego}\nMake: ${mdMakeModel}\nClaim no:${mdClaimNo}`;

    setComponentInfo(info);
    // setComponentInfo2(info2);
    setComponentInfo3(info3);
    setComponentInfo4(info4);
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
    mdRego
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
      <p>Transport/Storage/Admin: 255.2+ //Photos: 30+ //Admin fee: 30+ //Service call/Drop off://Disposal: Sharp test: Postage:// Admin/Photo/Plate removal</p>
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
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : componentInfo3}
        </p>

        <p
          style={{
            color: isCopied ? "red" : "inherit",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {isCopied
            ? "Information successfully copied to the clipboard"
            : componentInfo4}
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
      </b>{" "}
      <br></br>
      <br></br>
      <div className="input-row">
            <label>Rego:</label>
            <input
              type="text"
              value={mdRego}
              onChange={(e) => setmdRego(e.target.value)}
            />
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
      {/* <div>
        <label>Vendor Invoice Number:</label>
        <input
          type="text"
          value={vendorInvoiceNumber}
          onChange={(e) => setVendorInvoiceNumber(e.target.value)}
        />
      </div>
      <div>
        <label>Vendor name:</label>
        <input
          type="text"
          value={vendorName}
          onChange={(e) => setvendorName(e.target.value)}
        />
      </div>
      <div>
        <label>Vendor Invoice Purpose:</label>
        <input
          type="text"
          value={vendorInvoicePurpose}
          onChange={(e) => setVendorInvoicePurpose(e.target.value)}
        />
      </div>
      
      <div>
        <label>Vendor Total Price:</label>
        <input
          type="number"
          value={vendorTotalPrice}
          onChange={(e) => setVendorTotalPrice(e.target.value)}
        />
      </div>
      
      <div>
        <label>Purchase Order Number:</label>
        <input
          type="text"
          value={purchaseOrderNumber}
          onChange={(e) => setPurchaseOrderNumber(e.target.value)}
        />
      </div> */}
      <div className="input-row">
        <label>Raised Invoice Number:</label>
        <input
          type="text"
          value={raisedInvoiceNumber}
          onChange={(e) => setRaisedInvoiceNumber(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label>Raised Invoice Purpose:</label>
        <input
          type="text"
          value={raisedInvoicePurpose}
          onChange={(e) => setRaisedInvoicePurpose(e.target.value)}
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
        <label>Sales Order Number:</label>
        <input
          type="text"
          value={salesOrderNumber}
          maxLength="6"
          pattern="\d*"
          onChange={(e) => setSalesOrderNumber(e.target.value)}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleCopy}>Copy</button>
      <button onClick={handleCopy2}>Copy(Invoice Sent)</button> */}
      <button onClick={unsecuredCopyToClipboard}>Copy</button>
      {/* <button onClick={unsecuredCopyToClipboard2}>Copy</button> */}
      <button onClick={unsecuredCopyToClipboard3}>Copy(Transport)</button>
      <button onClick={unsecuredCopyToClipboard4}>Copy(Storage)</button>
    </div>
  );
};

export default ComponentB;
