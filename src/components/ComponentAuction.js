import React, { useState, useEffect } from "react";
import {
  Radio,
  InputNumber,
  Table,
  Button,
  message,
  Flex,
  Row,
  Col,
  Card,
} from "antd";
// import AuctionEmail from "./AuctionEmail";

const { Column } = Table;

const App = () => {
  const [calculatorType, setCalculatorType] = useState("salvage");
  const [salePriceExclGST, setSalePriceExclGST] = useState(0);
  const [salePriceInclGST, setSalePriceInclGST] = useState(
    salePriceExclGST * 1.1
  );
  const [markup, setMarkup] = useState(13.75);
  const [baf, setBaf] = useState((markup / 100) * salePriceInclGST);
  // const [gstRate, setGstRate] = useState(0.1);
  const gstRate = 0.1;
  const [ppsrFeeInclGST, setPPSRFeeInclGST] = useState(41.0);
  const [ppsrFeeExclGST, setPPSRFeeExclGST] = useState(37.273);

  // iSalvage
  const [iSalvagePrice, SetiSalvagePrice] = useState("");
  const [iSalvageRate, SetiSalvageRate] = useState("");
  const [iSalvagePriceNoGST, SetiSalvagePriceNoGST] = useState("");
  const [iSalvageFinalPrice, setiSalvageFinalPrice] = useState("");

  const getLogisticFees = () => {
    if (calculatorType === "salvage" || calculatorType === "typeC") {
      return { logisticFeeInclGST: 88.0, logisticFeeExclGST: 80.0 };
    } else if (calculatorType === "typeB") {
      return { logisticFeeInclGST: 112.0, logisticFeeExclGST: 101.818 };
    } else if (calculatorType === "typeD") {
      return { logisticFeeInclGST: 0, logisticFeeExclGST: 0 };
    }
  };

  const { logisticFeeInclGST, logisticFeeExclGST } = getLogisticFees();

  // const baf = (markup / 100) * salePriceInclGST;
  // const bafExclGST = baf / 1.1;
  const [bafExclGST, setBafExclGST] = useState(baf / 1.1);
  const totalFees = baf + ppsrFeeInclGST + logisticFeeInclGST;
  const invoiceAmount = salePriceInclGST + totalFees;

  const calculateBaf = () => {
    let newBaf;
    if (calculatorType === "typeD") {
      if (salePriceInclGST < 501) {
        newBaf = 120;
      } else if (salePriceInclGST < 2001) {
        newBaf = 250;
      } else if (salePriceInclGST < 4001) {
        newBaf = 350;
      } else if (salePriceInclGST < 11001) {
        newBaf = salePriceInclGST * 0.1;
      } else {
        newBaf = 1100;
      }
      setPPSRFeeInclGST(0);
      setPPSRFeeExclGST(0);
      setBafExclGST(baf / (1 + markup / 100));
      setSalePriceExclGST(salePriceInclGST / (1 + markup / 100));
      // setPPSRFeeExclGST(0);
    } else {
      newBaf = (markup / 100) * salePriceInclGST;
      setPPSRFeeInclGST(41);
      setPPSRFeeExclGST(37.273);
      setBafExclGST(baf / 1.1);
    }
    setBaf(newBaf);

    // setGstRate(markup);
  };

  const handleCalculatorTypeChange = (e) => {
    // setCalculatorType(e.target.value, () => {
    //   calculateBaf();
    // });
    setCalculatorType(e.target.value);
    calculateBaf();
    console.log(calculatorType);
  };

  const handleCopy = (value) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      message.success("Copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  };

  const handleReset = (value) => {
    if (value === "salePriceExclGST") {
      setSalePriceExclGST(0);
    } else if (value === "salePriceInclGST") {
      setSalePriceInclGST(0);
    } else {
      return;
    }
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const handleExclGSTChange = (value) => {
    const exclGST = value || 0;
    setSalePriceExclGST(exclGST);
    setSalePriceInclGST(parseFloat((exclGST * (1 + gstRate)).toFixed(2)));
  };

  const handleInclGSTChange = (value) => {
    const inclGST = value || 0;
    setSalePriceInclGST(inclGST);
    setSalePriceExclGST(parseFloat((inclGST / (1 + gstRate)).toFixed(2)));
  };

  useEffect(() => {
    calculateBaf(salePriceInclGST);
    if (calculatorType === "salvage" || calculatorType === "typeC") {
      setMarkup(13.75);
    } else if (calculatorType === "typeB") {
      setMarkup(16.75);
    } else if (calculatorType === "typeD") {
      setMarkup(15);
    }
    // calc isalvage
    if (!isNaN(parseFloat(iSalvagePrice))) {
      const priceNoGST = (parseFloat(iSalvagePrice) / 1.1).toFixed(2);
      SetiSalvagePriceNoGST(priceNoGST);
    } else {
      SetiSalvagePriceNoGST("");
    }

    // islavage final price
    if (
      !isNaN(parseFloat(iSalvagePriceNoGST)) &&
      !isNaN(parseFloat(iSalvageRate))
    ) {
      const final = (
        (parseFloat(iSalvagePriceNoGST) * parseFloat(iSalvageRate)) /
        100
      ).toFixed(2);
      setiSalvageFinalPrice(final);
    } else {
      setiSalvageFinalPrice("");
    }
  }, [
    calculatorType,
    calculateBaf,
    salePriceInclGST,
    ppsrFeeInclGST,
    iSalvagePrice,
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <Radio.Group
        value={calculatorType}
        // onChange={(e) => setCalculatorType(e.target.value)}
        onChange={handleCalculatorTypeChange}
      >
        <Radio.Button value="salvage">Salvage</Radio.Button>
        <Radio.Button value="typeB">Truck</Radio.Button>
        <Radio.Button value="typeC">Bike</Radio.Button>
        <Radio.Button value="typeD">NZ Car 50/55</Radio.Button>
      </Radio.Group>
      {/* tables */}
      <div style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <span>Markup (%): </span>
          <InputNumber
            value={markup}
            min={0}
            max={100}
            // step={0.01}
            onChange={(value) => setMarkup(value)}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <span>Sale Price Excl GST: </span>
          <InputNumber
            value={salePriceExclGST}
            min={0}
            step={1}
            onChange={handleExclGSTChange}
          />
          <Button onClick={() => handleCopy(salePriceExclGST.toFixed(2))}>
            Copy
          </Button>
          <Button onClick={() => handleReset("salePriceExclGST")}>Reset</Button>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <span>Sale Price Incl GST: </span>
          <InputNumber
            value={salePriceInclGST}
            min={0}
            step={1}
            onChange={handleInclGSTChange}
          />
          <Button onClick={() => handleCopy(salePriceInclGST.toFixed(2))}>
            Copy
          </Button>
          <Button onClick={() => handleReset("salePriceInclGST")}>Reset</Button>
        </div>
        {/* <div style={{ width: "60%"}}> */}
        <div className="AuctionTable">
          <Table
            dataSource={[
              {
                key: "1",
                salePriceExclGST,
                salePriceInclGST,
                baf,
                bafExclGST,
                ppsrFeeInclGST,
                ppsrFeeExclGST,
                logisticFeeInclGST,
                logisticFeeExclGST,
                totalFees,
                invoiceAmount,
              },
            ]}
            pagination={false} // Disable pagination
          >
            <Column
              title="Sale Price Incl GST"
              dataIndex="salePriceInclGST"
              key="salePriceInclGST"
              render={(text) => (
                <div>
                  {text.toFixed(2)}
                  <Button onClick={() => handleCopy(text.toFixed(2))}>
                    Copy
                  </Button>
                </div>
              )}
            />
            <Column
              title="BAF Inc-GST"
              dataIndex="baf"
              key="baf"
              render={(text) => (
                <div>
                  {text.toFixed(2)}
                  <Button disabled onClick={() => handleCopy(text.toFixed(2))}>
                    Copy
                  </Button>
                </div>
              )}
            />

            <Column
              title="PPSR Fee Inc-GST"
              dataIndex="ppsrFeeInclGST"
              key="ppsrFeeInclGST"
              render={(text) => (
                <div>
                  {text.toFixed(2)}
                  <Button disabled onClick={() => handleCopy(text.toFixed(2))}>
                    Copy
                  </Button>
                </div>
              )}
            />

            <Column
              title="Logistic Management Fee"
              dataIndex="logisticFeeInclGST"
              key="logisticFeeInclGST"
              render={(text) => (
                <div>
                  {text.toFixed(2)}
                  <Button disabled onClick={() => handleCopy(text.toFixed(2))}>
                    Copy
                  </Button>
                </div>
              )}
            />
          </Table>
        </div>
        <Table
          dataSource={[
            {
              key: "1",
              salePriceExclGST,
              salePriceInclGST,
              baf,
              bafExclGST,
              ppsrFeeInclGST,
              ppsrFeeExclGST,
              logisticFeeInclGST,
              logisticFeeExclGST,
              totalFees,
              invoiceAmount,
            },
          ]}
          pagination={false} // Disable pagination
        >
          <Column
            // title="Sale Price Excl GST"
            title={<strong>Sale Price Excl GST</strong>}
            dataIndex="salePriceExclGST"
            key="salePriceExclGST"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />
          {/* <Column
            title="Sale Price Incl GST"
            dataIndex="salePriceInclGST"
            key="salePriceInclGST"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          /> */}
          <Column
            // title="BAF No-GST"
            title={<strong>BAF No-GST</strong>}
            dataIndex="bafExclGST"
            key="bafExclGST"
            // dataIndex="baf"
            // key="baf"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />

          <Column
            // title="PPSR Fee NO-GST"
            title={<strong>PPSR Fee NO-GST</strong>}
            // dataIndex="ppsrFeeInclGST"
            // key="ppsrFeeInclGST"
            dataIndex="ppsrFeeExclGST"
            key="ppsrFeeExclGST"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />

          <Column
            // title="Logistic Management Fee(No-GST)"
            title={<strong>Logistic Management Fee(No-GST)</strong>}
            dataIndex="logisticFeeExclGST"
            key="logisticFeeExclGST"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />
          {/* <Column
            title="Logistic Management Fee"
            dataIndex="logisticFeeInclGST"
            key="logisticFeeInclGST"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          /> */}
          <Column
            // title="Total Fees"
            title={<strong>Total Fee</strong>}
            dataIndex="totalFees"
            key="totalFees"
            render={(text) => (
              <div>
                {text.toFixed(2)}
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />
          <Column
            title={<strong style={{ color: "red" }}>Invoice Amount</strong>}
            dataIndex="invoiceAmount"
            key="invoiceAmount"
            render={(text) => (
              <div>
                <strong style={{ color: "red" }}>{text.toFixed(2)}</strong>
                <Button onClick={() => handleCopy(text.toFixed(2))}>
                  Copy
                </Button>
              </div>
            )}
          />
        </Table>
      </div>
      {/* divide line */}
      <hr style={{ marginTop: "20px" }}></hr>

      {/* Fleet */}
      <Row>
        {/* <div style={{ width: "50%" }}> */}
        <Col span={12}>
          <b>Fleet</b>
          <p>
            Buyer fee: DB <br></br>
            Admin: ADM-SF<br></br>
            Freight: VHE-TRAN<br></br>
            Please make sure the amount you put in is GST{" "}
            <b style={{ color: "red" }}>EXCLUSIVE</b>
            <br></br>
            For the selling fee and inspection, please search in the the
            spreadsheet: <b>Fleet / OEM Vendor fees 2024</b>
            <br></br>
            <b>058412</b> For inspection
          </p>
        </Col>
        {/* </div> */}

        <Col span={12}>
          <b>iSalvage: Please email to Shanita/Navya(check email)</b>
          {/* <AuctionEmail /> */}
          <div className="input-row" style={{ marginTop: "10px" }}>
            <label>iSalvage Price:</label>
            <input
              type="number"
              value={iSalvagePrice}
              onChange={(e) => SetiSalvagePrice(e.target.value)}
            />
            <Button onClick={() => handleCopy(iSalvagePrice)}>Copy</Button>
          </div>
          <div className="input-row" style={{ marginTop: "10px" }}>
            <label>iSalvage Price(NO-GST):</label>
            <input
              type="number"
              value={iSalvagePriceNoGST}
              onChange={(e) => {
                const value = parseFloat(e.target.value);
                if (!isNaN(value)) {
                  SetiSalvagePriceNoGST(value.toFixed(2));
                } else {
                  SetiSalvagePriceNoGST("");
                }
              }}
            />
            <Button onClick={() => handleCopy(iSalvagePriceNoGST)}>Copy</Button>
          </div>

          <div className="input-row" style={{ marginTop: "10px" }}>
            <label>iSalvage Rate:</label>
            <input
              type="number"
              value={iSalvageRate}
              onChange={(e) => SetiSalvageRate(e.target.value)}
            />
            <Button disabled onClick={() => handleCopy(iSalvageRate)}>
              Copy
            </Button>
          </div>
          <div className="input-row" style={{ marginTop: "10px" }}>
            <label>iSalvage DB Fee:</label>
            <input type="number" value={iSalvageFinalPrice} readOnly />
            <Button onClick={() => handleCopy(iSalvageFinalPrice)}>Copy</Button>
          </div>
        </Col>
      </Row>
      {/* second card */}
      <Row gutter={16}>
      <Col span={8}>
      <Card
        title="Leave below buyer open"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>Autorola Private Sales</p>
        <p>Autorola MCH - Fleet</p>
        <p>Autorola Fastsalvage FM</p>
        {/* <p>Card content</p> */}
      </Card>
      </Col>

<Col span={8}>
      <Card
        title="Other Special rules"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        
        <p>Sixt Australia - Salvage - 69+ SO</p>
        <p>NationWide 9.07+ SO</p>
        <p>TFS : 297(270) if no address DB in email(306.5- 278.64)</p>
        {/* <p>Card content</p> */}
      </Card>

      </Col>
      <Col span={8}>
      <Card
        title="Key points to note"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        
        <p><b>Truck:</b>Always Check Email and write down rego</p>
        <p>Tick Admin for fleet</p>
        <p></p>
        {/* <p>Card content</p> */}
      </Card>

      </Col>
      </Row>
      
      
    </div>
    
  );
};

export default App;
