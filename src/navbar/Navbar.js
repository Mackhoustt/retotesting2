import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles'
export const Navbar = () => {
    return (
       
              <section className='bg-dark text-light text-center'>
      <div class="container center">
  <div class="row">
    <div class="col-sm">
   {/* { <h1 class="text-hide" style="background-image: url('../img/logo'); width: 50px; height: 50px;">Bootstrap</h1>} */}
    </div>
    <div class="col-md">
    <br/>
    <p>El mejor diario del mundo</p>
    <h1>The Medallin Time</h1>
   
    <br/>
    <button className="btn-primary rounded">Ver más</button>   <br/>   <br/>
    </div>
    <div class="col-sm">
    <nav className="navbar navbar-expand-sm ">
    <Link 
                className="navbar-brand" 
                to="/"
            >
                New Paper
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/category"
                    >
                        Categoria
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/contact"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/profile"
                    >
                        Perfil
                    </NavLink>
                </ul>
            </div>

           <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                </ul>
            </div>

        </nav>
    </div>
  </div>
</div>
    </section>
     
    )
}