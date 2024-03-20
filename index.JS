const canvas = document.getElementById("errorCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const errorModals = [];

let bing = new Audio('https://archive.org/download/windows-ding/Heritage/Windows%20Error.mp3');

// Create 10 error modals
for (let i = 0; i < 10; i++) {
	const modal = createErrorModal();
	errorModals.push(modal);
	setTimeout(() => {
		//bing.play();
		modal.style.display = "block";
		animateErrorModal(modal);
	}, Math.random() * 5000);
}

function createErrorModal() {
	const modal = document.createElement("div");
	modal.classList.add("error-modal");
	modal.innerHTML = `
      <div class="error-title fa-bounce"><i class="fa-solid fa-triangle-exclamation fa-beat"></i> Error 404</div>
      <div class="error-message fa-fade">Page not found</div>
    `;
	document.body.appendChild(modal);
	return modal;
}

function animateErrorModal(modal) {
	const x = Math.random() * (canvas.width - 200);
	const y = Math.random() * (canvas.height - 100);
	modal.style.left = x + "px";
	modal.style.top = y + "px";
	setTimeout(() => {
		modal.style.display = "none";
		setTimeout(() => {
			//bing.play();
			modal.style.display = "block";
			animateErrorModal(modal);
		}, Math.random() * 5000);
	}, 5000);
}
