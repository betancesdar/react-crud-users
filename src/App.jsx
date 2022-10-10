import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserInfo from './components/UserInfo'

function App() {
  
  const baseURL = 'https://users-crud1.herokuapp.com'


  const [users, setUsers] = useState()
  const [updateInfo, setupdateInfo] = useState()
  const [formIsClose, setformIsClose] = useState(true)
  const [modalIsClose, setmodalIsClose] = useState(true)

  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers();
  },[])

  const createUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL,data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
      axios.delete(URL)
        .then(res => {
          console.log(res.data)
          setmodalIsClose(false)
          getAllUsers()
          
        })
        .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
      axios.put(URL,data)
        .then(res=>
          {
            console.log(res.data)
            getAllUsers()
          })
        .catch(err => console.log(err))
  }
 
  const handleOpenForm = () => {
    setformIsClose(false)
  }

  const handleOpenModal = () => {
    setmodalIsClose(true)
  }
  return (
    <div className="App">
    <div className={`modal_Container ${modalIsClose && 'disable_form'}`}>
      <span className='modal_title'>Your Data has Changed!</span>
      <button className='modal_btn' onClick={handleOpenModal}>Close</button>
    </div>
    <div className='app-title_container'>
      <h1 className='app_title'>Crud User</h1>
      <button onClick={handleOpenForm} className='app_btn'>Create an user</button>
    </div>
      <div className={`form_container ${formIsClose && 'disable_form'}`}> 
        <FormUser 
        createUser={createUser}
        updateInfo = {updateInfo}
        updateUserById = {updateUserById}
        setupdateInfo={setupdateInfo}
        setformIsClose={setformIsClose}
        setmodalIsClose={setmodalIsClose}
        />
      </div>
      <div className='user_container'>
      {
        users?.map(user => (
          <UserInfo 
          key={user.id}
          user={user}
          deleteUserById={deleteUserById} 
          setupdateInfo={setupdateInfo}
          setformIsClose={setformIsClose}
          
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
