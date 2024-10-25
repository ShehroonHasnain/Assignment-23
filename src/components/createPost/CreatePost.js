import React, { useState, useEffect } from 'react'
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../redux/slices/feedSlice';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../config/firebase';
import './CreatePost.css'



export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageURL, setImageURL] = useState('');
    const [file, setFile] = useState('')
    const [loading, setLoading] = useState(false)

    const post = useSelector(store => store.feedSlice.updatePost)
    const dispatch = useDispatch()

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
    const createPostHandler = () => {
        console.log("Title: ", title);
        console.log("Description: ", description)
        let postData = {
            title,
            description,
            imageURL,
        }
        if (post) {
            dispatch(updatePost({ ...postData, id: post.id  }))
            return
        }
        dispatch(createPost({ ...postData, file, setLoading }))
        setTitle("")
        setDescription("")
        setImageURL("")
    }

    const changeImage = async (e) => {
        console.log("e", e.target.files[0]);
        const file = e.target.files[0];
        setFile(file)

        // console.log("file", file);

        // const fileRef = ref(storage, 'images/' + parseInt(Math.random() * 23423425312) + file.name);
        // const metadata = {
        //     contentType: file.type,
        // };
        // await uploadBytes(fileRef, file, metadata)
        // const url = await getDownloadURL(fileRef)
        // console.log("url", url);
        // setImageURL(url)

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
                <input onChange={changeImage}
                    type="file"
                    id="file"

                />
            </div>

            {loading ? <p>Loading...</p> :
                <button onClick={createPostHandler} className="submit-button">{post ? "Update Post" : "Create Post"}</button> }

</div>
        </div>
    </div >


    )
}