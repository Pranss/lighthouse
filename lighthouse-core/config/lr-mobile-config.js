/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/** @type {LH.Config.Json} */
const config = {
  extends: 'lighthouse:default',
  settings: {
    maxWaitForLoad: 35 * 1000,
    // Skip the h2 audit so it doesn't lie to us. See #6539
    skipAudits: ['uses-http2'],
  },
};

module.exports = config;
