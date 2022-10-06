// worker.js
// onconnect = function (e) {
// 	var port = e.ports[0];
// 	port.onmessage = function (e) {
// 		var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
// 		port.postMessage(workerResult);
// 	}
// }

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}

myWorker.onmessage = function(e) {
  result.textContent = e.data;
  console.log('Message received from worker');
}