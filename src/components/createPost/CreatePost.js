import React, { useState, useEffect } from 'react'
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../redux/slices/feedSlice';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import './CreatePost.css'
import { useFormik } from 'formik';
import * as yup from "yup";



export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState('');
    const [file, setFile] = useState('')
    const [userName, setUserName] = useState('')
    const [loading, setLoading] = useState(false)

    const post = useSelector(store => store.feedSlice.updatePost)
    const user = useSelector(store => store.authSlice.user)
    // console.log('user',user);
    const dispatch = useDispatch()

 // validate schema
 const schema = yup.object().shape({
    title: yup.string().required('title is required'),
    description: yup.string().required('desription is requird'),
    file: yup.mixed().test(
        "fileRequired",
        "A file is required",
        (value) =>typeof value !== null && typeof value !== "undefined" && typeof value !== "string"
      ).required('file is required')
})
    

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setDescription(post.description)
            setImageURL(post.imageURL)
        } else {
            setTitle("")
            setDescription("")
            setImageURL("")
        }

    }, [post])

    //create post handler
    const createPostHandler = async() => {
        // console.log("Title: ", title);
        // console.log("Description: ", description)
        // console.log('userName', userName);

        // console.log("User id", user.uid);

        let postData = {
            uid: user.uid,
            userName: user.name,
            userProfileURL: user.profileURL,
            title,
            description,
            imageURL,
        }
        
        
        const data = {
            title,
            description,
            file
        }
        // console.log('data',data);
        
        try {
            const response = await schema.validate(data)
            
    
            
            if(response){
                 if (post) {
                        dispatch(updatePost({ ...postData, id: post.id }))
                        return
                    }
                    dispatch(createPost({ ...postData, file, setLoading }))
                    setTitle("")
                    setDescription("")
                    setImageURL("")
                
            }else{
                console.log('there is error');
                
            }
        
        } catch (error) {
        
            alert('Please fill required field correctly')
            

        }
        



        // if (post) {
        //     dispatch(updatePost({ ...postData, id: post.id }))
        //     return
        // }
        // dispatch(createPost({ ...postData, file, setLoading }))
        // setTitle("")
        // setDescription("")
        // setImageURL("")
    }

    const changeImage = async (e) => {
        console.log("e", e.target.files[0]);
        const file = e.target.files[0];
        setFile(file)
    }


   



    return (<div className='createpost-container'>
        <div className="create-post-container">
            <h2>Create Post</h2>
            <div className="create-post-form">

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} id="description" />
                </div>
                <div className="form-group">
                    <label htmlFor="file">Choose File</label>
                    <input onChange={changeImage} type="file" id="file" />
                </div>
                {loading ? <p>Loading...</p> :
                    <button onClick={createPostHandler} className="submit-button">{post ? "Update Post" : "Create Post"}</button>}


            </div>
        </div>
    </div >


    )
}