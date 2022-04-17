import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Usersdesc from './Usersdesc';

const Users = () => {
    const [users,setUsers]=useState([]);
    const[page,setPage]=useState(1);
    const [search,setSearch]=useState('JavaScript')
    const [sort,setSort]=useState('name')
    let fetchUrl=`https://api.github.com/search/repositories?q=language:${search}&sort=${sort}&order=desc&${page}&per_page=9`;
   
    const handlePrevClick = async () => {
      // this.setState({ page: this.state.page - 1 });
      // this.updateNews();
      fetchUrl=`https://api.github.com/search/repositories?q=language:${search}&sort=${sort}&order=desc&page=${page-1}&per_page=9`
      const request=await axios.get(fetchUrl);
            setUsers(request.data.items);
      setPage(page-1);
  }

  const handleNextClick = async () => {
      // this.setState({ page: this.state.page + 1 });
      // this.updateNews()
      fetchUrl=`https://api.github.com/search/repositories?q=language:${search}&sort=${sort}&order=desc&page=${page+1}&per_page=9`;
      const request=await axios.get(fetchUrl);
            setUsers(request.data.items);
      
            
      setPage(page+1);
  }
   
    useEffect(()=>{
        async function getUsers(){
            const request=await axios.get(fetchUrl);
            setUsers(request.data.items);
            return request;
        }
        getUsers();
    },[fetchUrl]);
    
  return (
    <div className='container my-3'>
      <h1 className="text-center" style={{ margin: '10px 10px',marginTop:'20px' }}>Git Hub Users Page- {page}</h1>
      <div className="text-center">
      <div className="container d-flex justify-content-between">
            <button  className="btn btn-dark my-2" onClick={event=>{setSort('stars')}}>Sort By Stars</button>
      <input type="text" placeholder='Search...' onChange={event=>{setSearch(event.target.value)}}/>
            <button className="btn btn-dark my-2" onClick={event=>{setSort('name')}}>Sort By Name</button>
          </div>
      </div>
          <div className="row">
             {

            users.map((element)=>{
            return(
                <div className="col-md-4">
                  {/* <Usersdesc element={element} */}
                <div className="card my-1" style={{backgroundColor:'#cdcd71'}} >
                <div className="card-body text-center">
                <h3 className="card-title text-center">{element.name}</h3>
                <p className="card-text text-center">{element.description}</p>
                <p className="card-text text-center">Owned By {element.owner.login}</p>
                <p className="card-text text-center">Stars: {element.stargazers_count}</p>
                <p className="card-text text-center">Forks: {element.forks_count}</p>
                <a href={element.html_url} className="btn btn-secondary ">Click to view repo</a>
            </div> 
                </div>
                </div>
           
                )
    
                })
             } 
            
            
          </div>   
          <div className="container d-flex justify-content-between">
            <button disabled={page<=1} className="btn btn-dark my-2" onClick={handlePrevClick}>&larr; Previous</button>
            <button className="btn btn-dark my-2" onClick={handleNextClick}>Next &rarr;</button>
          </div>
    </div>
  )
}

export default Users
