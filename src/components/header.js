import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import pokeball from '../assets/Pokeball.png'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return(
    <header className={styles.header}>
      <Image src={pokeball} alt='pokebola' className={styles.pokeball} />
      <div className={styles.input_container}>
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          style={{color: "#666666",}}
          className={styles.search_icon}
        />  
        <input 
          type='text'
          placeholder='Insira o nome ou numero'
          className={styles.search_input}
        />
      </div>
    </header>
  )
}