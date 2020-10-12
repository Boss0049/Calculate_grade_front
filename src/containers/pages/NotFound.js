import React from "react";
import { Row, Empty } from "antd";

function NotFound() {
  return (
    <Row style={{ height: "100%" }} justify="center" align="middle">
      <Empty description={"404: Page Not Found"} />
    </Row>
  );
}

export default NotFound;
