class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name="Elton"
                    hobbies = {['Piano', 'Sitting', 'Dancing']}
                />

                <Friend
                    name="Frida"
                    hobbies = {['Drawing', 'Drinking']}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
