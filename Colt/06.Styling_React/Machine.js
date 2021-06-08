function randomizer(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

class Machine extends React.Component {
    render() {
        const props = this.props;
        const s1 = randomizer(props.icons);
        const s2 = randomizer(props.icons);
        const s3 = randomizer(props.icons);
        const winner = (s1 === s2) && (s2 === s3);
        const styles = {fontSize: '50px', background: "purple"};
        return (
            <div className="Machine">
                <p style={styles}>{s1} {s2} {s3}</p>
                <p className={winner ? "winner" : "loser"}>{winner ? "You Win!" : "You lose!"}</p>
            </div>
        )
    }
}
