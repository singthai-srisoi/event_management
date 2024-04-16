import React, { useState } from 'react'
import EditEvent from './EditEvent'

function Events() {

    const [events, setEvents] = useState([
        {id: 1, name: 'Event 1', date: '2021-01-01', location: 'Location 1', description: 'Description 1', fees: 100},
        {id: 2, name: 'Event 2', date: '2021-02-02', location: 'Location 2', description: 'Description 2', fees: 200},
        {id: 3, name: 'Event 3', date: '2021-03-03', location: 'Location 3', description: 'Description 3', fees: 300},
        {id: 4, name: 'Event 4', date: '2021-04-04', location: 'Location 4', description: 'Description 4', fees: 400},
        {id: 5, name: 'Event 5', date: '2021-05-05', location: 'Location 5', description: 'Description 5', fees: 500},
    ])

    const [editEvent, setEditEvent] = useState({
        id: 0,
        name: '',
        date: '',
        location: '',
        description: '',
        fees: 0
    })

    const handleEdit = e => {
        const id = parseInt(e.target.dataset.id)
        const event = events.find(event => event.id === parseInt(id))
        setEditEvent(event)
        console.log('editEvent updated:', id)
    }

    const handleSubmit = (event) => {
        const index = events.findIndex(e => e.id === parseInt(event.id))
        event.id = parseInt(event.id)
        setEvents([...events.slice(0, index), event, ...events.slice(index+1)])
        setEditEvent({id: 0, name: '', date: '', location: '', description: '', fees: 0})
        console.log('events updated:', [...events.slice(0, index), event, ...events.slice(index + 1)])
    }

  return (
    <>
        <h1>Events</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Fees</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {events.map(event => {
                    return (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.name}</td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                            <td>{event.description}</td>
                            <td>{event.fees}</td>
                            <td>
                                <button data-id={event.id} onClick={handleEdit}>Edit</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>

          <EditEvent 
              {...editEvent}
              handleSubmit={handleSubmit}
           />
    </>
  )
}

export default Events