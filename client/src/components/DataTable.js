import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllForms } from '../store/actions/formAction';
import { getAllPages } from '../store/actions/pageAction';



const rows = [
  { _id: 1, page_number: 'Snow', page_id: 'Jon', form_type: 35, form_label: 35, input: "sh" },
  { _id: 2, page_number: 'Lannister', page_id: 'Cersei', form_type: 42, form_label: 35, input: "sh" },
  { _id: 3, page_number: 'Lannister', page_id: 'Jaime', form_type: 45, form_label: 35, input: "sh" },
  { _id: 4, page_number: 'Stark', page_id: 'Arya', form_type: 16, form_label: 35, input: "sh" },
  { _id: 5, page_number: 'Targaryen', page_id: 'Daenerys', form_type: null, form_label: 35, input: "sh" },
  { _id: 6, page_number: 'Melisandre', page_id: null, form_type: 150, form_label: 35, input: "sh" },
  { _id: 7, page_number: 'Clifford', page_id: 'Ferrara', form_type: 44, form_label: 35, input: "sh" },
  { _id: 8, page_number: 'Frances', page_id: 'Rossini', form_type: 36, form_label: 35, input: "sh" },
  { _id: 9, page_number: 'Roxie', page_id: 'Harvey', form_type: 65, form_label: 35, input: "sh" },
];

const DataTable = () => {

  const {allforms} = useSelector(state => state.form)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllForms())
    //dispatch(getAllPages())
     
}, [])
console.log("2", allforms) 
const columns = [
  { field: "_id", headerName: "Form ID", width: 150 },
  { field: "page_number", headerName: "Page Number", type: 'number', width: 130 },
  { field: "page_id", headerName: "Page ID", width: 150 },
  
  { field: "form_type", headerName: "Form Type", width: 130 },
  { field: "form_label", headerName: "Form Label", width: 130 },
  
  {
    field: "input",
    headerName: "Answers",
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 130
  },
];

  return (
    <div style={{ height: 400, width: '100%' }}>
      {console.log("allformsss", allforms)}
      <DataGrid
      getRowId={(row)=>row._id}
        rows={allforms}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}

export default DataTable 
