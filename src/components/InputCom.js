import { Button, Col, Input, Row, Select } from "antd";
import React from "react";
import { useState, useEffect } from "react";

function InputCom(props) {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("A");
  const { Option } = Select;
  const { arr, setArr, idx, setSubmit } = props;
  const deleteArr = (target) => {
    let newArr = [...arr];
    newArr = newArr.filter((ele, idx) => idx !== target);
    setArr(newArr);
  };
  const inputSubject = (e) => {
    setSubject(e.target.value);
  };
  const inputGrade = (value) => {
    setGrade(value);
  };
  useEffect(() => {
    let newValue = arr.map((ele, idxArr) =>
      idxArr === idx ? { [subject]: grade } : ele
    );
    setArr(newValue);
  }, [subject, grade]);

  return (
    <Row justify="center">
      <Col>
        <Input value={subject} placeholder={"วิชา"} onChange={inputSubject} />
      </Col>
      <Col>
        <Select
          defaultValue={grade}
          style={{ width: 120 }}
          onChange={inputGrade}
        >
          <Option value="A">A</Option>
          <Option value="B+">B+</Option>
          <Option value="B">B</Option>
          <Option value="C+">C+</Option>
          <Option value="C">C</Option>
          <Option value="D+">D+</Option>
          <Option value="D">D</Option>
          <Option value="F">F</Option>
        </Select>
      </Col>
      <Button onClick={() => deleteArr(idx)}>ลบ</Button>
    </Row>
  );
}

export default InputCom;
