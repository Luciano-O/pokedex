import { Poke_data } from "@/context/context"
import { getPokes } from "@/utils/reqs"
import { useContext, useEffect, useState } from "react"
import styles from '../styles/MainPokes.module.scss'
import PokeCard from "./pokeCard"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])
  const [limit, setLimit] = useState(12)
  const { displayPokes, setDisplayPokes } = useContext(Poke_data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleDisplayPokes = () => {
      setPokes([])

      setLimit(12)
    }

    handleDisplayPokes();
  }, [displayPokes])

  useEffect(() => {
    const bringPokes = () => {
      const results = displayPokes.slice(limit - 12, limit)

      setPokes((currentPokes) => [...currentPokes, ...results])

      setLoading(false)
    }

    bringPokes()
  }, [limit, displayPokes])

  const handleButton = () => {
    setLimit((currentLimit) => currentLimit + 12)
  }

  return(
    <>
      <main className={styles.main_pokes}>
        {loading ? 
          'Carregando' : 
          pokes.map((poke) => <PokeCard key={poke.name} url={poke.url} />)}
      </main>
      <button
        type="button"
        onClick={handleButton}
        className={styles.load_more}
      >
        Carregar mais
      </button>
    </>
  )
}