import React from "react";
import "./table.css";
import {Avatar, Collapse, Divider, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText} from "@material-ui/core";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";

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
                            <h2 className="">{data.name}</h2>
                            <div className="left">
                                <div className="information">
                                    <ListItem button onClick={handleClick}>
                                        <ListItemText primary="Estadisticas" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {data.stats.map((stats) =>{
                                                return(
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <StarBorder />
                                                        </ListItemIcon>
                                                                <ListItemText primary={stats.stat.name} secondary={stats.base_stat} />
                                                    </ListItem>
                                                );
                                            })}
                                        </List>
                                    </Collapse>
                                    <Divider variant="inset"  />
                                </div>
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
