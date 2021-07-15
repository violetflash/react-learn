import React from 'react';
import classes from './Person.module.scss';

class Person extends React.Component {
    render() {

        console.log('[Person.js] rendering...');
        // const rnd = Math.random();
        // if (rnd > 0.7) {
        //     throw new Error('Something went wrong');
        // }

        return (
            <div className={classes.Person}>
           <span onClick={this.props.click}>
                {this.props.name}, {this.props.age}
            </span>
                <input type="text"
                       onChange={this.props.change}
                       value={this.props.name}
                />
                <button className={classes.Button}>example</button>
            </div>

        );

    }
}

export default Person;
