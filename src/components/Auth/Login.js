import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/AuthActions';

const styles = {
  textField: {
    width: '100%',
    marginBottom: 5
  },
  button: {
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20
  }
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    };
  };

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    const userData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.loginUser(userData)
  }
  
  render() {
    const { classes } = this.props;
    const { errors } = this.state;
    return (     
      <Paper style={{ padding: 20 }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="email" 
            label="Email"
            className={classes.textField}
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            helperText={errors ? errors.email : ''}
            error={errors.email}
          />
          <TextField
            type="password" 
            label="Password"
            className={classes.textField}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            helperText={errors ? errors.password : ''}
            error={errors.password}
          />
          <div className ={classes.button}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    );
  };
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withStyles(styles)(Login));