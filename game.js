//Random word is selected and exported
let wordsToGuess = ["Brachiosaurus", "Diplodocus", "Iguanodon", "Mamenchisaurus", "Ornithomimus", "Pachycephalosaurus", "Velociraptor", "Yangchuanosaurus", "Gigantosaurus", "Carnotaurus", "Tyrannosaurus"];
let randoIndex = Math.floor(Math.random() * wordsToGuess.length);
let randoWord = wordsToGuess[randoIndex];
exports.randoWord = randoWord;