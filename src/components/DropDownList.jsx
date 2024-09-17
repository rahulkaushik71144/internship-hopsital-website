import { useState } from "react";
import SpecialityList from "../constants/NavBar/our-specialities";
import Hospitals from "../constants/NavBar/our-hospitals";
import KeyProcedures from "../constants/NavBar/key-procedures";
import BookApppointment from "../constants/NavBar/book-appointment";
import About from "../constants/NavBar/about";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const RecursiveList = ({ items, expanded, handleToggleExpand, level = 0 }) => {
  return (
    <List
      component="div"
      disablePadding
      style={{
        paddingLeft: level * 16, // Indentation for nested levels
      }}
    >
      {items.map(({ id, title, url, children }) => (
        <div key={id}>
          <ListItem
            button
            onClick={() => handleToggleExpand(id)}
            style={{
              backgroundColor: expanded[id] ? "" : "transparent", // Change color when expanded
              color: expanded[id] ? "	#FF69B4" : "#000", // Optional: Change text color
            }}
          >
            {/* Use an anchor tag for the URL */}
            <a
              href={url}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemText primary={title} />
            </a>
            {children && (expanded[id] ? <ExpandLess /> : <ExpandMore />)}
          </ListItem>
          {children && (
            <Collapse in={expanded[id]} timeout="auto" unmountOnExit>
              <RecursiveList
                items={children}
                expanded={expanded}
                handleToggleExpand={handleToggleExpand}
                level={level + 1} // Increase indentation level for nested lists
              />
            </Collapse>
          )}
        </div>
      ))}
    </List>
  );
};

const DropDownList = () => {
  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Speciality List */}
      <RecursiveList
        items={SpecialityList}
        expanded={expanded}
        handleToggleExpand={handleToggleExpand}
      />

      {/* Hospitals List */}
      <RecursiveList
        items={Hospitals}
        expanded={expanded}
        handleToggleExpand={handleToggleExpand}
      />

      {/* Key Procedures List */}
      <RecursiveList
        items={KeyProcedures}
        expanded={expanded}
        handleToggleExpand={handleToggleExpand}
      />

      {/* About List */}
      <RecursiveList
        items={About}
        expanded={expanded}
        handleToggleExpand={handleToggleExpand}
      />
    </>
  );
};

export default DropDownList;
