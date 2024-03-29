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
    <div className='pb-2 min-vh-100 cs-container col-12 col-md-8 row gx-0'>
      <div className='py-5 gap-4 gap-md-5 row gx-0 d-flex justify-content-center'>
        {
          forecastday?.map((forecastData, i) => {
            return (
            <div
              className={`${i === 2 ? 'col-9 col-md-1 d-flex justify-content-center' : 'col-5 col-md-1 d-flex justify-content-center'}`}
              style={{ width: 'fit-content' }}
              key={i}
              data-aos={i % 2 === 0 ? 'zoom-out-right' : 'zoom-out-left'}
              data-aos-duration="450"
              data-aos-delay={i % 2 === 0 ? '50' : '150'}
            >
              <ForecastCard forecastData={forecastData} localtime={localtime}/>
            </div>
            )
          })
        }
      </div>
      <div className='mt-5 highlights'>
        <h5 className='py-3 w-100 w-md-25 highlights__title'>Destacados de hoy</h5>
        <div className="gap-3 gap-md-5 row gx-0 w-100 pb-4">
          {
            hl.map((data, i) => (
              <div
                className="col-md-5 col-12 d-flex justify-content-center justify-content-md-end"
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