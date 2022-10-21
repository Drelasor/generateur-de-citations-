
// Création classe citation
class Citation{
// Assignation des attributs debut milieu fin begin middle end
    constructor(debut, milieu, fin, begin, middle, end){
        this.debut = debut; 
        this.milieu = milieu;
        this.fin = fin;
        this.begin = begin;
        this.middle = middle;
        this.end = end;
        
    }
    // Création d'une fonction generant aleatoirement un chiffre relatif à la taille de l'element affecté
    size(elt) {
      let longueur = Math.floor(Math.random() * elt.length);
      return longueur;
      

      // Methode random pour générer un chiffre aléatoirement entre 0 et 1
      // Methode floor pour arrondir le resultat 
      // Multiplication par la taille de l'element affecté 
    }
      // Creation de la fonction qui va générer la citation
      // La fonction a pour parametre la variable Type qui si = "french" generera la citation en français.
    createCitation(type){
      if (type == "french"){
        let content = this.debut[this.size(this.debut)] + " " + this.milieu[this.size(this.milieu)] + " " + this.fin[this.size(this.fin)];
        return content;
        
      }
      
      else{
        let content = this.begin[this.size(this.begin)] + " " + this.middle[this.size(this.middle)] + " " + this.end[this.size(this.end)];
        return content;
        }
        
      }
      
  }

