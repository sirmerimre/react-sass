import React, {Component} from 'react';

class Body extends Component {
    render() {
        return (
            <main>
                <section id="card">
                    <ul>
                        <li>
                            <span> </span>
                            <strong>How may I help you, bro?</strong>
                        </li>
                        <li>
                            <span> </span>
                            <strong>I dont't know if I can be helped.</strong>
                        </li>
                        <li>
                            <span> </span>
                            <strong>That's deep. Let me help.</strong>
                        </li>
                    </ul>

                </section>

                <section id="primary">
                    <h1>Your Personal Assistant</h1>
                    <p>Get help with your daily life stuff.</p>
                    <a href="/">Get help already</a>
                </section>

            </main>
        );
    }
}

export default Body;