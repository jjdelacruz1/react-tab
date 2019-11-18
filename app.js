const HelloWorld = function() {
  return (<h1>Hello World!</h1>)
}

const List = function(props) {
  return (<div>
    <p>This is {props.name}'s list of things to do!</p>
    <ul>
      <li></li>
    </ul>
  </div>)
}

const Hello = function(props) {
  return (<div>
    <h1>Hello {props.name}</h1>
    <List name={props.name} />
    </div>)
}

class Counter extends React.Component {
  state = {
    count: 0,
    color: "blue"
  }
  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleMinus = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  resetMe = () => {
    this.setState({
      count: 0
    })
  }
  handleToggle = () => {
    const color = (this.state.color === 'blue')? "green": "blue"

    // let color = null
    // if (this.state.color ==='blue') {
    //   color = 'green'
    // } else {
    //   color = 'blue'
    // }
    this.setState({
      color:color
    })
  }


  render() {
    console.log(this.state)
    return (<div>
      <h1 style={{
        color: this.state.color
        }}>Hello {this.props.name}</h1>
      <h4>The count is {this.state.count}</h4>
      <button onClick={this.handleAdd}>Add One</button>
      <button onClick={this.handleMinus}>Minus one</button>
      <button onClick={this.resetMe}>Reset me!</button>
      <button onClick={this.handleToggle}>Toggle color</button>
      </div>
    )
  }
}

function AddCounter () {
  return  <button>Add Counter</button>

}

const App = function() {

  let arr = [
    <Counter name="First Counter"/>,
    <Counter name="Second Counter"/>,
    <Counter name="Third Counter"/>
  ];

  return (
  <div>
    <AddCounter></AddCounter>
    <hr />
    {arr.map((counter) => counter)}
  </div>)
}

ReactDOM.render(<App />, document.getElementById('root'))


{/* <h1>Functional Example</h1>
<Hello name="Functional Component 1" />
{Hello({name: "Functional component 2"})}
<h1>Class Example</h1>
<HelloClass name="class-based component 1" />
{new HelloClass({name: "Class-based component 2"}).render()} */}