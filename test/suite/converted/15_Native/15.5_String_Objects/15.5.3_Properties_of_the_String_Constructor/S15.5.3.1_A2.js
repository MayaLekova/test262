// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype property has the attribute DontEnum
 *
 * @section: 15.5.3.1, 15.5.4;
 * @path: 15_Native/15.5_String_Objects/15.5.3_Properties_of_the_String_Constructor/S15.5.3.1_A2.js;
 * @description: Checking if enumerating the String.prototype property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.hasOwnProperty('prototype'))) {
  $FAIL('#0: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.propertyIsEnumerable('prototype')) {
  $ERROR('#1: String.propertyIsEnumerable(\'prototype\') return false. Actual: '+String.propertyIsEnumerable('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (p in String){
  if (p==="prototype") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String){ if (p==="prototype") count++;}; count === 0. Actual: count ==='+count ); 
}
//
//////////////////////////////////////////////////////////////////////////////
