import { BenefiarioInpt } from './input/beneficiario.input';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BeneficiarioModel } from './model/beneficiario.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CadBeneficiarioService {

  baseUrl: string = "https://localhost:7251/api/Beneficiario/api";


  constructor(private http: HttpClient) {

  }

  consultar(): Observable<BeneficiarioModel[]>{
    return this.http
      .get<BeneficiarioModel[]>(`${this.baseUrl}/Consultar`);
  }

  consultarPorId(beneficiarioId: number): Observable<BeneficiarioModel[]>{
    return this.http
      .get<BeneficiarioModel[]>(`${this.baseUrl}/Consultar/${beneficiarioId}`);
  }

  cadastra(requestBody: BenefiarioInpt): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/Cadastrar`, requestBody);
  }

  atualizar(requestBody: BenefiarioInpt): Observable<any> {
    return this.http
      .patch(`${this.baseUrl}/Atualizar`, requestBody);
  }

  excluir(beneficiarioId: number): Observable<any> {
    let params = new HttpParams();
    params.append("id", beneficiarioId);
    return this.http
      .delete(`${this.baseUrl}/Excluir`,{params});
  }


}
