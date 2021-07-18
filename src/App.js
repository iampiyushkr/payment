import "./2ndAssing.css"
import './3rdAssign.css';
import "./1stAssign.css"
import Date from "./component/Date.jsx"
import Case from "./component/case.jsx"
import Gift from "./component/gift.jsx"

function App() {
  return (
    <div className="App">
       <div className='yellow'>
        <Date text="28/10/2020" />
        <Case text="Case Study" />
        <Gift text="Amazone Gift" text1="Pay" text2="Desktop - Mobile" />
        
      </div>
      <div className="White">
        <Date text="17 Sept 2020" />
        <Case text="Case Study" />
        <Gift text="Apple Gift" text1="Payment" text2="MacOS - Mobile" />
      </div> 
      <div className="blue">
      <div className="darkBlue">
        <div className="img">
              <img className="img1" src="https://th.bing.com/th/id/OIP.8agR2iH89lE3GtxIbppcdAHaNK?w=182&h=324&c=7&o=5&pid=1.7" alt="done"/>
         
        </div>
         <h2>Ricky Gason</h2>
          <p >Florida</p>
        <p>User interface Designer<br></br> And front End Developer</p>
        <button className="p1">Message</button>
        <button className="p2">Following</button>
        
        <div className="last">
          <p className="p3">Skill</p>
          <button>UI/UX</button>
          <button>Front End Developer</button>
           <button>HTML</button>
          <button>CSS</button>
           <button>JavaScript</button>
          <button>React</button>
           <button>Node</button>
          
          
        </div>
        </div>
    </div>
    
      <div style={{ width: 1000, margin: "auto" }}>
        <div  style={{width:1000,height:400,backgroundColor:"white",float:"left"}}></div>
        <div style={{width:1000,height:400,backgroundColor:"yellow"}}></div>
        <div style={{width:1000,height:400}}></div>
  </div>
    </div>
    
  );
}

export default App;
