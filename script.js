document.getElementById("motivationBtn").addEventListener("click", function() {
    const messages = [
        "You are stronger than you think! 💪",
        "Believe in yourself, you are amazing! ✨",
        "One step at a time, you got this! 🌸",
        "Your hard work will pay off, keep going! 🚀",
        "Remember to rest, even pandas need naps! 🐼💤"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("motivationText").innerText = randomMessage;
});
