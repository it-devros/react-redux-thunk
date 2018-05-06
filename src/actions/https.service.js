
export const GET = (url) => {
	return fetch(url).then(function(res){
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(err){
		throw new Error("some error detected");
	});
}
 
 
export const POST = (url, obj) => {
	let data = {};
 	data = { method: 'post', body: JSON.stringify(obj) };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(error) {
		throw error;
	});
}
 
export const PUT = (url, obj) => {
	let data = {};
	data = { method: 'PUT', body: JSON.stringify(obj) };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(error) {
		throw error;
	});
}
 
 
export const DELETE = (url, obj) => {
	let data = {};
	data = { method: 'DELETE', body: JSON.stringify(obj) };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res;
	}).catch(function(error) {
		console.log(error)
		throw new Error("some error detected");
	});
 
}


export const PATCH = (url, obj) => {
	let data = {};
	data = { method: 'PATCH', body: JSON.stringify(obj) };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(error) {
		throw new Error("some error detected");
	});
}