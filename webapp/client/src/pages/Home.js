import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar';
import MyCalendar from '../components/Calendar/Calendar';
import TodoList from '../components/TodoList/TodoList';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { Layout } from 'antd';

export class Home extends Component {

  render() {
    const { Header, Sider, Content } = Layout;

    return (
      <div>
        <Layout >
            <NavBar />
          <Layout >
            <Sider
              className = 'home-todoList_wrapper'
              width = {300}
              theme = "light"
            >
            <TodoList/>

            </Sider>
            <div className = 'home-calendar_wrapper' style = {{marginLeft: 300}}>
            <Content style={{ height: "90%" }}>
              <MyCalendar/>
            </Content>
            </div>

          </Layout>
        </Layout>


      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

Home = DragDropContext(HTML5Backend)(Home);

export default connect(mapStateToProps, null)(Home);
