// JavaScript to toggle tabs
function showTab(tabId) {
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedSection = document.getElementById(tabId);
    selectedSection.classList.add('active');

    const activeButton = document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`);
    activeButton.classList.add('active');
}

window.onload = function () {
    showTab('introduction');
};
//fullscreen option
const button = document.getElementById('fullscreen-btn');
    
    button.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });