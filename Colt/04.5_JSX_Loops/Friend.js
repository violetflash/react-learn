class Friend extends React.Component {
    render() {
        const { name, hobbies } = this.props;
        const listItems = hobbies.map((elem, index) => <ListItem key={index} value={elem} />)
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}
