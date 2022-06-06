import { IUsuario } from "@interfaces/IUsuario";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { FormEvent, useState } from "react";
import { UsuarioService } from "services/usuarioService";



const Contact = () => {
  const usuarioService = new UsuarioService();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const [usuario, setUsuario] = useState<IUsuario>({
    nomeCompleto: nomeCompleto,
    cpf: cpf,
    telefone: telefone,
    email: email
  });

  const handlerSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUsuario({
      nomeCompleto: nomeCompleto,
      cpf: cpf,
      telefone: telefone,
      email: email
    })

    usuarioService.save(usuario)
    console.log(usuario)
  }

  return (
    <Grid container >
      <Box
        component='form'
        onSubmit={handlerSubmit}

        sx={{
          display: 'flex',
          width: '100vw',
          margin: 1,
          justifyContent: 'space-around',
          textAlign: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '30%',
        }}>
          <Typography component='h3' variant='h3'>Usuário</Typography>
          <TextField
            label='Nome'
            type='text'
            onChange={(e) => setNomeCompleto(e.target.value)}
            required />
          <TextField
            label='CPF'
            type='text'
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <TextField
            label='Email'
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label='Telefone'
            type='telefone'
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </Box>
        <Box width='50%'>
          <Typography component='h3' variant='h3'>Manifestação</Typography>

        </Box>
        <Button component='button' type='submit'>Enviar</Button>
      </Box>
    </Grid>
  )
}

export default Contact;