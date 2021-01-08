import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
   const {message} = props
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ message }</pre>
        </>
    );
};
    
export default MessageDisplay;