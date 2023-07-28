import { Component } from '@angular/core';

@Component({
  selector: 'app-lavouras',
  templateUrl: './lavouras.component.html',
  styleUrls: ['./lavouras.component.css']
})
export class LavourasComponent {
  div_principal: any = document.getElementById(`div_principal`) as HTMLInputElement
  bodyUpload(element: any) {  
    var numLavoura = 0
    for (var i = 0; i < numLavoura; i++) {
      var  lavoura = ''
      var div_secundaria = document.createElement('div');
      div_secundaria.id = 'id_'+lavoura
      div_secundaria.id.includes(lavoura)
      div_secundaria.appendChild(div_secundaria)


      this.div_principal.appendChild(div_secundaria);
    }
  }
}
