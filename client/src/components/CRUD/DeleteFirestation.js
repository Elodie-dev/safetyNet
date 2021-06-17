import React from 'react';
import Nav from '../Nav';
import { confirmAlert } from 'react-confirm-alert';

class DeleteFirestation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: props.match.params.id,
            station:{},

        }
    }
    
    componentDidMount = () =>{
        fetch(`http://localhost:3050/firestation/one/${this.state.id}`)
        .then(response => {
            return response.json();
        })
        .then((data) => {
              console.log(data);
              this.setState({station : data});
        })
    }

    render = () => {
        return(
            <main className="home">
                <Nav />
                    <div className="toast-body">
                        <p>Are you sure you want to delete the Firestation {this.state.station.address} ?</p>
                        <div>
                            <button type="button" class="btn btn-primary btn-sm" onClick={() => {fetch(`http://localhost:3050/firestation/delete/${this.state.id}`,
                            {method: 'DELETE'})
                            .then((response) => {
                                alert(`The firestation ${this.state.station.address} has been deleted`);
                                this.props.history.push('/firestation');
                                return response.json();
                        
                            })
                            .then((data) => {
                                console.log(data);
                                
                            })}}>Yes</button>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => {this.props.history.push('/firestation')}}>No</button>
                        </div>
                    </div>
            </main>
        )
    }
}

export default DeleteFirestation;