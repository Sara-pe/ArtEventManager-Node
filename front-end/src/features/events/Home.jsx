import styles from './Home.module.css'
import {EventList} from './components/EventList'

export const Home = () => {

    return (
        //! To do: make this header a component for the future pages

        <div className={styles.page}>
            <div className={styles.container}>

                <div className={styles.header}>

                <div>
                    <h1>Art Events</h1>
                    <p className='subtitle'> We found X events</p>
                </div>

                <div className={styles.buttons}>               
                        <button className="btn-icon"> <img src="/icons/search.png" alt="Search event" /> </button>
                        <button className="btn-icon"> <img src="/icons/plus.png" alt="Add evebt" /> </button>           
                </div>
                </div>

          
            <EventList/> 
            </div>
        </div>
    
    )
}