import React from "react";

type CarProps = {
  color?: string;
  model?: string;
};

type CarState = {
  brand: string;
  model: string;
  color: string;
  year: number;
};

class Car extends React.Component<CarProps, CarState> {
  constructor(props: CarProps) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  /*static getDerivedStateFromProps(props:CarProps, state:CarState){
    return {color:props.color}
  }*/

  /*componentDidMount(): void {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 1000);
  }*/

  changeColor = (event:any) => {
    this.setState({color:"blue"});
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>Change Color</button>
      </div>
    );
  }
}

export default Car;
