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

//pseudo code
// 1.created a color a boxcolor react app
//  npx create -react-app box-color
// 2.created a new github repository
// 3. created component and create a new file in the component and call it Colorchange
// 4. In the file Colorchange i created a class Colorchange
// 5 .created a constructor
// 6.created state with :
//  color:false;
// clickcount: 0
// 7.created a handleclick to change the color and increment with one when clicked.
// 8. render when when the state is updated.