import React, { useEffect, useState } from "react";
import { useToast, Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack, HStack, Spacer } from "@chakra-ui/react";
import { useDataContex } from "../Contexts/DataContext";

function ModalView({ isOpen, onClose, title, items, data, setData }) {
  const toast = useToast();
  const myArr = items.map(() => "");
  const [array, setArray] = useState(myArr);
  const [btnBool, setBtnBool] = useState(false);
  const {themeColor} = useDataContex()

  function setArrayFunc(i, e) {
    let arr = array.map((elem) => elem);
    arr[i] = e.target.value;
    setArray(arr);
  }

  function handleSubmit() {
    setBtnBool(true);
    setTimeout(() => {
      setBtnBool(false);
      if (typeof data === "boolean") {
        if (array[0] === "Polin@102030") {
          setData(!data);
          !data &&
            toast({
              title: "WelCome",
              description: "Ready to Change ...",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          onClose();
        } else
          toast({
            title: "Wrong Pass",
            description: "You Have Entered a Wrong Pass",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      } else {
        onClose();
        const newData = {};
        items.map((item, i) => (newData[item] = array[i]));
        setData([...data, newData]);
        toast({
          title: "Item Addes",
          description: "Suceessfully added a item",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 500);
  }

  // useEffect(() => {
  //   console.log(array);
  // }, [array]);

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              {items.map((item, i) => (
                <Input
                  key={i}
                  placeholder={"Enter " + item}
                  value={array[i]}
                  onChange={(e) => {
                    setArrayFunc(i, e);
                  }}
                />
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button color={"white"} bg={"rgb("+themeColor+")"} borderRadius={"full"} _hover="" isLoading={btnBool} loadingText="Submitting" onClick={handleSubmit}>
                Submit
              </Button>
              <Spacer />
              <Button color={"rgb("+themeColor+")"} borderRadius={"full"} border={"1px solid rgb("+themeColor+")"} bg={""} _hover="" onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalView;
