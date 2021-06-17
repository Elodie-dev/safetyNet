import React from 'react';
import Nav from '../Nav';

class Person extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            persons: []
        }
    }
    
    componentDidMount = () => {
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch("http://localhost:3050/person/")
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
                this.setState({ isLoading: false, persons : data})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let person = this.state.persons.map((data, i) => (
            <div className="card text-center" key={i} style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Lastname : {data.lastName}</h5>
                    <h5 className="card-title">Firstname : {data.firstName}</h5>
                    <h5 className="card-title">Address : {data.address}</h5>
                    <h5 className="card-title">City : {data.city}</h5>
                    <h5 className="card-title">Zip : {data.zip}</h5>
                    <h5 className="card-title">Phone : {data.phone}</h5>
                    <h5 className="card-title">Email : {data.email}</h5>
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
                    {person}
                </div>
            </main>
        )}
        
    }
}

export default Person;