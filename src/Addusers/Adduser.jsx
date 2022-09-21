import { Grid, Typography, Paper, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './style.css'
const token = "9b4a398df806be14253fd9be1ce593f005d7f76a8ac66aa38cab28b06086b301"
function Adduser() {
    const axiosInstance = axios.create({
        baseURL: 'https://gorest.co.in/public/v2',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const navigate = useNavigate()

    const [adding, setAdding] = useState({
        name: '',
        email: '',
        body: ''
    })
    const handleName = (e) => {
        setAdding({
            ...adding,
            name: e.target.value
        })
    }
    const handleEmail = (e) => {
        setAdding({
            ...adding,
            email: e.target.value
        })

    }
    const handleBody = (e) => {
        setAdding({
            ...adding,
            body: e.target.value
        })
    }
    const onSubmit = () => {
        // console.log(adding)
        axiosInstance.post('/comments', adding)
            .then((result) => {
                console.log(result)
                if (result.status === 204) {

                } 
                //public/v2 / posts / 16 / comments

            })

    }


    return (
        <div>
            <Paper style={{ margin: '150px auto', width: '50%', padding: '15px' }}>
                <Grid container spacing={6}>
                    <Grid item md={2}></Grid>
                    <Grid item md={7}>
                        <Typography>Adding Users</Typography>

                        <TextField
                            className='name'
                            placeholder='name'
                            name='name'
                            fullWidth
                            variant='outlined'
                            value={adding.name}
                            onChange={handleName}

                        />
                        <TextField
                            className='email'
                            placeholder='email'
                            name='email'
                            fullWidth
                            variant='outlined'
                            value={adding.email}
                            onChange={handleEmail}
                        />
                        <TextField
                            className='body'
                            placeholder='body'
                            name='body'
                            fullWidth
                            variant='outlined'
                            value={adding.body}
                            onChange={handleBody}

                        />
                        <div className='submit'>
                            <Button variant='contained' onClick={onSubmit}>Add</Button>
                            <Button variant='contained' onClick={() => navigate('/')}>Cancel</Button>
                        </div>
                        <Grid item md={3}></Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Adduser