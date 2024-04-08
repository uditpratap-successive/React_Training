//10.Create a form with Material-UI text fields and implement form validation. Ensure that error messages are displayed when the user enters invalid data.

import React, { useState } from 'react';
import { Grid, Paper, TextField, FormControlLabel, Button } from '@mui/material';
import { Avatar, Checkbox } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const paperStyle = { padding: 20, height: '50vh', width: 280, margin: '30px auto' };
    const avatarStyle = { backgroundColor: 'red' };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if (!username.trim()) {
            errors.username = 'Username is required';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        }

        if (Object.keys(errors).length === 0) {
            console.log(Object.keys)
            console.log('Form submitted successfully');
        } else {
            setErrors(errors);
        }
    };

    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
                    <h1>Sign in</h1>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label='Username'
                        placeholder='Enter Username'
                        type='text'
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                    />
                    <TextField
                        label='Password'
                        placeholder='Enter Password'
                        type='password'
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default LoginForm;
