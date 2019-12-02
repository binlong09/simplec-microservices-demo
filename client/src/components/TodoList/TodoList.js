import React, { Component } from 'react';
import { List, Typography, Layout } from 'antd';

import moment from 'moment';

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';

import $ from 'jquery';
import 'jquery-ui-bundle';

const { Sider } = Layout;

export class TodoList extends Component {
	render () {
		const { item } = this.props;
		return (
			<div id='external-events'>
				<List
					bordered
				>
				<div className='fc-event'>
				<List.Item>
						{item}
					</List.Item>
				</div>
				</List>
			</div>
		);
	}
	componentDidMount() {
		$('#external-events .fc-event').each(function() {
			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
		});
  }

};

export default TodoList;