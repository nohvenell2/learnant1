//SK 와 DK 의 프로젝트 key 는 겹치면 안된다
//icon 을 더 추가하고 싶으면 SiderMenu 에서 수정

/**
 * SK 의 프로젝트를 사이드 메뉴바 링크에 추가할 때 필요한 정보
 * @param {string} key - 페이지 이름으로 설정된다
 * @param {string} name - 메뉴바 이름으로 설정된다
 * @param {string} icon - 사용할 antd 아이콘. UserOutlined, BulbOutlined 중 택1
 */
const skProject = 
[
    {
    key : 'project1',
    name: 'Project1',
    icon: 'BulbOutlined',
    },
    {
    key : 'project2',
    name: 'Project2',
    icon: 'BulbOutlined',
    },
];
/**
 * DK 의 프로젝트를 사이드 메뉴바 링크에 추가할 때 필요한 정보
 * @param {string} key - 페이지 이름으로 설정된다
 * @param {string} name - 메뉴바 이름으로 설정된다
 * @param {string} icon - 사용할 antd 아이콘. UserOutlined, BulbOutlined 중 택1
 */
const dkProject = 
[
    {
        key : 'project3',
        name: 'Project3',
        icon: 'BulbOutlined',
    },
    {
        key : 'project4',
        name: 'Project4',
        icon: 'BulbOutlined',
    },
];
export {skProject, dkProject}; 

