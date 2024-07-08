import React, { useState, useEffect } from "react";
// import "./ComponentB.css";

import { Table, Button, message,Radio, } from "antd";


const Calctable = () => {
    const [vendorTotalPrice, setVendorTotalPrice] = useState("");
    const vendorTotalPriceNoGst = vendorTotalPrice / 1.1;
    const profit5Percent = vendorTotalPriceNoGst * 0.05;
    const profit10Percent = vendorTotalPriceNoGst * 0.1;

    const A2bOptions = [
        {label: 'Yes', value:true},
        {label: 'No', value:false}
      ];

    const [isA2b, setIsA2b] = useState(false);

    const formatPrice = (price) => {
        return parseFloat(price).toFixed(2);
      };

    
    const onChange3 = ({ target: { value } }) => {
        // console.log('radio3 checked', value);
        setIsA2b(value);
      };

    const columnsCalc = [
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

        
    return (
        <div className="container">
             <div className="input-row">
        <label>Sublet Total Price:</label>
        <input
          type="number"
          value={vendorTotalPrice}
          onChange={(e) => setVendorTotalPrice(e.target.value)}
        />
      </div>
            <div className="input-row">
                <label>Is A2b</label>
                <Radio.Group options={A2bOptions} onChange={onChange3} value={isA2b} optionType="button" />
            </div>

            <Table
            style={{ marginTop: "20px" }}
            columns={columnsCalc}
            dataSource={data}
            pagination={false}
            />
        </div>
     );


};

export default Calctable;