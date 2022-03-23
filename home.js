import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';

import {useEffect} from 'react';
import axios from 'axios';

import DialogEditForm from './Dialog/dialogEditForm';
import DialogDelete from './Dialog/dialogDelete';
import BackdropLoader from './Dialog/backDroploader';
import { History } from 'history';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function Home() {
 
    const [data, SetData] = React.useState([]);
    const [openToast, setOpenToast] = React.useState(false);
    const [openToastDelete, setOpenToastDelete] = React.useState(false);
    
    const [temp,setTemp] = React.useState([]);
    const [deleteFilename, setdeleteFilename] = React.useState('');
    const [editTitle, setEditTitle] = React.useState({

      id:'',
      name:'',
      phoneNo:'',
      regno:'',
      email:''
    
    })
    const [inputSetter, setInputSettter] = React.useState({

      id:'',
      name:'',
      phoneNo:'',
      regno:'',
      email:''
    })
    const [backdropLoader, setBackdropLoader] = React.useState(false)
    const [deletingDataFromIcon, setDeletingDataFromIcon] = React.useState()
    // useEffect(()=>{
    //     axios.get('http://localhost:9090/api').then((resp)=>{
    //         SetData(resp.data)
            
    //     })
    // },[])
    const [loading, setLoading] = React.useState(false);
    useEffect(()=>{
      fectcher()
        setLoading(false)
    },[loading])

    const fectcher =async()=>{
      const resp = await axios.get('http://localhost:9090/api');
      SetData(resp.data);
      setTemp(resp)   
    }
    useEffect(()=>{
        setBackdropLoader(false)
    },[deletingDataFromIcon])
    // console.log('resssssssspo',data)
    // console.log('temmmppppp',temp);
    
    const tempClose=()=>{
        setOpenToast(false)
        setOpenToastDelete(false)
        
        
    }
    const editFunction=(dataEditCapture)=>{
      setOpenToast(true)
      console.log('editDatta',dataEditCapture)
      setEditTitle(dataEditCapture.name)

      //formku
      setInputSettter(dataEditCapture)
    }
    const handleChange = (e) =>{
       console.log(e.target.name,e.target.value)
       setInputSettter(
          e.target.value
       )
    }
    const submitEditedData=()=>{
      console.log('form editku',  inputSetter)
      
      const id=inputSetter.id
      console.log('EDITTINGGG',  id) 
      console.log('testEdiiiting',inputSetter);
      
      // axios.put(`http://localhost:9090/api/${id}`,inputSetter).then((res)=>{
      //   console.log(res)
      // }).catch(err=>console.log(err))
      
    }
    const deleteFunction=(datadeleteCapture)=>{
      setOpenToastDelete(true)
      setDeletingDataFromIcon(datadeleteCapture)
      setdeleteFilename(datadeleteCapture.name)
    }
    const handleDelete=()=>{
      setOpenToastDelete(false)
      setBackdropLoader(true)
      const id=deletingDataFromIcon.id;
      console.log('delllettttttting',id)
      axios.put(`http://localhost:9090/api/${id}`)
        .then((res)=>{
             console.log(res);
             setBackdropLoader(false)
        })
        .catch((err)=>{
              console.log(err);
        })
        // window.location.reload(true);
        setLoading(true)
    }
   
  return (
    <TableContainer style={{display:"flex", justifyContent:"center"}} >
      <Table style={{width:"800px", marginTop:"30px"}} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">S.NO</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
  
           <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">REG_NO</StyledTableCell>
            <StyledTableCell align="right">EMAIL</StyledTableCell>
            <StyledTableCell align="right">PHONE NO</StyledTableCell>
            <StyledTableCell align="right">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {data&&data.map((dataContent, i)=>(
                    
                    <StyledTableRow key={dataContent.id}>
                        <StyledTableCell align="right" >{i+1}</StyledTableCell>
                        <StyledTableCell align="right" >{dataContent.id}</StyledTableCell>
                        <StyledTableCell align="right">{dataContent.name}</StyledTableCell>
                        <StyledTableCell align="right">{dataContent.regno}</StyledTableCell>
                        <StyledTableCell align="right">{dataContent.email}</StyledTableCell>
                        <StyledTableCell align="right">{dataContent.phoneNo}</StyledTableCell>
                        <StyledTableCell align="right">
                            <Tooltip title="Delete">
                                    <IconButton>
                                        <DeleteIcon  onClick={()=>{deleteFunction(dataContent)}}/>
                                    </IconButton>
                            </Tooltip>
                            <Tooltip title="Edit">
                                    <IconButton>
                                        <EditIcon onClick={()=>{editFunction(dataContent)}} />
                                    </IconButton>
                            </Tooltip>
                        </StyledTableCell>
                    </StyledTableRow>
                    
                )
            )}
        </TableBody>
      </Table>
      <BackdropLoader open={backdropLoader}/>
      <DialogEditForm open={openToast} handleClose={tempClose} title={editTitle} submitEdit={submitEditedData}>
          <div style={{display:"flex",flexDirection:"column"}}>
            <TextField id="filled-helperText" name='name' label="Name" autoComplete="off" variant="standard" defaultValue={inputSetter.name} onChange={handleChange}/>
            <TextField id="filled-helperText" name='regno' label="RegNO"autoComplete="off"  variant="standard" defaultValue={inputSetter.regno} onChange={handleChange}/>
            <TextField id="filled-helperText" name='email' label="Email"autoComplete="off"  variant="standard" defaultValue={inputSetter.email} onChange={handleChange}/>
            <TextField id="filled-helperText" name='phoneNo' label="PhoneNo"autoComplete="off"  variant="standard" defaultValue={inputSetter.phoneNo} onChange={handleChange}/>
          </div>
      </DialogEditForm>
      <DialogDelete open={openToastDelete} handleClose={tempClose} handleDeleteOK ={handleDelete}title={deleteFilename}/>
    </TableContainer>
  );
}
