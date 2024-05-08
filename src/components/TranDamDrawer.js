import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { FloatButton,message } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';


const TranDamDrawer = () => {
  const [open, setOpen] = useState(false);
  const [listData, setListData] = useState([
    'Autorola Management Fee','TRAN-DAM Other','TRAN-DAM Innovation', 'TRAN-DAM Hertz', 'TRAN-DAM Insuret','TRAN-DAM Car Rental','TRAN-DAM Thrifty','TRAN-DAM Rentsure',
]);
  const [fleetData,setFleetData] = useState(['VHE-TRAN','C682151']) 
  const [vendorData,setVendorData] = useState(['Reardons','WP Towing','Nationwide Towing','Uber Carshare','Insuret','Sixt Australia - Salvage','Innovation Group (Sureplan)','Steadfast Claims Solutions Pty Ltd T/A Dawes Claims Solutions']) 

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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

//   const addNewButton = () => {
//     const newData = `Button ${listData.length + 1}`;
//     setListData([...listData, newData]);
//   };

  return (
    <>
      <FloatButton
        shape="circle"
        type="primary"
        onClick={showDrawer}
        style={{
          right: 94,
        }}
        icon={<MenuFoldOutlined />}
      />
      
      <Drawer title="Amazing Drawer" onClose={onClose} open={open}>
        <b>Tran-Dam</b>
        {listData.map((item, index) => (
          <Button onClick={() => copyToClipboard(item)} type="primary"  key={index} style={{ width: '90%', marginBottom: 8 }}>
          {item}
        </Button>
        ))}
        <br/><br/>
        <b>Fleet</b>
        {fleetData.map((item, index) => (
          <Button onClick={() => copyToClipboard(item)} type="primary"  key={index} style={{ width: '90%', marginBottom: 8 }}>
          {item}
        </Button>
        ))}
        <br/><br/>
        <b>Vendor</b>
        {vendorData.map((item, index) => (
          <Button onClick={() => copyToClipboard(item)} type="primary"  key={index} style={{ width: '90%', marginBottom: 8 }}>
          {item}
        </Button>
        ))}


        {/* <Button onClick={addNewButton}>Add New Button</Button> */}
      </Drawer>
      
    </>
  );
};

export default TranDamDrawer;