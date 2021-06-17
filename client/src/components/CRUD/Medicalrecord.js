import React from 'react';
import Nav from '../Nav';
import Moment from 'moment';

class Medicalrecord extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            medicalrecords: []
        }
    }
    
    componentDidMount = () => {
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch("http://localhost:3050/medicalrecord/")
            .then((response) => {
                if(response.status === 200){
                    console.log("SUCCESSS");
                    return response.json();     
                }else if(response.status === 404){
                    console.log("SOMETHING WENT WRONG")
                    this.setState({ requestFailed: true })
                }
            })
            .then((data) => {
                this.setState({ isLoading: false, medicalrecords : data})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let medicalrecord = this.state.medicalrecords.map((data, i) => (
            <div className="card text-center" key={i} style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Lastname : {data.lastName}</h5>
                    <h5 className="card-title">Firstname : {data.firstName}</h5>
                    <h5 className="card-title">Birthdate : {Moment(data.birthdate).format('DD/MM/YYYY')}</h5>
                    <h5 className="card-title">Medications : <ul>{JSON.parse(data.medications).map((medication, y) => (<li key={y}>{medication}</li>))}</ul></h5>
                    <h5 className="card-title">Allergies :<ul>{JSON.parse(data.allergies).map((allergie, j) => (<li key={j}>{allergie}</li>))}</ul></h5>
                    <h6 className="card-subtitle mb-2 text-muted">N° {data.id}</h6>
                    <button className="btn btn-primary">Update</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        ));
        if(this.state.loading){
            return (
                <div className="loadingContainer">
                    <h1 className="loadingrMessage">Loading... </h1>
                </div>)
        }
        else if(this.state.requestFailed){
            return( 
                <main className="errorContainer">
                    <h1 className="errorMessage">Opss.. Something went wrong :(</h1>
                </main>
            )
        }
        else{ return(
            <main className="home">
                <Nav/>
                <div className="cards">
                    {medicalrecord}
                </div>
            </main>
        )}
        
    }
}

export default Medicalrecord;