import { useState, useEffect } from "react"
import userService from '../../../service/user.service'
import {FriendCard} from './FriendCard'
import styles from '../Friends.module.css'



export const FriendList = ( {onNmbFriends}) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = await userService.getById()
                setFriends(user.friends)
                setLoading(false)

            } catch (err) {
                setError(true)
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        onNmbFriends(friends.length)
    }, [friends])

    console.log(friends)


    return (
      <div className={styles.listCards}>
            {friends.map((friend, index) => (
                <FriendCard key={friend._id} friend={friend} index={index} />
            ))}

        </div>
    )
}