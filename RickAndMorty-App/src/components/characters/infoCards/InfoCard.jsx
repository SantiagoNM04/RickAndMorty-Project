import './InfoCard.css'

export const InfoCard = ({status, species, origin, gender, setShowInfo}) => {
  return (
    <div className='infocard-container pe-2'>
      <div className='d-flex justify-content-end'>
        <button className='close-button rounded-1 mb-3'  onClick={() => (setShowInfo(false))}>
          <i className="close-icon bi bi-x-lg"></i>
        </button>
      </div>
      <ul className='list-unstyled'>
        <li className='infocard-item mb-1 rounded-3'>
          <h4 className='mx-5 mt-4'>Character Status</h4>
          <strong><p className='mx-5'>{status}</p></strong>
        </li>
        <li className='infocard-item mb-1 rounded-3'>
          <h4 className='mx-5 mt-4'>Specimen</h4>
          <strong><p className='mx-5'>{species}</p></strong>
        </li>
        <li className='infocard-item mb-1 rounded-3'>
          <h4 className='mx-5 mt-4'>Origin</h4>
          <strong><p className='mx-5'>{origin}</p></strong>
        </li>
        <li className='infocard-item mb-1 rounded-3'>
          <h4 className='mx-5 mt-4'>Gender</h4>
          <strong><p className='mx-5 mb-4'>{gender}</p></strong>
        </li>
      </ul>
    </div>
  )
}
