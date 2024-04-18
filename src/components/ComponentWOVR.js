import React, { useState, useEffect } from "react";
import "./ComponentB.css";
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
  const unsecuredCopyToClipboard = () => {
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
    const info = `***Raised WOVR $${formatPrice(
      raisedInvoicePrice
    )}, to vendor*** ${raisedInvoiceNumber} ***SO: ${salesOrderNumber} ***invoice not sent will SD after veicle sold***`;
    const info2 = `***Raised WOVR $${formatPrice(
      raisedInvoicePrice
    )}, to vendor*** ${raisedInvoiceNumber} ***SO: ${salesOrderNumber} ***INV SENT***`;
    // const info2 = `***Raised WOVR $${formatPrice(
    //   raisedInvoicePrice)},
    // to vendor*** ${raisedInvoiceNumber} ***SO: ${salesOrderNumber} ***invoice not sent will SD after veicle sold***
    // `
    // const info3 = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
    //   raisedInvoicePrice)} ***SO: ${salesOrderNumber} ***invoice not sent will SD after vehicle sold***`;

    // const info2 = `***Raised invoice: ${raisedInvoiceNumber} to vendor for ${raisedInvoicePurpose}: $${formatPrice(
    //   raisedInvoicePrice
    // )} ***SO: ${salesOrderNumber} ***INV SENT***`;

    setComponentInfo(info);
    setComponentInfo2(info2);
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
      <div className="text-container">
        <h2>Invoice Note Helper</h2>
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
            : componentInfo2}
        </p>
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
      <div>
        <label>Raised Invoice Number:</label>
        <input
          type="text"
          value={raisedInvoiceNumber}
          onChange={(e) => setRaisedInvoiceNumber(e.target.value)}
        />
      </div>

      {/* <div>
        <label>Raised Invoice Purpose:</label>
        <input
          type="text"
          value={raisedInvoicePurpose}
          onChange={(e) => setRaisedInvoicePurpose(e.target.value)}
        />
      </div> */}

      <div>
        <label>Raised Invoice Price:</label>
        <input
          type="number"
          value={raisedInvoicePrice}
          onChange={(e) => setRaisedInvoicePrice(e.target.value)}
        />
      </div>
      <div>
        <label>Sales Order Number:</label>
        <input
          type="text"
          value={salesOrderNumber}
          onChange={(e) => setSalesOrderNumber(e.target.value)}
        />
      </div>
      <button onClick={handleReset}>Reset</button>
      {/* <button onClick={handleCopy}>Copy</button> */}
      {/* <button onClick={handleCopy2}>Copy(Invoice Sent)</button> */}
      <button onClick={unsecuredCopyToClipboard}>Copy</button>
      <button onClick={unsecuredCopyToClipboard2}>Copy(Invoice Sent)</button>
    </div>
  );
};

export default ComponentB;
