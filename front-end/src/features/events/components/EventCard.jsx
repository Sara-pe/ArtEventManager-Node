import styles from '../Home.module.css'

export const EventCard = ( {event} ) => {
    return (
        <div className={styles.card}>
            <div className={styles.firstLine}>
                <p>{event.type}</p>
                <p>{event.date}</p>
            </div>
            <h2>{event.name} @{event.at}</h2>
            <div className={styles.thirdLine}>
                <div className={styles.interested}>
                    <p className={styles.nmbInterested}>+{event.interested.length}</p>
                      {event.interested.map(user => (
        <p key={user._id}>{user.name} will go</p>
    ))}
                </div>
                <button className="btn-2">Send Event</button>
            </div>

        </div>
    )
}