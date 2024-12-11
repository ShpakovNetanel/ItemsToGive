import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useItems } from "../../api/itemService";
import { getLocation } from "../../api/userService";
import { loggedUser } from "../../atom/atom";
import { Item } from "../../Data/items";
import { ItemCategoery, ItemClause, ItemStatus } from "../../enums";
import ItemPageContent from "./ItemPageContent/ItemsPageContent";
import "./ItemsPage.scss";
import ItemsPageFooter from "./ItemsPageFooter/ItemsPageFooter";
import ItemsPageHeader from "./ItemsPageHeader/ItemsPageHeader";
import { clone } from "remeda";

const ItemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ItemCategoery>(
    ItemCategoery.MY_ITEMS
  );
  const [selectedClause, setSelectedClause] = useState<ItemClause>(
    ItemClause.ALL_ITEMS
  );
  const [displayedItems, setDisplayedItems] = useState<Item[]>([]);

  const { data: items, isSuccess: isItemsSuccess } = useItems();

  const currentUser = useRecoilValue(loggedUser);

  useEffect(() => {
    if (isItemsSuccess) setDisplayedItems(items);
  }, [items, isItemsSuccess]);

  useEffect(() => {
    let filteredItems = clone(items);

    if (selectedClause === ItemClause.NEAR_ME) {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.location === getLocation()
      );
    }

    if (selectedCategory === ItemCategoery.MY_ITEMS) {
      console.log(currentUser);

      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.publisherMail === currentUser.email
      );
    } else if (selectedCategory === ItemCategoery.HOME) {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.publisherMail !== currentUser.email
      );
    } else {
      filteredItems = filteredItems?.filter(
        (filteredItem) => filteredItem.itemStatus === ItemStatus.TO_SHIP
      );
    }

    setDisplayedItems(filteredItems ?? []);
  }, [selectedClause, selectedCategory, items, currentUser]);

  return (
    <Box className="items">
      <ItemsPageHeader
        selectedClause={selectedClause}
        setSelectedClause={setSelectedClause}
      />
      <ItemPageContent items={displayedItems} />
      <ItemsPageFooter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Box>
  );
};

export default ItemsPage;
