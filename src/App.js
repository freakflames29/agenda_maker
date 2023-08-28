import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import AgendaAdd from "./Components/AgendaAdd";
import ViewAgenda from "./Components/ViewAgenda";

function App() {
    const [toggle, setToggle] = useState(true)
    const toggleHandler = () => {
        setToggle(!toggle)
    }

    const [data, setData] = useState([])
    const dataGatherdHandler = d => {
        setData(prevState => {
            return [d, ...prevState]
        })

        console.log(data)
    }
    // agenda list
    let agendas;
    if (data.length > 0) {


        agendas = data.map((d, index) => (
            <ViewAgenda title={d.title} desc={d.desc} topics={d.topics} key={index}/>
        ))
    } else {
        agendas = (<h1 className={"display-1"}>No agenda to view !</h1>)
    }

    return (
        <div className={"container mt-2"}>
            <button className={`btn ${toggle ? 'btn-outline-primary' : 'btn-outline-success'}`}
                    onClick={toggleHandler}>  {toggle ? "View Agendas" : "Add Agenda"}</button>
            {toggle ?
                (<AgendaAdd onSubmitData={dataGatherdHandler}/>)
                :
                (agendas)
            }
        </div>
    )
}

export default App;
