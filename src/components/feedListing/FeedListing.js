import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './FeedListing.css'
import { getPosts, deletePost, updateDocId } from '../../redux/slices/feedSlice'



export default function FeedListing() {
    const feed = useSelector(store => store.feedSlice.feed)
    // console.log('feed in feedlisting', feed);

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

    return (
        <div className='feedlisting-container'> <div style={{display:'flex',justifyContent:'center',flexDirection:'row'}}> <h1 >Feed Listing</h1></div><hr/>
            {/* <Button title="Get Posts" onClickHandler={handleClick} /> */}
            {
                feed?.map((post) => {
                    return (
                        <div key={post?.id}  className='feedlisting-items'>
                           <div key={post?.id}> <h3>{post?.title}</h3>
                            <p>{post?.description}</p></div>
                            <img src={post?.imageURL} style={{width:"90%"}}/>
                            <br/>
                          <div>  <button onClick={() => handleDelete(post.id)}>delete</button>
                            <button onClick={() => handleEdit(post.id)}>edit</button></div>
                            <hr />

                        </div>

                    )
                })
            }

        </div>
      
    )
}
