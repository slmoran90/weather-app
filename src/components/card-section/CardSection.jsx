// import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { ForecastContext } from '../../context/forecastContext'
import ForecastCard from './card/ForecastCard'
import FeaturedCard from './card/FeaturedCard'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './cardSection.scss'

const CardSection = () => {
  const { forecast } = useContext(ForecastContext)
  const { forecastday, localtime, wind_kph, humidity, vis_km, pressure_mb } = forecast

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

  AOS.init()

  return (
    <div className='cs-container py-5'>
      <div className='row gx-0'>
        {
          forecastday?.map((forecastData, i) => (
            <div
              className='col-6 justify-content-center'
              key={i}
              data-aos={i % 2 === 0 ? 'zoom-out-right' : 'zoom-out-left'}
              data-aos-duration="450"
              data-aos-delay={i % 2 === 0 ? '50' : '150'}
            >
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
              <div
                className="col-12 justify-content-center"
                key={i}
                data-aos="zoom-in-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="600"
                data-aos-delay="200"
              >
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