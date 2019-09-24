import React from 'react';

const Contact = (props) => {
    const onSubmit = () =>  {
        props.history.push('/')
    };

        return (
            <div id="Contact">
                <h3 className="display-4">Contact</h3>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={onSubmit}>Submit</button>
                </form>
            </div>
        );

}
export default Contact