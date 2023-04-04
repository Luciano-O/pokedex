import React from 'react';
import { Poke_data } from '@/context/context'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useContext, useState } from 'react'
import pokeball from '../assets/Pokeball.png'
import styles from '../styles/Header.module.scss'

export default function Header() {
  const { setSearch,
          allPokes,
          setDisplayPokes
        } = useContext(Poke_data)

  const [ query, setQuery ] = useState('')

  const searchBtn = () => {
    const filtred = allPokes.filter(({name}) => name.includes(query.toLowerCase()))

    setDisplayPokes(filtred);

    setSearch(query);
  }

  const homeBtn = () => {
    setQuery('')

    const filtred = allPokes.filter(({name}) => name.includes(''))

    setDisplayPokes(filtred);

    setSearch((currentSearch) => currentSearch + ' ');
  }

  return(
    <header className={styles.header}>
      <Image 
        src={pokeball}
        alt='pokebola'
        className={styles.pokeball}
        onClick={homeBtn}
      />
      <div className={styles.input_container}>
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          style={{color: "#666666", width: '15px'}}
          onClick={searchBtn}
          className={styles.search_icon}
        />  
        <input 
          type='text'
          placeholder='Insira o nome do pokemon'
          onChange={({target}) => setQuery(target.value)}
          value={query}
          className={styles.search_input}
        />
      </div>
    </header>
  )
}