import { Poke_data } from "@/context/context"
import { getPokes } from "@/utils/reqs"
import { useContext, useEffect, useState } from "react"
import styles from '../styles/MainPokes.module.scss'
import PokeCard from "./pokeCard"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])
  const { allPokes, search } = useContext(Poke_data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const bringPokes = async () => {
      const filtred = allPokes.filter(({name}) => name.includes(search))

      console.log(filtred);

      const results = filtred.slice(0, 12)

      setPokes(results)

      setLoading(false)
    }

    bringPokes()
  }, [allPokes, search])

  return(
    <main className={styles.main_pokes}>
      {loading ? 
        'Carregando' : 
        pokes.map((poke) => <PokeCard key={poke.name} url={poke.url} />)}
    </main>
  )
}