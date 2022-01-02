import React from 'react'
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/moi.png" alt="moi" />
                    <h3>Jean-Louis Houdret</h3>
                </div>
            </div> 
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName='navActive'>
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName='navActive'>
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" activeClassName='navActive'>
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName='navActive'>
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/jean-louis-houdret-88250255/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin "></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/jeanhoudret" target="_blank" rel="noreferrer">
                            <i className="fab fa-twitter "></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/jeanlouis.houdret.1/" target="_blank" rel="noreferrer">
                            <i className="fab fa-facebook "></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/houdret" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <p>Houdret - 2022</p>
                </div>
            </div>
        </div>
    )
}
export default Navigation;