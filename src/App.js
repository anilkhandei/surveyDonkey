import React,{Fragment} from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
    };
  }

  goHome = () => {
    this.setState({
      step: 0,
    });
  };
  goToPrevStep = () => {
    this.setState({
      step: this.state.step - 1,
    });
  };
  goToNextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };
  render() {
    let nav;
    switch (this.state.step) {
      case 0:
        nav=(<button className="btn-nav" onClick={this.goToNextStep}>Next</button>)
        break;
      case 1:
      case 2:
        nav=<Fragment> <button className="btn-nav" onClick={this.goToPrevStep}>Prev</button> <button className="btn-nav" onClick={this.goToNextStep}>Next</button> </Fragment>
        break;
      case 3:
        nav=(<button className="btn-nav">Submit survey</button>)
      default:
        break;
    }
    return (
      <div className="container">
        <div>
          <header>
            <button className="btn-icon" onClick={this.goHome}>Welcome to Survey Donkey</button>
          </header>
          <div className="body">
            <div>
              <Home step={this.state.step} />
            </div>
            <div>
              {nav}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
