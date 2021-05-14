import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL, config } from '../services'

const SexToys = () => {
  const [toys, setToys] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const getToys = async () => {
      const response = await axios.get(baseURL, config)
      console.log(response)
      setToys(response.data.records)
    }
    getToys()
  }, [])

  return (
    <div className='toys'>
      {toys.map((toy) => {
        return (
          <div className='toy'>
            <img
              className='toy-image'
              src={toy.fields.image}
              alt={toy.fields.name}
              onClick={(e) => {
                e.preventDefault()
                return setIsVisible(!isVisible)
              }}
            />
            <div className={isVisible ? 'hidden' : ''}>
              <h1 className='toy-name'>{toy.fields.name}</h1>
              <p className='toy-description'>{toy.fields.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SexToys
