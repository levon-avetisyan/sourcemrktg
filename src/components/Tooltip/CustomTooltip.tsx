import React from 'react';
import { Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

interface CustomTooltipProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ title, children }) => {
  return (
    <Tooltip title={title} color="" placement="top" styles={{ root: { marginLeft: '0' } }}>
      <span style={{ cursor: 'pointer', width: '30px', marginLeft: '10px' }}>
        {children}
        <QuestionCircleOutlined style={{ color: '#969696', padding: 0 }} />
      </span>
    </Tooltip>
  );
};

export default CustomTooltip;
