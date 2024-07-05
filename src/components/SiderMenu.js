import React from 'react';
import { HomeOutlined , UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    type:'divider',
  },
  {
    key: 'grp1',
    label: 'SK LEE',
    icon: <UserOutlined />,
    children:[
      {
        key:'Asset1',
        label:'Asset1',
      },
      {
        key:'Asset2',
        label:'Asset2',
      }
    ],
  },
  {
    type:'divider',
  },
  {
    key: 'grp2',
    label: 'DK LEE',
    icon: <UserOutlined />,
    children:[
      {
        key:'Asset3',
        label:'Asset3',
      },
      {
        key:'Asset4',
        label:'Asset4',
      }
    ],
  },
  
];
const SiderMenu = () => {
  const navigate= useNavigate();
  const onClick = (e) => {
    console.log('click ', e.key);
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