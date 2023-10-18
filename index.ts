import { PessoaFisica } from "./src/model/PessoaFisica";
import { PessoaJuridica} from "./src/model/PessoaJuridica";

const um = new PessoaJuridica (`Biriri`, `2364758986590-`);
um.setNome(`Guanabara`)
um.setCnpj(`6543238`)
console.log(um.getNome());
console.log(um.getCnpj());

const dois = new PessoaFisica (`Rebeca`, `234679865309754`);
dois.setNome(`Carol`);
dois.setCpf(`987532890087`);
console.log(dois.getNome());
console.log(dois.getCpf());



