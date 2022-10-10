import React from 'react'
import '../styles/userInfo.css'


const UserInfo = ({user,deleteUserById,setupdateInfo,setformIsClose}) => {

  const handleEdit = () => {
  setupdateInfo(user)
  setformIsClose(false)
  
}

  return (
    <article className='user_card'>
      <h2 className='user_name'>{user.first_name} {user.last_name}</h2>
      <ul className='user_list'>
        <li className='user_item'><span className='user_span'>Email:</span> 
        <div className='user_item_container'>
        <i className="span_email fa-solid fa-envelope"></i>
        </div>
        {user.email}</li>
        <li className='user_item'><span className='user_span'>BirthDay:</span>
        <div className='user_item_container'>
        <i className="span_birthday fa-solid fa-cake-candles"></i>
        </div>{user.birthday}</li>
      </ul>
      <footer className='user_footer'>
      <button className='user_btn' onClick={() => deleteUserById(user.id)}>
        <i className="user_trash fa-solid fa-trash-can"></i>
      </button>
      <button className='user_btn' onClick={handleEdit}>
      <i  className="user_edit fa-solid fa-pen-to-square"></i>
      </button>
            
      </footer>
    </article>
  )
}

export default UserInfo
