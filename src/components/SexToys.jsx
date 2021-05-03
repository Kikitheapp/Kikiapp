import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'

const SexToys = () => {
  const [toys, setToys] = useState([])

  useEffect(() => {
    const getToys = async () => {
      const response = await axios.get(baseURL, config)
      console.log(response)
      setToys(response.data.records)
    }
    getToys()
  }, [])

  return (
    <div>
      {toys.map((toy) => {
        return (
          <div>
            <img src={toy.fields.Image} />
            <h1>{toy.fields.Name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default SexToys
