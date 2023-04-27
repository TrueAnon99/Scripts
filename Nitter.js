// ==UserScript==
// @name         Redirect Twitter To Nitter
// @namespace    TA99
// @version      1.0.2
// @description  Convert twitter URLs to Nitter URLs
// @author       TrueAnon99
// @include      *
// @exclude      https://twitter.com/*
// @run-at       document-end
// ==/UserScript==

const NITTER_URL = 'nitter.1d4.us'
const TWITTER_URL = 'twitter.com'

function redirectToNitter () {
    document.querySelectorAll('a[href*="'+ TWITTER_URL +'"]').forEach((element) => {
        element.href = element.href.replace(TWITTER_URL, NITTER_URL)
        element.textContent = element.textContent.replace(TWITTER_URL, NITTER_URL)
    })
}

(new MutationObserver((mutations) => {
    let runCheck = false
    for (let mutation of mutations) {
        if (mutation.addedNodes.length || mutation.attributeName === 'href') {
            runCheck = true
            break
        }
    }
    if (runCheck) {
        redirectToNitter()
    }
})).observe(document.querySelector('body'), {attributeFilter: ['href'], childList: true, subtree: true})

redirectToNitter()
