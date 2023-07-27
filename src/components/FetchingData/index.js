import React, { useEffect, useReducer } from 'react'
import axios from "axios";


let initialState = {
    posts : [],
    isLoading : true,
    error : ""
}

let reducer = (state, action) =>{
    switch (action.type) {
        case "FetchingSuccess":
            return {
                posts : action.payload,
                isLoading : false,
                error : ""
            }
        
        case "FetchError":
            return {
                posts: [],
                isLoading:false,
                error:"Something went Wrong"
            }
            
        default:
            return state;
    }
}



let FetchingData = ()=> {
    let [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        let response = []
    
        let postData = async () =>{
            try {
                response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                dispatch({type: "FetchingSuccess", payload: response.data})
                
            } catch (error) {
                dispatch({type: "FetchError"})
            }
        }
        postData();
    },[])

  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>
                        FetchingData
                    </h1>
                    
                    {
                        state.posts.map((post) =>{
                            return (
                                <div className='row' >
                                    
                                    <div className="col-md-10 mb-2">
                                        <span className="text-primary ">{post.title}</span>
                                    </div>
                                    <div className="col-md-2">
                                        <input type="checkbox" />
                                    </div>
                                                                        
                                </div>
                                
                            )
                        })
                    }
                    
                    {state.error ? state.error : null}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default FetchingData