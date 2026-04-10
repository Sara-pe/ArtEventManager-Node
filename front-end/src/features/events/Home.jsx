import styles from './Home.module.css'
import { EventList } from './components/EventList'
import { useState } from 'react';
import { NavLink } from "react-router-dom"

export const Home = () => {

    const [nmbEvents, setNmbEvents] = useState(0);


    return (
        //! To do: make this header a component for the future pages

        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.header}>

                    <div>
                        <h1>Art Events</h1>
                        <p className='subtitle'> We found {nmbEvents} events</p>
                    </div>

                    <div className={styles.buttons}>
                        <button className="btn-icon"> <img src="/icons/search.png" alt="Search event" /> </button>
                        <NavLink to="/add" className="btn-icon"><img src="/icons/plus.png" alt="Add event" /></NavLink>
                    </div>
                </div>


                <EventList onNmbEvents={setNmbEvents} />
            </div>
        </div>

    )
}