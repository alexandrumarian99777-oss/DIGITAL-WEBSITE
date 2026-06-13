(function () {
    const banner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const rejectBtn = document.getElementById("rejectCookies");
    const manageBtn = document.getElementById("manageCookies");
    const settingsBox = document.getElementById("cookieSettings");
    const saveBtn = document.getElementById("saveCookieSettings");
    const analyticsCheckbox = document.getElementById("analyticsCookies");
    const marketingCheckbox = document.getElementById("marketingCookies");
    const openCookieSettingsBtn = document.getElementById("openCookieSettingsBtn");

    function getSavedConsent() {
        const savedConsent = localStorage.getItem("cookieConsent");

        if (!savedConsent) {
            return null;
        }

        try {
            return JSON.parse(savedConsent);
        } catch (error) {
            localStorage.removeItem("cookieConsent");
            return null;
        }
    }

    function saveConsent(consent) {
        localStorage.setItem("cookieConsent", JSON.stringify({
            necessary: true,
            analytics: consent.analytics,
            marketing: consent.marketing,
            date: new Date().toISOString()
        }));
    }

    function syncCheckboxes(consent) {
        if (!consent) return;

        if (analyticsCheckbox) {
            analyticsCheckbox.checked = Boolean(consent.analytics);
        }

        if (marketingCheckbox) {
            marketingCheckbox.checked = Boolean(consent.marketing);
        }
    }

    function showBanner() {
        if (banner) {
            banner.classList.remove("hidden");
        }
    }

    function hideBanner() {
        if (banner) {
            banner.classList.add("hidden");
        }

        if (settingsBox) {
            settingsBox.classList.remove("active");
        }
    }

    function openSettings() {
        showBanner();

        if (settingsBox) {
            settingsBox.classList.add("active");
        }

        const savedConsent = getSavedConsent();

        if (savedConsent) {
            syncCheckboxes(savedConsent);
        }
    }

    function loadAnalyticsCookies() {
        console.log("Analytics cookies accepted");
    }

    function loadMarketingCookies() {
        console.log("Marketing cookies accepted");
    }

    function applyConsent(consent) {
        if (!consent) return;

        if (consent.analytics) {
            loadAnalyticsCookies();
        }

        if (consent.marketing) {
            loadMarketingCookies();
        }
    }

    if (openCookieSettingsBtn) {
        openCookieSettingsBtn.addEventListener("click", function () {
            localStorage.removeItem("cookieConsent");
            openSettings();
        });
    }

    if (!banner) {
        console.log("Cookie banner not found on this page.");
        return;
    }

    const savedConsent = getSavedConsent();

    if (savedConsent) {
        hideBanner();
        syncCheckboxes(savedConsent);
        applyConsent(savedConsent);
    } else {
        showBanner();
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", function () {
            const consent = {
                analytics: true,
                marketing: true
            };

            saveConsent(consent);
            syncCheckboxes(consent);
            applyConsent(consent);
            hideBanner();
        });
    }

    if (rejectBtn) {
        rejectBtn.addEventListener("click", function () {
            const consent = {
                analytics: false,
                marketing: false
            };

            saveConsent(consent);
            syncCheckboxes(consent);
            hideBanner();
        });
    }

    if (manageBtn) {
        manageBtn.addEventListener("click", function () {
            if (settingsBox) {
                settingsBox.classList.toggle("active");
            }

            const savedConsent = getSavedConsent();

            if (savedConsent) {
                syncCheckboxes(savedConsent);
            }
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener("click", function () {
            const consent = {
                analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
                marketing: marketingCheckbox ? marketingCheckbox.checked : false
            };

            saveConsent(consent);
            applyConsent(consent);
            hideBanner();
        });
    }
})();