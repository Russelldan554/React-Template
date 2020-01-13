import React, { useState } from 'react';

function Home(props) {
    const [name, setName] = useState("");

    return (
        <div>
            Hello, {name}!
            <br />
            <br />

            <input
                onChange={e => setName(e.target.value)}
                placeholder={"Enter Your Name"}
            />
        </div>
    );
}

export default Home;