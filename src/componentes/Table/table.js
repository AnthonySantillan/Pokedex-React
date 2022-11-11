import React, { useState } from "react";
import "./table.css";
import {Avatar,List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
const Table = ({parentToChild}) => {
    console.log("datos del pokemom");
    console.log(parentToChild);
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div className="App">
            {parentToChild.map((data) => {
                return (
                    <div className="Table">
                        <div className="head">
                            <div className="left">
                                <h2>{data.name}</h2>   
                            </div>
                            <div className="center">
                                 {data.stats.map((stats) =>{
                                    return(
                                        <ul class="list-group">
                                        <li class="list-group-item active" aria-current="true">{stats.stat.name}</li>
                                        <li class="list-group-item">{stats.base_stat}</li>
                                        </ul>  
                                    );
                                })}
                            </div>
                            <div className="right">
                                <img src={data.sprites["front_shiny"]}/>
                            </div>

                        </div>

                    </div>

                );
            })}
        </div>
    );
};

export default Table;
