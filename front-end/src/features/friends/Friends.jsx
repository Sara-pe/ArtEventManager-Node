
import styles from './Friends.module.css'
import { FriendList } from './components/FriendList'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Friends = () => {

    const [nmbFriends, setNmbFriends] = useState(0)

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1>Friends</h1>
                        <p className='subtitle'> You have {nmbFriends} friends</p>
                    </div>

                    <div className={styles.buttons}>
                        <button className="btn-icon"> <img src="/icons/search.png" alt="Search event" /> </button>
                        <NavLink to='/users' className="btn-icon"><img src="/icons/plus.png" alt="Add event" /></NavLink>
                    </div>
                </div>

                <FriendList onNmbFriends={setNmbFriends}/>
            </div>
        </div>
   
         
    )
}