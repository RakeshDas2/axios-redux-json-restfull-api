import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, fetchData, updateData } from '../redux/actions/action';

const ShowData = () => {
    const recivedData = useSelector(state => state)
    console.log(recivedData);
    const dispatch = useDispatch()

    const [title, setTitle] = useState({
        body: "",
        id: '',
        title: "",
        userId: 1
    })
    const [openInput, setOpenInput] = useState(false)
    const [id, setId] = useState('')
    const handleChange = (e) => {
      const titleCopy={...title}
      titleCopy[e.target.name]=e.target.value
        setTitle(titleCopy)
    }
    console.log(title);
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const updateData1 = () => {
        dispatch(updateData( id, title ))
    }
    const editData = (ed) => {
        setOpenInput(true)
        setId(ed)
    }

    return (
        <div>
            {openInput && <> <input value={title.title} name='title' onChange={handleChange} /> <button onClick={() => { updateData1() }}>done</button></>}
            {recivedData.posts.length > 0 && recivedData.posts.map(ele => {

                return <p key={ele.id}>{ele.title} <button onClick={() => { dispatch(deleteData(ele.id)) }} >delete</button><button onClick={() => { editData(ele.id) }} >edit</button></p>


            })}
        </div>
    )
}

export default ShowData