import { Logout, SearchRounded } from "@mui/icons-material";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ItemCategoery, ItemClause } from "../../../enums";
import { useAuth } from "../../../hooks/useAuth";
import { Namespaces } from "../../../i18n/i18n.constants";
import { Routes } from "../../../router";
import "./ItemsPageHeader.scss";
import tabs from "./Tabs.utilites";

type ItemsPageHeaderProps = {
  selectedClause: ItemClause;
  setSelectedClause: React.Dispatch<React.SetStateAction<ItemClause>>;
  selectedCategory: ItemCategoery;
};

const ItemsPageHeader = ({
  selectedClause,
  setSelectedClause,
  selectedCategory,
}: ItemsPageHeaderProps) => {
  const { t } = useTranslation(Namespaces.itemsPage);
  const [relevantTabs, setRelevantTabs] = useState(tabs);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const onItemClauseChange = (itemClause: ItemClause) => {
    setSelectedClause(itemClause);
  };

  const onLogoutClick = () => {
    navigate(Routes.LAND_PAGE);
    logout();
  };

  useEffect(() => {
    const filteredTabs = tabs.filter((tab) =>
      tab.relevantCategories.some(
        (relevantCategory) => relevantCategory === selectedCategory
      )
    );

    setRelevantTabs(filteredTabs);
  }, [selectedCategory]);

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
        {relevantTabs.map((tab) => (
          <Tab
            key={tab.tabName}
            className={clsx(
              "header__item-clauses--option",
              selectedClause === tab.tabValue &&
                "header__item-clauses--active-option"
            )}
            label={t(tab.tabName)}
            value={tab.tabValue}
          />
        ))}
      </Tabs>
      <IconButton className="header__logout" onClick={onLogoutClick}>
        <Logout />
      </IconButton>
    </Box>
  );
};

export default ItemsPageHeader;
