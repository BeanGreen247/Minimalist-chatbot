$(document).ready(function(){

  var noteCount = 0;
  var noteCount1 = 0;
  var noteCount2 = 0;
  var activeNote = null;
  var activeNote1 = null;
  var activeNote2 = null;

  $('.color-box').click(function(){
    var color = $(this).css('background-color');
    $('notepad').css('background-color', color);
    $('#title-field').css('background-color', color);
    $('#body-field').css('background-color', color);
  })

  $('#btn-save').click(function(){
    var title = $('#title-field').val();
    var body = $('#body-field').val();
    if (title === '' && body === '') {
      alert ('Please add a title or body to your note.');
      return;
    }
    var created = new Date();
    var color = $('notepad').css('background-color');
    var id = noteCount + 1;
    if (activeNote) {
      $('#' + activeNote)[0].children[0].innerHTML = title;
      $('#' + activeNote)[0].children[1].innerHTML = created.toLocaleString("en-US");
      $('#' + activeNote)[0].children[2].innerHTML = body;
      $('#' + activeNote)[0].style.backgroundColor = color;
      activeNote = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    } else {
      var created = new Date();
      $('#listed').append('<div id="note' + id + '" style="background-color: ' + color + '"><div class="list-title">' + title + '</div> <div class="list-date">' + created.toLocaleString("en-US") + '</div> <div class="list-text">' + body + '</div> </div>');
      noteCount++;
    };
    $('#title-field').val('');
    $('#body-field').val('');
    $('notepad').css('background-color', 'white');
    $('#title-field').css('background-color', 'white');
    $('#body-field').css('background-color', 'white');
  });

  $('#btn-save1').click(function(){
    var title1 = $('#title-field').val();
    var body1 = $('#body-field').val();
    if (title1 === '' && body1 === '') {
      alert ('Please add a title or body to your note.');
      return
    }
    var created1 = new Date();
    var color = $('notepad').css('background-color');
    var id1 = noteCount1 + 1;
    if (activeNote1) {
      $('#' + activeNote1)[0].children[0].innerHTML = title1;
      $('#' + activeNote1)[0].children[1].innerHTML = created1.toLocaleString("en-US");
      $('#' + activeNote1)[0].children[2].innerHTML = body1;
      $('#' + activeNote1)[0].style.backgroundColor = color;
      activeNote1 = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    } else {
      var created1 = new Date();
      $('#listed1').append('<div id="note1' + id1 + '" style="background-color: ' + color + '"><div class="list-title1">' + title1 + '</div> <div class="list-date1">' + created1.toLocaleString("en-US") + '</div> <div class="list-text1">' + body1 + '</div> </div>');
      noteCount1++;
    };
    $('#title-field').val('');
    $('#body-field').val('');
    $('notepad').css('background-color', 'white');
    $('#title-field').css('background-color', 'white');
    $('#body-field').css('background-color', 'white');
  });

  $('#btn-save2').click(function(){
    var title2 = $('#title-field').val();
    var body2 = $('#body-field').val();
    if (title2 === '' && body2 === '') {
      alert ('Please add a title or body to your note.');
      return;
    }
    var created2 = new Date();
    var color = $('notepad').css('background-color');
    var id2 = noteCount2 + 1;
    if (activeNote2) {
      $('#' + activeNote2)[0].children[0].innerHTML = title2;
      $('#' + activeNote2)[0].children[1].innerHTML = created2.toLocaleString("en-US");
      $('#' + activeNote2)[0].children[2].innerHTML = body2;
      $('#' + activeNote2)[0].style.backgroundColor = color;
      activeNote2 = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    } else {
      var created2 = new Date();
      $('#listed2').append('<div id="note2' + id2 + '" style="background-color: ' + color + '"><div class="list-title2">' + title2 + '</div> <div class="list-date2">' + created2.toLocaleString("en-US") + '</div> <div class="list-text2">' + body2 + '</div> </div>');
      noteCount2++;
    };
    $('#title-field').val('');
    $('#body-field').val('');
    $('notepad').css('background-color', 'white');
    $('#title-field').css('background-color', 'white');
    $('#body-field').css('background-color', 'white');
  });

  $('#btn-delete').click(function(){
    if (activeNote) {
      $('#' + activeNote)[0].remove();
      activeNote = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    }
    if (activeNote1) {
      $('#' + activeNote1)[0].remove();
      activeNote1 = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    }
    if (activeNote2) {
      $('#' + activeNote2)[0].remove();
      activeNote2 = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    }
      $('#title-field').val('');
      $('#body-field').val('');
      $('notepad').css('background-color', 'white');
      $('#title-field').css('background-color', 'white');
      $('#body-field').css('background-color', 'white');
  });

  $('#btn-new').click(function(){
      $('#title-field').val('');
      $('#body-field').val('');
      $('notepad').css('background-color', 'white');
      $('#title-field').css('background-color', 'white');
      $('#body-field').css('background-color', 'white');
  });

  $('#listed').click(function(e){
    var id = e.target.parentElement.id;
    var color = e.target.parentElement.style.backgroundColor;
    activeNote = id;
    $('#edit-mode').removeClass('no-display').addClass('display');
    var titleSel = $('#' + id)[0].children[0].innerHTML;
    var bodySel = $('#' + id)[0].children[2].innerHTML;
    $('#title-field').val(titleSel);
    $('#body-field').val(bodySel);
    $('notepad').css('background-color', color);
    $('#title-field').css('background-color', color);
    $('#body-field').css('background-color', color);
  })

  $('#listed1').click(function(e1){
    var id1 = e1.target.parentElement.id;
    var color1 = e1.target.parentElement.style.backgroundColor;
    activeNote1 = id1;
    $('#edit-mode').removeClass('no-display').addClass('display');
    var titleSel1 = $('#' + id1)[0].children[0].innerHTML;
    var bodySel1 = $('#' + id1)[0].children[2].innerHTML;
    $('#title-field').val(titleSel1);
    $('#body-field').val(bodySel1);
    $('notepad').css('background-color', color1);
    $('#title-field').css('background-color', color1);
    $('#body-field').css('background-color', color1);
  })

  $('#listed2').click(function(e2){
    var id2 = e2.target.parentElement.id;
    var color2 = e2.target.parentElement.style.backgroundColor;
    activeNote2 = id2;
    $('#edit-mode').removeClass('no-display').addClass('display');
    var titleSel2 = $('#' + id2)[0].children[0].innerHTML;
    var bodySel2 = $('#' + id2)[0].children[2].innerHTML;
    $('#title-field').val(titleSel2);
    $('#body-field').val(bodySel2);
    $('notepad').css('background-color', color2);
    $('#title-field').css('background-color', color2);
    $('#body-field').css('background-color', color2);
  })

})
