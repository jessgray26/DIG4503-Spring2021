import chalk from 'chalk';
import axios from 'axios';
import {p, e} from './index.js';

class Fetch {
     constructor(pokemon, color) {
          this.pokemon = pokemon;
          this.color = color;
        }

    fetch() {
        axios('https://pokeapi.co/api/v2/pokemon/suicune')
            .then((response) => {
                const pokemon = response.data;
                    if(p.pokemon == pokemon.name){
                        console.log(chalk.hex(p.color)("This is a " + p.pokemon + " and its ID is " + pokemon.id));
                    }
                    if(e.pokemon !== pokemon.name) throw "is an invalid Pokemon!"
                })
            
            .catch((error) => {
                    console.error(chalk.red("Error: " + e.pokemon + " " + error));
                });
                
    }
 };

export default Fetch;