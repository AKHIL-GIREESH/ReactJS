import { useState } from 'react';

const TestPage = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }

    console.log(name);
    return (
        <div>
            <h1>Test Page</h1>
            <input type="email" placeholder="Enter your name" onChange={handleChange} value={name}/>
        </div>
    )
}

export default TestPage;