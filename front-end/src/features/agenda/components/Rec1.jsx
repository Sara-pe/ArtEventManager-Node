import styles from '../Agenda.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { RecCard } from './RecCard'

export const Rec1 = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {

        const fetchEventsApi = async () => {

            try {
                const eventsApi = await axios.get('https://api.brussels:443/api/agenda/0.0.1/events', {
                    headers: {
                        Authorization: 'Bearer c5442c25-bdd2-3434-9385-9101b673cc53',
                       Accept: 'application/json'  
                    }
                })

                console.log('events', eventsApi.data)

              setData(eventsApi.data.response.results.event)
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
                    <RecCard key={index} index={index} event={event} />
                ))}
                <div className={styles.line}></div>
            </div>


        </div>
    )

}

// 🎬 Cinema 
//58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 119
//🎭 Theatre (id 49)
//49, 50, 51, 52, 53, 54, 55, 56, 120
//🖼️ Expo 
//23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48
//💃 Dance 
//15, 16, 17, 18, 19, 122, 147, 148, 149, 152, 153
//🎤 Concert 
//1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 118, 121, 123, 124, 125, 126, 127
//🗣️ Talk
//72, 86, 184
//🛠️ Workshop
//73, 169, 170, 171, 128-168, 186-216, 217-247
//🎪 Other everything else