/*
 {
    Normal:"#AAAA99",
    Fogo:"#FF4422",
    Água:"#3399FF",
    Eletrico:"#FFCC33",
    Grama:"#77CC55",
    Gelo:"#66CCFF",
    Lutador:"#BB5544",
    Veneno:"#AA5599",
    Terra:"#DDBB55",
    Voador:"#8899FF",
    Psiquico:"#FF5599",
    Inseto: "#AABB22",
    Pedra:"#BBAA66",
    Fantasma:"#6666BB",
    Dragão:"#7766EE",
    Sombrio:"#775544",
    Metal:"#AAAABB",
    Fada:"#EE99EE",
}
 */

function typeColor(type) {
    switch (type) {
      case "Normal":
      return "#AAAA99";
      case "Fogo":
        return "#FF4422";
      case "Água":
        return "#3399FF";
      case "Elétrico":
        return "#FFCC33";
      case "Grama":
        return "#77CC55";
      case "Gelo":
        return "#66CCFF";
      case "Lutador":
         return "#BB5544";
      case "Veneno":
        return "#AA5599";
      case "Terra":
         return "#DDBB55";
      case "Voador":
         return "#8899FF";
      case "Psíquico":
        return "#FF5599";
      case "Inseto":
        return "#AABB22";
      case "Pedra": 
      return "#BBAA66";
      case "Fantasma":
        return "#6666BB";
      case "Dragão": 
        return "#7766EE";
      case "Sombrio":
        return "#775544";
      case "Aço":
        return "#AAAABB";
      case "Fada":
        return "#EE99EE";
      default:
        return "#FFF";
    }
  }

  function statColor(value) {
    if(value < 26) {
      return "#F34444"
    }else if(value > 25 && value < 56){
      return "#FF7F0F"
    }else if(value > 55 && value < 90){
      return "#FFFF57"
    }else if(value > 89 && value < 120){
      return "#A0E515"
    }else if(value > 119 && value < 150){
      return "#23CD5E"
    }else{
      return "#00c2b8"
    }  
}

  function genderColor(gender){
    switch(gender){
      case "feminino":
        return "#FF6BCE";
      case "masculino":
        return "#3273DC";
      default:
        return "#AAA";
    }
  }

export {statColor, typeColor, genderColor}