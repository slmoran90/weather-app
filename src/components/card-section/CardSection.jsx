// import { useState, useEffect } from 'react'
import ForecastCard from './card/ForecastCard'
import FeaturedCard from './card/FeaturedCard'
import './cardSection.scss'

const CardSection = () => {
  const data = [
    {
      day: 'Mañana',
      maxTemp: 16,
      minTemp: 11
    },
    {
      day: 'Domingo, 7 de Junio',
      maxTemp: 16,
      minTemp: 11
    },
    {
      day: 'Lunes, 8 de Junio',
      maxTemp: 16,
      minTemp: 11
    },
    {
      day: 'Martes, 9 de Junio',
      maxTemp: 16,
      minTemp: 11
    },
    {
      day: 'Miercoles, 10 de Junio',
      maxTemp: 16,
      minTemp: 11
    }
  ]

  const status = [
    {
      windStatus: {
        title: 'estado del viento',
        value: 7
      }
    },
    {
      humidity: {
        title: 'humedad',
        value: 84
      }
    },
    {
      visibility: {
        title: 'visibilidad',
        value: 6.4
      }
    },
    {
      airPresure: {
        title: 'presión',
        value: 998
      }
    }
  ]

  return (
    <div className='cs-container py-5'>
      <div className='row gx-0'>
        {
          data.map((card, i) => (
            <div className='col-6 justify-content-center' key={i}>
              <ForecastCard card={card}/>
            </div>
          ))
        }
      </div>
      <div className='highlights mt-5'>
        <h5 className='highlights__title py-3'>Destacados de hoy</h5>
        <div className="row gx-0">
          {
            status.map((cardStatus, i) => (
              <div className="col-12 justify-content-center" key={i}>
                <FeaturedCard cardStatus={cardStatus}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardSection