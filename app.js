function totalWords(text) {
  var words = text.split(' ');
    console.log(words);
  return words.length;
}

function totalUnique(text) {
  var cleanList = text.toLowerCase().split(/[ ,!\.";:-]+/).filter(Boolean).sort();
  console.log(cleanList);
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

function avgWrdLngth(text) {
    var wordArray = text.split(/[ ,!\.";:-]+/).filter(Boolean);
    var wordCount = wordArray.length;
    var wordAvg = 0;
    for (var i = 0; i < wordCount; i++){
        wordAvg += wordArray[i].length;
    }
    var avgLen = (wordAvg / wordCount).toFixed(2);
    return avgLen;
}

function avgSenLngth(text) {
  var sentenceArr = text.split( /[\.!\?]+/ ).filter(Boolean);
  var sentenceNum = sentenceArr.length;
  var sentenceAvg = 0;
  console.log(sentenceArr);
  for (var i = 0; i < sentenceNum; i++){
      sentenceAvg += sentenceArr[i].trim().length;
  }
  var avgLength = (sentenceAvg / sentenceNum).toFixed(2);
  return avgLength;
}

function submitButton() {
  $('form').submit(function(event) {
    event.preventDefault();
    var textSubmit = $('textarea').val();
    var totalResults = totalWords(textSubmit);
    var uniqueResults = totalUnique(textSubmit);
    var avgWrdResults = avgWrdLngth(textSubmit);
    var avgSenResults = avgSenLngth(textSubmit);
    $('dl dd:nth-child(2)').text(totalResults);
    $('dl dd:nth-child(4)').text(uniqueResults);
    $('dl dd:nth-child(6)').text(avgWrdResults);
    $('dl dd:nth-child(8)').text(avgSenResults);
    $('.js-text-report').removeClass('hidden');
  });
}

$(submitButton);
