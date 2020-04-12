(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  console.log('client is running');


  const getSwimMove = (successCB, errorCB = null) => {
    $.ajax({
      method: 'GET',
      url: serverUrl,
      success: successCB,
      error: errorCB || function() {
        console.log('request unsuccessful');
      }
    })
  };

  // getSwimMove((data) => {
  //   console.log(data);
  //   SwimTeam.move(data);
  // });

  // setInterval(() => getSwimMove((data) => {
  //   console.log(data);
  //   SwimTeam.move(data);
  // }), 500);


 const getBackgroundImage = (successCB = null, errorCB = null) => {
    $.ajax({
      method: 'GET',
      url: serverUrl + '/background.jpg',
      contentType: 'image.jpg',
      success: successCB,
      error: errorCB || function() {
        console.log('request unsuccessful');
      }
    });
  };


  // getBackgroundImage((data) => {
  //   debugger;
  //   console.log(data);
  //   $('.pool').css('background-image', `url(http://127.0.0.1:3000/spec/water-lg.jpg)`);
  // });

  // background-image: url(data:png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAA

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();

