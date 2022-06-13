import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {Button, Col, Container, Image, Nav, Navbar, NavDropdown, NavItem, Row} from "react-bootstrap";


class App extends Component {
    goTo(route){
        this.props.history(`/${route}`);
    }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="todoNav">
                                <Nav.Link>
                                    <Button>
                                        Manage Todos
                                    </Button>
                                </Nav.Link>
                                <Nav.Link>
                                    <Button>
                                        All todos
                                    </Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}
//   return (
//       <div>
//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="/" style={{ 'padding-top': '23px' }}>Hasura Todo</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//         </Navbar>
//       </div>
//       //     <Navbar.Collapse>
//       //       <Nav pullRight>
//       //         <NavItem eventKey={1}>
//       //
//       //                   <Button
//       //                       bsStyle="success"
//       //                       className="btn-margin"
//       //                       // onClick={this.goTo.bind(this, 'manage')}
//       //                   >
//       //                     Manage Todos
//       //                   </Button>
//       //
//       //
//       //
//       //         </NavItem>
//       //         <NavItem eventKey={2}>
//       //           {
//       //
//       //                   <Button
//       //                       bsStyle="success"
//       //                       className="btn-margin"
//       //                       // onClick={this.goTo.bind(this, 'alltodos')}
//       //                   >
//       //                     All Todos
//       //                   </Button>
//       //
//       //           }
//       //
//       //         </NavItem>
//       //       </Nav>
//       //     </Navbar.Collapse>
//       //   </Navbar>
//       //
//       // </div>
//
//   );
// }

export default App;
