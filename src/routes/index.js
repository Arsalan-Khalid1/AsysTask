import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import CovidDetails from '../pages/CovidDetails'
import Statistics from '../components/Statistics'

const { Header, Sider, Content } = Layout

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">Summary</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/details">Details</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: this.toggle,
                },
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '80em',
              }}
            >
              <Switch>
                <Route path="/details">
                  <CovidDetails />
                </Route>
                <Route path="/">
                  <Statistics />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default SiderDemo
