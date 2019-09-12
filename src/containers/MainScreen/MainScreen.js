import React from "react";
import HorizontalSplitLayout from "../../components/core/HorizontalSplitLayout/HorizontalSplitLayout";
import SideMenu from "../../components/bss/SideMenu/SideMenu";
import MenuButton from "../../components/bss/MenuButton/MenuButton";
import Form from "../../components/core/Form/Form";
import demoForm from "../../schemas/demoForm.json";

const MainScreen = () => (
  <HorizontalSplitLayout>
    <SideMenu>
      <MenuButton>Subscriptions</MenuButton>
      <MenuButton>Plans</MenuButton>
      <MenuButton>Usage</MenuButton>
      <MenuButton>Company</MenuButton>
      <MenuButton>Users</MenuButton>
    </SideMenu>
    <Form schema={demoForm} data={{}} />
  </HorizontalSplitLayout>
);

export default MainScreen;
