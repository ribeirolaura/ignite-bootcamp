import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";


const url = 'https://api.github.com/orgs/rocketseat/repos'

const repository = {
    name: 'unform', 
    description: 'Forms in react', 
    link: 'https://github.com/unform/unform'
}

export function RepositoryList (){
    const [repositories, setRepositories] = useState([]); 
    
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])
    
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository}/> 
                <RepositoryItem /> 
                <RepositoryItem /> 
                <RepositoryItem />           
            </ul>
        </section>
    )
}