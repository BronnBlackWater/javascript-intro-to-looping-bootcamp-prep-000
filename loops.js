function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 0) {
      msg = "I am 1 strange loop."
    } else {
      msg = "I am ${i} strange loops."
    }
    array.push(msg);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(array) {
  n = array.length;
  do {
    console.log(n);
    n--;

  } while (array.length > 0 && maybeTrue())

}
