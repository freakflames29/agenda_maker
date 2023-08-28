const ViewAgenda = (props) => {
    console.log(props.topics)
    let topicLists = props.topics.map((data, index) => (
        <li className="list-group-item" key={index}>{data}</li>
    ))
    return (
        <div className={"container mt-5"}>
            <div className="card" style={{width: "18rem;"}}>
                <div className="card-header bg-light text-primary">
                    <h3 className={"display-3"}>{props.title}</h3>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        topicLists
                    }
                </ul>
                <div className="card-footer ">
                    <h2 className={"display-5 text-warning "}>{props.desc}</h2>
                </div>
            </div>
        </div>
    )
}
export default ViewAgenda;