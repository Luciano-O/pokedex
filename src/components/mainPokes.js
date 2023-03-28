import { getPokes } from "@/utils/reqs"
import { useEffect, useState } from "react"

export default function MainPokes() {
  const [pokes, setPokes] = useState([])

  useEffect(() => {
    const bringPokes = async () => {
      const { results } = await getPokes('https://pokeapi.co/api/v2/pokemon/?limit=12')

      setPokes(results)
    }

    bringPokes()
  }, [])

  return(
    <>
      <h1>Ola</h1>
    </>
  )
}