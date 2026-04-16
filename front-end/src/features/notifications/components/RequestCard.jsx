import styles from '../Notifications.module.css'

export const RequestCard = ({ index, request }) => {

    const timeAgo = (date) => {
        const diff = new Date() - new Date(date)
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const months = Math.floor(days / 30)
        const years = Math.floor(days / 365)

        if (days === 0) return 'Today'
        if (days === 1) return 'Yesterday'
        if (days < 30) return `${days} days ago`
        if (months === 1) return '1 month ago'
        if (months < 12) return `${months} months ago`
        if (years === 1) return '1 year ago'
        return `${years} years ago`
    }

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

                    <p>{request.createdAt && timeAgo(request.createdAt)}</p>
                </div>

            </div>
            <div className={styles.btnsReq}>
                <button className='btn-1'>Accept</button>
                <button className='btn-2'>Decline</button>
            </div>
        </div>
    )

}

