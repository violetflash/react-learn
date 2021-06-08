class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Jane"
                    from="Alex"
                    bangs={3}
                />

                <Hello
                    to="George"
                    // bangs={4}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
