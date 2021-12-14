import { Alert, Container, CssBaseline, Grid, Link } from '@mui/material'
import React, { useState } from 'react'
import { Form } from '../components/Form'
import GroupOrientation from '../components/GroupOrientation'
import UseButton from '../components/UseButton'
import Formulaire from './Formulaire'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { useButton } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux'
import { addNewPage, getPageByNumber } from '../store/actions/pageAction'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addForm } from '../api/formApi';
import { addNewForm, getForm } from '../store/actions/formAction';
import DataTable from '../components/DataTable'

const buttons = ["Text-Field", "Checkbox", "Button", "Date", "Email"];

const CustomButtonRoot = styled('button')`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.active {
    background-color: #004386;
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
    const { children } = props;
    const { active, disabled, focusVisible, getRootProps } = useButton({
        ...props,
        ref,
        component: CustomButtonRoot,
    });

    const classes = {
        active,
        disabled,
        focusVisible,
    };

    return (
        <CustomButtonRoot {...getRootProps()} className={clsx(classes)}>
            {children}
        </CustomButtonRoot>
    );
});
const commonStyles = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
    width: '50rem',
    height: '50rem',
};

const Admin = () => {
    const icount = 1
    const initform = { page_id: "", page_number: null, form_type: "", form_label: "", input: "" }

    const { form } = useSelector(state => state.form);
    const { page } = useSelector(state => state.page);

    const [showpage, setShowpage] = useState(false)
    const [showform, setShowform] = useState(false)
    const [count, setCount] = useState(icount)
    const [nform, setNform] = useState(initform)
    const [open, setOpen] = useState(false);
    const [formulaire, setFormulaire] = useState([]);
    const [alert, setAlert] = useState(false)
    const [showTable, setShowTable] = useState(false)

    const dispatch = useDispatch()

    const handleShowAddPage = () => {
        setCount(count + 1)
        setShowpage(true)
        console.log('click page!')
        dispatch(addNewPage({ page_number: count }))
        dispatch(getPageByNumber({ page_number: count }, count))
    }

    const handleClickOpen = (e) => {
        //console.log("e", e)
        setNform((value) => ({ ...value, ...value.nform, form_type: e?.target?.innerText.toLowerCase(), page_id: page._id, page_number: page.page_number }));
        setOpen(true);
        console.log("form", nform)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setNform({ ...nform, [name]: value });
    };
    const handelAddForm = () => {

        dispatch(addNewForm(nform))
        setFormulaire(formulaire, formulaire.push(nform))
        setShowform(true)
        console.log("formulaire", formulaire)
        setOpen(false);

        //dispatch(getForm(nform._id))
    }
    const handelSubmit = () => {
        setAlert(true);
        setFormulaire([])
        setTimeout(() => {
            setAlert(false);
        }, 2000);

    }
    const handelShowTable = () => {
        setShowTable(true)
    }

    return (
        <div>
            
            <React.Fragment>
                <CssBaseline />
                
                <Container maxWidth="lg">
                <h1>Admin</h1>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100%' }} >
                    {showTable == false ?
                        <Button sx={{ marginBottom:4}} variant="outlined" endIcon={<SendIcon />} onClick={handelShowTable}>
                            Visit Answers
                        </Button>
                        : <Link href='/admin'><Button sx={{ marginBottom:4}} variant="outlined" onClick={handelShowTable}>
                        Back
                    </Button></Link>}
                        <div>
                            {showTable == false ?
                                <div><Stack spacing={2} direction="row">
                                    <CustomButton onClick={handleShowAddPage}>New Page</CustomButton>
                                </Stack>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <Box sx={{ display: 'flex', '& > *': { m: 1 }, }}>
                                                <ButtonGroup orientation="vertical" aria-label="vertical outlined button group">
                                                    {buttons.map((button) => (
                                                        <Button variant="outlined" onClick={handleClickOpen}>{button}</Button>
                                                    ))}
                                                </ButtonGroup>
                                                <Dialog open={open} onClose={handleClose}>
                                                    <DialogTitle>Add Form</DialogTitle>
                                                    <DialogContent>
                                                        <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            id="name"
                                                            label="Form Label"
                                                            name="form_label"
                                                            type="text"
                                                            value={form.form_label}
                                                            fullWidth
                                                            variant="standard"
                                                            onChange={handleChange}
                                                        />
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>Close</Button>
                                                        <Button onClick={handelAddForm}>Add</Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={10}>
                                            {showpage && <div><h1>Page {page.page_number}</h1>
                                                <Box sx={{ ...commonStyles, borderColor: 'primary.main', borderRadius: 5 }} >
                                                    {showform && formulaire?.map((form) => (
                                                        <div style={{ marginLeft: '10px' }}>
                                                            {console.log('formmmm', formulaire)}
                                                            <h3>{form?.form_label}</h3>
                                                            <Form type={form?.form_type} label={form?.form_label} />
                                                        </div>
                                                    ))}
                                                    <Button onClick={handelSubmit}>Submit</Button>

                                                    {alert && <Alert severity="success" color="info">
                                                        This is a success alert — check it out!
                                                    </Alert>}
                                                </Box>
                                            </div>
                                            }


                                        </Grid>
                                    </Grid></div> : <Box ><DataTable /></Box>}
                        </div>
                    </Box>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default Admin
