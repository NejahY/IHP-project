import './App.css';
import data from './data.js'


console.log(data)
function App() {
  return (
    <div className="App">
      {data.map((info, index) => {
        return (
          <ol>
            {info.map((subInfo, sIndex) => {
              return <li> {subInfo}</li>
            })}
          </ol>
        )
      })}
      
      
    </div>
  );
}

export default App;
