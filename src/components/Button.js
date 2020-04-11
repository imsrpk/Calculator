import React, { Component } from "react";
import "../styles.css";
import styled from "styled-components";
class Button extends Component {
  render(props) {
    // console.log("Hello Btn");
    // console.log(String(this.props.action + `("` + this.props.symbol + `")`));
    return (
      <div className={`column-${this.props.cols}`}>
        <ButtonWrapper
          className="calc-btn"
          onClick={
            e => this.props.action(this.props.symbol)
            // eval(
            //   String(
            //     `this.` + this.props.action + `("` + this.props.symbol + `")`
            //   )
            // )
          }
        >
          {this.props.symbol}
        </ButtonWrapper>
      </div>
    );
  }
}

export default Button;
const ButtonWrapper = styled.button`
  padding: 5px;
  background: #eee;
  &:focus,
  &:hover {
    background: #fff;
  }
`;
//try to hover the button and see the stykes are applied and also the class name is dynamicaly generated
