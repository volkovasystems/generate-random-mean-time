/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "generate-random-mean-time",
			"fileName": "generate-random-mean-time.js",
			"moduleName": "generateRandomMeanTime",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/generate-random-mean-time.git",
			"testCase": "generate-random-mean-time-test.js",
			"isGlobal": true
		}
	@end-module-configuration

	@module-documentation:
		Randomize mean time is the average distance of a specific time to
			a random time.

		Random time is any time from a random time factor between past and future.

		This is the probable time between two specified random times.
	@end-module-documentation
*/
var generateRandomMeanTime = function generateRandomMeanTime( ){
	var time = Date.now( );
	
	var randomTimePast = Math.ceil( Math.abs( time - ( Math.random( ) * time ) ) );
	
	var randomTimeFuture = Math.ceil( Math.abs( time + ( Math.random( ) * time ) ) );
	
	var averageRandomTime = Math.ceil( ( randomTimePast + randomTimeFuture ) / 2 )
	
	var randomMeanTime = Math.ceil( ( time + averageRandomTime ) / 2 );
	
	return randomMeanTime;
};