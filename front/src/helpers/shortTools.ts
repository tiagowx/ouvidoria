const cpfFormatter = (cpf: string) => {
cpf = cpf.replace(/[^0-9]/g,'')

  if (cpf.length > 11)
    cpf = cpf.substring(0, 11);

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");;

}
export default cpfFormatter;