function harmlessRansomNote(noteText, margazineText) {
  const noteArray = noteText.toLowerCase().split(" ");
  const margazineArray = margazineText.toLowerCase().split(" ");
  let margazineObj = {};

  margazineArray.forEach(function(word) {
    if (!margazineObj[word]) margazineObj[word] = 0;
    margazineObj[word]++;
  });

  let noteIsPossible = true;
  noteArray.forEach(function(word) {
    if (margazineObj[word]) {
      margazineObj[word]--;

      if (margazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });

  return noteIsPossible;
}

harmlessRansomNote(
  "our world is built world",
  "Our world is built on our terms. Little imaginations make life amazing."
);
