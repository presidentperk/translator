var items = [
    ["Soy de la Estados Unidos", "jestem ze Stanów Zjednoczonych", "je viens des Etats-Unis"],
    ["¿Cuando es el baño?", "gdzie jest łazienka", "Où se trouvent les toilettes"],
    ["¿Como estás?", "jak się masz", "Comment vas-tu"],
    ["Me llamo ", "Nazywam się", "mon nom est"],
    ["Me gusta manzanas", "lubię jabłka", "J'aime les pommes"],
  ];
function translatePhrase(){
    var i = document.getElementById("phrase").value;
    var j = document.getElementById("language").value;
    document.getElementById("result").innerText = items[i][j];
}
