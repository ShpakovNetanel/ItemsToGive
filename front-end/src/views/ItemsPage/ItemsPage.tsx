import { Box } from "@mui/material";
import { useState } from "react";
import { DisplayedItems } from "../../enums";
import ItemsPageFooter from "./ItemsPageFooter/ItemsPageFooter";
import "./ItemsPage.scss";

const ItemsPage = () => {
  const [displayedItems, setDisplayedItems] = useState<DisplayedItems>(
    DisplayedItems.MY_ITEMS
  );

  return (
    <Box className="items">
      {/* <ItemPageHeader /> */}
      <ItemsPageFooter
        displayedItems={displayedItems}
        setDispalyedItems={setDisplayedItems}
      />
    </Box>
  );
};

export default ItemsPage;
