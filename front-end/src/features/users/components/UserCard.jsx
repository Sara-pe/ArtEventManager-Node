import styles from '../User.module.css'


export const UserCard = ({user, index}) => {

    return (
         <div className={styles.card}>
       
                       <div className={styles.left}>
                           <div className={styles.initials}>
                               <p>{user.name[0]}{user.lastname[0]}</p>
                           </div>
       
       
                           <p className={styles.from}>{user.name} {user.lastname} </p>
       
       
                       </div>
                       <div className={styles.btns}>
                           <button className='btn-1'>Connect</button>
                       </div>
                   </div>
    )
}