import { Alert, Button, Container, CssBaseline, FormControl } from '@mui/material'
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BasicPagination from '../components/BasicPagination'
import { Form } from '../components/Form'
import { getFormByPageNumber, updateOldForm } from '../store/actions/formAction';
import { getAllPages, getPageByNumber } from '../store/actions/pageAction';
import { getAllFormsSuccess } from '../store/reducers/formSlice';

const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '50rem',
    height: '50rem',
  };

  

const Formulaire = () => {
    const ifinput = []
    const { allpages } = useSelector(state => state.page);
    const { allforms } = useSelector(state => state.form);
    const [page, setPage] = useState(1)
    const [oldform, setOldform] = useState()
    const [finput, setFinput] = useState(ifinput)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFormByPageNumber(page))
        dispatch(getAllPages())
        console.log("1")  
    }, [page])
    
    const handleChange = (event, value) => {
        setPage(value);
      };

    const handleUpdate = (e) => {
        e.preventDefault();
        //console.log("eee", e.target.value)
        const {  value } = e.target;
        let x = document.activeElement.id
        console.log("xxxx", x)
        //console.log('eeee',e.target.id) 
        setOldform({ ...oldform, input: value });
        dispatch(updateOldForm(allforms[x]?._id , oldform)) 
        //dispatch(updateOldForm(oldform._id, oldform))
        console.log('rrrr',oldform)
        console.log('rrrr',allforms)
    };

    const handelSubmit = () =>{
        for (let i = 0; i < allforms.length; i++) {
            dispatch(updateOldForm(allforms[i]._id , oldform))  
        }   
     }
     const handelNext = () => {setPage(page+1)}


    return (
        <div>
            
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                <h1>Formulaire</h1>
            <Box sx={{ ...commonStyles, borderColor: 'primary.main', borderRadius: 5 }} >
            <Container maxWidth="xs">
            <BasicPagination page={page} count={allpages.length-1} handleChange={handleChange}/>
            </Container>
            <br/>
            <br/>

             {<Container maxWidth="md"><div><h1>Page {allforms.page_number}</h1> 
                        <Box >
                            {allforms?.map((form, index) => (
                                <div style={{marginLeft:'10px'}}>
                                    {/* {console.log('formmmm', allforms)} */}
                                    <h3>{form?.form_label}</h3>
                            <Form type={form?.form_type} label={form?.form_label} id={index} handleChange={handleUpdate}/>
                          
                                </div>

                            ))}
                            {/* <input type="submit" value="Submit"/> */}
                              <Button sx={{ left: "70%"}} variant="contained" color="success" onClick={handelNext}>Next</Button>
                           
                            
                            {/* {alert && <Alert severity="success" color="info">
                                This is a success alert — check it out!
                            </Alert>} */}
                        </Box ></div></Container>}
            </Box>
            </Container>
            </React.Fragment>
        </div>
    )
}

export default Formulaire
