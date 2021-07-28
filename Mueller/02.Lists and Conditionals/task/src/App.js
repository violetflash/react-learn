import React from 'react';
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";

class App extends React.Component {
    state = {
        inputLength: 0,
        text: ''
    }

    inputHandler = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    deleteChar = (idx) => {
        const text = this.state.text.split('');
        text.splice(idx, 1);
        const updatedText = text.join('');
        this.setState({
            text: updatedText,
        });
    }

    render() {
        const charList = this.state.text.split('').map((char, index) => {
            return <Char character={char} key={char + index} clicked={() => this.deleteChar(index)}/>
        })

        const style = {
            padding: '50px'
        }


        return (
            <div style={style}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.inputHandler}
                />
                <p>{this.state.text.length}</p>
                <Validation length={this.state.text.length}/>
                <div>
                    {charList}
                </div>

            </div>
        )

    }
}

export default App;