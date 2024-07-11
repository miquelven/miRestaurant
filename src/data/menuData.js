import lasanha from "../assets/imgs/lasanha.png";
import salada from "../assets/imgs/salada.png";
import costela from "../assets/imgs/costela.png";
import risoto from "../assets/imgs/risoto.webp";
import bacalhau from "../assets/imgs/bacalhau.png";
import hamburger from "../assets/imgs/hamburger.png";

const menuData = [
  {
    id: 1,
    name: "Lasanha",
    text: "Deliciosa lasanha preparada com camadas de massa fresca, carne moída suculenta e molho de tomate caseiro.",
    pricing: "R$15,00",
    src: lasanha,
  },
  {
    id: 2,
    name: "Salada",
    text: "Salada fresca e crocante, composta por alface, tomate, pepino e cenoura, temperada com azeite de oliva e limão.",
    pricing: "R$10,00",
    src: salada,
  },
  {
    id: 3,
    name: "Filé de Costela",
    text: "Filé de costela grelhado no ponto certo, servido com um acompanhamento de purê de batatas.",
    pricing: "R$32,00",
    src: costela,
  },
  {
    id: 4,
    name: "Risoto de cogumelos",
    text: "Risoto cremoso feito com arroz arborio, cogumelos frescos e um toque de parmesão.",
    pricing: "R$10,00",
    src: risoto,
  },
  {
    id: 5,
    name: "Bacalhau assado com fritas",
    text: "Bacalhau assado no forno com batatas fritas, temperado com azeite de oliva e alho.",
    pricing: "R$22,00",
    src: bacalhau,
  },
  {
    id: 6,
    name: "Hamburguer Tradicional",
    text: "Hambúrguer suculento feito com carne bovina de alta qualidade, servido no pão brioche com alface, tomate e queijo.",
    pricing: "R$17,00",
    src: hamburger,
  },
];

export default menuData;
