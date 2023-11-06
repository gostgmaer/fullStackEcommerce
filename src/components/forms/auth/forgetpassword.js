import { Person } from '@mui/icons-material';
import { Button, Grid, Paper, TextField } from '@mui/material';

// import Router from 'next/router';

const styles = theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(),
  },
});


class ForgetPasswordForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    email: '',
    loading: false
  };
  handleChnage(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  keyboardevent(e) {
    const key = e.keyCode || e.charCode;
    if (key === 13) {
      this.props.onPress({ ...this.state });
      this.setState({
        email: '',
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyboardevent.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyboardevent.bind(this));
  }

  render() {
    const { classes, onPress } = this.props;
    return (
      <Paper className={classes.padding}>
        <Grid container spacing={12} alignItems="center">
          <Grid md={12} sm={12} xs={12} item style={{ textAlign: 'center' }}>
            {/*  <img
              width="150"
              src="https://www.inadev.com/assets/images/logo.png"
            /> */}
            <h2 style={{ display: 'block', color: '#003f5eab' }}>
              Virtual Permit Center
            </h2>
            <h3 style={{ display: 'block', color: '#003f5eab' }}>
              Forget Password
            </h3>
          </Grid>
        </Grid>
        <div className={classes.margin}>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Person />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                onChange={this.handleChnage('email')}
                id="email"
                label="Enter Email"
                type="email"
                fullWidth
                autoFocus
                required
              />
            </Grid>
          </Grid>


          <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: 'none' }}
              disabled={this.props.loading}
              onClick={() => onPress(this.state)}
            >
              {this.props.loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Grid>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: 'none', marginTop: 30 }}
                variant="text"
                color="primary"
                onClick={() => Router.push('login')}
              >
                Back to login
              </Button>
            </Grid>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(ForgetPasswordForm);
