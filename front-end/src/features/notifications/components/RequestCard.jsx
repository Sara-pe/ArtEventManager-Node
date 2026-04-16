import styles from '../Notifications.module.css'

export const RequestCard = ({ index, request }) => {

    const daysAgo = Math.floor((new Date() - new Date(request.createdAt)) / (1000 * 60 * 60 * 24))

    return (
        <div className={`${styles.cardReq} ${index % 5 === 0 ? styles.color0 :
            index % 5 === 1 ? styles.color1 :
                index % 5 === 2 ? styles.color2 :
                    index % 5 === 3 ? styles.color3 :
                        styles.color4
            }`}>

           <div className={styles.thirdLine}>
                <div className={styles.initials}>
                    <p>{request.from.name[0]}{request.from.lastname[0]}</p>
                </div>

                <div>
                    <p className={styles.from}>{request.from.name} {request.from.lastname}</p>

                    <p>{request.createdAt && (daysAgo === 0 ? 'Today' : daysAgo === 1 ? 'Yesterday' : `${daysAgo} days ago`)}</p>
                </div>
            
            </div>
            <div className={styles.btnsReq}>
                <button className='btn-1'>Accept</button>
                <button className='btn-2'>Decline</button>
            </div>
        </div>
    )

}

