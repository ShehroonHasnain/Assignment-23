import React, { useState, useEffect } from 'react'
import Button from './button/Button';
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../redux/slices/feedSlice';
import { updatePost } from '../redux/slices/feedSlice';
import './CreatePost.css'


export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState(null);

    const post = useSelector(store => store.feedSlice.updatePost)
    const dispatch = useDispatch()

    useEffect(() => {
        if (post) {
            setTitle(post.title)
            setDescription(post.description)
        } else {
            setTitle("")
            setDescription("")
        }

    }, [post])

    //create post handler
    const createPostHandler = () => {
        console.log("Title: ", title);
        console.log("Description: ", description)
        let postData = {
            title,
            description,
            imageURL: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            createAt: new Date(),

        }
        if (post) {
            dispatch(updatePost({ ...postData, id: post.id }))
            return
        }
        dispatch(createPost(postData))
    }
    // const uploadImage = (e) => {
    //     console.log("Image: ", e.target.files[0]);
    //     const file = e.target.files[0];
    //     const storageRef = storage.ref();
    //     const fileRef = storageRef.child(file.name);
    //     fileRef.put(file).then(() => {
    //         console.log("Uploaded a file");
    //         fileRef.getDownloadURL().then((url) => {
    //             console.log("URL", url);
    //             setImageURL(url)
    //         })
    //     })
    // }

    return (
        // <div className='createpost-container'>
        //    {/* <h1>Create Post</h1>
          //  <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
       //     <br />
        //    <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
           // <br />
          //  {/* <input type="file" onChange={uploadImage}/> */}
            /* <input type="file" />
            <br />
          //  <Button title={post ? "Update Post" : "Create Post"} onClickHandler={createPostHandler} /> 

        //    {/*GP DESIGN*/
        <div className='createpost-container'>
            <div className="create-post-container">
                <h2>Create Post</h2>
                <form onSubmit={createPostHandler} className="create-post-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input value={title} type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} id="description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Choose File</label>
                        <input
                            type="file"
                            id="file"
                            
                        />
                    </div>
                    <button type="submit" className="submit-button">{post ? "Update Post" : "Create Post"}</button>
                </form>
            </div>
            </div>

        
    )
}
