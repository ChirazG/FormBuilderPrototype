import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const BasicPagination = (props) => {
  
  const {page,count,handleChange}=props
  return (
    <Stack spacing={2}>
      
      <Pagination page={page} count={count} onChange={handleChange} color="primary" />

    </Stack>
  );
}



export default BasicPagination

