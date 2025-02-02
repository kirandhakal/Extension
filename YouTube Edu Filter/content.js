function filterYouTubeContent() {
    let allowedKeywords = [
        "tutorial", "education", "science", "math", "programming",
        "course", "learning", "lecture", "history", "engineering"
    ];
    
    let blockedKeywords = [
        "song", "music", "album", "lyrics", "official video",
        "podcast", "talk show", "radio", "interview",
        "sports", "football", "cricket", "match", "highlights", "analysis", "NBA", "FIFA" ,"mixes", "remix", "mashup", "Mix"
    ];

    document.querySelectorAll("#video-title").forEach(video => {
        let title = video.innerText.toLowerCase();
        
        let isEducational = allowedKeywords.some(keyword => title.includes(keyword));
        let isBlocked = blockedKeywords.some(keyword => title.includes(keyword));

        if (!isEducational || isBlocked) {
            let videoContainer = video.closest("ytd-rich-item-renderer, ytd-video-renderer");
            if (videoContainer) {
                videoContainer.style.display = "none";
            }
        }
    });
}

// Run the filter after page loads
setTimeout(filterYouTubeContent, 3000);

// Observe for dynamic changes (for infinite scroll)
const observer = new MutationObserver(filterYouTubeContent);
observer.observe(document.body, { childList: true, subtree: true });
 