import React, { useState } from "react";
import {
  UserOutlined,
  PhoneOutlined,
  TeamOutlined,
  TagsOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import {
  Col,
  Divider,
  Row,
  Button,
  Layout,
  Menu,
  theme,
  Flex,
  Avatar,
  Image,
} from "antd";
import p1 from "../../assets/images/intro1.jpg";
import p2 from "../../assets/images/intro2.jpg";
import p3 from "../../assets/images/p1.png";
import p4 from "../../assets/images/p2.png";
import p5 from "../../assets/images/p3.png";
import p6 from "../../assets/images/intro3.png";
import p7 from "../../assets/images/intro4.png";
import p8 from "../../assets/images/intro5.png";

const HomePage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Row gutter={[8, 4]} style={{ height: "100%", width: "100%" }}>
        <Col span={18} style={{ height: "100%", width: "100%" }}>
          <Row gutter={[0, 0]} style={{ height: "100%", width: "100%" }}>
            <Col
              span={24}
              style={{
                height: "10%",
                width: "100%",
                paddingBottom: 8,
              }}
            >
              <div
                style={{
                  height: "100%",
                  //   backgroundColor: "#91AEB0",
                  backgroundColor: "#776C6B",
                  //   borderColor: "#776C6B",
                  //   borderWidth: 1,
                  //   borderStyle: "solid",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  //   justifyContent: "center",
                  // borderRadius: borderRadiusLG,
                  borderTopLeftRadius: borderRadiusLG,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 16,
                    paddingLeft: 16,
                  }}
                >
                  <Avatar
                    style={{ backgroundColor: "#91AEB0", marginRight: 8 }}
                    size={32}
                    icon={<UserOutlined />}
                  />
                  Willa
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 16,
                    paddingLeft: 16,
                  }}
                >
                  <Avatar
                    style={{ backgroundColor: "#91AEB0", marginRight: 8 }}
                    size={32}
                    icon={<PhoneOutlined />}
                  />
                  19115571569
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 16,
                    paddingLeft: 16,
                  }}
                >
                  <Avatar
                    style={{ backgroundColor: "#91AEB0", marginRight: 8 }}
                    size={32}
                    icon={<TagsOutlined />}
                  />
                  飞行学院2级1班
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    //位于最右端
                    marginLeft: "auto",
                    fontSize: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                >
                  <Avatar
                    style={{ backgroundColor: "#DC8E75", marginRight: 8 }}
                    size={32}
                    icon={<LogoutOutlined />}
                  />
                  登出
                </div>
              </div>
            </Col>
            <Col span={24} style={{ height: "90%", width: "100%" }}>
              <div
                style={{
                  // backgroundColor: "#B5594B",
                  height: "100%",
                  borderColor: "#776C6B",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderEndStartRadius: borderRadiusLG,
                  color: "white",
                }}
              >
                HomePage
              </div>
            </Col>
          </Row>
          {/* <Row
            gutter={[8, 24]}
            style={{ height: "80%", width: "100%", paddingTop: 16 }}
          >
            <Col span={24} style={{ width: "100%" }}>
              <div style={{ backgroundColor: "green", height: "100%" }}>
                HomePage
              </div>
            </Col>
          </Row> */}
        </Col>
        <Col span={6}>
          <div
            style={{
              backgroundColor: "#364A62",
              height: "100%",
              // borderColor: "#776C6B",
              // borderWidth: 1,
              // borderStyle: "solid",
              color: "white",
            }}
          >
            {/* <div
              style={{
                display: "flex flex-wrap",
                flexDirection: "row",
                alignItems: "center",
              }}
            > */}
            <div>
              <Image width="50%" style={{ padding: 4 }} src={p3} />
              <Image width="50%" style={{ padding: 4 }} src={p4} />
              <Image width="50%" style={{ padding: 4 }} src={p5} />
              <Image width="50%" style={{ padding: 4 }} src={p6} />
              {/* </div> */}
            </div>
            <div>111111111</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
