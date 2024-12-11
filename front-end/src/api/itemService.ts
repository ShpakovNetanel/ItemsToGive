import { Item, items } from "../Data/items";
import { useQuery } from "react-query";

export const useItems = () => {
  const getItems = async () => {
    const fetchItems = await items;

    return fetchItems;
  };

  return useQuery({
    queryKey: ["getItems"],
    queryFn: getItems,
  });
};

export const addItem = (item: Item) => {
  items.push(item);
};
