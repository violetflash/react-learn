import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components/macro';
import 'react-loading-skeleton/dist/skeleton.css'
import { useInView } from 'react-intersection-observer';


const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  padding: 10px;
  text-align: left;
  margin-bottom: 4px;
  //border: 1px solid;
`;


const SkeletonWrapper = ({children}) => {
  return (
    <div style={{
      // border: '1px solid black',
      display: 'block',
      // lineHeight: 2,
      padding: 4,
      marginBottom: 2,
      // width: 100,
    }}>
      {children}
    </div>
  )
}


export const List = props => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(20);
  const [isLoading, setIsLoading] = useState(true);
  // const limit = 20;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setLimit((limit) => {
        return limit < 200 ? limit + 20 : 200;
      });
    }
  }, [inView]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        .then(res => res.json())
        .then(json => {
          setData([...json]);
          setIsLoading(false);
        });
    };
    const timeoutId = setTimeout(fetchData, 1000);

    return () => clearTimeout(timeoutId);

  }, [limit]);

  const skeleton = <Skeleton wrapper={SkeletonWrapper} count={limit} height={30} />;


  const todos = data.map(todo => (
    isLoading ? skeleton : <Li key={todo.id}>{todo.id}. {todo.title}</Li>
  ));

  const prevHandle = () => setLimit((limit) => {
    return limit > 21 ? limit - 20 : 20;
  })

  const nextHandle = () => setLimit((limit) => {
    return limit < 200 ? limit + 20 : 200;
  });


  // if (inView) {
  //   setLimit((limit) => {
  //     return limit < 200 ? limit + 20 : 200;
  //   });
  // }

  console.log(inView);

  return (
    <>
      {/*<button onClick={prevHandle}>Prev</button>*/}
      {/*<button onClick={nextHandle}>Next</button>*/}
      <Ul>
        {todos}
        <Li ref={ref}>bottom</Li>
      </Ul>
    </>

  )
};
