/*:
	@module-documentation:
		Randomize mean time is the average distance of a specific time to
			a random time.

		Random time is any time from a random time factor between past and future.
	@end-module-documentation

	@module-configuration:
		{
			"fileName": "generate-random-mean-time.js",
			"moduleName": "generateRandomMeanTime",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration
*/
generateRandomMeanTime = function generateRandomMeanTime( ){
	var time = Date.now( );
	var randomTimePast = Math.ceil( Math.abs( time - ( Math.random( ) * time ) ) );
	var randomTimeFuture = Math.ceil( Math.abs( time + ( Math.random( ) * time ) ) );
	var averageRandomTime = Math.ceil( ( randomTimePast + randomTimeFuture ) / 2 )
	var randomMeanTime = Math.ceil( ( time + averageRandomTime ) / 2 );
	return randomMeanTime;	
};