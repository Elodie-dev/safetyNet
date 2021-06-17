import React from 'react';
import Nav from './Nav';

class SelectStation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firestations: []
        }
    }
    
    componentDidMount = () => {
        this.setState({ isLoading: true })
        fetch(`http://localhost:3050/firestation/`)
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
                console.log(data);
            })
            .catch((error) => {
                this.setState({ requestFailed: true })
            })
        console.log("end call api")
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
            let station1 = this.state.firestations.map((data,i) => { 
                if (data.station === 1){
                    return <tr>
                    <td>1</td> 
                    <td>{data.address}</td>
                    <td><button type="button" className="btn btn-primary" onClick={()=>this.props.history.push(`/firestation/stationNumber${data.station}`)}>Select</button></td>
                    </tr>}
                });
            let station2 = this.state.firestations.map((data,i) => { 
                if (data.station === 2){
                    return <tr>
                    <td>2</td> 
                    <td>{data.address}</td>
                    <td><button type="button" className="btn btn-primary" onClick={()=>this.props.history.push(`/firestation/stationNumber${data.station}`)}>Select</button></td>
                    </tr>}
                });
            let station3 = this.state.firestations.map((data,i) => { 
                if (data.station === 3){
                    return <tr>
                    <td>3</td> 
                    <td>{data.address}</td>
                    <td><button type="button" className="btn btn-primary" onClick={()=>this.props.history.push(`/firestation/stationNumber${data.station}`)}>Select</button></td>
                    </tr>}
                });
            let station4 = this.state.firestations.map((data,i) => { 
                if (data.station === 4){
                    return <tr>
                    <td>4</td> 
                    <td>{data.address}</td>
                    <td><button type="button" className="btn btn-primary" onClick={()=>this.props.history.push(`/firestation/stationNumber${data.station}`)}>Select</button></td>
                    </tr>}
                });
            
            
            return(
            
            <main className="home">
                <Nav/>
                <div className="content">
                    <table cellSpacing={2} cellPadding={5} className="station">
                        <thead>
                            <tr>
                                <th>Station</th>
                                <th>Address</th>
                                <th>Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {station1}
                            {station2}
                            {station3}
                            {station4}
                        </tbody>
                    </table>
                </div>
            </main>
        )}
        
    }
}

export default SelectStation;