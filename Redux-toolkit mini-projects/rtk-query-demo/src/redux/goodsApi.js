import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const goodsApi = createApi({
  //как будет отображаться в общем Store
  reducerPath: "goodsApi",
  //Базовый запрос (в дальнейшем будет расширяться под конкретные запросы)
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  //конечные точки
  endpoints: (build) => ({
    //build - специальный объект со встроенными методами. Встроенный метод .query - для get запроса и получения данных
    //в него нужно передать объект и описать, с чем он будет работать
    getGoods: build.query({
      query: () => 'goods', //дополнение к базовому адресу (можно с / можно и без - одинаково будет работать)
    })
  })
});

export const { useGetGoodsQuery } = goodsApi; //этот хук формируется автоматически исходя из имени ендпойнта и
// добавления ему get в начале и Query в конце
