import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>Online Voting System</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'grey' }}>
            <Typography variant="h5" gutterBottom>Our Mission</Typography>
            <Typography>
              Our mission is to provide a secure and accessible platform for democratic participation through online voting.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'grey' }}>
            <Typography variant="h5" gutterBottom>Voter Participation</Typography>
            <Typography>
              Our online voting system enables millions of eligible voters to conveniently cast their votes from anywhere in the world.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'grey' }}>
            <Typography variant="h5" gutterBottom>Security Measures</Typography>
            <Typography>
              We employ state-of-the-art security protocols and encryption techniques to ensure the integrity and confidentiality of each vote.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: 'grey' }}>
            <Typography variant="h5" gutterBottom>Features</Typography>
            <Typography>
              Our online voting system offers a comprehensive set of features including:
              <ul>
                <li>Secure Voter Authentication</li>
                <li>Encrypted Ballot Submission</li>
                <li>Real-time Results Tracking</li>
                <li>Accessibility Options for Disabled Voters</li>
                <li>Multi-language Support</li>
                <li>And much more...</li>
              </ul>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;