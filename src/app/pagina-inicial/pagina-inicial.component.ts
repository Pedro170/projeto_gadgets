import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  toggle() {
    const toggle = document.querySelector('#toggle')
    const nav = document.querySelector('.container-header')
    toggle?.classList.toggle('ativo')
    nav?.classList.toggle('ativo')
  }

}
