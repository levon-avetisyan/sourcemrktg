import React from 'react';
import { Avatar, Button, Dropdown, Layout, MenuProps } from 'antd';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import useAuth from '../../../hooks/useAuth.ts';

interface IProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const { Header } = Layout;

const DashboardHeader: React.FC<IProps> = ({ collapsed, setCollapsed }) => {
  const { logout } = useAuth();
  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <ProfileOutlined />, // Icon for Profile
      label: <span onClick={() => console.log('Profile action triggered!')}>Profile</span>,
    },
    {
      key: '2',
      icon: <SettingOutlined />, // Icon for Account Settings
      label: (
        <span onClick={() => console.log('Account Settings action triggered!')}>
          Account Settings
        </span>
      ),
    },
    {
      key: '3',
      type: 'divider', // Divider between links and the logout
    },
    {
      key: '4',
      icon: <LogoutOutlined />, // Icon for Logout
      label: <span onClick={() => logout()}>Logout</span>,
    },
  ];

  return (
    <Header className="header">
      <div className="header-flex">
        <Button
          className="header-button"
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
          <Avatar size={30} icon={<UserOutlined />} style={{ cursor: 'pointer' }} />
        </Dropdown>
      </div>
    </Header>
  );
};

export default DashboardHeader;
