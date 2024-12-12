import logo from './logo.svg';
import './App.css';

const Header = () => {
  return  <h2>Hello World</h2>;
}

const Field = () => {
  const holder = "type here";
  const fieldStyle = {width: '300px'};
  return <input placeholder={holder} style={fieldStyle}/>
}

function Btn(text){
  // const txt = "log in";
  console.log(text);
  const txt = () => "log in";
  const logged = true;
  return <button>{logged ? "enter" : txt()}</button>
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn text='test'/>
    </div>
  );
}

export default App;
