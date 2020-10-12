import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Form, Input, Row, Col, Button, notification } from "antd";
import axios from "../../configs/axios";

function register(props) {
  let strongRegex = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-])(\\S).{8,}$"
  );

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onFinish = async (values) => {
    const { username, password, name, surname, email } = values;
    try {
      await axios.post("/users/register", {
        username,
        password,
        name,
        surname,
        email,
      });
      props.history.push("/");
      notification.success({
        message: "สมัครสำเร็จ",
      });
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || "สมัครล้มเหลว",
      });
    }
  };
  return (
    <Row style={{ height: "100vh" }} justify="center" align="middle">
      <Col xs={20} sm={9} md={9} lg={8} xl={6} xxl={5}>
        <Form
          {...formItemLayout}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (
                    value.length >= 8 &&
                    value.length <= 22 &&
                    strongRegex.test(value)
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Password have Uppercase letter , Lowercase letter , Number , Symbols And more 8"
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="surname"
            label="Surname"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Row justify="space-around">
            <Col>
              <Link to="/">
                <Button type="link">Login</Button>
              </Link>
            </Col>
            <Col>
              <Button htmlType="submit" type="primary">
                Register
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default withRouter(register);
