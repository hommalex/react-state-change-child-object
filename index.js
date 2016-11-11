class Acomponent extends React.Component {
	
	state = {val: {type: "car", brand: "Opel", name: false }};
	
	toggleTheName() {
		this.setState({val:  {...this.state.val, name: !this.state.val.name}});
	}

  changeTheBrand(newBrandName) {
		this.setState({val:  {...this.state.val, brand: newBrandName}});
	}

  changeAny(key,val) {
    const sta = this.state.val;
    sta[key] = val;
    this.setState({val:  sta}); // If someone has a better solution please contact me
  }
	
	render() {
		return (
      <div>
        <div className='col'>
           <p>{(this.state.val.name) ? 'Astra' : 'Punto'}</p> 
          <button onClick={this.toggleTheName.bind(this)}> Toggle Name </button> 
        </div>
        <div className='col'>
           <p>{this.state.val.brand}</p> 
          <button onClick={this.changeTheBrand.bind(this,"Fiat")}> Change Brand </button> 
        </div>
        <div className='col'>
           <p>{this.state.val.type}</p> 
          <button onClick={this.changeAny.bind(this,"type","SUV")}> Change Any </button> 
        </div>
        <div className='col'>
           <p><input type="text" value={this.state.val.type} onChange={(e) => { this.changeAny("type",e.target.value)}} /></p>
        </div>
        <p>&nbsp;</p>
        <p>{JSON.stringify(this.state.val)}</p>
       </div>
		)
	}
	
};

ReactDOM.render(<Acomponent/>,document.getElementById('root'));
