import { useState } from 'react';
import styled from 'styled-components/macro';
import { useIntersect } from '../../hooks';
import { List } from "../List";

const StyledScaleSection = styled.section`
  transition: all 0.3s ease 0s;
  //transform: ${props => props.ratio ? `scale(${props.ratio})` : 'scale(1)'};
  //background-color: #0c8;
`;

const { format } = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1 });
const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

export const ScaleSection = () => {
  const [page, setPage] = useState(1);
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray()
  });

  const ratio = format(entry.intersectionRatio)
  console.log(ratio);

  if (ratio === 1) {
    alert('that is all!')
    // setPage(page => page + 1);
  }

  const nextPageHandler = () => setPage(page => page + 1);

  return (
    <StyledScaleSection ref={ref}>
      <button onClick={nextPageHandler}>Next page</button>
      <List page={page}/>
    </StyledScaleSection>
  );
};
