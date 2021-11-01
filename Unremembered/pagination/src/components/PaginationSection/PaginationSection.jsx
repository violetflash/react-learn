import { useState, useEffect } from 'react';
import { Container, Pagination, TextField, Stack, List, ListItem, Box, Divider } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const SkeletonBox = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

const PaginationSkeleton = ({children}) => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', marginY: 3}}>
      {children}
    </Box>
  );
}

export const PaginationSection = props => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const queryHandle = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {
    setIsLoading(true);
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`)
      .then(({ data }) => {
        console.log(data);
        setPosts(data.hits);
        setPageQty(data.nbPages);

        if (data.nbPages < page) {
          setPage(1);
        }

        setIsLoading(false);
      });
  }, [query, page])

  const pagination = pageQty > 0 ?
    <Pagination
      shape="rounded"
      color="primary"
      variant="outlined"
      count={pageQty}
      page={page}
      showFirstButton
      showLastButton
      onChange={(_, num) => setPage(num)}
      sx={{marginY: 3, marginX: 'auto'}}
    /> : <Skeleton wrapper={PaginationSkeleton} width={500} height={37} />
  ;



  const skeleton = <Skeleton wrapper={SkeletonBox} count={20} height={37} />;

  const postItems = posts.map((el) => {
    return <ListItem key={el.objectID}>{el.title || el.story_title}</ListItem>
  })

  return (
    <Container
      sx={{marginTop: '30px'}}
      maxWidth='xl'
    >
      <TextField
        sx={{marginBottom: '15px'}}
        fullWidth
        label='query'
        value={query}
        onChange={queryHandle}
      />
      <Stack spacing={2}>
        {pagination}
        <Divider/>
        <List>
          {isLoading ? skeleton : postItems}
        </List>
      </Stack>
    </Container>
  )
};