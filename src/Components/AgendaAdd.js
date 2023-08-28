import {useState} from "react";

const AgendaAdd = (props) => {
    // data handler states
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [topic, setTopic] = useState("")
    const [toppicArray, setToppicArray] = useState([])

    //error handlers state
    const [titleError, setTitleError] = useState(false)
    const [descError, setDescError] = useState(false)
    const [topicError, setTopicError] = useState(false)

    //btn disable handler states


    // functions to handler error handler on focus lost
    const [btnDisable, setBtnDisable] = useState(true)
    const btnDisableChangeHandler = () => {

        if (title.length > 0 && desc.length > 0 && (topic.length > 0 || toppicArray.length > 0)) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }
    const titleErrorFocusHandler = () => {
        btnDisableChangeHandler()

        // console.log("i called")
        // console.log(title.length)
        if (title.length === 0) {
            setTitleError(true)
        } else if (title.length > 0)
            setTitleError(false)

    }


    const descErrorFocusHandler = () => {
        btnDisableChangeHandler()

        if (desc.length === 0) {
            setDescError(true)
        } else
            setDescError(false)

    }
    const topicErrorFocusHandler = () => {
        btnDisableChangeHandler()


        if (topic.length === 0 && toppicArray.length === 0) {
            setTopicError(true)
        } else
            setTopicError(false)

    }

    // functions to get datas from input fields

    const titleChangeHandler = e => {
        btnDisableChangeHandler()
        setTitle(e.target.value);
    }
    const descChangeHandler = e => {
        btnDisableChangeHandler()
        setDesc(e.target.value)
    }

    const topicChangeHandler = (e) => {
        btnDisableChangeHandler()
        setTopic(e.target.value)
    }


    const addTopicHandler = (e) => {

        e.preventDefault()
        setToppicArray(prevState => {
            return ([...prevState, topic])
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const gatheredData = {
            title: title,
            desc: desc,
            topics: toppicArray
        }
        props.onSubmitData(gatheredData)
        setTitle("")
        setDesc("")
        setTopic("")
        setToppicArray([])
    }

    let listElemets = toppicArray.map((topic, index) => (<li key={index} className={"list-group-item"}>{topic}</li>))

    return (
        <div className={"container mt-4"}>
            <form className={"form-control"} onSubmit={submitHandler}>
                <label htmlFor="title" className={"form-label mt-2"}>Title</label>
                <input type="text" placeholder={"Enter Title"} id={"title"} className={"form-control"}
                       onChange={titleChangeHandler} onBlur={titleErrorFocusHandler} value={title}/>
                {
                    titleError && (
                        <div>
                            <code color={"red"}> Title filed cant be empty</code><br/>
                        </div>
                    )
                }


                <label htmlFor="desc" className={"form-label mt-2"}>Description</label>
                <input type="text" placeholder={"Enter Description"} id={"desc"}
                       className={"form-control"} onChange={descChangeHandler} onBlur={descErrorFocusHandler}
                       value={desc}/>

                {
                    descError && (
                        <div>
                            <code color={"red"}> Description cant be empty</code><br/>
                        </div>
                    )
                }
                <label htmlFor="Topic" className={"form-label mt-2"}>Topic</label>
                <div className="input-group mb-3">
                    <input type="text" placeholder={"Enter Topics"} id={"Topic"}
                           className={"form-control"} onChange={topicChangeHandler} onBlur={topicErrorFocusHandler}
                           value={topic}/>

                    <button className={"btn  btn-primary  "} onClick={addTopicHandler}
                            disabled={btnDisable} type={"button"} id="button-addon1">Add topic
                    </button>
                </div>

                {
                    topicError && (
                        <div>
                            <code color={"red"}> Add atleast one topic !</code><br/>
                        </div>
                    )
                }


                <ul className="list-group mt-2">
                    {listElemets}
                </ul>

                <button className={"btn  btn-success mt-2"} disabled={btnDisable} type={"submit"}>Submit</button>
            </form>
        </div>
    );

}
export default AgendaAdd;