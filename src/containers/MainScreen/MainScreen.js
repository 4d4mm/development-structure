import React from "react";
import HorizontalSplitLayout from "../../components/HorizontalSplitLayout/HorizontalSplitLayout";
import SideMenu from "../../components/SideMenu/SideMenu";
import MenuButton from "../../components/MenuButton/MenuButton";

const MainScreen = () => (
  <HorizontalSplitLayout>
    <SideMenu>
      <MenuButton>Test</MenuButton>
      <MenuButton>Test 2</MenuButton>
    </SideMenu>
  </HorizontalSplitLayout>
);

export default MainScreen;
