import styles from './Home.module.css'
import { EventList } from './components/EventList'
import { useState } from 'react';
import { NavLink } from "react-router-dom"

export const Home = () => {

    const [nmbEvents, setNmbEvents] = useState(0);
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    return (

        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.header}>

                    <div>
                        <h1>Art Events</h1>
                        <p className='subtitle'> We found {nmbEvents} events</p>
                    </div>


                    <div className={styles.buttons}>
                        <button className="btn-icon" onClick={() => setShowSearch(true)}> <img src="/icons/search.png" alt="Search event" /> </button>
                        <NavLink to="/add" className="btn-icon"><img src="/icons/plus.png" alt="Add event" /></NavLink>
                    </div>


                </div>
                {showSearch && (<div className={styles.searchContainer}>
                    <input type="text" value={search} placeholder="   Search event"
                        onChange={(e) => setSearch(e.target.value)} />

                    <button onClick={() => setShowSearch(false)}>{/*<img src="/icons/close.svg" alt="Close search bar" /> */}<p className='black'>Cancel</p></button>
                </div>
                )}

                <EventList onNmbEvents={setNmbEvents} search={search} />
            </div>
        </div>

    )
}