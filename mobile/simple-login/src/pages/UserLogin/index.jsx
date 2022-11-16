import React from "react";
import { NavBar, Input, Button, Form } from "antd-mobile";
import * as snowApi from "../../services/snowApi";
import "./index.less";

export default function UserLogin() {

  const onLogin = () => {
    const phone = 12345679801;
    snowApi.requestVerifyCode(phone);
  }

  return (
    <div>
      <NavBar back={null}>用户登录</NavBar>
      <Form layout='horizontal'>
        <Form.Item
          label='手机号'
        >
          <Input placeholder='请输入手机号' clearable />
        </Form.Item>
        <Form.Item
          label='短信验证码'
          extra={
            <div className="extraPart">
              <a href=" ">发送验证码</a>
            </div>
          }
        >
          <Input placeholder='请输入验证码' clearable />
        </Form.Item>
      </Form>
      <Button block color="primary" size="large" onClick={onLogin}>登录</Button>
    </div>
  );
}