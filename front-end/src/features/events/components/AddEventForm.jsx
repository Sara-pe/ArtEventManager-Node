import styles from '../AddEvent.module.css'
import { useId } from 'react';
import { useNavigate } from 'react-router';

import eventService from '../../../service/event.service'

export const AddEventForm = () => {


    const id = useId();
    const navigate = useNavigate();

    const handleAddSubmit = async (formData) => {
        const data = Object.fromEntries(formData.entries());
        await eventService.create(data);
        navigate('/');
    }


    return (
        <form className={styles.form} action={handleAddSubmit}>
            <div className={styles.btnFields}>
                <div className={styles.fields}>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'name'}>Event's name</label>
                        <input id={id + 'name'} type="text" name="name" className={styles.input} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'type'}>Type</label>

                        <select id={id + 'type'} name="type" className={styles.select}>
                            <option value="expo">Expo</option>
                            <option value="concert">Concert</option>
                            <option value="theatre">Theatre</option>
                            <option value="dance">Dance</option>
                            <option value="talk">Talk</option>
                            <option value="workshop">Workshop</option>

                        </select>
                    </div>

                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'where'}>Where?</label>
                        <input id={id + 'where'} type="text" name='at' className={styles.input} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'date'}>Date</label>
                        <input id={id + 'date'} type="date" name='date' className={styles.input} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'time'}>What time?</label>
                        <input id={id + 'time'} type="text" name='hour' className={styles.input} />
                    </div>
                     <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'city'}>City</label>
                        <input id={id + 'city'} type="text" name='city' className={styles.input} />
                    </div>

                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'address'}>Address</label>
                        <input id={id + 'address'} type="text" name='address' className={styles.input} />
                    </div>
                </div>

                <button className={styles.btn} type="submit">Add Event</button>
            </div>

        </form>
    )

}