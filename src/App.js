import React from 'react';
import GlobalSyele from "./assets/css/style";

import { Grid, Typography, Container } from '@material-ui/core/';
import { PureAutocomplete } from './components/';

class App extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <>
        <GlobalSyele />
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="h6">
                Auto-complete (Input)
              </Typography>
              <PureAutocomplete />

            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;