class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My number is: {2 * 8.4}</h1>
            </div>
        )
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
