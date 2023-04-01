import { Poke_data } from "@/context/context"
import { getPokes } from "@/utils/reqs"
import { useContext, useEffect, useState } from "react"
import styles from '../styles/MainPokes.module.scss'
import PokeCard from "./pokeCard"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])
  const [limit, setLimit] = useState(12)
  const [isTracking, setIsTracking] = useState(false)
  const { displayPokes, setDisplayPokes, setAllPokes, search } = useContext(Poke_data)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleDisplayPokes = () => {
      setPokes([])

      setLimit(12)
    }

    handleDisplayPokes();
  }, [search])

  useEffect(() => {
    const bringFirstPokes = async () => {
      const { results } = await getPokes('https://pokeapi.co/api/v2/pokemon/?limit=1281')

      setAllPokes(results);
      setDisplayPokes(results);

      const response = results.slice(limit - 12, limit)

      setPokes((currentPokes) => [...currentPokes, ...response])

      setLoading(false)
    }

    const bringPokes = () => {
      if(limit === 12) {
        setPokes([]);
      }

      const response = displayPokes.slice(limit - 12, limit)

      setPokes((currentPokes) => [...currentPokes, ...response])
    }
    
    if(loading) {
      bringFirstPokes()
    } else {
      bringPokes()
    }
    
  }, [limit, displayPokes])

  const handleButton = () => {
    setLimit((currentLimit) => currentLimit + 12)

    setIsTracking(true);

    const intersectionObserver = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        setLimit((currentLimit) => currentLimit + 12)
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinel'))
    return () => intersectionObserver.disconnect();
  }

  return(
    <>
      <main className={styles.main_pokes}>
        {loading ? 
          'Carregando' : 
          pokes.map((poke, index) => <PokeCard id={index} key={poke.name} url={poke.url} />)}
      </main>
      <div id="sentinel" className={styles.sentinel} />
      {!isTracking && 
        <button
          type="button"
          onClick={handleButton}
          className={styles.load_more}
        >
          Carregar mais
        </button>}
    </>
  )
}