import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

export const ListProducts = () => {
  return (
    <div>
        
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Categoría</TableCell>
              <TableCell>Habilitado</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>


          
            </Table>
        </TableContainer>
    </div>
  )
}
