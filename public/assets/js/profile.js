id = document.location.search.replace(/^.*?\=/,'');
console.log(id)

$(document).on('click', '#make-new-id-button', function (event) {
    window.location = `/sampleBadge?id=${id}`;
  });
  
