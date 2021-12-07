import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  down() {
    alert('O download da pasta zip será feito!')
    this.router.navigate(["/paginaInicio"]);
  }
}
