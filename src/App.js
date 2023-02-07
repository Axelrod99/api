import './App.css';
import React, {Component} from 'react';


  class App extends Component {
    constructor(props) {
      super(props);
      this.state ={
        items : [],
        isLoaded : false,
      }
    }

    // componentDidMount() {
    //   fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res=>res.json())
    //     .then(json => {
    //       this.setState({
    //         isLoaded : true,
    //         items : json,
    //       });
    //     });
    // }

    buttonClick=()=>{
      this.setState({
        isLoaded : true,
      });
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(json => {
        console.log("Data here:",json);
        this.setState({
          isLoaded : true,
          items : json,
        });
      // }).catch((e)=>{
      //   console.log("Error here: ",e);
      //   this.setState({
      //     isLoaded : false,
          
      //   });


      });
    };

  
    
    render() {
      var {isLoaded,items} = this.state
      if(!isLoaded) {
        return<div>

            <button className='bg-blue-400' onClick={()=>this.buttonClick()}>
              Refresh button
            </button>
        </div>;
      }else {
        return (
          <div className='App'>

            <ul>
              {items.map(items => (
                <li key={items.id}>
                  Name : {items.name} // Email : {items.email}
                </li>
              ))}
            </ul>
            {items.map(items => (
            <h1 className='bg-blue-300' key={items.id}>
              Name : {items.name} // Website : {items.website}
            </h1>
            ))}

          </div>
        )
      }
    }
  }


  

  // const buttonClick = () => {
  //   var h2 = document.createElement('h1');
  //   var answer = document.createTextNode('testing javascript');
  //   h2.appendChild(answer);
  //   document.getElementById('first').append(h2)
  // }


  // return (
  //   <div className="App p-3">
  //     <button className='bg-blue-200 p-1 rounded-lg' onClick={handleClick}>random</button>
  //     <h1 id='first' className='text-blue-500'></h1>
  //   </div>



export default App;
