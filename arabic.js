function showTab(event, tabId) {
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  let clickedTab = document.getElementById(tabId);
  clickedTab.classList.add('active');
}

function flipCard(card) {
  card.classList.toggle('flipped');
}

document.querySelector('.hover-button').addEventListener('mouseover', function() {
    setTimeout(() => {
        showTab(event, 'starter');  // Go back to "starter" tab after 2 seconds
    }, 2000);  // 2 seconds delay
});
function checkPassword() {
  const correctPassword = "{Yaycoolproject123}";  // كلمة المرور المحددة مسبقًا
  const userPassword = document.getElementById("password").value;
  const message = document.getElementById("message");
  const hoverButton = document.querySelector(".hover-button"); // Hover button element

  if (userPassword === correctPassword) {
      message.textContent = "كلمة المرور صحيحة! تم السماح بالوصول.";
      message.style.color = "green";
      hoverButton.style.display = "block"; // Make the hover button visible
      message.innerHTML += "<br>لأمان إضافي، ضع بصمتك"; // Add the fingerprint message
  } else {
      message.textContent = "كلمة المرور غير صحيحة. تم رفض الوصول!";
      message.style.color = "red";
  }
}