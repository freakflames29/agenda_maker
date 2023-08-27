import {useState} from "react";

const AgendaAdd=()=>{
     const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [topic, setTopic] = useState("")
    const [toppicArray, setToppicArray] = useState([])


    const [titleError, setTitleError] = useState(false)
    const [descError, setDescError] = useState(false)
    const [topicError, setTopicError] = useState(false)


    // functions to handler error handler on focus lost
    const titleErrorFocusHandler = () => {
        console.log("i called")
        console.log(title.length)
        if (title.length === 0) {
            setTitleError(true)
        } else if(title.length>0)
            setTitleError(false)

    }
    const descErrorFocusHandler = () => {
        if (desc.length === 0) {
            setDescError(true)
        } else
            setDescError(false)

    }
    const topicErrorFocusHandler = () => {
        if (topic.length === 0) {
            setTopicError(true)
        } else
            setTopicError(false)

    }

    // functions to get datas from input fields

    const titleChangeHandler = e => {
        setTitle(e.target.value);
    }
    const descChangeHandler = e => {
        setDesc(e.target.value)
    }

    const topicChangeHandler = (e) => {
        setTopic(e.target.value)
    }


    const addTopicHandler = (e) => {

        e.preventDefault()
        setToppicArray(prevState => {
            return ([...prevState, topic])
        })
    }

    let listElemets = toppicArray.map(topic=> (<li key={Math.random()} className={"list-group-item"}>{topic}</li>))
   
    return (<div className={"container mt-4"}>
        <form className={"form-control"}>
            <label htmlFor="title" className={"form-label mt-2"}>Title</label>
            <input type="text" placeholder={"Enter Title"} required={true} id={"title"} className={"form-control"}
                   onChange={titleChangeHandler} onBlur={titleErrorFocusHandler}/>
            {
                titleError &&  (
                    <div>
                        <code color={"red"}> Title filed cant be empty</code><br/>
                    </div>
                )
            }



            <label htmlFor="desc" className={"form-label mt-2"}>Description</label>
            <input type="text" placeholder={"Enter Description"} required={true} id={"desc"}
                   className={"form-control"} onChange={descChangeHandler} onBlur={descErrorFocusHandler}/>

              {
                descError &&  (
                    <div>
                        <code color={"red"}> Description  cant be empty</code><br/>
                    </div>
                )
            }

            <label htmlFor="Topic" className={"form-label mt-2"}>Topic</label>
            <input type="text" placeholder={"Enter Topics"} required={true} id={"Topic"}
                   className={"form-control"} onChange={topicChangeHandler} onBlur={topicErrorFocusHandler}/>

              {
                topicError &&  (
                    <div>
                        <code color={"red"}> Add atleast one topic !</code><br/>
                    </div>
                )
            }

            <button className={"btn  btn-primary mt-2"} onClick={addTopicHandler} disabled={topicError}>Add topic</button>
            <ul className="list-group mt-2">
                {listElemets}
            </ul>

            <button className={"btn  btn-success mt-2"}>Submit</button>
        </form>
    </div>);

}
export default AgendaAdd;