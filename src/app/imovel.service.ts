import { Injectable } from '@angular/core';
import { Imovel } from './imovel';


@Injectable({
  providedIn: 'root'
})


export class ImovelService {

 private imoveisDB = [
  {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Casa 01",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais": [
          {
              "chave":"Quartos disponíveis",
              "valor": 6
          },
          {
              "chave":"Piscina",
              "valor":"sim"
          }
      ],
      "aluguel":[]
  },

  {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Kitnet econômico",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"apartamento",
      "valor": 200000.000,
      "adicionais": [
          {
              "chave":"Banheiro",
              "valor": 1
          }  
      ],
      "aluguel":[]

  },

  {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casarão na floresta",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais": [
          {
              "chave":"Quartos disponíveis",
              "valor": 10
          },
          {
              "chave":"Piscina",
              "valor":"sim"
          },
          {
              "chave":"Quintal",
              "valor":"Muito grande"
          },
          {
              "chave":"Árvores",
              "valor":"Frutiferas"
          }

      ],
      "aluguel":[]
  },

  {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa 04.1",
      "cidade": "São Pedro",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },

  {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },


  {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },

  {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Saltinho",
      "estado": "Rio de Janeiro",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },

  {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },
  {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"apartamento",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[]
  },

  {
      "id": 10,
      "url_foto": "10.jpg",
      "nome": "Casa 10",
      "cidade": "Saltinho",
      "estado": "São Paulo",
      "favorito": false,
      "tipo":"casa",
      "valor": 200000.000,
      "adicionais":[],
      "aluguel":[
        {
            "chave": "Alguel mensal",
            "valor":4500.00
        },
        {
            "chave": "Alguel anual",
            "valor":4500.00
        },
        {
            "chave": "Alguel por 2 anos",
            "valor":5000.00
            
        }

        

      ]
  },

] 



 buscarTodosImoveis(): Imovel[]{
  return this.imoveisDB
}

 buscaImovelPeloId(id:number) : Imovel|undefined{
  let imovel;

  for(let i=0;i< this.imoveisDB.length;i++){
      imovel = this.imoveisDB[i];
      if(imovel.id == id){
          break
      }
  }
  return imovel
}

}


