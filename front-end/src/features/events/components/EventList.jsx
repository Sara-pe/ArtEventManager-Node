import eventService from '../../../service/event.service'
import { useState, useEffect } from 'react'
import { EventCard } from './EventCard'

export const EventList = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchEvents = async () => {

            try {
                const events = await eventService.getAll()
                console.log('events:', events)
                setData(events);
                setLoading(null)
                setError(null)

            } catch (err) {
                console.log('error:', err)
                setData(null)
                setLoading(null)
                setError(true)
            }
        }

        fetchEvents()

    }, [])

   
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>
    if (!data) return null
    
 const allEvents = [...data.created, ...data.interested]

    return (
        <div>

            {data && allEvents.map(event => (
                <EventCard key={event._id} event={event} />
            ))
            }


        </div>
    )
}



