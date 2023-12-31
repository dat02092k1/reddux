import React, { useState } from 'react'
import './Edit.css';
import Input from '../InputFields/Input';
import { useDispatch, useSelector } from 'react-redux';
import {updateUser}  from '../../redux/apiRequest';
import { listContainer } from '../../utils/listContainers';

export default function EditPage(props) {
    const {setEdit} = props; 

    const avaUrl = listContainer.avaUrl;

    const user = useSelector((state) => state.user); 
    const dispatch =  useDispatch()
    const [name, setName] = useState(user.name); 
    const [age, setAge] = useState(user.age);
    const [about, setAbout] = useState(user.about);
    const [theme, setTheme] = useState("#ff9051");  
    const [url, setUrl] = useState(user.avaUrl);

      const handleSubmit = (e) => {
        e.preventDefault(); 
        setEdit(false);  
        const updatedUser = {
            name: name, 
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme
        }; 

        updateUser(updatedUser, dispatch);
        
      }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <section className="edit-container">
            <button className="close">
                SAVE
            </button> 

        <div className="edit-profile">
            Edit profile
        </div>

        <div className="input-container"> 
            <Input label="Display name" data={user.name} setData={setName}/>

            <Input label="Display age" data={user.age} setData={setAge}/>

            <Input inputType="textarea" classStyle="input-about" label="Display about" data={user.about} setData={setAbout}/>

        <label>
            Profile Picture
        </label>
        <div className="input-image-container"> 
        {avaUrl.map((url) => {
            return(<>
            <img onClick={(e) => setUrl(e.target.src)} src={url} className='input-image' alt="" />
            </>)
        })}
        </div> 
        <div className="theme-container">
            <label htmlFor="">Theme </label>
            <input type="color" className='theme-color' onChange={(e) => setTheme(e.target.value)}/>
        </div>
        </div>
        </section>
    </form>
    </>
  )
}
