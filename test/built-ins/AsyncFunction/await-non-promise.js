// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*---
author: Maya Lekova <mslekova@chromium.org>
esid: await
description: >
  This test demonstrates that "then" on a non-native promise
  will still get called.
flags: [async]
features: [async-functions]
---*/

const value = 1;

const actual = [];
const expected = [
  'Await: 1',
  'Promise: 1',
  'Promise: 2',
];

function pushAwaitSync(value) {
  actual.push('Await: ' + value);
}

async function trigger() {
  await pushAwaitSync(value);
}

function checkAssertions() {
  assert.compareArray(actual, expected,
    'Async/await and promises should be interleaved');
}

trigger().then(checkAssertions).then($DONE, $DONE);

new Promise(function (resolve) {
  actual.push('Promise: 1');
  resolve();
}).then(function () {
  actual.push('Promise: 2');
});
