import { getPokes } from "@/utils/reqs"
import { useEffect, useState } from "react"
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
    <>
      <h1>Ola</h1>
      {loading ? 'Carregando' : <PokeCard url={pokes[0].url} />}
    </>
  )
}