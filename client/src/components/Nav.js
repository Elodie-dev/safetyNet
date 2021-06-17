import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    render = () => {
        return (
            <aside>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <i className="fas fa-home"></i><Link to="/"> Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/firestations"> Afficher les habitants dépendants d'une caserne</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/childAlert?address=:address"> Afficher les mineurs présents à une adresse</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/phoneAlert?firestation=:firestationNumber"> Afficher le numéro de téléphone des habitants dépendants d'une caserne</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/fire?address=:adress"> Afficher les habitants d'une adresse</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/flood/stations?stations=:stationNumbers"> Afficher les foyers dépendants d'une caserne</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/personInfo?firstName=:firstName&lastName=:lastName"> Afficher les informations personnelles des habitants</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/communityEmail?city=<city>"> Afficher les emails des habitants d'une ville</Link>
                    </li>
                    {/* <li className="nav-item">
                        <i className="fas fa-fire"></i><Link to="/firestation"> Firestation</Link>
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-notes-medical"></i><Link to="/medicalrecord"> Medical Records</Link>
                    </li>
                    <li className="nav-item">
                        <i className="fas fa-user"></i><Link to="/person"> Persons</Link>
                    </li> */}
                    </ul>
            </aside>
        )
    }
}
export default Nav;