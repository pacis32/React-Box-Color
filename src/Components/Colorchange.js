import React from 'react';

class Colorchange extends React.Component{
constructor(props){
 super(props)
   this.state={
        color: false,
        ClickCount: 0
    };
}

handleclick(){
    this.setState({color:!this.state.color,ClickCount:this.state.ClickCount+1})
}

render(){
    const isOn= this.state.color;
    return(
        <div className='column' >
            
            <div className= {isOn ? 'blue': 'orange'}
                onClick ={e=>this.handleclick()}>
                    {this.state.ClickCount}
            </div>
        </div>
    )
}


}

export default Colorchange;