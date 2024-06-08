import React, { useEffect, useState } from "react";
import { Input, List, Card, Pagination, Button, message } from "antd";
// import 'antd/dist/reset.css';  // 确保使用 Ant Design 的样式

const copyToClipboard = (text) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;
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

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // 每页显示的数据条数

  // 从 vendorfee.json 文件中读取数据
  useEffect(() => {
    fetch("/vendorfee.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // 根据搜索词过滤数据
  useEffect(() => {
    const results = data.filter((item) =>
      item.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
    setCurrentPage(1); // 每次搜索时重置到第一页
  }, [searchTerm, data]);

  // 计算当前页显示的数据
  const currentData = filteredData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Vendor Search</h1>
      <Input
        placeholder="Search by vendor name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", width: "300px" }}
      />
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={currentData}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.vendor}>
              {/* <p>
                Selling Fee: ${item.sellingFee.toFixed(2)}
                <Button
                  type="link"
                  onClick={() => copyToClipboard(item.sellingFee.toFixed(2))}
                  style={{ marginLeft: "10px" }}
                >
                  Copy
                </Button>
              </p> */}
              <p>
                Selling Fee: ${item.sellingFee}
                <Button
                  type="link"
                  onClick={() => copyToClipboard(item.sellingFee)}
                  style={{ marginLeft: "10px" }}
                >
                  Copy
                </Button>
              </p>
              <p>
                Inspection Fee: ${item.inspectionFee}
                <Button
                  type="link"
                  onClick={() => copyToClipboard(item.inspectionFee)}
                  style={{ marginLeft: "10px" }}
                >
                  Copy
                </Button>
              </p>
              <p>
                Total Fees: ${item.totalFees}
                <Button
                  type="link"
                  onClick={() => copyToClipboard(item.totalFees)}
                  style={{ marginLeft: "10px" }}
                >
                  Copy
                </Button>
              </p>
            </Card>
          </List.Item>
        )}
      />
      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={filteredData.length}
        onChange={(page) => setCurrentPage(page)}
        style={{ marginTop: "20px", textAlign: "center" }}
      />
    </div>
  );
};

export default App;
