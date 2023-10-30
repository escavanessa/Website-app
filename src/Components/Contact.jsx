import { useState } from "react"

//the form element takes a value attribute with the getter and then takes the onchange attribute
//which takes the setter function (handlesubmit) this defines some action for the onchange. inside the
//handlesubmit, take in the event and update the state(setter) with the event target value


//when you have multiple input fields, you can add 'props set to empty string to the useState (how ever many
//you need) then you can go into each input field and in the value attribute add the getter name dot the 
//corresponding prop in the usestate argument.

//the form element takes the onSubmit attribute which is equal to the handleSubmit function. the actual 
//individual inputs onChange will be set to the handleChange function. it extracts the name and value
//of the form field and then updates the input state variable using the setinput function

// made this reusable
const FormFieldErrorMessage = (props) => {
    return (
        <div className="FieldError">{props.msg}</div>
    );
};





const Contact = () => {
    // change all data to object so we can keep track of if its touched
    // the same way password was before
    const [name, setName] = useState({ value: "", isTouched: false, });
    const [email, setEmail] = useState({ value: "", isTouched: false, })
    const [message, setMessage] = useState("")
    const [password, setPassword] = useState({ value: "", isTouched: false, });

    // update to set each back to original data values
    const clearForm = () => {
        setName({
            value: "",
            isTouched: false,
        });
        setEmail({
            value: "",
            isTouched: false,
        });
        setMessage("");
        setPassword({
            value: "",
            isTouched: false,
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        clearForm();
    }

    const getIsFormValid = () => {
        return (
            validateName() &&
            validateEmail() &&
            validatePassword()
        );
    };

    // actually if we move it in here we can just use the state data since its in scope
    // email should match regex
    function validateEmail() {
        let re = /\S+@\S+\.\S+/g;
        return re.test(email.value);
    }

    // password should have 8 or more
    function validatePassword() {
        return password.value.length > 7;
    }

    // name should at least exist lol
    function validateName() {
        return !!name.value;
    }


    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div id="contact" className="form-input">
                <h2>Contact Me!</h2>
                <label>
                    <input
                        type='text'
                        id="name"
                        name="name"
                        // we can use the same validation logic to conditionally add a class when the field is invalid
                        className={name.isTouched && !validateName() ? 'invalid-field' : ''}
                        value={name.value}
                        placeholder="Name"
                        onChange={(e) => {
                            setName({ ...name, value: e.target.value })
                        }}
                        onBlur={() => {
                            setName({ ...name, isTouched: true });
                        }}
                    />
                    {name.isTouched && !validateName() ? (<FormFieldErrorMessage msg={"please enter a name"} />) : ''}
                </label>
                <label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={email.isTouched && !validateEmail() ? 'invalid-field' : ''}
                        value={email.value}
                        placeholder="email"
                        onChange={(e) => {
                            /*  the spread operator here will combine the whole object
                                with what ever has changed here
                                Its similar to doing this and it combines all three
                                setEmail(Object.assign({}, email, {value: e.target.value}))
                            */
                            setEmail({ ...email, value: e.target.value })
                        }}
                        onBlur={() => {
                            /*
                                onBlur is called when the user's focus leaves the field

                                So we can set isTouched to true in order to keep track that the
                                user has clicked the field

                                The reason is that we don't want to show the error right away,
                                or when the user is typing, but if the user types something and
                                then leaves the field then we should tell them they messed up
                                and they better fix it. So we can keep track of this with isTouched
                            */
                            setEmail({ ...email, isTouched: true });
                        }}
                    />
                    {/*
                            we can make a conditional variable for the error message.
                            If the field has been touched, and the email isn't valid
                            then show the message, or show nothing if we are good.
                        */}
                    {email.isTouched && !validateEmail() ? (<FormFieldErrorMessage msg={"bruh, wrong email"} />) : ''}
                </label>
                <label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className={password.isTouched && !validateName() ? 'invalid-field' : ''}
                        value={password.value}
                        placeholder="password"
                        onChange={(e) => {
                            setPassword({ ...password, value: e.target.value })
                        }}
                        onBlur={() => {
                            setPassword({ ...password, isTouched: true });
                        }}
                    />
                    {/* moved this outside of the brackets and removd the spread operator */}
                    {password.isTouched && !validatePassword() ? (<FormFieldErrorMessage msg={"Password should have at least 8 characters"} />) : ''}
                </label>
            </div>
            <div className="form-text">
                <label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        placeholder="message"
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                    />
                </label>

                <button className="form-btn" disabled={!getIsFormValid()} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Contact