import './card.scss'

const FeaturedCard = ({ data }) => {
  const { title, label, value } = data
  return (
    <div
      className='card-container card'
      style={{ width: '328px', height: '205px' }}
    >
      <div className='card-body d-flex flex-column align-items-center justify-content-between'>
        <h5 className='title text-capitalize'>{title}</h5>
        <div className='card-text w-100 d-flex justify-content-center flex-column align-items-center'>
            <p className='status-value'>
              {value}
              <span>
                {
                  label === 'windStatus' ? ' km/h' : label === 'humidity' ? '%' : label === 'visibility' ? ' km' : ' mb'
                }
              </span>
            </p>
            {
              label === 'humidity'
                ? <div className='range' style={{ '--range-width': value }}>
                  <div className='range-label'>
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                  </div>
              </div>
                : ''
            }
          </div>
        </div>
    </div>
  )
}

export default FeaturedCard