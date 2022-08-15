function listFilmes() {
    let array = ["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"];
    let arrayEntries = array.entries();
  
    for (const element of arrayEntries) {
      console.log(element);
    }
  
  }
  
  listFilmes()