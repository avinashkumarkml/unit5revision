import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)
  const [page, setPage] = useState(1);
  const [salaryOrder, setSalaryOrder] = useState("ASC")
  
  useEffect(()=>{
    fetchData(page,salaryOrder)
  },[page,salaryOrder])

  const fetchData = async (page,salaryOrder) =>{
    setLoading(true)
    axios({
      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params:{
        _page : page,
        _limit : 5,
        _sort : "salary",
        _order : salaryOrder
      }
    })
    .then((res)=>{
      setData(res.data);
      setLoading(false)
      console.log(res)
    })
    .catch((error)=>{
      setError(true);
      setLoading(false)
    })
  }


  return (
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        {<Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} onClick={()=> setSalaryOrder("ASC")} /> &&
         <Button id="SORT_BUTTON" title={`Sort by Descending Salary`} onClick={()=> setSalaryOrder("DESC")}/>}
        <Button title="PREV" id="PREV" disabled={page==1} onClick={()=> setPage(page - 1)} />
        <Button id="NEXT" title="NEXT" onClick={()=> setPage(page + 1)} />
      </div>
      {data.map((item) => (
        <CandidateCard  key={item.id}  {...item}/>
      ))}
    </div>
  );
}

