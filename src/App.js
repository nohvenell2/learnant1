import React from 'react';
import AppRouter from './routes/AppRouter'
import SiderMenu from './components/SiderMenu';
import { Layout } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const App=()=>{
  return (
    <div>
      {/*App.js 에서 실제로 구현할 코드 */}
      <Layout>
        <Header style={{display:'flex', alignItems:'center', color: 'white'}}><h1>Project</h1></Header>
        <Layout>
          <Sider><SiderMenu /></Sider>
          <Content>
            <div style={{padding: 80,minHeight: 360,}}>
              <AppRouter />
            </div>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>
  )
}
export default App;