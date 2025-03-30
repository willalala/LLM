import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row, Button, Layout, Menu, theme, Flex } from "antd";
const { Header, Sider, Content } = Layout;

import HomePage from "./homepage";

const Page = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ backgroundColor: "#364A62" }}
        // style={{ backgroundColor: "#464879" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          style={{ backgroundColor: "#364A62" }}
          // style={{ backgroundColor: "#464879" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "主页",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "科目",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "数据",
            },
            {
              key: "4",
              icon: <VideoCameraOutlined />,
              label: "成绩",
            },
            {
              key: "5",
              icon: <UploadOutlined />,
              label: "设置",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
            background: "#91AEB0",
            // background: "#99D0D9",
            // backgroundColor: "#5C9DBA",
            // backgroundColor: "#D7AC93",
            // backgroundColor: "#926851",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              //位于左边
              float: "left",
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            // backgroundColor: "#5C9DBA",
            borderRadius: borderRadiusLG,
          }}
        >
          {/* Content */}
          <HomePage />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Page;
