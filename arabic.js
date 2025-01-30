function showTab(event, tabId) {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  let clickedTab = document.getElementById(tabId);
  clickedTab.classList.add('active');
}

function flipCard(card) {
  card.classList.toggle('flipped');
}
