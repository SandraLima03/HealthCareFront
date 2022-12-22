import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoInput } from './input/medico.input';
import { MedicoModel } from './model/medico.model';

@Injectable({
  providedIn: 'root'
})
export class CadMedicoService {

  baseUrl: string = "https://localhost:7251/api/Profissional/api";


  constructor(private http: HttpClient) {

  }

  consultar(): Observable<MedicoModel[]>{
    return this.http
      .get<MedicoModel[]>(`${this.baseUrl}/Consultar`);
  }

  consultarPorId(medicoId: number): Observable<MedicoModel[]>{
    return this.http
      .get<MedicoModel[]>(`${this.baseUrl}/Consultar/${medicoId}`);
  }

  cadastra(requestBody: MedicoInput): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/Cadastrar`, requestBody);
  }

  atualizar(requestBody: MedicoInput): Observable<any> {
    return this.http
      .patch(`${this.baseUrl}/Atualizar`, requestBody);
  }

  excluir(professionalId: number): Observable<any> {
    let params = new HttpParams();
    params.append("id", professionalId);
    return this.http
      .delete(`${this.baseUrl}/Excluir`,{params});
  }


}
