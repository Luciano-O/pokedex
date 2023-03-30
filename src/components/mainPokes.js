import { Poke_data } from "@/context/context"
import { getPokes } from "@/utils/reqs"
import { useContext, useEffect, useState } from "react"
import styles from '../styles/MainPokes.module.scss'
import PokeCard from "./pokeCard"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])
  const [limit, setLimit] = useState(24)
  const [allResults, setAllResults] = useState([])
  const { allPokes, search } = useContext(Poke_data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bringPokes = async () => {
      const filtred = allPokes.filter(({name}) => name.includes(search))

      const results = filtred.slice(0, 12)

      setLimit(24)

      setPokes(results)

      setLoading(false)

      setAllResults(filtred)
    }

    bringPokes()
  }, [allPokes, search])

  const handleButton = () => {
    setLimit(limit + 12)

    const newFilter = allResults.slice(limit - 12, limit)

    setPokes([...pokes, ...newFilter])
  }

  return(
    <main className={styles.main_pokes}>
      {loading ? 
        'Carregando' : 
        pokes.map((poke) => <PokeCard key={poke.name} url={poke.url} />)}
      <button
        type="button"
        onClick={handleButton}
      >
        Carregar mais
      </button>
    </main>
  )
}