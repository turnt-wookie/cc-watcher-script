var firebase = require('firebase');

var args = process.argv.map(function(item) {
	return item;
});

if (args.length < 4) throw new Error('Wrong use mode, correct use: node index.js <room> <computer> <boolean-status(1,0)>');

var config = {
  apiKey: "AIzaSyCCteIm5vRzSwdku-rMMjZDfGqfr4DmOoY",
  authDomain: "cc-watcher.firebaseapp.com",
  databaseURL: "https://cc-watcher.firebaseio.com",
  projectId: "cc-watcher",
  storageBucket: "cc-watcher.appspot.com",
  messagingSenderId: "135634711640"
}

firebase.initializeApp(config);

var status = (args[4] == '1');

firebase.database().ref('watcher/rooms/' + args[2] +'/computers/' + args[3]).set({
	available: status
}).then(() => process.exit());