import React, { useContext, useEffect, useState } from 'react'
import { imageDB } from './fireBaseConfig'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { UserContext } from './WholePage'
import axios from 'axios'
import './picture.css'

let idGenerator = (initialvalue) => {
  let id = initialvalue
  return function () {
   id += 1
    console.log(id)
    return id 
  }
}
const generateID = idGenerator(0)

const picture = () => {
  const [img , setImg] = useState('')
  const [imgUrl , setImgUrl] = useState([])
  const {userData , setCurrentPage} = useContext(UserContext)
  
const handleClick = () => {
 const imgRef =  ref(imageDB , `files/${generateID()}`)
 uploadBytes(imgRef, img)
}

const handleUpdatePicture = () => {
  axios.put(`http://localhost:3000/Edit/Picture/${userData.user_id}` , {picProf : imgUrl[imgUrl.length - 1]}).then((res) => console.log("updated!")).then(() => setCurrentPage("Profile")).catch((err) => console.log(err))
}


useEffect(() => {
  listAll(ref(imageDB, 'files')).then(imgs => {
    imgs.items.forEach(val => {
      getDownloadURL(val).then(url =>  {
        setImgUrl(data => [...data , url])
      })
    })
  })
}, [])


  return (
    <div style={{height : '50px' , marginTop : '50px'}}>
    <div className='container' >

    <h3 className='Title'>Don't wear sunglasses, look straight ahead and make sure you're alone.</h3>

    <input className='chooseBTN' type="file" onChange={(e) => setImg(e.target.files[0])} />
    <button className='uploadBTN' onClick={handleClick}>Upload</button>
    <button className='confirmBTN' onClick={() => {
      handleUpdatePicture()
      }}>Confirm Profile</button>
    </div>
    </div>
  )
}

export default picture