import Buttons from './Buttons'
import { Form } from 'react-bootstrap'

const Forms = () => {
  return (
    <div className='container mt-5'>
      <h2 className='d-flex justify-content-center'>Cuentanos, ¿En que podemos ayudar?</h2>
      <Form d-flex justify-content-center>
        <Form.Group className='mb-3'>
          <Form.Label className='d-flex justify-content-center'>Correo:</Form.Label>
          <Form.Control type='email' name='email' placeholder='name@example.com' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label className='d-flex justify-content-center'>Descripción:</Form.Label>
          <Form.Control as='textarea' name='description' rows={3} />
        </Form.Group>
        <Buttons />
      </Form>
    </div>
  )
}

export default Forms
