const launchDate = new Date("2025-08-01T14:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const diff = launchDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        countdownEl.innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;
    } else {
        countdownEl.innerHTML = "🚀 Launch in progress or completed!";
    }
}, 1000);