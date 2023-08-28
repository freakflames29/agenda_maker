import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import AgendaAdd from "./Components/AgendaAdd";
import ViewAgenda from "./Components/ViewAgenda";

function App() {
    const [data, setData] = useState([])
    const dataGatherdHandler = d => {
        setData(prevState => {
            return [d,...prevState]
        })

        console.log(data)
    }

    let agendas=data.map((d,index)=>(
        <ViewAgenda title={d.title} desc={d.desc} topics={d.topics} key={index}/>
    ))
    return (
        <div>
            <AgendaAdd onSubmitData={dataGatherdHandler}/>
            {agendas}
        </div>
    )
}

export default App;
