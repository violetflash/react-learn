const getNum = () => {
    return Math.floor(Math.random() * 10) + 1;
};

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>Congrats YOU WIN!</h2>
                    <img src="https://media.giphy.com/media/3ov9jXFdHH77hoNcfm/giphy.gif" alt=""/>
                </div>
            ;
        } else {
            msg = <p>Sorry... You lose!</p>;
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
            </div>
        )
    }
}
