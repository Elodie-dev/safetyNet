import React from 'react';
import Nav from '../Nav';

class FirestationDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.match.params.id,
            station: {},
            fields: {},
            errors: {}
        }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Address
        // if(!fields["address"]){
        //    formIsValid = false;
        //    errors["address"] = "Cannot be empty";
        // }
  
        if(typeof fields["address"] !== "undefined"){
           if(!fields["address"].match(/^[a-zA-Z\d\-_\s\.]+$/)){
              formIsValid = false;
              errors["address"] = "Only letters";
           }        
        }
        //Station
        // if(!fields["station"]){
        //    formIsValid = false;
        //    errors["station"] = "Cannot be empty";
        // }
  
        if(typeof fields["station"] !== "undefined"){
           if(!fields["station"].match(/^[0-9]+$/)){
              formIsValid = false;
              errors["station"] = "Only numbers";
           }        
        }  

       this.setState({errors: errors});
       return formIsValid;
   }
    
   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
            fetch(`http://localhost:3050/firestation//update/${this.state.id}`,
            {method: 'PUT', headers: {'content-type': 'application/json'},
            body: JSON.stringify({address: this.state.fields["address"], station: this.state.fields["station"]})})
            .then((response) => {
                alert(`The firestation ${this.state.fields["address"]} has been updated`);
                this.props.history.push('/firestation')
                return response.json();
                
            })
            .then((data) => {
                console.log(data);
            })
        }
        else{
           alert("Form has errors.")
        }
  
    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
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
                <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                    <div className="col-md-3">
                      <fieldset>
                           <input ref="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} defaultValue={this.state.station.address} />
                           <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                            <input refs="station" type="text" size="30" placeholder="Station" onChange={this.handleChange.bind(this, "station")} defaultValue={this.state.station.station}/>
                            <span style={{color: "red"}}>{this.state.errors["station"]}</span>
                        <input type="submit" className="btn btn-primary" value="Update the Firestation"/>
                     </fieldset>
                  </div>
      
              </form>
            </main>
        )
    }
}

export default FirestationDetails;