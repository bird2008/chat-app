const recivingUserPhoto = document.querySelector("#userPhoto");
const recivingUserName = document.querySelector("#userName");
const messageContentInput = document.querySelector("#messageContentInput");
const thumbsUpIcon = document.querySelector("#thumbsUpImage");
const sendArrowIcon = document.querySelector("#sendArrowImage");
const chatOutput = document.querySelector("#chatOutput");

let userName = "Jan Kowalski";
let userPhoto =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/300px-Icecat1-300x300.svg.png";

recivingUserPhoto.src = userPhoto;
recivingUserName.textContent = userName;

messageContentInput.addEventListener("input", () => {
    messageContentInput.style.width = messageContentInput.value.length + "ch"
	messageContentInput.value === ""
		? ((thumbsUpIcon.style.display = "block"),
		  (sendArrowIcon.style.display = "none"))
		: ((thumbsUpIcon.style.display = "none"),
		  (sendArrowIcon.style.display = "block"));
});

sendArrowIcon.addEventListener("click", () => {
	let message = document.createElement("div");
	message.textContent = messageContentInput.value;
	chatOutput.appendChild(message);
	messageContentInput.value = "";
	thumbsUpIcon.style.display = "block";
	sendArrowIcon.style.display = "none";
});

document.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		if (messageContentInput.value === "") {
            return
		}
		let message = document.createElement("div");
		message.textContent = messageContentInput.value;
		chatOutput.appendChild(message);
        chatOutput.scrollTop = chatOutput.scrollHeight
		messageContentInput.value = "";
		thumbsUpIcon.style.display = "block";
		sendArrowIcon.style.display = "none";
		event.preventDefault();
	}
});
