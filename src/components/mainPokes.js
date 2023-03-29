import { getPokes } from "@/utils/reqs"
import { useEffect, useState } from "react"
import styles from '../styles/MainPokes.module.scss'
import PokeCard from "./pokeCard"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bringPokes = async () => {
      const { results } = await getPokes('https://pokeapi.co/api/v2/pokemon/?limit=12')

      setPokes(results)

      setLoading(false)
    }

    bringPokes()
  }, [])

  return(
    <main className={styles.main_pokes}>
      {loading ? 
        'Carregando' : 
        pokes.map((poke) => <PokeCard key={poke.name} url={poke.url} />)}
    </main>
  )
}