import { useState } from 'react';

function ColorForm({ addColor }) {
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('user color', input)
        addColor(input)
        setInput('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" 
                    value={input}
                    placeholder={`hey,I'm Typing here!`}
                    onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default ColorForm