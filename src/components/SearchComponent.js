import React from "react";
import { AutoComplete } from "antd";

const data = [
  {
    value: "360 Underwriting Solutions",
  },
  {
    value: "Able Australia - Fleet",
  },
  {
    value: "Accident Services Pty Ltd (FleetPlus)",
  },
  {
    value: "Achmea Australia",
  },
  {
    value: "ACM Melbourne (DIY Auto Parts)",
  },
  {
    value: "ACM QLD",
  },
  {
    value: "Acorn Rentals",
  },
  {
    value: "AIG Australia c/- Broadspire",
  },
  {
    value: "AIG Australia Limited",
  },
  {
    value: "All States Car Sales",
  },
  {
    value: "ALLIANZ AUSTRALIA INSURANCE LIMITED",
  },
  {
    value: "Allied World",
  },
  {
    value: "Allmaz",
  },
  {
    value: "Alpha Accounts Payable Email",
  },
  {
    value: "Alpha Car Hire",
  },
  {
    value: "Alpha Finance",
  },
  {
    value: "Alpha Transport Only",
  },
  {
    value: "Andys Autos",
  },
  {
    value: "Anglican Diocesan Services",
  },
  {
    value: "Ansvar",
  },
  {
    value: "Apex Car Rental",
  },
  {
    value: "Apex NZ",
  },
  {
    value: "Apollo",
  },
  {
    value: "ASA Automotive Solutions",
  },
  {
    value: "Assetinsure Pty Ltd",
  },
  {
    value: "ATL Insurance NSW/QLD",
  },
  {
    value: "Australian Bus",
  },
  {
    value: "Australian Truck & 4WD Rentals Pty Ltd",
  },
  {
    value: "Autocare",
  },
  {
    value: "AutoRent Pty Ltd",
  },
  {
    value: "AVEA insurance",
  },
  {
    value: "AVIS - AU (fleet and salvage)",
  },
  {
    value: "AVIS - NZ",
  },
  {
    value: "AVIS/APEX Fleet",
  },
  {
    value: "Banana Shire Council",
  },
  {
    value: "Bargain Car rentals",
  },
  {
    value: "Barwon Health",
  },
  {
    value: "Belcardo Fleet",
  },
  {
    value: "Benaee Fleet",
  },
  {
    value: "Benaee Salvage",
  },
  {
    value: "Benetas-Anglican Aged Care",
  },
  {
    value: "Blue zebra",
  },
  {
    value: "Bowens",
  },
  {
    value: "Bowens - Fleet",
  },
  {
    value: "Brendan Sullivan",
  },
  {
    value: "Brisbane Catholic Education",
  },
  {
    value: "C&A Towing",
  },
  {
    value: "Cabsafe - ALT QLD/NSW",
  },
  {
    value: "Capricorn",
  },
  {
    value: "Uber Sonas",
  },
  {
    value: "Uber Carshare",
  },
  {
    value: "Car Rental",
  },
  {
    value: "Carbar",
  },
  {
    value: "Carpeesh",
  },
  {
    value: "Catholic Church Insurance CCI",
  },
  {
    value: "cc",
  },
  {
    value: "CGU insurance",
  },
  {
    value: "Churches of Christ Insurance [NO GST]",
  },
  {
    value: "Claire & Stuart Ledder",
  },
  {
    value: "Club 4x4",
  },
  {
    value: "Cobram Panel Works",
  },
  {
    value: "CoHealth",
  },
  {
    value: "Colac Otway Shire",
  },
  {
    value: "Coles",
  },
  {
    value: "Comcover",
  },
  {
    value: "CommInsure",
  },
  {
    value: "CompassCorp",
  },
  {
    value: "Corio Auto Wreckers",
  },
  {
    value: "Craftview",
  },
  {
    value: "Craftview-Salvage",
  },
  {
    value: "CSIRO - Fleet",
  },
  {
    value: "Cunningham",
  },
  {
    value: "Dawes",
  },
  {
    value: "Dementia",
  },
  { value: "Dent World" },
  { value: "Domenic - Fleet" },
  { value: "Doncare" },
  { value: "East coast car rentals AU" },
  { value: "East coast car rentals NZ" },
  { value: "ECCR fleet" },
  { value: "Enterprise NZ" },
  { value: "Enterprise Rent A Car - Salvage" },
  { value: "Eric [Salvage & Fleet]" },
  { value: "Europcar [AU & NZ]" },
  { value: "Famous" },
  { value: "Federation University" },
  { value: "Forge" },
  { value: "Good Shepard Micro Finance" },
  { value: "Greater Western" },
  { value: "GT Insurance" },
  { value: "Guild" },
  { value: "HCi Commercial Motor" },
  { value: "HDI Global Specialty (Ford Insure)" },
  { value: "HDI Global (AGD)" },
  { value: "HDI Global Specialty" },
  { value: "HDI Global Specialty" },
  { value: "Hello Claims" },
  { value: "Hertz Remarketing" },
  { value: "Hertz Salvage" },
  { value: "IAG ORIX (FLEET)" },
  { value: "IAL (Berkshire Hathaway)" },
  { value: "IN TRUST MOTOR" },
  { value: "In-Group" },
  { value: "Innovation Group (Sureplan)" },
  { value: "Insurance Australia Ltd - fast salvage" },
  { value: "Insuret (Name PDF by rego and number)" },
  { value: "Insuret Statement (Debtors)" },
  { value: "Inter Hannover (Argis)" },
  { value: "Inter Hannover Australian Branch / Armada" },
  { value: "JLT Jardine Lloyd Thompson" },
  { value: "John Cully / Budget" },
  { value: "John Illingworth" },
  { value: "Jonday Holdings Pty Ltd t/a Thrifty Car & Truck Rentals" },
  { value: "Kestrel" },
  { value: "Knox City Council" },
  { value: "Laminex" },
  { value: "Latrobe City Council" },
  { value: "Lawrence VIC T/A Thrifty Car Rentals" },
  { value: "Lester C Y Lai" },
  { value: "M1 Traffic Control Pty Ltd - Fleet" },
  { value: "Marsh" },
  { value: "MB" },
  { value: "MEGT" },
  { value: "Melbourne Airport" },
  { value: "Melbourne Auto Salvage" },
  { value: "MH5 Pty Ltd" },
  { value: "Mick Dann" },
  { value: "Millennium Underwriting Agencies" },
  { value: "Motown" },
  { value: "Murphy Holdings Pty Ltd" },
  { value: "Nissan" },
  { value: "NM Insurance" },
  { value: "NMX" },
  { value: "OPAL" },
  { value: "Open Insurance TP Proactive Service" },
  { value: "Oreana Homes" },
  { value: "Pacific International Insurance" },
  { value: "Palm Investments" },
  { value: "Panthera Finance" },
  { value: "Pen Underwritng" },
  { value: "Perfect Edge Smash Repairs" },
  { value: "Pioneer underwriters" },
  { value: "Port Wakefield Wrecking" },
  { value: "Premier Technology Solutions" },
  { value: "Prixcar" },
  { value: "Prixcar services" },
  { value: "Proclaim" },
  { value: "QBE" },
  { value: "QBE iBox" },
  { value: "RACQ" },
  { value: "Recoversure" },
  { value: "Red Spot Motors" },
  { value: "Renault" },
  { value: "Rent A Bomb - Preston" },
  { value: "Rental Vehicle Insurance P/L" },
  { value: "Rentsure" },
  { value: "Rideshare Solutions" },
  { value: "Rijk Zwaan Australia Pty Ltd - Fleet" },
  { value: "RMIT Bundoora" },
  { value: "Rollin Car Insurance" },
  { value: "Rollin Car Insurance" },
  { value: "Ronald Ford" },
  { value: "Salvage Network" },
  { value: "Sam Tainsh" },
  { value: "Samaritans" },
  { value: "ShareCover Enterprise" },
  { value: "Smart salary" },
  { value: "Snowdon Developments" },
  { value: "South Gippsland Regional Water" },
  { value: "St George Bank" },
  { value: "Steadfast Claims Solutions" },
  { value: "Streamline Supplies" },
  { value: "Suncorp" },
  { value: "Sura Plant & Equipment" },
  { value: "Swann [GBB]" },
  { value: "T&M Auto Repairs" },
  { value: "Territory Rent A Car" },
  { value: "Thrifty (Sixt)" },
  { value: "Tokio" },
  { value: "Tourism Holdings" },
  { value: "Toyota" },
  { value: "Transport Claims Pen Underwriting c/- Insurx" },
  { value: "UAA" },
  { value: "Ubicar" },
  { value: "Unity Claims Management" },
  { value: "Valmet" },
  { value: "Vehicle assessments aus VAA" },
  { value: "Vicwide Pty Ltd" },
  { value: "Vision Claims & Risk Management Services" },
  { value: "Wathaurong" },
  { value: "Wayne Hughes" },
  { value: "Wellways" },
  { value: "West Gippsland" },
  { value: "Wetherill Park Towing" },
  { value: "WFI" },
  { value: "WGD AUSTRALIA GROUP PTY LTD-SELLER" },
  { value: "Wheelton Investments P/L Budget (inclu salvage)" },
  { value: "XL Insurance Company c/o Insurx" },
  { value: "DKG Fleet Insurance Company" },
  { value: "THL" },
  { value: "ceva" },
  { value: "Jarnac Holdings PTY LTD" },
  { value: "DingGo AU Pty LTd" },
  { value: "Acerta" },
  { value: "Yamaha Motor Insurance" },
  { value: "Turo claims" },
  { value: "Motopool Holdings Pty Ltd" },
  { value: "Justin Kings Panels" },
  { value: "Zurich Australian Insurance Limited" },
  { value: "Colac Otway Health" },
];

const SearchComponent = ({ payoutVendor, setPayoutVendor }) => {
  const handleSelect = (value) => {
    console.log("Selected:", value);
    // 在这里处理选中的值，可以是存储到状态或执行其他操作
  };

  const options = data.map((item) => ({
    value: item.value,
  }));

  return (
    <AutoComplete
      style={{
        width: 250,
      }}
      options={options}
      placeholder=""
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      onSelect={handleSelect}
      value={payoutVendor}
      onChange={(value) => setPayoutVendor(value)}
    />
  );
};

export default SearchComponent;
