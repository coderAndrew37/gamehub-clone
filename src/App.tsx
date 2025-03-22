import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Navigation
        </GridItem>

        {useBreakpointValue({
          base: null,
          lg: (
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          ),
        })}

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
