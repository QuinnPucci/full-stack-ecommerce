import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function App() {
  const [count, setCount] = React.useState(1);
  
  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button class='remove-from-cart-btn'
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="medium" />
          </Button>
          <Button class='add-to-cart-btn'
            onClick={() => {
              setount(count + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="medium" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}