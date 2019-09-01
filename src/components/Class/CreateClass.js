import React, { Component, Fragment } from 'react'

class CreateClass extends Component {
    state = {
        className: '',
        course: ''
    }

    render() {
        console.log(this.state.className)
        return (
            <Fragment>
                <div>
                    <form>
                        <label>
                            Class Name:
                            <input
                                name="class"
                                value={this.state.className}
                                onChange={className =>
                                    this.setState({ className })
                                }
                            />
                        </label>
                        <br />
                        <label>
                            Course:
                            <input />
                        </label>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default CreateClass
