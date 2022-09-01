import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, NavbarBrand , Navbar} from 'react-bootstrap'


interface IHeaderProps {

}

const Header = ({}: IHeaderProps) => {
  return (
    <Navbar fixed="top" bg="primary" variant="dark">
        <Container>
            <NavbarBrand>
                React Typescript Bootstrap App
            </NavbarBrand>
        </Container>
    </Navbar>
  )
}

export default Header;