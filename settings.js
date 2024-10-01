const fs = require('fs')

global.creator = 'YuuraHz'
global.MONGO_DB_URI = ""
global.ACTIVATION_TOKEN_SECRET = "-@Pqnap+@(/1jAPPnew/@10"
global.your_email = ""
global.email_password = ""
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
