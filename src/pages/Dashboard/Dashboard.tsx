import React, { useState } from 'react';
import './Dashboard.scss';
import {
  AppstoreOutlined,
  BarChartOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Button, Image, Avatar } from 'antd';
import Logo from '../../assets/images/logo.svg';
import SalesReportTable from './components/SalesReportTable';

const { Header, Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <BarChartOutlined />,
    label: 'Sales Report',
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: 'Other',
  },
];

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('1');

  const renderContent = () => {
    switch (activeMenuItem) {
      case '1':
        return <SalesReportTable />;
      case '2':
        return <div>Dashboard Content</div>;
      default:
        return null;
    }
  };

  return (
    <Layout hasSider>
      <Sider className="sider" collapsed={collapsed}>
        <div className="dash-logo">
          <Image src={Logo} width={!collapsed ? 144 : 60} height={!collapsed ? 24 : 10} />
        </div>
        <Menu
          className="sider-nav"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(e) => setActiveMenuItem(e.key)}
        />
        <Button
          className="btn-collapse-sider"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-flex">
            <Button
              className="header-button"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            />
            <Avatar size={30} icon={<UserOutlined />} />
          </div>
        </Header>
        <Content className="content">
          <div className="content-inner">{renderContent()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
