import { useId } from 'react';
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router';
import styles from '../Auth.module.css'
import authService from '../../../service/auth.service'
import { useState } from 'react';

export const RegisterForm = () => {
    const id = useId();
    const navigate = useNavigate();

    const [error, setError] = useState('')

    const handleRegisterSubmit = async (formData) => {
        
        console.log(formData)
        setError('');
        //Convert into an JS object
        const data = Object.fromEntries(formData.entries())

        try {
            await authService.register(data);
            navigate('/auth/login');
        } catch (err) {
            if (err.status === 409) {
                setError(err.message);
            } else {
                navigate('/error');
            }
        }
    }

    return (
        <form className={styles.form} action={handleRegisterSubmit}>
            <div className={styles.btnFields}>
                <div className={styles.fields}>
                    <div className={styles.fieldGroup}>
                        <label htmlFor={id + 'name'}>Name</label>
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

                    {error && <div className='error'><p>{error}</p> </div>}
                </div>

                <button className={styles.btn} type="submit">Submit</button>
            </div>

            {/* Divider */}

            <div className={styles.divider}>
                <span className={styles.dividerLine} />
                <span className={styles.dividerText}>or</span>
                <span className={styles.dividerLine} />
            </div>

            <div className={styles.switchPrompt}>
                <p>Already have an account? <NavLink className={styles.switchLink} to="/auth/login">log in</NavLink></p>
            </div>

        </form>
    )
}