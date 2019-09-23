import React, { Component } from 'react';

class Contact extends Component {
    onSubmit = () => {
        this.props.history.push('/')
    }
    render(){
        return (
            <div id="Contact">
                <h3 className="display-4">Contact</h3>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
export default Contact