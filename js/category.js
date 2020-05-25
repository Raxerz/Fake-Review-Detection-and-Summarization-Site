function init()
{

registerEvents();
}

function registerEvents()
{
	$(document).on('click', '.reviewer', function() {
    localStorage.setItem('fake',1);
	});
  $(document).on('click', '.review', function() {
    localStorage.setItem('fake',2);
	});
  $(document).on('click', 'cosine', function() {
    localStorage.setItem('fake',3);
  });
}
