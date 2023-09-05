
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Downloadmodal from '../components/Downloadmodal'

const Header = ({ t1, t2, t3, t4 }) => {
  const [show, setShow] = useState(false)

  const handleshow = () =>{
    setShow(true)
  }
  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white border-bottom border-2 head">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <h1>Adekunmi.</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="ms-auto my-2 my-lg-0 d-flex ">
              <div className="mt-3 me-3 ">
                <Nav
                  className="m-auto my-2 my-lg-0 justify-content-between gap-3"
                  navbarScroll
                >

                  {
                    t1 && (
                        <Link to='/Projects' className="text-decoration-none text-white fw-bold tag">
                    Projects
                  </Link>
                    )
                  }
                  <div className="" onClick={handleshow}>

                  {t2 && (
                    <Link
                      // to="/Download Project"
                      className="text-decoration-none text-white  fw-bold tag me-2"
                    >
                    Download Project
                    </Link>
                  )}
                  {
                    show &&(
                      <div>
                        <Downloadmodal/>
                      </div>
                    )
                  }
                  </div> 


                  <Link
                    to="/Contact"
                    className="text-decoration-none text-white fw-bold tag me-2"
                  >
                    {t3}
                  </Link>
                </Nav>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;