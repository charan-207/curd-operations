import { Paper, Grid, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './style.css'
const token = "9b4a398df806be14253fd9be1ce593f005d7f76a8ac66aa38cab28b06086b301"
function Updateusers(props) {
    const axiosInstance = axios.create({
        baseURL: 'https://gorest.co.in/public/v2',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const navigate = useNavigate()
    const params = useParams()
    const [update, setUpdate] = useState({
        name: '',
        email: '',
        body: ''
    })
    const handleEvent = (e) => {
        setUpdate({
            name: e.target.value
        })
    }
    const handleChange = (e) => {
        setUpdate({
            email: e.target.value
        })
    }
    const handleBody = (e) => {
        setUpdate({
            body: e.target.value
        })
    }


    useEffect(() => {
        if (params?.id) {
            axiosInstance.get(`/comments/${params.id}`)
                .then((result) => {
                    if (result) {
                        const data = result.data
                        setUpdate({
                            ...update,
                            email: data.email,
                            name: data.name,
                            body: data.body

                        })
                    }
                })
        }
    }, [params?.id])

    const updateUser = () => {
        axiosInstance.put(`/comments/${params.id}`, update)
            .then((result) => {
                if (result.status === 204) {
                    props.getUsers()
                    navigate('/')
                }
            })
    }


    return (
        <div>
            <Paper style={{ margin: '150px auto', width: '100%', padding: '15px' }}>
                <Grid container spacing={6}>
                    <Grid item md={2}></Grid>
                    <Grid item md={6}>
                        <Typography>User Details</Typography>
                        <TextField
                            className='name'
                            variant='outlined'
                            size='small'
                            fullWidth
                            placeholder='name'
                            name='name'
                            value={update.name}
                            onChange={handleEvent}
                        />
                        <TextField
                            style={{ marginTop: '20px' }}
                            variant='outlined'
                            size='small'
                            fullWidth
                            placeholder='email'
                            name='email'
                            value={update.email}
                            onChange={handleChange} />
                        <TextField
                            style={{ marginTop: '20px' }}
                            variant='outlined'
                            size='small'
                            fullWidth
                            placeholder='body'
                            name='body'
                            value={update.body}
                            onChange={handleBody} />
                        <div className='button'>
                            <Button variant='contained' size='small' onClick={updateUser}>update</Button>
                            <Button onClick={() => navigate('/')} variant='contained' size='small'>Back</Button>
                        </div>
                    </Grid>
                    <Grid item md={4}></Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default Updateusers