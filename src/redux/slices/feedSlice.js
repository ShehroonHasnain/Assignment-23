import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { collection, addDoc, getDocs, onSnapshot, query, where, orderBy, limit, doc, deleteDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

//update post
export const updatePost = createAsyncThunk("feed/updatePost",
    async (post) => {
        try {
            const docRef = doc(db, "posts", post.id)
            await updateDoc(docRef, post)
            return post
        } catch (error) {
            console.log("error", error);

        }
    }
)

//delete post
export const deletePost = createAsyncThunk("feed/deletePost",
    async (id) => {
        try {
            const docRef = doc(db, "posts", id)
            await deleteDoc(docRef)
            return id
        } catch (error) {
            console.log("error", error);

        }
    }
)

//get post
export const getPosts = createAsyncThunk("feed/getPosts",
    async () => {
        try {
            const collectionRef = collection(db, "posts")
            const queryRef = query(collectionRef,)
            // one time data read
            const docs = await getDocs(queryRef)
            let data = []
            // console.log("docs", docs);

            docs.forEach((doc) => {
                // console.log("doc", doc.data());
                // console.log("doc id", doc.id);
                data.push({ id: doc.id, ...doc.data() })
            });
            // console.log("data", data)
            return data

        }
        catch (error) {
            console.log("error", error);

        }

    }
)

// creat post
export const createPost = createAsyncThunk(
    "feed/createPost",
    async (post) => {

        try {
            post.setLoading(true)
            const file = post.file
            console.log("file", file);
            
            // file referece
            const fileRef = ref(storage, 'images/' + parseInt(Math.random() * 23423425312) + file.name);
            const metadata = {
                contentType: file.type,
              };
            await uploadBytes(fileRef, file, metadata)
            const url = await getDownloadURL(fileRef)
            console.log("url",url);
            
            let updatedPost  = {
                uid:post.uid,
                userName:post.userName,
                userProfileURL:post.userProfileURL,
                title: post.title,
                description: post.description,
                createAt: new Date(),
                imageURL: url,
            }

            const collectionRef = collection(db, "posts")
            const response = await addDoc(collectionRef, updatedPost)
            console.log("response after firebase store", response);
            post.setLoading(false)
        } catch (error) {
            
            console.log("error", error);

        }


        return post


    }
)
 const feedSlice=createSlice({
    name: "feed",
    initialState: {
        feed: [],
        updatePost: null
    },
    reducers:{
        addFeed: (state, action) => {
            console.log("action in addFeed", action.payload);

        },
        updateDocId: (state, action) => {
            console.log("action in updateDocId", action.payload);
            let post = state.feed.filter((post) => post.id === action.payload)
            state.updatePost = post[0]
        }


    },
    extraReducers: (builder) => {
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.feed = [action.payload, ...state.feed]
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.feed = action.payload
        })
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.feed = state.feed.filter((post) => post.id !== action.payload)
        })
        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.feed = state.feed.map((post) => {
                if (post.id === action.payload.id) {
                    return action.payload
                }
                return post
            })
            state.updatePost = null
        })

    }
})

export const { addFeed,updateDocId } = feedSlice.actions;
export default feedSlice.reducer