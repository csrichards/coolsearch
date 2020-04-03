// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        const site = tab.url.split('/');
        let domain = site[2];
        if (domain === 'old.reddit.com') {
            chrome.tabs.sendMessage(tab.id, {"message": "loaded_reddit"});
        }
    }
});