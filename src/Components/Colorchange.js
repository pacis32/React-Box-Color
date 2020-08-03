import React from 'react';

export default class Colorchange extends React.Component{
constructor(props){
 super(props)
   this.state={
        isSwitchOn: false,
        count: 0
    };
}

handleclick(){
    this.setState({isSwitchOn:!this.state.isSwitchOn,count:this.state.count+1})
}

render(){
    const isOn= this.state.isSwitchOn;
    return(
        <div className='column' >
            {/* style={isOn?"blue":"red"}  */}
            <div className= {isOn ? 'square-switch-on': 'square-switch-off'}
                onClick ={e=>this.handleclick()}>
                    {this.state.count}
            </div>
        </div>
    )
}


}