import { Button, Col, Input, Row, Select } from "antd";
import React, { useState } from "react";
import InputCom from "../../components/InputCom";
import axios from "../../configs/axios";

function Home() {
  const [arr, setArr] = useState([0, 1, 2]);
  const [submit, setSubmit] = useState(false);
  const [result, setResult] = useState("");
  const { Option } = Select;
  const add = () => {
    const newArr = [...arr];
    newArr.push(arr.length);
    setArr(newArr);
  };
  const sendData = async () => {
    const result = await axios.post("http://localhost:8000/calculates/grade", [
      ...arr,
    ]);
    setResult(result.data.result);
  };
  return (
    <>
      <Row style={{ height: "100vh" }} justify="center" align="middle">
        <Col xs={10} sm={9} md={6} lg={4} xl={20} xxl={3}>
          {arr.map((ele, idx) => {
            return (
              <InputCom
                key={idx}
                arr={arr}
                setArr={setArr}
                idx={idx}
                setSubmit={setSubmit}
              ></InputCom>
            );
          })}

          <Row justify="center">เกรดที่ได้ {result}</Row>

          <Row justify="center">
            <Col span={2}>
              <Button onClick={add} style={{ width: "100%" }}>
                เพิ่มเติม
              </Button>
            </Col>
            <Col span={2}>
              <Button onClick={sendData} style={{ width: "100%" }}>
                ตกลง
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
