import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      password2: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

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
    console.log(userData);
  }
  
  render() {
    const { classes } = this.props;
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
          />
          <TextField
            type="text" 
            label="Username"
            className={classes.textField}
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <TextField
            type="password" 
            label="Password"
            className={classes.textField}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <TextField
            type="password" 
            label="Confirm Password"
            className={classes.textField}
            name="password2"
            value={this.state.password2}
            onChange={this.handleChange}
          />
          <div className ={classes.button}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Paper>

    )
  }
}

export default withStyles(styles)(Register);