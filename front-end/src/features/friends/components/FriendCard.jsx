import styles from '../Friends.module.css'
import userService from '../../../service/user.service'
import { useState } from 'react'

export const FriendCard = ({ friend, index }) => {

    const [deleted, setDeleted] = useState(false)

    const handleDeleteFriend = async (friendId) => {
        try {

            await userService.deleteFriend(friendId)
            setDeleted(true)

        } catch (err) {
            console.log(err)
        }
    }


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
               { deleted ? ( <p>Removed</p> ) : (<button className='btn-2' onClick={() => { handleDeleteFriend(friend._id) }}>Remove</button>)  } 
            </div>
        </div>
    )
}