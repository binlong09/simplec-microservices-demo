import React, { Component } from 'react';

import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.js';

import $ from 'jquery';

import { getEvents } from '../../actions/eventActions'
import { connect } from 'react-redux';

const events = [
	{
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date('2019-03-03T03:24:00')
    // end: ,
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },
]

export class Calendar extends Component {
	constructor(props) {
		super(props);
		this.props.getEvents();
	}

	render() {
    return <div id="calendar"></div>;
  }
  componentDidMount() {
    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
			events: events,
			droppable: true, // this allows things to be dropped onto the calendar
			drop: function(date) {
				$(this).remove();
				console.log($(this).text())
				console.log(date.format())
			}
		})
	}
}

const mapStateToProps = state => ({
	events: state.events
})

export default connect(mapStateToProps, { getEvents })(Calendar)