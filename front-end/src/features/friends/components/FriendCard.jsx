import styles from '../Friends.module.css'


export const FriendCard = ({ friend, index }) => {

    return (
            <div className={`${styles.card} ${index % 5 === 0 ? styles.color0 :
                index % 5 === 1 ? styles.color1 :
                    index % 5 === 2 ? styles.color2 :
                        index % 5 === 3 ? styles.color3 :
                            styles.color4
                }`}>

                <div className={styles.left}>
                    <div className={styles.initials}>
                        <p>{friend.name[0]}{friend.lastname[0]}</p>
                    </div>


                    <p className={styles.from}>{friend.name} {friend.lastname} </p>


                </div>
                <div className={styles.btns}>
                    <button className='btn-2'>Remove</button>
                </div>
            </div>
    )
}