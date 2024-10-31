import React, { useEffect, useState } from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { useSelector, useDispatch } from 'react-redux'
import './FeedListing.css'
import { getPosts, deletePost, updateDocId } from '../../redux/slices/feedSlice'



export default function FeedListing() {
    const feed = useSelector(store => store.feedSlice.feed)
    const user = useSelector(store => store.authSlice.user)
    const [selectedValue, setSelectedValue] = useState("")
    // console.log('feed in feedlisting', feed);
    console.log('user details', user);


    const dispatch = useDispatch()
    useEffect(() => {
        // console.log("FeedListing useEffect");
        dispatch(getPosts())

    }, [])

    //handle to delete post
    const handleDelete = (id) => {
        console.log("Delete clicked", id);
        // dispatch
        dispatch(deletePost(id))
    }

    //handle to update/edit post
    const handleEdit = (id) => {
        console.log("Edit clicked", id);
        // dispatch
        dispatch(updateDocId(id))
    }

    // dropdown handler 
    const onClickHandleChange = (e) => {
        setSelectedValue(e.target.value)
    }
    return (
        <div className='feedlisting-container'> 
        {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}> <h1 >Feed Listing</h1></div> */}
        <hr />
            {/* <Button title="Get Posts" onClickHandler={handleClick} /> */}
            {
                feed?.map((post) => {
                    return (

                        <div key={post?.id} className='feedlisting-items'>
                            <div className='userProfile'>
                                <img src={post?.userProfileURL} alt="" />
                                <span>
                                    <p>{post?.userName}</p>
                                    <line>created at:
                                        {post?.createAt?.seconds ? new Date(post?.createAt?.toDate()).toLocaleDateString() : new Date(post?.createAt).toLocaleDateString()}
                                    </line>
                                </span>

                            </div>
                            <div key={post?.id} className='titleDesc'>

                                <h3>{post?.title}</h3>
                                <p>{post?.description}</p>
                            </div>
                            <img src={post?.imageURL} style={{ width: "90%" }} />
                            <br />
                            <div>
                                {post.uid != user.uid ? "" : <button onClick={() => handleDelete(post.id, post.uid)}>delete</button>}
                                {/* <button onClick={() => handleDelete(post.id)}>delete</button> */}
                                {post.uid != user.uid ? "" : <button onClick={() => handleEdit(post.id)}>edit</button>}
                            </div>
                            <hr />
                            <div className='postBelowItems'>
                                <span>
                                    < ThumbUpOutlinedIcon />
                                </span>
                                <span>
                                    <ChatOutlinedIcon />
                                </span>
                                <span>
                                    <ShareOutlinedIcon />
                                </span>
                            </div>

                        </div>

                    )
                })
            }

        </div>

    )
}
