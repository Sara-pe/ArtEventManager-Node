import { AddEventForm } from './components/AddEventForm'
import { NavLink } from 'react-router-dom'
import styles from './AddEvent.module.css'

export const AddEvent = () => {
    return (
        <div>
         
            <div className={styles.page}>
                <div className={styles.container}>

                    {/* Header */}
                   <div className={styles.headerContainer}>
                    <div className={styles.header}>
                        <h1>Add Event</h1>
                         <p className='subtitle'>Plan your next art experience</p>
                    </div>
                  <NavLink to="/"> <img src="/icons/close.svg" alt="Close" /> </NavLink> 
                    </div>

                <AddEventForm />

                </div>
            </div>

        </div>
    )
}