import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from "axios";

export default function AddStud(){
    const initialState ={
      name:'',
      regno: '', 
      email:'',
      phoneNo:''
    }

    const [inputSetter, setInputSetter] = React.useState(initialState)
    const [error, setError] = React.useState({
      errorLoading: false,  
      nameError:'',
      regnoError: '', 
      emailError:'',
      phoneNoError:''
    })

    
    const clearField=()=>{setInputSetter(initialState)}

   
    const validaterFun=()=>{
        setError({...error,errorLoading:true})
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailVal= (!!inputSetter.email && typeof inputSetter.email === 'string'
		&& inputSetter.email.match(emailRegex))

        if((!!inputSetter.name)=== false){
            alert('NAME')
            setError({...error, nameError:'Name Error'})
            console.log('Name Error')
        }
        if((!!inputSetter.regno)=== false){
            alert('REG')
            setError({...error,regError:'Reg Error'})      
            console.log('regno error')
        }
        if(emailVal=== false){
            alert('EMAIL')
            setError({...error,emailError:'Email Error'})
            console.log('email error')
        }
        if((!!inputSetter.phoneNo)=== false){
            alert('PHONE')
            setError({...error,phoneNoError:'PhoneNo Error'})
            console.log('PHone Error')
        }
        
    }
    const submitForm=(e)=>{
        e.preventDefault()
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailVal= (!!inputSetter.email && typeof inputSetter.email === 'string'
		&& inputSetter.email.match(emailRegex))
        if((!!inputSetter.name)&&(!!inputSetter.regno)&&(emailVal)&&(!!inputSetter.phoneNo))
        {
                console.log('testmmmubmit',inputSetter)
                axios.post('http://localhost:9090/api/add',inputSetter)
                .then((res)=>{
                    console.log(res)
                    if(res.status===200){
                        alert('Form SUBMITTED')
                        clearField()
                    }
                    })
                .catch((err)=>{
                    console.log(err)
                     })
            
            // console.log(emailVal)
        }
        else
        {
           validaterFun()
        }
    }
    
    const handleChange=(e)=>{
       setInputSetter({
           ...inputSetter,
           [e.target.name]:e.target.value
       })
    }

    return (
        <div>
            ADD_Stud
            <div style={{display:"flex",flexDirection:"column", justifyContent:"space-evenly",alignItems:"center",height:"500px", width:"auto"}}>
            <TextField id="outlined-basic" type="text" name="name" label="Name" autoComplete="off" variant="outlined" value={inputSetter.name} required="true" onChange={handleChange}/>
            {error.nameError&&<p>{error.nameError}</p>}

            <TextField id="outlined-basic" type="number" name="regno" label="RegNO" autoComplete="off" variant="outlined" value={inputSetter.regno} required="true" onChange={handleChange}/>
            {error.regnoError&&<p>{error.regnoError}</p>}

            <TextField id="outlined-basic" type="text" name="email" label="Email" autoComplete="off" variant="outlined" value={inputSetter.email} required="true" onChange={handleChange}/>
            {error.emailError&&<p>{error.emailError}</p>}

            <TextField id="outlined-basic" type="tel" name="phoneNo" label="PhoneNo"autoComplete="off"  variant="outlined" value={inputSetter.phoneNo} required="true" onChange={handleChange}/>
            {error.regnoError&&<p>{error.regnoError}</p>}

            <Button variant="contained" style={{width: "223px",    height:" 46px"}} onClick={submitForm}>SUBMIT</Button>
            <Button variant="contained" style={{ width: "223px",   height:" 46px"}} onClick={clearField} >CLEAR</Button>
          </div>
          <Link to={"/home"}>Go to HOME</Link>
        </div>
    )
}