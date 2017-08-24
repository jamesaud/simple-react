// modules/Repo.js
import React from 'react'

function Repo(props){
    return  <div>
            <h2>{props.params.repoName}</h2>
          </div>
};

export default Repo;