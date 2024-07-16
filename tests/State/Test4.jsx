//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 10 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: React Context ********************/

//======================= Problem Description ==========================/
// For this test, you will be making use of React Context.
// We have a variable named person, and we want this variable
// to be available throughout the application without having to
// redefine it in every instance.

//******************* Solution Requirements ********************/
//1.) Use React Context.
//2.) Make the setter variable in your context available to the 'SetValuesHere' component.
//3.) The 'newPerson' variable is already defined.
//4.) When you click the 'set' button, it will set the value of 'newPerson' to the 'person' variable.
//5.) This 'person' variable must now be available throughout the application without redefining it.
//6.) When the 'person' variable changes values, all components subscribed to it should display the changes.

//******************** Tips ********************
//1.) You can use either function declaration or function expression.
//2.) The hooks you need to accomplish this task are already imported in this component.

// ----------------------------------------------------------------------------------//

import React, { useState, useContext, createContext } from "react";
import { Box, Typography, Button } from "@mui/material";

// Create context
const PersonContext = createContext();

// Context provider component
function Context({ children }) {
  const BaseContext = {
    name: "",
    age: "",
    height: "",
    complexion: "",
  };

  const [person, setPerson] = useState(BaseContext);

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
}

// Set values here component
function SetterComponent() {
  const { person, setPerson } = useContext(PersonContext);

  const newPerson = {
    name: "Jrue Holiday",
    age: "34",
    height: "1.93m",
    complexion: "dark",
  };

  const handleSetPerson = () => {
    if (person.name === newPerson.name) {
      setPerson({
        name: "",
        age: "",
        height: "",
        complexion: "",
      });
    } else {
      setPerson(newPerson);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        width: 200,
        height: 45,
      }}
      onClick={handleSetPerson}
    >
      Set
    </Button>
  );
}

// Access and display 'person' details here component
function Screen() {
  const { person } = useContext(PersonContext);

  return (
    <Box className="testContainer">
      <Box className="stateComp">
        <Typography> {person.name || "No name found."} </Typography>
        <SetterComponent />
      </Box>
    </Box>
  );
}

// Default component
export default function Test4Screen() {
  return (
    <Context>
      <Screen />
    </Context>
  );
}
