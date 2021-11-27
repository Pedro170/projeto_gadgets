import { Usuario } from './../model/CadastroUsuario';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  cadastrar() {
    alert('Usuário cadastro com sucesso!')
    this.router.navigate(["/dowload"]);
    /* this.authService.cadastro(this.usuario).subscribe((resp) => {
      this.usuario = resp;
      alert('Usuário cadastrado com sucesso!')
    }) */
  }
}
