import styles from '../Agenda.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';


export const Rec1 = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {

        const fetchEventsApi = async () => {

            try {
                const eventsApi = await axios.get('https://api.brussels:443/api/agenda/0.0.1/events', {
                    headers: {
                        Authorization: 'Bearer c5442c25-bdd2-3434-9385-9101b673cc53'
                    }
                })

                console.log('events sin parsear:', eventsApi.data)

                // Pars XML
                const parser = new DOMParser()
                const xml = parser.parseFromString(eventsApi.data, 'text/xml')

                // extract events
                const events = Array.from(xml.querySelectorAll('event'))

                console.log('events:', events)

                setData(events)
                setLoading(false)

            } catch (err) {
                setLoading(false)
                setError(true)
            }
        }

        fetchEventsApi()

    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Something went wrong</p>
    if (!data) return null

    return (
         <div className={styles.carrousel}>
        <div className={styles.eventList}>
            {data.map((event, index) => (
                <div className={styles.eventCard} key={index}>

                    <img src={event.querySelector('media link')?.textContent} alt={event.querySelector('en > name')?.textContent} />


                    <p> {new Date(event.querySelector('date_start')?.textContent)
                        .toLocaleDateString('en-GB', {
                            weekday: 'short',
                            day: 'numeric',
                            month: 'short'
                        })}
                        -
                        {new Date(event.querySelector('date_end')?.textContent)
                            .toLocaleDateString('en-GB', {
                                weekday: 'short',
                                day: 'numeric',
                                month: 'short'
                            })}</p>

                    <h3 > {event.querySelector('place name')?.textContent} presents: {event.querySelector('translations > en > name')?.textContent}</h3>
                    <button className='btn-1'>Add event</button>
                </div>
                ))}
         <div className={styles.line}></div>       
        </div> 
        
       
        </div>
    )

}