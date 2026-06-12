(function () {
    const banner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const rejectBtn = document.getElementById("rejectCookies");
    const manageBtn = document.getElementById("manageCookies");
    const settingsBox = document.getElementById("cookieSettings");
    const saveBtn = document.getElementById("saveCookieSettings");
    const analyticsCheckbox = document.getElementById("analyticsCookies");
    const marketingCheckbox = document.getElementById("marketingCookies");

    if (!banner) return;

    const savedConsent = localStorage.getItem("cookieConsent");

    if (savedConsent) {
        banner.classList.add("hidden");

        const consent = JSON.parse(savedConsent);

        if (consent.analytics) {
            loadAnalyticsCookies();
        }

        if (consent.marketing) {
            loadMarketingCookies();
        }

        return;
    }

    banner.classList.remove("hidden");

    acceptBtn.addEventListener("click", function () {
        const consent = {
            necessary: true,
            analytics: true,
            marketing: true,
            date: new Date().toISOString()
        };

        localStorage.setItem("cookieConsent", JSON.stringify(consent));
        banner.classList.add("hidden");

        loadAnalyticsCookies();
        loadMarketingCookies();
    });

    rejectBtn.addEventListener("click", function () {
        const consent = {
            necessary: true,
            analytics: false,
            marketing: false,
            date: new Date().toISOString()
        };

        localStorage.setItem("cookieConsent", JSON.stringify(consent));
        banner.classList.add("hidden");
    });

    manageBtn.addEventListener("click", function () {
        settingsBox.classList.toggle("active");
    });

    saveBtn.addEventListener("click", function () {
        const consent = {
            necessary: true,
            analytics: analyticsCheckbox.checked,
            marketing: marketingCheckbox.checked,
            date: new Date().toISOString()
        };

        localStorage.setItem("cookieConsent", JSON.stringify(consent));
        banner.classList.add("hidden");

        if (consent.analytics) {
            loadAnalyticsCookies();
        }

        if (consent.marketing) {
            loadMarketingCookies();
        }
    });

    function loadAnalyticsCookies() {
        console.log("Analytics cookies accepted");

        // Put Google Analytics / tracking code here later.
        // Do NOT load analytics scripts before consent.
    }

    function loadMarketingCookies() {
        console.log("Marketing cookies accepted");

        // Put Facebook Pixel / ad tracking code here later.
        // Do NOT load marketing scripts before consent.
    }
})();