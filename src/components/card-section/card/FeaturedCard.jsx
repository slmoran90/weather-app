import './card.scss'

const FeaturedCard = ({ cardStatus }) => {
  let status = {
    key: null,
    title: null,
    value: null
  }

  Object.entries(cardStatus).map(([key, values]) => {
    const { title, value } = values
    status = {
      key,
      title,
      value
    }
    return status
  })

  return (
    <div
      className='card-container card'
      style={{ width: '328px', height: '205px' }}
    >
      <div className='card-body d-flex flex-column align-items-center justify-content-between'>
        <h5 className='title text-capitalize'>{status.title}</h5>
        <div className='card-text w-100 justify-content-center flex-column align-items-center'>
            <p className='status-value'>
              {status.value}
              <span>
                {
                  status.key === 'windStatus' ? ' km/h' : status.key === 'humidity' ? '%' : status.key === 'visibility' ? ' km' : ' mb'
                }
              </span>
            </p>
            {
              status.key === 'humidity'
                ? <div className='range' style={{ '--range-width': status.value }}>
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