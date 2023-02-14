import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
interface IListWithIcons {
  data: { id: number; text: string; icon: JSX.Element }[];
}
const ListWithIcons: React.FC<IListWithIcons> = ({ data }) => {
  return (
    <List sx={{ marginTop: "20px" }}>
      {data.map((element) => (
        <ListItem
          key={element.id}
          sx={{
            paddingLeft: "0",
            "&:hover": { color: "#FA496E" },
            cursor: "pointer",
          }}
        >
          <ListItemAvatar>
            <Avatar sx={{ background: "#FA496E" }}>{element.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={element.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default ListWithIcons;
