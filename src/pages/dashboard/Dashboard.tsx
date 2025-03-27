import React, { useState } from 'react';
import './Dashboard.scss';
import { BarChartOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Layout, Menu } from 'antd';
import Lotus from '../../assets/lotus.png';
import { AnalyticsOutlined } from '@mui/icons-material';
import DashboardHeader from './components/DashboardHeader.tsx';
import Onboarding from './sections/Onboarding';
import SalesSection from './sections/Sales';

const { Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <BarChartOutlined />,
    label: 'Sales',
  },
  {
    key: '2',
    icon: <AnalyticsOutlined />,
    label: 'Onboarding',
  },
];

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('1');

  const renderContent = () => {
    switch (activeMenuItem) {
      case '1':
        return <SalesSection />;
      case '2':
        return <Onboarding />;
      default:
        return null;
    }
  };

  return (
    <Layout hasSider>
      <Sider className="sider" collapsed={collapsed}>
        <div className="dash-logo">
          <div className={`logo ${collapsed ? 'collapsed' : ''}`}>
            <img src={Lotus} alt="Source MRKTG company logo" />
            source.
          </div>
        </div>
        <Menu
          className="sider-nav"
          theme="light"
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
        <DashboardHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content className="content">
          <div className="content-inner">{renderContent()}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
