import styles from '../Notifications.module.css'

export const InviteCard = ({ invite, index }) => {

    return (

        <div className={`${styles.card} ${index % 5 === 0 ? styles.color0 :
            index % 5 === 1 ? styles.color1 :
                index % 5 === 2 ? styles.color2 :
                    index % 5 === 3 ? styles.color3 :
                        styles.color4
            }`}>

            <div className={styles.firstLine}>
                <p className={styles.tag}>{invite.eventType}</p>
                <p>{new Date(invite.eventDate).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
            </div>


            <h2>{invite.eventName} @{invite.eventAt}</h2>

            <div className={styles.thirdLine}>
                <div className={styles.initials}>
                    <p>{invite.from.name[0]}{invite.from.lastname[0]}</p>
                </div>
                <p>Invited by <span className={styles.from}>{invite.from.name} {invite.from.lastname}</span></p>

            </div>
            <div className={styles.btns}>

                <button className='btn-3'>I'll go</button>
                <button className='btn-2'>Can't make it</button>
            </div>

        </div>
    )
}