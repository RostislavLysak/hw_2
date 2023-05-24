import React from "react";
import Paragraf from "../Paragraf";
import Button from "../Button";

export default class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = { show: false };
    }
  
    onClickHandler = () => {
      this.setState( { show: !this.state.show } );
    };
  
    render() {
      return (
        <div>
          {this.state.show ? (
        <Paragraf>Name: 'Mykola', age: 30</Paragraf>
      ) : (
        null
      )}
          <Button onClick={this.onClickHandler}>{this.state.show ? "скрыть" : "показать"}</Button>
        </div>
      );
    }
  }