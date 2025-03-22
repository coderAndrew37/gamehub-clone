import { Button, HStack } from "@chakra-ui/react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <HStack>
        <Button colorPalette="teal" variant="solid">
          <RiMailLine /> Email
        </Button>
        <Button colorPalette="teal" variant="outline">
          Call us <RiArrowRightLine />
        </Button>
      </HStack>
    </div>
  );
}

export default App;
