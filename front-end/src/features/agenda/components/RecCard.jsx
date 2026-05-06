import styles from '../Agenda.module.css'
import axios from 'axios'
import { useState } from 'react';
import { NavLink } from "react-router-dom"

export const RecCard = ({ index, event }) => {


    return (
        <div className={styles.eventCard}>

            <img src={Array.isArray(event.media) ? event.media?.[0]?.link : event.media?.link} alt={event.translations?.en?.name} />

            {(event?.date_end === event?.date_start) ? <p> {new Date(event.date_start).toLocaleDateString('en-GB', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
            })}</p> :
                <p>
                    {new Date(event.date_start).toLocaleDateString('en-GB', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                    })} - {new Date(event.date_end).toLocaleDateString('en-GB', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                    })}
                </p>}


            <h3>{event.place?.translations?.en?.name} presents: {event.translations?.en?.name}</h3>


            <NavLink to="/add-api" state={{ event }} className={`btn-1 ${styles.btnFit}`}> Add event </NavLink>

        </div>
    )
}