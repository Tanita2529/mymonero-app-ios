// Copyright (c) 2014-2017, MyMonero.com
// 
// All rights reserved.
// 
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
// 
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
// 
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
// 
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
const mymonero_core_js = {}
mymonero_core_js.monero_utils = require('./local_modules/monero_utils/monero_cryptonote_utils_instance')
mymonero_core_js.monero_wallet_utils = require('./local_modules/monero_utils/monero_wallet_utils')
mymonero_core_js.monero_wallet_locale = require('./local_modules/monero_utils/monero_wallet_locale')
mymonero_core_js.monero_txParsing_utils = require('./local_modules/monero_utils/monero_txParsing_utils')
mymonero_core_js.monero_keyImage_cache_utils = require('./local_modules/monero_utils/monero_keyImage_cache_utils')
mymonero_core_js.monero_paymentID_utils = require('./local_modules/monero_utils/monero_paymentID_utils')
mymonero_core_js.monero_sendingFunds_utils = require('./local_modules/monero_utils/monero_sendingFunds_utils')
mymonero_core_js.monero_requestURI_utils = require('./local_modules/monero_utils/monero_requestURI_utils')
mymonero_core_js.JSBigInt = require('./local_modules/cryptonote_utils/biginteger').BigInteger // so that it is available to the web context for constructing arguments to the above modules
//
module.exports = mymonero_core_js