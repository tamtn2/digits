import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className='digits-background-image'>
        <Grid container centered stackable columns={3}>
          <Grid.Column textAlign='center'>
            <Icon size='big' name='user circle' inverted/>
            <Header as='h1' inverted>Multiple Users</Header>
            <Header as='h3' inverted>This address book enables any numbers of users to register and
            save their business contacts. You can only see the contacts that have been saved.</Header>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Icon size='big' name='file alternate' inverted/>
            <Header as='h1' inverted>Contact Details</Header>
            <Header as='h3' inverted>For each contact, you can add more details about each individual
            contact</Header>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Icon size='big' name='sticky note' inverted/>
            <Header as='h1' inverted>Timestamped Notes</Header>
            <Header as='h3' inverted>Each time you connect with a contact, you can add a timestamp
            and a note of the conversation.</Header>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Landing;
