import { Box } from "@mui/material";
import { Item } from "../../../Data/items";
import ItemCard from "./ItemCard/ItemCard";
import "./ItemsPageContent.scss";
import { useEffect } from "react";

type ItemPageContentProps = {
  items: Item[];
};

const ItemPageContent = ({ items }: ItemPageContentProps) => {
  useEffect(() => { }, [items]);
  
  return (
    <Box className="displayed-items">
      {items?.map((item) => (
        <ItemCard key={`${item.name}-${item.timePublished}`} item={item} />
      ))}
    </Box>
  );
};

export default ItemPageContent;
