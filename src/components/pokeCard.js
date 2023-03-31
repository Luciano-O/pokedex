import { getPokes } from "@/utils/reqs"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from '../styles/PokeCard.module.scss'
import { typesColor } from "@/utils/types"

export default function PokeCard(props) {
  const { url, id } = props

  const [ poke, setPoke ] = useState([])

  useEffect(() => {
    const bringPoke = async () => {
      const result = await getPokes(url)

      setPoke(result)
    }

    bringPoke();
  }, [url])

  useEffect(() => {
    const setAnimation = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        })
      })
      if(poke) {
        const card = document.querySelector(`#poke${id}`)
        if(card) {
          observer.observe(card)
        }
      }
    }

    setAnimation();
  }, [poke])

  return(
    <>
      {poke.sprites && <card id={`poke${id}`} className={styles.poke_card}>
        <span className={styles.poke_id}>N°{poke.id}</span>
        <Image 
          src={poke.sprites.other['official-artwork'].front_default}
          alt={`${poke.name} Official artwork image`}
          width='155'
          height='165'
        />
        <span className={styles.poke_name}>{poke.name}</span>
        <div className={styles.poke_types}>
          {poke.types.map((item) => 
            <span 
              key={item.slot}
              style={{backgroundColor: typesColor[item.type.name]}}
            >
              {item.type.name}
            </span>
          )}
        </div>
      </card>}
    </>
  )
}