import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import './pokedex.css';
import './Atributos.css';
import Progressbar from './Progress_bar';
const Atributos = () => {
    const { pokemon } = useContext(GlobalContext);

    return (
        <>
            {
                
              pokemon && pokemon.map((a) => {
                    return (
                        <>
                            <div className='card2'>
                                <ul className='name_status'>
                                    <li>HP</li>
                                    <li>Attack</li>
                                    <li>Defense</li>
                                    <li>SP. Attack</li>
                                    <li>SP. Defender</li>
                                    <li>Speed</li>
                                </ul>

                                <ul className='stats'>

                                    <li className='hp'>
                                        <span className='base_stat'> {a.stats[0].base_stat}</span>
                                        <span className='span'>
                                            <Progressbar bgcolor="black" progress={a.stats[0].base_stat} height={10} />
                                        </span>
                                    </li>


                                    <li className='attack'>
                                        <span className='base_stat'> {a.stats[1].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[1].base_stat} height={10} /></span>
                                    </li>


                                    <li className='defense'>
                                        <span className='base_stat'> {a.stats[2].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[2].base_stat} height={10} /></span>
                                    </li>


                                    <li className='spattack'>
                                        <span className='base_stat'> {a.stats[3].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[3].base_stat} height={10} /></span>
                                    </li>


                                    <li className='spdefense'>
                                        <span className='base_stat'> {a.stats[4].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[4].base_stat} height={10} /></span>
                                    </li>


                                    <li className='speed'>
                                        <span className='base_stat'> {a.stats[5].base_stat}</span>
                                        <span className='span'><Progressbar bgcolor="black" progress={a.stats[5].base_stat} height={10} /></span>
                                    </li>

                                </ul>



                            </div>
                            <br />
                        </>
                    )
                })
            }
        </>
    )
}

export default Atributos;