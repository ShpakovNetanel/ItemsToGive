import { Logout, SearchRounded } from "@mui/icons-material";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ItemClause } from "../../../enums";
import { Namespaces } from "../../../i18n/i18n.constants";
import { Routes } from "../../../router";
import "./ItemsPageHeader.scss";
import { useSetRecoilState } from "recoil";
import { loggedUser } from "../../../atom/atom";
import { User } from "../../../Data/users";

type ItemsPageHeaderProps = {
  selectedClause: ItemClause;
  setSelectedClause: React.Dispatch<React.SetStateAction<ItemClause>>;
};

const ItemsPageHeader = ({
  selectedClause,
  setSelectedClause,
}: ItemsPageHeaderProps) => {
  const { t } = useTranslation(Namespaces.itemsPage);

  const navigate = useNavigate();

  const setCurrentUser = useSetRecoilState(loggedUser);

  const onItemClauseChange = (itemClause: ItemClause) => {
    console.log(itemClause);

    setSelectedClause(itemClause);
  };

  const onLogoutClick = () => {
    navigate(Routes.LAND_PAGE);
    setCurrentUser({} as User);
  };

  return (
    <Box className="header">
      <IconButton className="header__search">
        <SearchRounded />
      </IconButton>
      <Tabs
        className="header__item-clauses"
        value={selectedClause}
        onChange={(_, value) => onItemClauseChange(value)}
      >
        <Tab
          className="header__item-clauses--option"
          label={t("nearMe")}
          value={ItemClause.NEAR_ME}
        />
        <Tab
          className="header__item-clauses--option"
          label={t("allItems")}
          value={ItemClause.ALL_ITEMS}
        />
      </Tabs>
      <IconButton className="header__logout" onClick={onLogoutClick}>
        <Logout />
      </IconButton>
    </Box>
  );
};

export default ItemsPageHeader;
