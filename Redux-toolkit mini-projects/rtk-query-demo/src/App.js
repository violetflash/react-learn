import { useGetGoodsQuery } from './redux'; //автоматически сформированный хук


function App() {
  const { data =[], isLoading } = useGetGoodsQuery(); //этот хук при вызове будет возвращать объект. При вызове
  // произойдет get запрос к серверу (как мы и указали в endpoint)
  //вместе с isLoading можно также получать error и обрабатывать её
  if (isLoading) return <h1>Loading...</h1>;

  const items = data.map(item => <li key={item.id}>{item.name}</li>)

  return (
    <div className="App">
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default App;
