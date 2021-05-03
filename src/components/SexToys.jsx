import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'

const SexToys = () => {
  const [toys, setToys] = useState('')

  useEffect(() => {
    const getToys = async () => {
      const response = await axios.get(baseURL, config)
      setToys(response.data.records)
    }
    getToys()
  }, [])

  return (
    <div>
      {toys.map((toy) => {
        return <div></div>
      })}
    </div>
  )
}

return (
  <>
    {facts && (
      <div>
        <h3>"{facts[Math.floor(Math.random() * facts.length)].fields.fact}"</h3>
      </div>
    )}
  </>
)

export default SexToys
