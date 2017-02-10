function totalWords(text) {
  var words = text.split(' ');
  return words.length;
}

function totalUnique(text) {
  var cleanList = text.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  var uniqueWords = {};
  for (var i = 0; i < cleanList.length; i++) {
        if (uniqueWords.hasOwnProperty(cleanList[i])) {
            uniqueWords[cleanList[i]]++;
        } else {
            uniqueWords[cleanList[i]] = 1;
        }
  }
  var num = Object.keys(uniqueWords).length;
  return num;
}

function avgWrdLngth(text) {}

function avgSenLngth(text) {}

function submitButton() {
  $('form').submit(function(event) {
    event.preventDefault();
    var textSubmit = $('textarea').val();
    var totalResults = totalWords(textSubmit);
    var uniqueResults = totalUnique(textSubmit);
    $('dl dd:nth-child(2)').text(totalResults);
    $('dl dd:nth-child(4)').text(uniqueResults);
    $('.js-text-report').removeClass('hidden');
  });
}

$(submitButton);
