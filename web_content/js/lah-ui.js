(function() {
    let notifyBannerTimeoutToken = null;
    let banner = document.querySelector("#notify-banner");
    let bannerText = document.querySelector("#notify-banner-text");
    let txtAccentColor = document.querySelector("#txt-accent-color");

    togglePlayerList = function() {
        document.querySelector("#player-list").toggleClass("closed");
    }

    toggleMobileNav = function() {
        document.querySelector("#navbar").toggleClass("mobile-hidden");
    }

    toggleFullscreen = function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    showBannerMessage = function(msg, seconds) {
        bannerText.innerHTML = msg;
        banner.setClass("hidden", false);
        if (notifyBannerTimeoutToken !== null) {
            clearTimeout(notifyBannerTimeoutToken);
        }
        notifyBannerTimeoutToken = setTimeout(() => {
            banner.setClass("hidden", true);
            notifyBannerTimeoutToken = null;
        }, (seconds || 2.5) * 1000);
    }

    if (window.mobileCheck()) {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let bodyElement = document.querySelector("body");
        let htmlElement = document.querySelector("html");
        bodyElement.style.width = w + "px";
        bodyElement.style.height = h + "px";
        htmlElement.style.width = w + "px";
        htmlElement.style.height = h + "px";   
    }

    document.querySelector("#hand-cards-scroll-area").trackScroll();
    document.querySelector("#play-cards-scroll-area").trackScroll();
    document.querySelector("#btn-fullscreen").addEventListener("mousedown", () => {
        toggleFullscreen();
    });

    let updateAccentColorFieldStyle = function() {
        let colorText = txtAccentColor.value;
        if (!colorText.trim()) {
            txtAccentColor.style["background-color"] = null;
            txtAccentColor.style["color"] = null;
        } else {
            let color = Incantate.getColor(colorText);
            let foreColor = color.isBright() ? "#000" : "#fff";
            txtAccentColor.style["background-color"] = color.toString();
            txtAccentColor.style["color"] = foreColor;
        }
    };

    txtAccentColor.addEventListener("input", () => {
        updateAccentColorFieldStyle();
    });

    saveAccentColor = function() {
        let colorText = txtAccentColor.value;
        if (!colorText.trim()) {
            setAccentColor(null);
        } else {
            let color = Incantate.getColor(colorText);
            setAccentColor(color);
        }
        Cookies.set("accent_bg", colorText.trim(), { expires: 365 });
    }

    setAccentColor = function(color) {
        document.body.style.setProperty("--accent-bg", color && color.toString());
        document.body.style.setProperty("--accent-fg", color && (color.isBright() ? "#000" : "#fff") || "#000");
        document.body.style.setProperty("--accent-ol", color && (color.isBright() ? "transparent" : "#fff") || "transparent");
    }

    loadAccentColor = function() {
        let colorText = Cookies.get("accent_bg");
        let color = colorText && Incantate.getColor(colorText);
        txtAccentColor.value = colorText;
        updateAccentColorFieldStyle();
        setAccentColor(color);
    }

    setLpIgnore();
})();