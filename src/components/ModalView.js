import React, { useEffect, useState } from "react";
import { Input, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, VStack, HStack, Spacer } from "@chakra-ui/react";

function ModalView({ isOpen, onClose, title, items, data, setData }) {
  const myArr = items.map(() => "");
  const [array, setArray] = useState(myArr);

  function setArrayFunc(i, e) {
    let arr = array.map((elem) => elem);
    arr[i] = e.target.value;
    setArray(arr);
  }

  function handleSubmit() {
    const newData = {};
    items.map((item, i) => (newData[item] = array[i]));
    setData([...data, newData]);
  }

  useEffect(() => {
    console.log(array);
  }, [array]);

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
              <Button onClick={handleSubmit}>Submit</Button>
              <Spacer />
              <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalView;
