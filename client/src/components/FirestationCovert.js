import React from 'react';
import Nav from './Nav';

class FirestationCovert extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firestations: [],
            persons: [],
            medicalrecords: [],
            station: props.match.params.station
        }
    }
    
    componentDidMount = () => {
        this.setState({ isLoading: true })
        fetch(`http://localhost:3050/firestation/${this.state.station}`)
            .then((response) => {
                if(response.status === 200){
                    return response.json();     
                }else if(response.status === 404){
                    console.log("SOMETHING WENT WRONG")
                    this.setState({ requestFailed: true })
                }
            })
            .then((data) => {
                this.setState({ isLoading: false, firestations : data})
                // console.log(data);
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        fetch(`http://localhost:3050/person/`)
            .then((response) => {
                if(response.status === 200){
                    return response.json();     
                }else if(response.status === 404){
                    console.log("SOMETHING WENT WRONG")
                    this.setState({ requestFailed: true })
                }
            })
            .then((data) => {
                this.setState({ isLoading: false, persons : data})
                // console.log(data);
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        fetch(`http://localhost:3050/medicalrecord/`)
            .then((response) => {
                if(response.status === 200){
                    return response.json();     
                }else if(response.status === 404){
                    console.log("SOMETHING WENT WRONG")
                    this.setState({ requestFailed: true })
                }
            })
            .then((data) => {
                this.setState({ isLoading: false, medicalrecords: data})
                console.log(data);
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        
    }

    render = () => {
        if(this.state.loading){
            return (
                <div className="loadingContainer">
                    <h1 className="loadingrMessage">Loading... </h1>
                </div>)
        }
        else if(this.state.requestFailed){
            return( 
                <main className="errorContainer">
                    {<h1 className="errorMessage">Ooopss.. Something went wrong :(</h1>}
                </main>
            )
        }
        else{ 
            let person = this.state.firestations.map((data,i) => { 
                return this.state.persons.map((donnee, y) =>{
                    if(data.address === donnee.address){
                        return <tr>
                        <td>{donnee.firstName}</td> 
                        <td>{donnee.lastName}</td> 
                        <td>{donnee.address}</td> 
                        <td>{donnee.phone}</td> 
                        </tr>
                    }
                })
                })

            let minor = this.state.persons.map((data,i)=> {
                return this.state.medicalrecords.map((donnee,i)=>{
                    let majority = new Date('2003-01-01')
                    if(donnee.birthdate.getTime > majority){
                        return <p>{data.firstName} {data.lastName} is a minor</p>
                    }
                })
            })

            return(
            <main className="home">
                <Nav/>
                <div className="content">
                    {minor}
                    <table cellSpacing={2} cellPadding={5} className="station">
                        <thead>
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                          {person}
                        </tbody>
                    </table>
                </div>
            </main>
        )}
        
        
    }

}

export default FirestationCovert;