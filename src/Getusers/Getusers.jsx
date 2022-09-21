import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
import TableData from './TableData'
const token = "9b4a398df806be14253fd9be1ce593f005d7f76a8ac66aa38cab28b06086b301"

function Getusers() {
    const navigate = useNavigate()
    const [user, setUser] = useState([])

    const axiosInstance = axios.create({
        baseURL: 'https://gorest.co.in/public/v2',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const getUsers = () => {
        axiosInstance.get('/comments')
            .then(result => {
                setUser(result.data)
                console.log(result)
            })
    }
    useEffect(() => {
        getUsers()
    }, [])
    const deleteUser = (id) => {
        axiosInstance.delete(`/comments/${id}`)
            .then((res) => {
                if (res.status === 204) {
                    getUsers()
                }   
            })
    }

    return (
        <div>

            <Paper style={{ margin: '150px auto', width: '50%', padding: '15px' }}>
                <Button variant='outlined' size='medium' style={{ float: 'right' }} onClick={() => navigate('/adduser')}>Add User</Button>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Body</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.map((rowUser) => (
                                <TableRow>
                                    <TableCell>{rowUser.name}</TableCell>
                                    <TableCell>{rowUser.email}</TableCell>
                                    <TableCell>{rowUser.body}</TableCell>
                                    <TableCell>
                                        <div className='edit'>

                                            <Button onClick={() => navigate(`/updateusers/${rowUser.id}`)}>Edit</Button>
                                            <Button onClick={() => deleteUser(rowUser.id)}>Delete</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <hr />

                <Paper style={{ margin: '150px auto', padding: '15px' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Body</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                               {user.map((charanData)=>(
                                <TableData charanData={charanData}/>
                               ))
                               }
                            </TableBody  >
                        </Table>
                    </TableContainer>

                </Paper>
            </Paper>

        </div>
    )
}

export default Getusers