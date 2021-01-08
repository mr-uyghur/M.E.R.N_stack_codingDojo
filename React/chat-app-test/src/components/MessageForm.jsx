import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    const {onNewMessage} = props

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewMessage( msg );
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Send Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;