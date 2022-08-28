import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useDataContex } from "../Contexts/DataContext";
import ModalView
 from "./ModalView";
function AdminAuth() {
  const { isPassBool, setPassBool,themeColor } = useDataContex();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button minW={"100px"} color={"rgb("+themeColor+")"} bg={""} _hover="" borderRadius="full" border={"1px solid rgb("+themeColor+")"} onClick={onOpen}>
        {isPassBool?"SingOut":"SignIn"}
      </Button>
      <ModalView isOpen={isOpen} onClose={onClose} title={"Admin Login"} items={["Admin Password"]} data={isPassBool} setData={setPassBool} />
    </>
  );
}

export default AdminAuth;
