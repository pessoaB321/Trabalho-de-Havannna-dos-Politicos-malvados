import Politico from "./politico";
import Governador from "./governador";
import Precidente from "./precidente";
import DEPUestaDU from "./deputadoEst";
import FeDedePu from "./deputadoFED";
import Senadoro  from "./Senador";

//const TesteGov= new Governador("Mariana", "PSDB", "estadual", "executivo", "Palácio do Governo", "Rua do Governo, 123", 20000, ["Projeto A", "Projeto B"], 10, "São Paulo");
//console.log(TesteGov.getNome() ,TesteGov.getPartido(), TesteGov.getEsfera(), TesteGov.getPoder(), TesteGov.getnomeLocalJob() ,TesteGov.getEnderecoLocalJob(), TesteGov.getremuneracao() ,TesteGov.getProjectList() ,TesteGov.getQuantSecre(), TesteGov.getEstadoName());

//TesteGov.pec("lula vai matar geral") HAHAHAAHAHA FUNCIONAAAAA
//testePrecidente.NomearMinistro(     'glorateste');
//testePrecidente.ProporLei(['bla bla bla'],"bba boi", )


/*
- Crie o diagrama de classes necessário para a construção do sistema
- Implemente as classes a partir do diagrama
- Instancie:
- o presidente com os dados do presidente atual
- @ governador@ atual do seu Estado e outro de outro Estado de sua
escolha
- três atuais deputados federais eleitos por seu Estado e dois de outro
Estado
- três deputados estaduais de seu Estado e dois de outro Estado
- 2 senadores do seu Estado e 1 de outro Estado
*/ 
const Carlinhos= new Precidente("carlinhso da silva","monster Hai", "federal","executivo", "sua mainha tu tu ta uat","brasilia",1,["projeto sua mae", "a"],4);
const Rakreche= new Governador("Raquel Lilirara", "67", "estadual","executivo","Pernabuco lixo", "... recife", 5, ['muitos', 'muitos'],76,"PE")
const  BillyKid = new Governador("Billy kid master brastemp", "jusiçaON","estadual","executivo","NOva Eridu","Sao lourenlço da mata 21326576",13,["matar corruptos", "destruir sao paulo"], 13 , "NA")


//...
const deputadoFederalPE1 = new FeDedePu("Deputado Federal PE 1", "Partido PE 1", "federal", "legislativo", "Câmara dos Deputados", "Brasília", 10000, ["Projeto federal PE 1"], "Progressista", "PE");
const deputadoFederalPE2 = new FeDedePu("Deputado Federal PE 2", "Partido PE 2", "federal", "legislativo", "Câmara dos Deputados", "Brasília", 10000, ["Projeto federal PE 2"], "Ambientalista", "PE");
const deputadoFederalPE3 = new FeDedePu("Deputado Federal PE 3", "Partido PE 3", "federal", "legislativo", "Câmara dos Deputados", "Brasília", 10000, ["Projeto federal PE 3"], "Trabalhista", "PE");
const deputadoFederalOutroEstado1 = new FeDedePu("Deputado Federal de SP 1", "Partido SP 1", "federal", "legislativo", "Câmara dos Deputados", "Brasília", 10000, ["Projeto federal SP 1"], "Ruralista", "SP");
const deputadoFederalOutroEstado2 = new FeDedePu("Deputado Federal de SP 2", "Partido SP 2", "federal", "legislativo", "Câmara dos Deputados", "Brasília", 10000, ["Projeto federal SP 2"], "Governista", "SP");

const deputadoEstadualPE1 = new DEPUestaDU("Deputado Estadual PE 1", "Partido PE 1", "estadual", "legislativo", "Assembleia Legislativa de Pernambuco", "Recife", 9000, ["Projeto estadual PE 1"], ["Comissão de Justiça"], "PE");
const deputadoEstadualPE2 = new DEPUestaDU("Deputado Estadual PE 2", "Partido PE 2", "estadual", "legislativo", "Assembleia Legislativa de Pernambuco", "Recife", 9000, ["Projeto estadual PE 2"], ["Comissão de Saúde"], "PE");
const deputadoEstadualPE3 = new DEPUestaDU("Deputado Estadual PE 3", "Partido PE 3", "estadual", "legislativo", "Assembleia Legislativa de Pernambuco", "Recife", 9000, ["Projeto estadual PE 3"], ["Comissão de Educação"], "PE");
const deputadoEstadualOutroEstado1 = new DEPUestaDU("Deputado Estadual SP 1", "Partido SP 1", "estadual", "legislativo", "Assembleia Legislativa de São Paulo", "São Paulo", 9000, ["Projeto estadual SP 1"], ["Comissão de Justiça"], "SP");
const deputadoEstadualOutroEstado2 = new DEPUestaDU("Deputado Estadual SP 2", "Partido SP 2", "estadual", "legislativo", "Assembleia Legislativa de São Paulo", "São Paulo", 9000, ["Projeto estadual SP 2"], ["Comissão de Saúde"], "SP");

const senadorPE1 = new Senadoro("Senador PE 1", "Partido PE 1", "federal", "legislativo", "Senado Federal", "Brasília", 12000, "Progressista", ["Projeto do Senado PE 1"]);
const senadorPE2 = new Senadoro("Senador PE 2", "Partido PE 2", "federal", "legislativo", "Senado Federal", "Brasília", 12000, "Trabalhista", ["Projeto do Senado PE 2"]);
const senadorOutroEstado = new Senadoro("Senador de SP", "Partido SP", "federal", "legislativo", "Senado Federal", "Brasília", 12000, "Ruralista", ["Projeto do Senado SP"]);

Carlinhos.Mandato();
Rakreche.Mandato();
BillyKid.Mandato();
// hmmmm fiquei com preguiça nesse aqui... foi mal Havanna mas é a vida
deputadoFederalPE1.Mandato();
deputadoFederalPE2.Mandato();
deputadoFederalPE3.Mandato();
deputadoFederalOutroEstado1.Mandato();
deputadoFederalOutroEstado2.Mandato();
deputadoEstadualPE1.Mandato();
deputadoEstadualPE2.Mandato();
deputadoEstadualPE3.Mandato();
deputadoEstadualOutroEstado1.Mandato();
deputadoEstadualOutroEstado2.Mandato();
senadorPE1.Mandato();
senadorPE2.Mandato();
senadorOutroEstado.Mandato();

/* no windows os comandos são:
node dirst/index.js-- rodar o projeto
npx tsc--> sei la atualiza os caba do dirts
*/
Carlinhos.NomearMinistro(35)
Carlinhos.AniquilarMinistro(3)

