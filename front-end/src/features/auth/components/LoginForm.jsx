import { useId } from 'react';
import { NavLink } from 'react-router'
import styles from '../Auth.module.css'

export const LoginForm = () => {

    const id = useId();

    return (
        <form className={styles.form} action={''}>

            <div className={styles.btnFields}>
                <div className={styles.fields}>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'email'}>Email</label>
                        <input id={id + 'email'} type="email" name='email' className={styles.input} />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'password'}>Password</label>
                        <input id={id + 'password'} type="password" name='password' className={styles.input} />
                    </div>
                </div>

                <button className={styles.btn} type="submit">Log in</button>

            </div>


            {/* Divider */}
            <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>or</span>
                <span className={styles.dividerLine} />
            </div>

            <div className={styles.switchPrompt}>
                <p>Don't have an account? <NavLink className={styles.switchLink} to="/auth/register">sign in</NavLink></p>
            </div>
        </form>
    )
}