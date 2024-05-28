import { Title } from '@mui/icons-material'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

export default function Location({data}) {
  return (
    <>
      <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Adresse IP</TableCell>
              <TableCell>Pays</TableCell>
              <TableCell>Ville</TableCell>
              <TableCell>Localisation</TableCell>
              <TableCell>Infos connexion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{data.ip}</TableCell>
              <TableCell>{data.location.country.emoji} {data.location.country.name_translated}</TableCell>
              <TableCell>{data.location.city.name}</TableCell>
              <TableCell>
                Latitude : {data.location.latitude} <br/>
                Longitude : {data.location.longitude}
              </TableCell>
              <TableCell>
                asn : {data.connection.asn}<br/>
                Organisation : {data.connection.organization}<br/>
                Isp : {data.connection.isp}
              </TableCell>
            </TableRow>
              
          </TableBody>
        </Table>
    </>
  )
}
