function randomizer(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

class Machine extends React.Component {
    render() {
        const props = this.props;
        const s1 = randomizer(props.icons);
        const s2 = randomizer(props.icons);
        const s3 = randomizer(props.icons);
        const msg = (s1 === s2) && (s2 === s3) ? "You Win!" : "You lose!";
        return (
            <div>
                <p>{s1} {s2} {s3}</p>
                <p>{msg}</p>
            </div>
        )
    }
}