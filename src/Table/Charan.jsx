import { TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Charan() {
    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>

                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <Table>Body</Table>


                        </TableRow>
                    </TableHead>
                    <TableRow>
                        <TableCell>charan</TableCell>
                        <TableCell>saic4234@gmail.com</TableCell>
                        <Table>i have intersested to play games</Table>

                    </TableRow>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Charan