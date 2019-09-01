import React, { Component, Fragment } from 'react';

class CreateClass extends Component {
    state = {
        className: '',
        course: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // call action here
    }

    render() {
        console.log(this.state.className, this.state.course);
        return (
            <Fragment>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Class Name:
                            <input
                                type="text"
                                value={this.state.className}
                                onChange={event =>
                                    this.setState({
                                        className: event.target.value
                                    })
                                }
                            />
                        </label>

                        <br />

                        <label>
                            Course:
                            <input
                                type="text"
                                value={this.state.course}
                                onChange={event =>
                                    this.setState({
                                        course: event.target.value
                                    })
                                }
                            />
                        </label>

                        <br />

                        <input type="submit" value="Create Class" />
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default CreateClass;
