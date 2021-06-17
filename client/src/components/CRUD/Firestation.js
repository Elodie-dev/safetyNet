import React from 'react';
import Nav from '../Nav';

class Firestation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firestations: [],
            station: 0
        }
    }
    
    componentDidMount = () => {
        this.setState({ isLoading: true })
        console.log("start call api")
        fetch(`http://localhost:3050/firestation/${this.state.station}`)
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
                this.setState({ isLoading: false, firestations : data})
                console.log("DATA STORED")
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
    }

    render = () => {
        let firestation = this.state.firestations.map((data, i) => (
            <div className="card text-center" key={i} style={{width: "18rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">Address : {data.station}</h5>
                    <h5 className="card-title">Station : {data.address}</h5>
                    <button className="btn btn-primary" onClick={()=>{this.props.history.push(`/firestation/update/${data.id}`)}}>Update</button>
                    <button className="btn btn-danger" onClick={()=>{this.props.history.push(`/firestation/delete/${data.id}`)}}>Delete</button>
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
                    <h1 className="errorMessage">Ooopss.. Something went wrong :(</h1>
                </main>
            )
        }
        else{ return(
            <main className="home">
                <Nav/>
                <div className="content">
                    <div className="button">
                        <button onClick={()=>{this.props.history.push(`/firestation/add`)}} className="new btn btn-success">New Firestation</button>
                    </div>
                    <div className="cards">
                        {firestation}
                    </div>
                </div>
            </main>
        )}
        
    }
}

export default Firestation;