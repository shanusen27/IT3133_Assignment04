import React,{ useEffect,useState } from 'react';
import { animals } from '../assests/data/AnimalsDb';
import '../assests/css/compo.css';


function AnimalTable(props){

    const [randomAnimal,setRandomAnimal] = useState(null);
    const [result,setResult] = useState('');
    useEffect(()=>{
        generateRandomAnimal();
    },[])

    const generateRandomAnimal = () =>{
        const randomIndex = Math.floor(Math.random() * 10) + 1;
        setRandomAnimal(animals[randomIndex]);
        setResult('');
    }

    const handleAnimalClick=(selectedAnimal)=>{
        if(selectedAnimal === randomAnimal.name){
            setResult('WIN');
        }
        else{
            setResult('LOSE');
        }

        setTimeout(()=>{
            generateRandomAnimal();
        }, 1000);
    }

    if (!randomAnimal) {
        return <div className="loading">Loading</div>;
    }

    return(
        <div classname="gameContainer">
            <table className="game_table" border='10px'>
                <thead>
                    <tr>
                        <th colSpan="3"><h2>ANIMAL MATCHING GAME</h2></th>
                    </tr>
                    <tr>
                        <th><h2>Result</h2></th>
                        <th><h2>Animal Name</h2></th>
                        <th><h2>Select the Animal</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="result_col" width="10%"><h3>{result}</h3></td>
                        <td className="animalname_col" width="20%"><h3>{randomAnimal.name.toUpperCase()}</h3></td>
                        <td className="animalgrid_col" width="70%">
                            <div>
                                <div className="animalgrid">
                                    {
                                        animals.map((animal)=>(
                                         <div key={animal.name} className="animalgrid_item"onClick={()=>handleAnimalClick(animal.name)}>
                                            <img src={require(`../assests/img/${animal.img}`)} alt= {animal.name} className="animal_image"/>
                                         </div>   
                                        ))
                                    }
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    
}

export default AnimalTable;
