import React, { Component } from "react";
import Button from "./components/Button";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previous: [],
      current: "0",
      isReset: false
    };
    this.addToCalc = this.addToCalc.bind(this);
  }

  reset = () => {
    this.setState({
      previous: [],
      current: "0",
      isReset: false
    });
  };

  // appendToPrevious = (symbol) = {
  //   this.setState({
  //     previous:
  //   })
  // };

  calculate = symbol => {
    let operator = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b
    };
    console.log("Before Calc");
    console.log(this.state);
    this.setState({
      previous: this.state.previous.concat(this.state.current),
      current: operator[this.state.previous[1]](
        this.state.previous[0],
        this.state.current
      )
    });
    //let previous = new Array();
    [("/", "*", "+", "-")].indexOf(symbol) !== -1
      ? this.setState({
          previous: Array[(this.state.current, symbol)],
          current: "0",
          isReset: true
        })
      : console.log("calculate extreme");
    console.log("After Calc");
    console.log(this.state);
  };

  addToResult = symbol => {
    //console.log("AddtoResult");
    //
    this.state.current === "0"
      ? symbol === "."
        ? this.setState({ current: this.state.current + symbol })
        : ["/", "*", "+", "-"].indexOf(symbol) === -1
        ? this.setState({ current: symbol })
        : this.reset()
      : ["/", "*", "+", "-"].indexOf(symbol) === -1
      ? this.setState({ current: this.state.current + symbol }) //Input Numerics
      : ["/", "*", "+", "-"].indexOf(this.state.previous[1]) === -1
      ? this.setState({
          previous: this.state.previous.concat(this.state.current, symbol),
          current: "0",
          isReset: true
        })
      : this.calculate(symbol);
  };

  addToCalc = symbol => {
    //console.log(symbol);
    symbol === `C`
      ? this.reset()
      : symbol === `=`
      ? this.state.previous.length === 0
        ? console.log("Error")
        : this.calculate(symbol)
      : this.addToResult(symbol);
  };

  render() {
    let buttons = [
      { symbol: "C", cols: "3", action: "reset" },
      { symbol: "/", cols: "1", action: "addToCalc" },
      { symbol: "7", cols: "1", action: "addToCalc" },
      { symbol: "8", cols: "1", action: "addToCalc" },
      { symbol: "9", cols: "1", action: "addToCalc" },
      { symbol: "*", cols: "1", action: "addToCalc" },
      { symbol: "4", cols: "1", action: "addToCalc" },
      { symbol: "5", cols: "1", action: "addToCalc" },
      { symbol: "6", cols: "1", action: "addToCalc" },
      { symbol: "-", cols: "1", action: "addToCalc" },
      { symbol: "1", cols: "1", action: "addToCalc" },
      { symbol: "2", cols: "1", action: "addToCalc" },
      { symbol: "3", cols: "1", action: "addToCalc" },
      { symbol: "+", cols: "1", action: "addToCalc" },
      { symbol: "0", cols: "2", action: "addToCalc" },
      { symbol: ".", cols: "1", action: "addToCalc" },
      { symbol: "=", cols: "1", action: "addToCalc" }
    ];
    console.log(this.state);
    let previous =
      this.state.previous != null ? this.state.previous.join(" ") : " ";
    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="result">
          <input type="text" className="result-previous" value={previous} />
          <input
            type="text"
            className="result-current"
            value={this.state.current}
          />
        </div>
        <div className="calc">
          {buttons.map(btn => (
            <Button
              key={btn.symbol}
              symbol={btn.symbol}
              cols={btn.cols}
              action={this.addToCalc}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
