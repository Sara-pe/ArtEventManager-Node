import styles from './Notifications.module.css'
import { FriendRequestsList } from './components/FriendRequestsList'
import { EventInvitesList } from './components/EventInvitesList'
import { useState } from 'react'

export const Notifications = () => {


    const [active, setActive] = useState(1)

    return (
        <div>

            <div className={styles.page}>
                <div className={styles.container}>

                    {/* Header */}
                    <div className={styles.header}>
                        <h1>Notifications</h1>
                        <p className='subtitle'>You have X notifications</p>
                    </div>
                    <div className={styles.buttons}>


                        <button onClick={() => setActive(1)} className={(active === 1) ? styles.btnOn : styles.btnOff}>
                            <p>Friend Requests</p>
                            <p className={styles.nmb}>4</p>
                        </button>

                        <button onClick={() => setActive(2)} className={(active === 2) ? styles.btnOn : styles.btnOff}>
                            <p>Event Invites</p>
                            <p className={styles.nmb} >2</p>
                        </button>
                    </div>
                    {(active === 1) &&
                        <FriendRequestsList />}

                    {(active === 2) &&
                        <EventInvitesList />}

                </div>
            </div>

        </div>
    )
}