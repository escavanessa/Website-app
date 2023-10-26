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

const PasswordErrorMessage = () => { 
    return ( 
      <p className="FieldError">Password should have at least 8 characters</p> 
    ); 
   }; 
    




const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [password, setPassword] = UseState({  value: "", 
    isTouched: false, });



    const clearForm = () => {
        setName("");
        setEmail("");
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
          firstName && 
          validateEmail(email) && 
          password.value.length >= 8
        ); 
       }; 


    return(
            <form className="form-container" onSubmit={handleSubmit}>
                <div id="contact" className="form-input">
                    <h2>Contact Me!</h2>
                    <label>
                        <input 
                        type='text'
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Name"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        />
                    </label>
                    <label>
                        <input 
                        type=""
                        id="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        />
                    </label>
                    <label>
                        <input 
                        type=""
                        id="password"
                        name="password"
                        value={password.value}
                        placeholder="password"
                        onChange={(e) => {
                            setPassword({...password, value: e.target.value})
                        }}
                        onBlur={() => { 
                            setPassword({ ...password, isTouched: true }); 
                          }} 
                        {...password.isTouched && password.value.length < 8 ? ( 
                        <PasswordErrorMessage /> 
                        ) : null} 
                        />
                    </label>
                </div>
                <div className="form-text">
                    <label>
                        <textarea 
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                        />
                    </label>

                    <button className="form-btn" onClick={() => clearForm}  type="submit">Submit</button>
                </div>
            </form>
    )
}

export default Contact