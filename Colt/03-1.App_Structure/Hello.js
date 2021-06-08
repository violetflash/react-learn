class Hello extends React.Component {
    render() {
        console.log(this.props);
        const props = this.props;
        return (
            <div>
                <h1>Hi to {props.to} from {props.from} {'!'.repeat(props.bangs)}</h1>
                <img src={props.img} alt=""  />
            </div>
        )
    }
}

