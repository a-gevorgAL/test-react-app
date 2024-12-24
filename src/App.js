import './App.css';

const App = () => {
  console.log('hello from app.js');
  

  return (

    <div className="App" >
      hello from app.js
      <input type="text"  value={msg} />
    </div>
  );
}

let msg = 'hello world';

export default App;
