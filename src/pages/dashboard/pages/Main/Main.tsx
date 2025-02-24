import React, { useState } from 'react';
import './Main.scss';
import { BarChartOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Button } from 'antd';
import Lotus from '../../../../assets/lotus.png';
import SalesSection from '../../sections/Sales/SalesSection.tsx';
import { AnalyticsOutlined } from '@mui/icons-material';
import AnalyticsSection from '../../sections/Analytics/AnalyticsSection.tsx';
import DashboardHeader from '../../components/DashboardHeader.tsx';

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
    label: 'Analytics',
  },
];

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('1');

  const renderContent = () => {
    switch (activeMenuItem) {
      case '1':
        return <SalesSection />;
      case '2':
        return <AnalyticsSection />;
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

export default Main;
