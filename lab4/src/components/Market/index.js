import React from 'react';
import MarketItems from '../MarketItems';

class Market extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        

    }
    render(){
      return(
        <div>
            <h1>Welcome to the Market</h1>
            <span>Click the button to add an item </span> 
            <button onClick={() =>{

                const items = this.state.items;
                items.push(<MarketItems/>);
                this.setState({items: items})

            }}>Click</button>

            <div>{
                this.state.items.map(function(count,key){
                    return <MarketItems count={key}/>
                }) 
                
            }</div>
        </div>
      )
    }
  }

export default Market;