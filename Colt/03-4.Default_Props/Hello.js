class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 19
    }
    render() {
        const { from, to, bangs } = this.props;
        const bang = '!'.repeat(bangs);
        return <p>Hi to {to} from {from}{bang}</p>
    }
}
