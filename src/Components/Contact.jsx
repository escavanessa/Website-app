import { useState } from "react"

//the form element takes a value attribute with the getter and then takes the onchange attribute
//which takes the setter function (handlesubmit) this defines some action for the onchange. inside the
//handlesubmit, take in the event and update the state(setter) with the event target value

const Contact = () => {
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) => {
//prevent default
        setInput(e.target.value)
    }


    return(
        <form>
            <label> Name:
                <input 
                type='text'
                value={input}
                onChange={handleSubmit}
                />
            </label>
            <p>input value: {input}</p>
        </form>
    )
}

export default Contact