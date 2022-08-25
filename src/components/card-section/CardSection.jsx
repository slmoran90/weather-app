// import { useState, useEffect } from 'react'
import ForecastCard from './card/ForecastCard'
import FeaturedCard from './card/FeaturedCard'
import './cardSection.scss'

const CardSection = ({ data }) => {
  const { forecastday, localtime, wind_kph, humidity, vis_km, pressure_mb } = data

  const hl = [
    {
      title: 'estado del vieto',
      label: 'windStatus',
      value: wind_kph
    },
    {
      title: 'humedad',
      label: 'humidity',
      value: humidity
    },
    {
      title: 'visibilidad',
      label: 'visibility',
      value: vis_km
    },
    {
      title: 'presión',
      label: 'airPresure',
      value: pressure_mb
    }
  ]

  return (
    <div className='cs-container py-5'>
      <div className='row gx-0'>
        {
          forecastday?.map((forecastData, i) => (
            <div className='col-6 justify-content-center' key={i}>
              <ForecastCard forecastData={forecastData} localtime={localtime}/>
            </div>
          ))
        }
      </div>
      <div className='highlights mt-5'>
        <h5 className='highlights__title py-3'>Destacados de hoy</h5>
        <div className="row gx-0">
          {
            hl.map((data, i) => (
              <div className="col-12 justify-content-center" key={i}>
                <FeaturedCard data={data}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CardSection