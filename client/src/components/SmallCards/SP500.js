import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { green, red } from '@material-ui/core/colors';

const SP500 = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        style={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            variant="h6"
          >
            S&P 500
          </Typography>
          <Typography
            color="textSecondary"
            variant="h7"
          >
            SPX
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
              4,173.85
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            style={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <TrendingUpIcon style={{ fontSize: '2.25rem' }} />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Typography
          variant="body2"
          style={{
            color: green[900],
            paddingRight: 10,
            fontSize: '1rem',
            fontWeight: 500
          }}
        >
          +1.49%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Last 24h
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default SP500;