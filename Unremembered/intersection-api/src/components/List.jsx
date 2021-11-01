import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWrapper = ({children}) => {
  return (
    <div style={{
      border: '1px solid black',
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

export const List = (page) => {
  const [todos, setTodos] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  //pagination
  // const [page, setPage] = useState(1);
  const limit = 20;
  // const onScreen = useOnScreen(ref);
  // const childRef = useRef();

  // console.log(onScreen);

  // const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

  useEffect(() => {

    const fetchTodos = async (page, limit) => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`);
      const json = await res.json();
      setTodos(prevState => [...prevState, ...json]);
      setTodos(json);
      // setPage(page => page + 1);
      // setIsLoading(false);
    };
    // const timeoutId = setTimeout(() => fetchTodos(page, limit), 3000);
    fetchTodos(page, limit)
    return () => {
      // clearTimeout(timeoutId);
    }

  }, [page]);

  // if (!todos) return;

  const todosToRender = todos.map(todo => (
    <li key={todo.id} style={{ textAlign: 'left', padding: 10, border: '1px solid black', marginBottom: 2 }}>
      {todo.id}. {todo.title}
    </li>
  ));

  // const darkSkeleton =
  //   <SkeletonTheme baseColor="#202020" highlightColor="#444">
  //     <p>
  //       <Skeleton wrapper={SkeletonWrapper} count={10} height={30} />
  //     </p>
  //   </SkeletonTheme>
  // ;

  const skeleton = <Skeleton wrapper={SkeletonWrapper} count={limit} height={30} />;

  return (
    <>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, }}>
        {/*{isLoading ? skeleton : todosToRender}*/}
        {todosToRender}
      </ul>
    </>

  )
};
