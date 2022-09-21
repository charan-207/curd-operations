import { TableCell, TableRow } from '@mui/material'
import React from 'react'

function TableData(props) {
    // const data = props.charanData
    const {name,email,body}=props.charanData
    return (
        <>
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{body}</TableCell>

                {/* <TableCell>{props.rowUser?.email}</TableCell>
                <TableCell>{props.rowUser?.body}</TableCell> */}
            </TableRow>
        </>

    )

}

export default TableData