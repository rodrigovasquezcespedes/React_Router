import Card from 'react-bootstrap/Card'
import imagen from '../assets/Torta.svg'
const Cards = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <Card className='border-0' style={{ width: '20rem' }}>
        <Card.Title className='fs-5 justify-content-center'>El lugar de los pasteles felices</Card.Title>
        <Card.Img className='img-thumbnail border-0' variant='top' src={imagen} />
      </Card>
    </div>
  )
}

export default Cards
