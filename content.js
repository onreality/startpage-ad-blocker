// Function to hide all known ad containers and iframes
function hideAds() {
  // Selectors for containers and iframes
  const selectors = [
    "#adBlock",
    "#gcsa-top",
    "#gcsa-bottom",
    'div[data-ad-container="1"]',
    'iframe[id^="master-"]',
    'iframe[id^="slave-"]',
    'iframe[src*="/afs/ads/"]',
  ];

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = "none";
    });
  });
}

// Run immediately
hideAds();

// Set up a MutationObserver to catch dynamically added ads
const observer = new MutationObserver(() => {
  hideAds();
});

// Observe the whole document for changes
observer.observe(document.documentElement, {
  childList: true,
  subtree: true,
});

// Extra safety: also observe the body if it appears later
if (document.body) {
  const bodyObserver = new MutationObserver(() => hideAds());
  bodyObserver.observe(document.body, { childList: true, subtree: true });
}
