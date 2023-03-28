import Image from 'next/image'
import pokeball from '../Assets/Pokeball.png'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return(
    <>
      <Image src={pokeball} alt='pokebola' className={styles.pokeball} />
    </>
  )
}