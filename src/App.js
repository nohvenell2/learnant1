import React from 'react';
import AppRouter from './routes/AppRouter'
import SiderMenu from './components/SiderMenu';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const App=()=>{
  return (
    <div>
      {/*App.js 에서 실제로 구현할 코드 */}
      <Layout>
        <Link to="/">
          <Header style={{display:'flex', alignItems:'center', color: 'white'}}>
            <h1>Project</h1>
          </Header>
        </Link>
        <Layout>
          <Sider><SiderMenu /></Sider>
          <Content style={{display: 'flex'}}>
            <div style={{paddingLeft:30, minHeight: 200,}}>
              <AppRouter />
            </div>
          </Content>
        </Layout>
        {/*<Footer>footer</Footer>*/}
      </Layout>
    </div>
  )
}
export default App;