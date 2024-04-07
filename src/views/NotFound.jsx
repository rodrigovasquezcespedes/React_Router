import { FaExclamationCircle } from 'react-icons/fa'
const NotFound = () => {
  return (
    <section className='py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='text-center'>
              <h2 className='d-flex justify-content-center align-items-center gap-2 mb-4'>
                <FaExclamationCircle className='me-2' />
                <span className='display-1 fw-bold'>404</span>
                <FaExclamationCircle className='me-2' />
              </h2>
              <h3 className='h2 mb-2'>¡Ups! Estas perdido.</h3>
              <p className='mb-5'>La página que buscas no fue encontrada.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
