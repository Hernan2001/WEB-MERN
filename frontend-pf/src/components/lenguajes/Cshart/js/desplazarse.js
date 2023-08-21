var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-70px"; // Altura de la barra de menú
  }

  prevScrollPos = currentScrollPos;
};

//La mama de la mama de la mama. delamama delamama....
$('#myModal').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe",null);
  videoIframe.src = videoIframe.src;
});

$('#myModal2').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe2",null);
  videoIframe.src = videoIframe.src;
});

$('#myModal3').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe3",null);
  videoIframe.src = videoIframe.src;
});

$('#myModal4').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe4",null);
  videoIframe.src = videoIframe.src;
});

$('#myModal5').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe5",null);
  videoIframe.src = videoIframe.src;
});
$('#myModal5').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe5_1",null);
  videoIframe.src = videoIframe.src;
});

$('#myModal6').on('hidden.bs.modal', function (event) {
  var videoIframe = document.getElementById("videoIframe6",null);
  videoIframe.src = videoIframe.src;
});

/* Modo Supervivencia - Con*/
function toggleDarkMode() {
  const body = document.querySelector('body');
  const guideContainers = document.querySelectorAll('.guide-container');
  const floatingButton = document.querySelector('.floating-button');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    guideContainers.forEach(container => {
      container.classList.add('dark-mode');
    });
    floatingButton.classList.add('dark-mode');
  } else {
    guideContainers.forEach(container => {
      container.classList.remove('dark-mode');
    });
    floatingButton.classList.remove('dark-mode');
  }
}

/*MOdo Pobreza - pag*/
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});