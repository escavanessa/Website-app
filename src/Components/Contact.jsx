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

const Contact = () => {
    const [input, setInput] = useState({name:'', email:'', message:''});



    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((prevInput) => ({...prevInput, [name]: value}));
    }

    const clearForm = () => {
        setInput("");
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return(
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label>
                        <input 
                        type='text'
                        id="name"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        placeholder="Name"
                        />
                    </label>
                    <label>
                        <input 
                        type=""
                        id="email"
                        name="email"
                        value={input.email}
                        onChange={handleChange}
                        placeholder="email"
                        />
                    </label>
                </div>
                <div className="form-text">
                    <label>
                        <textarea 
                        id="message"
                        name="message"
                        value={input.message}
                        onChange={handleChange}
                        />
                    </label>

                    <button className="form-btn" onClick={() => clearForm}  type="submit">Submit</button>
                </div>
            </form>
    )
}

export default Contact