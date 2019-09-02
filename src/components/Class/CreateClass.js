import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import createClassRequest from '../../redux/actions';

class CreateClass extends Component {
    state = {
        className: '',
        course: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // call action here
        this.props.createClassRequest({})
    }

    render() {
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

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        createClassRequest
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(CreateClass);
