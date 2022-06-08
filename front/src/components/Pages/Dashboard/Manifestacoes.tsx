import { IManifestacao } from "@interfaces/IManifestacao";
import { Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ManifestacaoService } from 'services/ManifestacaoService'

const Manifestacoes = () => {
  const manifestacaoService = new ManifestacaoService();
  const [manifestacoes, setManifestacoes] = useState<IManifestacao[]>([]);


  const allManifestacoes = async () => {
    const resolved = await manifestacaoService.list();
    const values = await JSON.stringify(resolved);
    const all = JSON.parse(values);
    const [data] = all;
    setManifestacoes(data);
  };

  useEffect(() => {
    allManifestacoes();
  }, []);

  return (
    <Grid container >
      {manifestacoes.map(item => {
        return (
          <Card key={item.codigo}>
            <CardActionArea>
              <CardContent>
                <Typography component='span'>
                  Situação: {item.situacaoManifestacao}
                </Typography>
                <Typography component='h5' variant='h5'>
                  {item.tipoManifestacao}
                </Typography>
                <Typography component='p'>
                  {item.descricao}
                </Typography>
              </CardContent>
            </CardActionArea>

          </Card>
        );
      })};

    </Grid>
  );

}

export default Manifestacoes;