import '../App.css';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions/counterActions'

function App(props) {

  // console.log(props)

  // const { value, dispatch } = props

  // const [counter, setCounter] = useState(0)

  return (
    <div className="App">
    <Navbar />
     {/* <h1>Counter: {counter}</h1> */}

     {/* <button onClick={() => setCounter(counter+1)}>+ CountUp: </button>&nbsp;
     <button onClick={() => setCounter(counter-1)}>- CountDown</button> */}

     
    {/* <h1>Counter: {value}</h1> 
    <button onClick={() => dispatch({type:'INCREMENT_COUNTER'})}>+ CountUp: </button>&nbsp;
    <button onClick={() => dispatch({type:'INCREMENT_COUNTER'})}>- CountDown</button> */}

      <h1>Counter: {props.counter}</h1> 
      <button onClick={ props.incCounter }>+ CountUp: </button>&nbsp;
      <button onClick={ props.decCounter }>- CountDown</button>

    </div>

    
  );
}

const mapStateToProps = state => ({
  counter: state.counter.value
})

const mapDispatchToProps = {
  incCounter: incrementCounter,
  decCounter: decrementCounter
}

// export default connect(state => state.counter)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
