import { useId } from 'react';
import { NavLink } from 'react-router'
import styles from '../Register.module.css'

export const RegisterForm = () => {
    const id = useId();

    return (
   <form className={styles.form} action={''}>
    <div className={styles.fields}>
        <div className={styles.fieldGroup}>
            <label htmlFor={id + 'firstname'}>Name</label>
            <input id={id + 'name'} type="text" name="name" className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
            <label htmlFor={id + 'lastname'}>Last name</label>
            <input id={id + 'lastname'} type="text" name='lastname' className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
            <label htmlFor={id + 'email'}>Email</label>
            <input id={id + 'email'} type="email" name='email' className={styles.input} />
        </div>
        <div className={styles.fieldGroup}>
            <label htmlFor={id + 'password'}>Password</label>
            <input id={id + 'password'} type="password" name='password' className={styles.input} />
        </div>
    </div>

    <div className=''>
        <button className={styles.btn} type="submit">Submit</button>
    </div>

    {/* Divider */}
    <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerText}>or</span>
        <span className={styles.dividerLine} />
    </div>

    <div className={styles.loginPrompt}>
        <p>Already have an account? <NavLink className={styles.loginLink} to="/auth/login">log in</NavLink></p>
    </div>
</form>
    )
}