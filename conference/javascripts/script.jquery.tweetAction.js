$('form').submit(function(){
	// Using our tweetAction plugin. For a complete list with supported
	// parameters, refer to http://dev.twitter.com/pages/intents#tweet-intent
	
	$('input.submit').tweetAction({
		text:		'Anthem of Diversity. Thank you @pdamayanti, welcome @amandaranindia.',
		url:		'http://symphonesia.com/conference/',
		via:		'symphonesia',
		related:	'symphonesia'
	},function(){
		
		// When the user closes the pop-up window:
		/*
		$('a.downloadButton')
				.addClass('active')
				.attr('href','http://demo.tutorialzine.com/2011/05/tweet-to-download-jquery/tweet_to_download.zip');
		*/
		return true;

	});
	
	$('input.submit').click();
	
	return true;
	
});
