import React, { Component } from 'react';
import { Layout, Form, Button, Modal, Input, Icon } from 'antd';
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { getTodos } from '../../actions/todoActions'
import { axiosInstance } from '../../services/client';

const { Sider } = Layout;

const items = [
	{
		id: '1',
		title: 'put garbage into a can',
	},
	{
		id: '2',
		title: 'flush the toilet'
	},
	{
		id: '3',
		title: 'Read the expanse'
	}
]

class TodoList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			toggle: false,
			todoItem: null
		}
	}

	onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

	deleteItem = (id) => {
    console.log('deleting id: ' + id)
	}

	handleNewTodoItem = (title) => async () => {
		console.log(' I was called i must answer ')

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'x-auth-token': localStorage.getItem('token')
			}
		}

		const todo = {
			title
		}

		await axiosInstance.post('/api/todos', todo, config)
			.then((res) => {
				this.setState({ toggle: false })
				this.props.getTodos()
			})
			.catch(err => console.log(err))
	}

	toggleModal = () => {
		this.setState({ toggle: !this.state.toggle })
	}

	componentDidMount() {
		this.props.getTodos()
	}

	render () {
		const { todos } = this.props.todos.todo

		console.log(this.props.todos.todo.todos)

		return (
			<div>
				<Modal
					title="Add new todo item"
					visible={this.state.toggle}
					onOk={this.handleNewTodoItem}
					onCancel={this.toggleModal}
				>
					<Form.Item label="Todo Item">
            <Input
              prefix={<Icon type="code" style={{ color: 'rgba(0,0,0,.25)' }} />}
              id="todoItem"
							name="todoItem"
							onPressEnter={this.handleNewTodoItem(this.state.todoItem)}
              onChange={this.onChange}
            />
          </Form.Item>
				</Modal>
				{todos.map((item, index) => (
					<TodoItem item={item} key={index}/>
				))}
				<Button
					type="primary"
					style={{ marginTop: 100 }}
					onClick={this.toggleModal}
				>Add Todo Item</Button>
			</div>
		);
	}
};

const mapStateToProps = state => ({
	todos: state
})

export default connect(mapStateToProps, { getTodos })(TodoList)