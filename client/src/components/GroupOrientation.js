import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { addForm } from '../api/formApi';
import { addNewForm, getForm } from '../store/actions/formAction';

const buttons = ["Text-Feild","Checkbox", "Button", "Date", "Email"];

const GroupOrientation = () => {
  //const initformulaire = [];
  const { form } = useSelector(state => state.form);
  const initform = {"page_number": 0, "form_type": "", "form_label": "", "input": ""}
  //const [formulaire, setFormulaire] = useState(initformulaire)
  const [nform, setNform] = useState(initform)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const handleClickOpen = (e) => {
    e.preventDefault();
    //console.log("e", e)
    setNform({...nform, form_type: e.target.innerText.toLowerCase()});
    console.log("form", nform)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setNform({ ...nform, [name]: value });
};
  const handelAdd = () =>{
    dispatch(addNewForm(nform))
    //dispatch(getForm(nform._id))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons.map((button) => (
          <Button variant="outlined" onClick={handleClickOpen}>{button}</Button>
        ))}
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Form</DialogTitle>
        <DialogContent>
          <TextField
          id="outlined-number"
          label="Page Number"
          name="page_number"
          type="number"
          value={form.page_number}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
        />
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handelAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default GroupOrientation;
