function myPizza(val) {
  var x = val.value;
  var slice_num = ['0', '1', '2', '3', '4', '5', '6', '7'];
  var num_slices = slice_num.length;
  var y = num_slices - x;

  for (var i = 0; i < x; i++) {
    var slice_ = 'slice_' + slice_num[i] + '_w';
    document.getElementById(slice_).style.opacity = '0';
    document.getElementById(slice_).style.transition = 'all 2.5s ease-in 0s';
    document.getElementById(i).setAttribute('disabled', 'disabled');
  }

  if (i == 0) {
    document.getElementById('eaten').innerHTML = 'Come on dude... go on, eat a slice!';
  } else if (i == 1) {
    document.getElementById('eaten').innerHTML = 'You have eaten ' + i + ' slice. (Eat some more...)';
    document.getElementById('how_many').innerHTML = 'More?';
  } else if (i >= 2 && i <= 3) {
    document.getElementById('eaten').innerHTML = 'You have eaten ' + i + ' slices. (Keep eating...)';
    document.getElementById('how_many').innerHTML = 'More?';
  } else if (i == 4) {
    document.getElementById('eaten').innerHTML = 'You have eaten ' + i + " slices. (You're halfway there...)";
    document.getElementById('how_many').innerHTML = 'More?';
  } else if (i >= 5 && i <= 6) {
    document.getElementById('eaten').innerHTML = 'You have eaten ' + i + ' slices. (Keep eating...)';
    document.getElementById('how_many').innerHTML = 'More?';
  } else if (i == 7) {
    document.getElementById('eaten').innerHTML = 'You have eaten ' + i + ' slices. (Only one more slice to go...)';
    document.getElementById('how_many').innerHTML = 'Go on, have the last one...';
  } else {
    document.getElementById('eaten').innerHTML =
      'Now order another one...<br/><input type="button" value="Start Over" onClick="document.location.reload(true)">';
    document.getElementById('how_many').innerHTML = 'Dude, you have eaten the whole pizza!';
  }
}
