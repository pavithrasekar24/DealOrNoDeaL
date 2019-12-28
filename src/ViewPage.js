import React, { Component } from "react";
class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: [0, 500, 1000, 1500, 2000],
       rand:[], 
    };
  }
  UNSAFE_componentWillMount(){
    let data = [...this.state.amount]
    let randata = data.sort(this.func)
    console.log(randata)
    this.setState({rand:randata})
    console.log("will")
  }
  func(a, b) {  
    return 0.5 - Math.random();
  } 
  clicked(item) {
    alert(item);
  }
  render() {

    return (
      <div
        style={{
          // backgroundColor: "bisque",
          margin: "5% 25% 0% 25%"
        }}
      >
        <div
          style={{
            width: "300px",   
            height: "600px",
            border: "1px solid black",
            float: "left"
          }}
        >
          {
            this.state.rand.map((item, index) => {
            return (
              <div
              key={index}
                style={{
                  float: "left",
                  width: "60px",
                  height: "60px",
                  backgroundColor: "yellow",
                  textAlign: "center",
                  margin: "1%"
                }}
                onClick={() => this.clicked(item)}
              >
                <h4>{index+1}</h4>
              </div>
            );
          })}
        </div>
        <div
          style={{
            backgroundColor: "lightBlue",
            width: "200px",
            height: "585px",
            marginLeft: "320px",
            padding: "10px",
            border: "1 px solid black"
          }}
        >
          <div>
            {this.state.amount.reverse().map(i => {
              
              return (
                <div
                  style={{
                    backgroundColor: "white",
                    margin: "2%",
                    padding: "1%",
                    textAlign: "center"
                  }}
                >
                  {i}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ViewPage;
