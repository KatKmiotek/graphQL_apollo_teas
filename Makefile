install:
	cd functions/teas && npm i && netlify-lambda build functions
	# cd functions/process-url && npm i