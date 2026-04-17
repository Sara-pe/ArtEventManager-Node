import styles from '../Home.module.css'

export const EventCard = ({ event, index }) => {
    return (
        <div className={`${styles.card} ${index % 5 === 0 ? styles.color0 :
                index % 5 === 1 ? styles.color1 :
                    index % 5 === 2 ? styles.color2 :
                        index % 5 === 3 ? styles.color3 :
                            styles.color4
            }`}>

            <div className={styles.firstLine}>
                <div>
                    <p className={styles.tag}>{event.type}</p>
                    <p>{new Date(event.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
                </div>
               {/* <button ><img className={styles.iconXs} src="/icons/down.png" alt="Open" /></button> */}
            </div>
            <h2>{event.name} @{event.at}</h2>
            <div className={styles.thirdLine}>
                <div className={styles.interested}>
                    <p className={styles.nmbInterested}>+{event.interested.length}</p>
                    {event.interested.map(user => (
                        <p key={user._id}>{user.name} will go</p>
                    ))}
                </div>
                <button className="btn-arrow"><img src="/icons/sendArrow2.png" alt="" /></button>
            </div>

        </div>
    )
}