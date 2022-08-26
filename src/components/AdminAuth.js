import React from "react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useDataContex } from "../Contexts/DataContext";
import ModalView
 from "./ModalView";
function AdminAuth() {
  const { isPassBool, setPassBool } = useDataContex();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant={"outline"} colorScheme={"teal"} borderRadius="full" onClick={onOpen}>
        {isPassBool?"SingOut":"SignIn"}
      </Button>
      <ModalView isOpen={isOpen} onClose={onClose} title={"Enter Your Pass"} items={["Admin Password"]} data={isPassBool} setData={setPassBool} />
    </>
  );
}

export default AdminAuth;
