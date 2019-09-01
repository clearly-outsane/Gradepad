import React, { Component, Fragment } from "react";

class CreateClass extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <form>
            <label>
              Class Name:
              <input />
            </label>
            <br />
            <label>
              Course:
              <input />
            </label>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default CreateClass;
