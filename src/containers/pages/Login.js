import React from "react";
import { Row, Col, Form, Input, Button, notification } from "antd";
import { Link } from "react-router-dom";
import axios from "../../configs/axios";
import LocalStorageService from "../../services/LocalStorage";

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

function Login(props) {
  function onFinish({ username, password }) {
    axios
      .post("/users/login", { username, password })
      .then((res) => {
        LocalStorageService.setToken(res.data.accessToken);
        props.setRole("user");
        notification.success({
          message: "เข้าสู่ระบบสำเร็จแล้ว",
        });
      })
      .catch((err) => {
        notification.error({
          message: err.response?.data?.message || "เข้าสู่ระบบล้มเหลว",
        });
      });
  }

  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
        <Form onFinish={onFinish} {...formItemLayout}>
          <Row>
            <Form.Item
              style={{ width: "100%" }}
              label="Username"
              name="username"
              rules={[
                { required: true, message: "กรุณากรอก Username ด้วยนะจ๊ะ" },
              ]}
            >
              <Input />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              style={{ width: "100%" }}
              label="Password"
              name="password"
              rules={[
                { required: true, message: "กรุณากรอก Password ด้วยแหนะ" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Row>
          <Row justify="space-around">
            <Col>
              <Link to="/register">
                <Button type="link">Register</Button>
              </Link>
            </Col>
            <Col>
              <Button htmlType="submit" type="primary">
                Login
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default Login;
