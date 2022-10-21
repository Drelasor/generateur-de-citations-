//definition des attributs


  let debut = [
    "La grandeur de l'âme",
    "L'important dans toute légende",
    "La sagesse du temps passé",
    "La pluie diluvienne",
    "La session du jour"];
  
  let milieu = [
    "éxonère",
    "entreprend", 
    "dirige",
    "culmine", 
    "repose", 
    "met en exergue", 
    "engendre" ];
  
  let fin = [
    "la douceur du passé",
    "l'inexorable habitus du temps présent", 
    "la perpetuelle inertie metaphysique transactionnelle", 
    "la supplantation du Coprolithe",
    "l'intraçable equation collapsologique"];

  let begin = [
    "The greatness of the soul",
    "The important thing in any legend",
    "The wisdom of the past",
    "The torrential rain",
    "The session of the day"];

  let middle = [
    "exonerated",
    "undertake",
    "conduct",
    "culminates",
    "repose",
    "highlights",
    "generates"];

  let end =[
    "the sweetness of the past",
    "the inexorable habitus of the present time",
    "the perpetual metaphysical transactional inertia",
    "la supplantation du Coprolithe",
    "the intractable collapsological equation"];

    // Creation d'un evenement onclick sur l'element push
  document.getElementById('push').onclick = () => {
    let Type = document.getElementById('quote-type').value;
    // Selectionne la valeur du select et l'inclut dans la variable type 
    let nb = document.getElementById('quote-number').value;
    // Selectionne la valeur du select et l'inclut dans la variable nb
    let container = document.getElementById('container');
    // Selectionne le container et l'inclut dans la variable container
    let citation = new Citation(debut, milieu, fin, begin, middle, end);
    // Instanciation de la classe Citation, implementation des paramètres 
    // Vide le container après chaque clique

    // Creation d'une boucle qui génère une citation en fonction de la valeur de nb
    for( let i = 0; i < nb ; i++ ){
      let p = document.createElement("p");
      // Creation d'une balise <p>
      p.innerHTML = citation.createCitation(Type);
      // Integration de la fonction createCitation dans la balise <p>
      container.appendChild(p);
      // Implementation de la balise <p> dans le container
    }
      //creation d'un bouton confirmant le redemarrage ou la fin du programme 
    setTimeout(() => {
      if(confirm('Voulez vous générer de nouvelles citations ?')){
        container.innerHTML ="";
        // Suppression du contenu du container 
      }
      else{
        document.getElementById("push").style.display = "none";
        // Disparition du bouton "generer"
      }
    },1000);
        // 1 seconde avant l'apparition du message
  }

