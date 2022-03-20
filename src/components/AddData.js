import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addData } from '../redux/actions/action'

const AddData = () => {
const dispatch=useDispatch()
    const [post,setPost]=useState({
        body: "",
        id: '',
        title: "",
        userId: ''
    })

    const eventHandler=(e)=>{
        const postCopy={...post}
        postCopy[e.target.name]=e.target.value
        setPost(postCopy)
    }
 const addDataTo=()=>{
    dispatch(addData(post))
 }

  return (
    <div>
        <label>body</label>
        <input name='body' value={post.value} onChange={eventHandler} />
        <label>id</label>
        <input name='id' value={post.id} onChange={eventHandler} />
        <label>title</label>
        <input name='title' value={post.title} onChange={eventHandler} />
        <label>useId</label>
        <input name='userId' value={post.userId} onChange={eventHandler} />
        <button onClick={()=>{addDataTo()}}>add</button>
    </div>
  )
}

export default AddData