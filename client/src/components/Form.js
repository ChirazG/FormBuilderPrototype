import React from 'react'
import Grid from '@mui/material/Grid';
import { Button, Card, Checkbox, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';

// <LocalizationProvider dateAdapter={AdapterDateFns}>

export const Form = (props) => {
  // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const { type, label, id, handleChange } = props
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  const formType = (type) => {
    switch (type) {
      case 'text-field':
        return (<TextField label={label} id={id} size="medium" onChange={handleChange}/>);
        break;
      case 'checkbox':
        return (<Checkbox label={label} id={id} onChange={handleChange}/>);
        break;
      case 'button':
        return (<Button label={label} id={id} onChange={handleChange} />);
        break;
      case 'date': return(<LocalizationProvider dateAdapter={AdapterDateFns}><DesktopDatePicker
        label="Date desktop"
        inputFormat="dd/MM/yyyy"
        id={id}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      /></LocalizationProvider>);
        break;
      case 'email':
        return (<TextField label={label} id={id} style={{ backgroundColor: 'orangered', color: 'white' }} onChange={handleChange}/>);
        break;
      default:
        return '----';
        break;
    }
  }

  return (
    <div>
      {formType(type)}
    </div>
  )
}
