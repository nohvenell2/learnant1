import React from 'react';
import { HomeOutlined , UserOutlined, BulbOutlined, InfoCircleOutlined } from '@ant-design/icons';
/**
 * SideMenu 의 Menubar 로 연동되는 project 정보 
 * @param key 사이트 추가주소로 사용되는 이름
 * @param label Menubar 에 사용되는 이름
 * @param icon 상단 ant-design 으로 improt 된 icon 이름 중 택1
 * @param type group type 이면 그룹제목, divider 구분 선
 */
const projectInfo = [
    {
      key: '',
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
          key:'TempCarousel',
          label:'Carousel',
          icon:<BulbOutlined />,
        },
        {
          key:'TempForm1',
          label:'Form',
          icon:<BulbOutlined />,
        },
        {
          key:'SearchBar',
          label:'SearchBar',
          icon:<BulbOutlined />,
        },
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
          icon:<BulbOutlined />,
        },
        {
          key:'Asset4',
          label:'Asset4',
          icon:<BulbOutlined />,
        },
        {
          key:'Genshin',
          label:'Genshin',
          icon:<BulbOutlined />,
        }
      ],
    },
    {
      key: 'About',
      label: 'About',
      icon: <InfoCircleOutlined />,
    },
    
  ];
  export default projectInfo;