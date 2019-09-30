import React, {useState} from 'react'
import axios from 'axios';
import './App.css';

function HireVueAPI() {
    //const URL = "";
    const [actualURL, setactualURL] = useState("");
    const [data, setData] = useState({ questions: [] });
    const handleURL = event =>{
        event.preventDefault();
        const tempURL = actualURL;
        console.log(tempURL);
        const p = tempURL;
        var regex1 = /interviews/;
        const tempapiURL = p.replace(regex1, "api/internal/candidates/interviews");
        console.log(tempapiURL);
        //Make GET Request
        const corsProxy = `https://cors-anywhere.herokuapp.com/`;
        const apiURL = corsProxy+tempapiURL;
        console.log(apiURL);
        axios.get(apiURL)
        .then((response) => {
            //Display Questions
            console.log(response.data.questions)
            setData(response.data);
        })
    }
    return (
        <div>
            <form className="form-group" onSubmit={handleURL}>
            <b>This App helps you to prepare for HireVue interviews (By letting you know the questions before hand)</b>
            <p id="instructions"><b>Instructions:{" "}</b>Please Enter the Test's URL by going to your email and clicking the Button which says "Practice or Interview". Copy the link from the browser into this input field.</p>
            <input id="gap" className="form-control" placeholder="Paste your test URL here..." value={actualURL} onChange={event => setactualURL(event.target.value)} label="actualURL" name="actualURL"/>
            <input id="gap" type="submit" className="btn btn-outline-dark" value="Fuck HireVue"/>
            <ul>
                {data.questions.map(item => (
                <li key={item.id}>
                <p><b>{item.category}</b></p>
                <p>Challenge Name:{"  "}<b>{item.challengeName}</b></p>
                <p><b>{item.title}</b></p>
                <p><b>{item.text}</b></p>
                {item.description}
                </li>
                ))}
            </ul>
            </form>
        </div>
    )
}
export default HireVueAPI