import React from 'react'

const Usersdesc = (element) => {
  return (
    <div>
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
}

export default Usersdesc
