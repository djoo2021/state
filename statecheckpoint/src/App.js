import react ,{Component} from 'react'
import './App.css';


class App extends Component{
  
  state={
          name:"",
          bio:"",
          img:""
       
  }

   show =()=>{this.setState({name:"wajdi mejri",bio:"web develloper",img:"./image1.jpg"
  })}
 
  render(){
    return (

     
<div className="container">
    <div className="card" style={{width: '18rem'}}>
                          <img src= {this.state.img} class="card-img-top" alt="..."></img>
                              <div className="card-body">
                                <p className="card-text">
                                    <h1> my name is:{this.state.name}</h1>
                                      <h2> my profession is {this.state.bio}</h2>
                               </p>
                               <button className="btn-danger" onClick={this.show}> afficher mon profil  </button>
                          </div>
                      </div>
   

    </div>
                      
    );

  }
 
}
export default App;
