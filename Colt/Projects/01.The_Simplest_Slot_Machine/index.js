class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine!</h1>
                <Machine
                    icons={['🍇', '🍉', '🍒', '🍌']}
                />
                <Machine
                    icons={['🍇', '🍉', '🍒', '🍌']}
                />
                <Machine
                    icons={['🍇', '🍉', '🍒', '🍌']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
