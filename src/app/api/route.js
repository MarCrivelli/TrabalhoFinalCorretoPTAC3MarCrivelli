
import { NextResponse } from "next/server";

export const listaDeJogos = [
    {
        id: 1,
        nome: "Roblox",
        imagem: "https://i.pinimg.com/564x/f7/51/36/f75136ad7bd1de7b95a2f45f7b276a1b.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/985231163464614/",
        fundador: ["David Baszucki", "Erik Cassel"],
        anoFundacao: 2004,
        empresaFundadora: "Roblox Corporation"
    },
    {
        id: 2,
        nome: "League of Legends",
        imagem: "https://i.pinimg.com/564x/81/5d/79/815d797151cbfa47f75127801c938125.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/663858801301252151/",
        fundador: ["Brandon Ryze Beck", "Marc Tryndamere Merrill"],
        anoFundacao: 2009,
        empresaFundadora: "Riot Games"
    },
    {
        id: 3,
        nome: "Fortnite",
        imagem: "https://i.pinimg.com/564x/c2/7e/2a/c27e2ae4e6c2ddb28456db85f5fa7c4d.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/838865868076389046/",
        fundador: "Tim Sweeney",
        anoFundacao: 1991,
        empresaFundadora: "Epic Games"
    },
    {
        id: 4,
        nome: "Wild Rift",
        imagem: "https://i.pinimg.com/564x/96/2e/c8/962ec8ee385903845294f74b4fbd6b94.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/3659243436452135/",
        fundador: ["Brandon Ryze Beck", "Marc Tryndamere Merrill"],
        anoFundacao: 2020,
        empresaFundadora: "Riot Games"
    },
    {
        id: 5,
        nome: "Braw Stars",
        imagem: "https://i.pinimg.com/736x/14/09/05/140905aff29824df184e65ede5fc2062.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/779545016806248051/",
        fundador: "Ilkka Paananen",
        anoFundacao: 2020,
        empresaFundadora: "Supercell"
    },
    {
        id: 6,
        nome: "Candy Crush Saga",
        imagem: "https://i.pinimg.com/564x/ae/93/2c/ae932c23da1f4690eb2b58aed7d3082a.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/627900373069990319/",
        fundador: "Sebastian Knutsson",
        anoFundacao: 2012,
        empresaFundadora: "King"
    },
    {
        id: 7,
        nome: "Subway Surfers",
        imagem: "https://i.pinimg.com/564x/60/75/39/607539eec69f797f89661ecf5fab9e10.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/4996249579150410/",
        fundador: "Jacob Møller",
        anoFundacao: 2012,
        empresaFundadora: "Kiloo Games"
    },
    {
        id: 8,
        nome: "PUBG Mobile",
        imagem: "https://i.pinimg.com/564x/bc/93/5f/bc935f51ecc3c5338e7a5c6e3819c3f2.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/19914423345705835/",
        fundador: "Brendan Greene",
        anoFundacao: 2017,
        empresaFundadora: "Battle Royale"
    },
    {
        id: 9,
        nome: "Plants vs. Zombies 2",
        imagem: "https://i.pinimg.com/564x/0d/ae/85/0dae85b1d36841cd9671f5392135d130.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/6262886975963969/",
        fundador: ["Jeremy Vanhoozer", "David Paul"],
        anoFundacao: 2013,
        empresaFundadora: "PopCap Games"
    },
    {
        id: 10,
        nome: "Five Nights at Freddy's 1",
        imagem: "https://i.pinimg.com/564x/35/91/44/359144da195fbd7d8e8f8fdcadbc102b.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/13018286418375949/",
        fundador: "Scott Braden Cawthon",
        anoFundacao: 2014,
        empresaFundadora: "*Produtor(a) independente"
    },
    {
        id: 11,
        nome: "Undertale",
        imagem: "https://i.pinimg.com/564x/9e/6d/bc/9e6dbc1dc4305312d5a58f1d6d3f2c72.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/231091024623519106/",
        fundador: "Toby Fox",
        anoFundacao: 2015,
        empresaFundadora: "*Produtor(a) independente"
    },
    {
        id: 12,
        nome: "Deltarune",
        imagem: "https://i.pinimg.com/564x/23/f1/56/23f156ad8ed0792d206fed1ab31ce30e.jpg",
        enderecoImagem: "https://br.pinterest.com/pin/673006738043903931/",
        fundador: "Toby Fox",
        anoFundacao: 2018,
        empresaFundadora: "*Produtor(a) independente"
    },
];

export async function GET(){
    return NextResponse.json(listaDeJogos)
}

