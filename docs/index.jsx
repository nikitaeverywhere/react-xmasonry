import React from "react";
import { XMasonry, XBlock } from "../src/index.jsx";

class Wrapper extends React.Component {

    state = {
        data: [
            {
                id: 1,
                header: "Hello!",
                body: "This is the body. This is successfully rendered card."
            }
            // , {
            //     id: 2,
            //     header: "Hello 2!",
            //     body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card.",
            //     width: 2
            // }
            // ,{
            //     id: 3,
            //     header: "Hello 3!",
            //     body: "This is the body."
            // },
            // {
            //     id: 4,
            //     header: "Hello 4. This is a very long title of the card.",
            //     body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is the body. This is successfully rendered card. This is successfully rendered card."
            // },
            // {
            //     id: 5,
            //     header: "Hello 5!",
            //     body: "This is the body. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card. This is successfully rendered card."
            // },
            // {
            //     id: 6,
            //     header: "Hello 6...",
            //     body: "Duck the system!"
            // },
            // {
            //     id: 7,
            //     header: "Hello 7!",
            //     body: "This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width! This block takes 2 blocks of width!",
            //     width: 2
            // },
            // {
            //     id: 8,
            //     header: "Hello 8 :)",
            //     body: "2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again! 2 blocks of width again!",
            //     width: 2
            // },
            // {
            //     id: 9,
            //     header: "Hello 9",
            //     body: "Dummy card"
            // },
            // {
            //     id: 10,
            //     header: "Hello 10",
            //     body: "Dummy card"
            // },
            // {
            //     id: 11,
            //     header: "Hello 11",
            //     body: "Dummy card"
            // }
        ]
    };

    key = this.state.data.length;

    getRandomCard () {
        return {
            id: ++this.key,
            header: "This is a dummy card",
            body: ["This is a dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body"
                , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
                , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
                , ". Dummy body. Dummy body. Dummy body. Dummy body. Dummy body."
            ].slice(0, Math.floor(Math.random() * 6) + 1),
            width: Math.floor(1 + Math.random() * 1.5)
        };
    }

    addCard () {
        this.setState({
            data: this.state.data.concat(this.getRandomCard())
        });
    }

    deleteCard () {
        if (this.state.data.length < 1)
            return;
        let copy = this.state.data.slice();
        copy.splice(Math.floor(Math.random()  * copy.length), 1);
        this.setState({
            data: copy
        });
    }

    replaceCard () {
        if (this.state.data.length < 1)
            return;
        let copy = this.state.data.slice();
        copy.splice(Math.floor(Math.random()  * copy.length), 1, this.getRandomCard());
        this.setState({
            data: copy
        });
    }

    render () {
        requestAnimationFrame(() => window.scrollTo(0, document.body.scrollHeight));
        return <div>
            <XMasonry>
                { this.state.data.map((d, i) =>
                    <XBlock key={ d.id } width={ d.width || 1 }>
                        <div className="card">
                            <h1>[{ d.id }] { d.header }</h1>
                            <p>{ d.body }</p>
                        </div>
                    </XBlock>
                )}
            </XMasonry>
            <div style={{ textAlign: "center" }}>
                <button onClick={ this.addCard.bind(this) }>Add Random Card</button>
                <button onClick={ this.deleteCard.bind(this) }>Delete random card</button>
                <button onClick={ this.replaceCard.bind(this) }>Replace random card</button>
            </div>
        </div>
    }

}

window.init = function () {
    ReactDOM.render(
        <Wrapper/>,
        document.getElementById(`root`)
    );
};