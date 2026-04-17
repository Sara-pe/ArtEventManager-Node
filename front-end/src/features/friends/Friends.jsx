
import styles from './Friends.module.css'
import { FriendList } from './components/FriendList'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Friends = () => {

    const [nmbFriends, setNmbFriends] = useState(0)
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <h1>Friends</h1>
                        <p className='subtitle'> You have {nmbFriends} friends</p>
                    </div>

                    <div className={styles.buttons}>
                        <button className="btn-icon" onClick={()=>{setShowSearch(true)}}> <img src="/icons/search.png" alt="Search event" /> </button>
                        <NavLink to='/users' className="btn-icon"><img src="/icons/plus.png" alt="Add event" /></NavLink>
                    </div>
                </div>

   {showSearch && (<div className={styles.searchContainer}>
                    <input type="text" value={search} placeholder="   Search friend"
                        onChange={(e) => setSearch(e.target.value)} />

                    <button onClick={() => setShowSearch(false)}>{/*<img src="/icons/close.svg" alt="Close search bar" /> */}<p className='black'>Cancel</p></button>
                </div>
                )}

                <FriendList onNmbFriends={setNmbFriends} search={search}/>
            </div>
        </div>
   
         
    )
}