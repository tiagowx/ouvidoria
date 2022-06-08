import { Box, Button, Grid, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { useEffect, useState, FormEvent } from 'react';
import { EstacaoService } from 'services/EstacaoService';
import { IEstacaoMetro } from 'interfaces/IEstacaoMetro';
import { LinhaMetro } from 'enums/LinhaMetro';


const Estacoes: React.FC = () => {
  const estacaoMetro = new EstacaoService();
  const [estacoes, setEstacoes] = useState<IEstacaoMetro[]>([]);

  const [newEstacao, setNewEstacao] = useState<IEstacaoMetro>({
    nome: '',
    linhaMetro: LinhaMetro.LINHA_1
  });

  const allEstacoes = async () => {
    const response = await estacaoMetro.list();
    const values = await JSON.stringify(response);
    const all = JSON.parse(values);
    const { data } = all;
    if (!data)
      return;
    setEstacoes(data);
  }

  function handlerSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    estacaoMetro.save(newEstacao);
  }


  useEffect(() => {
    allEstacoes();
  }, []);

  return (
    <Grid container sx={{
      margin: 3,
    }}>
      <Box component="form" onSubmit={handlerSubmit}>
        <TextField
          label="Estação"
          type='text'
          onChange={(e) => setNewEstacao({
            ...newEstacao,
            nome: e.target.value
          })}
        />
        <Select
          label="Linha"
          type="text"
          value={newEstacao.linhaMetro}
          onChange={(e) => setNewEstacao(() => {
            switch (e.target.value) {
              case LinhaMetro.LINHA_1: return { ...newEstacao, linhaMetro: LinhaMetro.LINHA_1 };
              case LinhaMetro.LINHA_2: return { ...newEstacao, linhaMetro: LinhaMetro.LINHA_2 };
            }
            return { ...newEstacao };
          })}
        >
          <MenuItem value={LinhaMetro.LINHA_1}>Linha 1</MenuItem>
          <MenuItem value={LinhaMetro.LINHA_2}>Linha 2</MenuItem>
        </Select>
        <Button type="submit">Enviar</Button>
      </Box>
      <Table  sx={{
        display: 'block',
        height: '240px',
        overflowY: 'auto'
      }}>
        <TableBody>
          {estacoes.map(item => {
            return (
              <TableRow key={item.nome + item.codigo}>
                <TableCell>
                  <Typography>{item.codigo}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.nome}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{item.linhaMetro}</Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

    </Grid>
  )
}

export default Estacoes;