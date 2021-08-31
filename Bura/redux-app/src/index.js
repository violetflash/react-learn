import { createStore } from 'redux';

const reducer = (state = 0, action) => {

    switch (action.type) {
    case 'RND':
        console.log(action.payload);
        return state + action.payload;
    case 'INC':
        return state + 1;
    case 'DEC':
        return state - 1;
    default:
        return state;
    }
};

const store = createStore(reducer);

const inc = () => ({ type: "INC" });

const dec = () => ({ type: "DEC" });

console.log(store.getState());

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10);
        store.dispatch({
            type: 'RND',
            payload
        });
        }
    );

document
    .getElementById('dec')
    .addEventListener('click', () => store.dispatch(dec()));

document
    .getElementById('inc')
    .addEventListener('click', () => store.dispatch(inc()));


const updateCounter = () => {
    document.getElementById('counter').textContent = store.getState();
};

store.subscribe(updateCounter);
