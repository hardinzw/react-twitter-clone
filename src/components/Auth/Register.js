import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/AuthActions';

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

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
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
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    }
    this.props.registerUser(userData, this.props.history);
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
            type="text" 
            label="Username"
            className={classes.textField}
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            helperText={errors ? errors.username : ''}
            error={errors.username}
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
          <TextField
            type="password" 
            label="Confirm Password"
            className={classes.textField}
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
            helperText={errors ? errors.password2 : ''}
            error={errors.password2}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(withStyles(styles)(Register)));