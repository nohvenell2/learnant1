import React from 'react';
import { HomeOutlined , UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import projectInfo from '../projectInfo';
const items = projectInfo;
const SiderMenu = () => {
  const navigate= useNavigate();
  const onClick = (e) => {
    navigate(`/${e.key}`);
  };
  return (
    <div style={{ display:'flex', height: '100vh',}}>
      <Menu
        onClick={onClick}
        style={{
          width: 256,
          flex: "auto",
          //fontSize: "18px",
        }}
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['grp1','grp2']}
        mode="inline"
        items={items}
      />
    </div>
  );
};
export default SiderMenu;