import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import '../styles/formUser.css'

const defaultValues = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  birthday: ''

}

const FormUser = ({createUser,updateInfo,updateUserById,setupdateInfo,setformIsClose,setmodalIsClose}) => {

  const {handleSubmit,reset,register} = useForm()

  useEffect(() => {
    if(updateInfo){
      reset(updateInfo)
    }
  },[updateInfo])


  const submit = data => {
    if(updateInfo){
      updateUserById(updateInfo.id, data)
      setmodalIsClose()      
      setupdateInfo()
      
    } else {
      createUser(data)
    }
    
    reset(defaultValues)
    setformIsClose(true)
  }

  const handleOpenForm = () => {
    setformIsClose(true)
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
    <i onClick={handleOpenForm} className="form_close fa-solid fa-xmark"></i>
    <h2 className="form_title">{updateInfo ? 'Editing User' : 'Create User'}</h2>
      <div className="form_div">
        <label className="form_label" htmlFor="email">Email</label>
        <input className="form_input" type="email" id="email" placeholder="Enter your Email"  {...register('email')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="password">Password</label>
        <input className="form_input" type="password" id="password" placeholder="Enter your Password" {...register('password')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="first_name">First Name</label>
        <input className="form_input" type="text" id="first_name" placeholder="Enter your First Name" {...register('first_name')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="last_name">Last Name</label>
        <input className="form_input" type="text" id="last_name" placeholder="Enter your Last Name" {...register('last_name')} />
      </div>
      <div className="form_div">
        <label className="form_label" htmlFor="birthday">Birthday</label>
        <input className="form_input" type="date" id="birthday" {...register('birthday')}/>
      </div>
      <button className="btn_form">{updateInfo ? 'Update User' : 'Create User'}</button>
    </form>
  );
};

export default FormUser;
