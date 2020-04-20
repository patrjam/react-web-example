import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "info",
      message: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    // Scroll to the top of the page to show the status message.
    document.getElementById("heading").scrollIntoView();
    this.setState({ type: "info", message: "Sending..." }, this.sendFormData);
  };

  /**
   * Submits form data to the web server.
   */
  sendFormData = () => {
    setTimeout(() => {
      this.setState({
        type: "success",
        message:
          "We have received your message and will get in touch shortly. Thanks!"
      });
      document.getElementById("contact-form").reset();
    }, 100);
  };

  render = () => {
    if (this.state.type && this.state.message) {
      var classString = "alert alert-" + this.state.type;
      var status = (
        <div id="status" className={classString}>
          {this.state.message}
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <h2 id="heading">
            React FE contact form example for automation testing
          </h2>
          {status}
          <form id="contact-form" action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                className="form-control"
                name="name"
                required
                type="text"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                className="form-control"
                name="email"
                required
                type="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input className="form-control" name="phone" type="phone" />
            </div>
            <h3>How can we help to you&#63; *</h3>
            <div className="form-group">
              <label className="checkbox-inline">
                <input name="areas" type="checkbox" value="Manual" />Analysis
              </label>
              <label className="checkbox-inline">
                <input
                  name="areas"
                  type="checkbox"
                  value="Automation"
                />Automation
              </label>
              <label className="checkbox-inline">
                <input
                  name="areas"
                  type="checkbox"
                  value="Development"
                />Development
              </label>
              <label className="checkbox-inline">
                <input name="areas" type="checkbox" value="Training" />Training
              </label>
            </div>
            <h3>How soon do we need to start&#63; *</h3>
            <div className="form-group">
              <label className="radio-inline">
                <input name="when" type="radio" value="Immediately" />
                <span>Immediately</span>
              </label>
              <label className="radio-inline">
                <input name="when" type="radio" value="1-3 months" />
                <span>1-3 months</span>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="project">Comment *</label>
              <textarea className="form-control" name="comment" rows="4" required type="" />
            </div>

            <div className="form-group">
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

export default App;
