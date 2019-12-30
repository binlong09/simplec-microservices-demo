import React, { Component } from 'react'
import { List, Typography, Card, Button } from 'antd'
import { axiosInstance } from '../../services/client'
import { getEvents } from '../../actions/eventActions'
import { getTodos } from '../../actions/todoActions'
import { connect } from 'react-redux'

class TodoItem extends Component {

  handleAddToCalendar = (title, id) => async () => {
    const event = {
      title,
      start: new Date(),
      end: new Date(),
      allDay: true
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      }
    }

    console.log(config)

    await axiosInstance.post('/api/events', event, config)
      .then(async (res) => {
        this.props.getEvents()
        // await axiosInstance.delete('/')
        await axiosInstance.delete(`/api/todos/${id}`, config)
          .then(() => this.props.getTodos())
          .catch((err) => console.log(err))
      })
      .catch(err => console.log(err))
  }

  render () {
    const { title, _id } = this.props.item

    return (
      <div>
        <Card>{title}</Card>
        <Button
          style={{ position: 'float' }}
          onClick={this.handleAddToCalendar(title, _id)}
        >
          Add to Calendar
        </Button>
      </div>
    )
  }
}

export default connect(null, { getEvents, getTodos })(TodoItem)