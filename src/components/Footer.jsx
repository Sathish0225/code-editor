import React from 'react'
import { Container } from 'react-bootstrap'


const Footer = () => {
    var date = new Date();
    var year = date.getFullYear();
  return (
    <div>
      <Container fluid className='footer'>
        Copyright &copy; {year} | Designed by Sathishkumar Ranganathan
      </Container>
    </div>
  )
}

export default Footer
