import { BenefiarioInpt } from './../../service/input/beneficiario.input';
import { CadBeneficiarioService } from '../../service/cad-beneficiario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { BeneficiarioModel } from 'src/app/service/model/beneficiario.model';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-cad-beneficiario',
  templateUrl: './cad-beneficiario.component.html',
  styleUrls: ['./cad-beneficiario.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({ transform: "translateX(300px)" }), animate(200, keyframes([style({ transform: "translateX(300px)" }), style({ transform: "translateX(0)" })]))]),
  transition("*=>void", [style({ transform: "translateX(0px)" }), animate(100, keyframes([style({ transform: "translateX(0px)" }), style({ transform: "translateX(300px)" })]))])])]
})
export class CadBeneficiarioComponent implements OnInit{

  beneficiarios: BeneficiarioModel[] = [];
  beneficaioInput = {} as BenefiarioInpt;

  beneficiarioNome: string = '';

  @ViewChild("beneficiario") inputNomeBeneficiario!: ElementRef;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private cadBeneficiarioService: CadBeneficiarioService) {}

  ngOnInit() {
    this.listarBeneficiario();
  }

  listarBeneficiario(){
    this.cadBeneficiarioService.consultar()
      .subscribe(
        response => {
            this.beneficiarios = response;
        }

      )
  }

  cadastrar() {
    this.cadBeneficiarioService.cadastra(this.beneficaioInput)
      .subscribe(
        (response) => {
          alert("Cadastrado com sucesso")
        }
      )

  }

  excluir(beneficiarioId: number) {
    this.cadBeneficiarioService.excluir(beneficiarioId)
      .subscribe(
        (response) => {
          alert("Excluido com sucesso")
        }
      )
  }
}

  /*onSubmit($event: any): void {
    $event.preventDefault()
    console.log(
      [
        $event.target.inputName.value,
        $event.target.inputCPF.value,
        $event.target.inputTel.value,
        $event.target.inputEndereco.value,
        $event.target.inputCarteira.value
      ]
    );*/



  /*adicionarBeneficiario(valor: any) {

    let idBeneficiarioCad: number = 0;
    this.SalvarBeneficiarioNoBanco({
      "nome": valor
    })
      .subscribe((data) => {
        console.log(`Identificador do cadastro ${data}`);

        idBeneficiarioCad = data as number;

        /*if (idBeneficiarioCad > 0) {
          this.beneficiarioArray.push(valor);
          this.beneficiarioNome = '';
          this.inputNomeBeneficiario.nativeElement.focus();
          console.log(`Adicionando beneficiario ${valor}`);
          this.beneficiarioTipado.push({
            idBeneficiario: idBeneficiarioCad,
            nome: valor,
            cpf: valor,
            telefone: valor,
            endereco: valor,
            poupanca: valor,
            numeroCarteirinha: valor,
            ativo: valor,
            email: valor,
            senha: valor
          });
        }
     });
  }

    removerBeneficiario(valor: string) {
    for (let i = this.beneficiarioArray.length; i >= 0; i--) {
      if (valor == this.beneficiarioArray[i]) {
        this.RemoverBeneficiarioNoBanco(valor);
        this.beneficiarioArray.splice(i, 1);
      }
    }
  }

  submitFormularioBeneficiario(valorFormulario: any) {
    this.adicionarBeneficiario(valorFormulario.beneficiario);
  }

  constructor(private http: HttpClient, private router: Router) {
    this.ListaTodosBeneficio();
  }

  public ListaTodosBeneficio() {
    this.http.get("https://localhost:7251/api/Agendamento/api/Cadastrar")
      .pipe(map((response: any) => {
        return Object.values(response);
      }))
      .subscribe((data) => {
        for (let index = 0; index < data.length; index++) {
          // console.log(`Retorno ${JSON.stringify(data[index])}`);
          let conteudoJson: any = data[index];
          let conteudoTipado: IBeneficiarioDto = data[index] as IBeneficiarioDto;
          // this.adicionarTarefa(conteudoJson.nome);
          this.beneficiarioArray.push(conteudoJson.nome);
          this.beneficiarioTipado.push({
            idBeneficiario: conteudoTipado.idBeneficiario,
            nome: conteudoTipado.nome,
            cpf: conteudoTipado.cpf,
            telefone: conteudoTipado.telefone,
            endereco: conteudoTipado.endereco,
            poupanca: conteudoTipado.poupanca,
            numeroCarteirinha: conteudoTipado.numeroCarteirinha,
            ativo: conteudoTipado.ativo,
            email: conteudoTipado.email,
            senha: conteudoTipado.senha
          });

        }
        this.beneficiarioNome = '';
        this.inputNomeBeneficiario.nativeElement.focus();
      });
  }

  editarTarefa(id:number){
    this.router.navigate([`detalhe/${id}`]);
  }

  private SalvarTarefaNoBanco(valueToPost: any) {
    return this.http.post("https://localhost:7136/CriarTarefa", valueToPost, this.httpOptions);
  }

  public RemoverTarefaNoBanco(nome: string) {
    this.http.delete(`https://localhost:7136/ApagarTarefa/${nome}`, this.httpOptions)
      .subscribe((data) => {
        console.log(`Linhas executadas no método de remover do banco ${data}`);
      });
  }

  public RemoverTarefaNoBancoPorId(id: number) {
    this.http.delete(`https://localhost:7136/ApagarTarefaPorId/${id}`, this.httpOptions)
      .subscribe((data) => {
        console.log(`Linhas executadas no método de remover do banco ${data}`);
      });
    }*/

