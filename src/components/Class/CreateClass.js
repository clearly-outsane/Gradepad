import React, { Component, Fragment } from 'react';

class CreateClass extends Component {
    state = {
        className: '',
        course: ''
    };

    render() {
        console.log(this.state.className, this.state.course);
        return (
            <Fragment>
                <div>
                    <form>
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
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default CreateClass;
