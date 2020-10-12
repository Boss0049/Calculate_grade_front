import React from "react";
import { Button, Col, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode";
import LocalStorage from "../../services/LocalStorage";
import { withRouter } from "react-router-dom";

function Profile(props) {
  let decoded = null;
  if (LocalStorage.getToken()) {
    decoded = jwtDecode(LocalStorage.getToken());
  }
  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col span={24}>
        <Row justify="center" align="top">
          <Avatar size={150} icon={<UserOutlined />} />
        </Row>
        <Row justify="center" style={{ marginBottom: "50px" }}>
          <Col xs={10} sm={9} md={6} lg={4} xl={3} xxl={3}>
            <h1 style={{ fontWeight: "750" }}>{decoded.name}</h1>
          </Col>
          <Col xs={11} sm={5} md={4} lg={3} xl={2} xxl={2}>
            <h1 style={{ fontWeight: "750" }}>{decoded.surname}</h1>
          </Col>
        </Row>
        <Row justify="center" align="top">
          <Button
            onClick={() => {
              LocalStorage.removeToken();
              window.location.replace("/");
            }}
          >
            Logout
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default withRouter(Profile);
