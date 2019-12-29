import React from "react";
import Button from "@material-ui/core/Button";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  clickHandle = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <div
            style={{ contentAlign: "center", margin: "20px", padding: "50px" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={this.clickHandle}
            >
              Lets Start
            </Button>
            {this.state.show ? (
              <div>
                <h3 style={{ textAlign: "center" }}>{this.props.text}</h3>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.props.closePopup}
                >
                  Ok
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Popup;
