import styles from '../styles/loading.module.scss'

export default function Loading() {
  return (
    <div className={styles.centered}>
      <div className={styles.blob_1}/>
      <div className={styles.blob_2}/>
    </div>
  )
}