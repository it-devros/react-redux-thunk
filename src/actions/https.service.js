
export const GET = (url) => {
	let headers = {
		"Content-Type" : 'application/x-www-form-urlencoded'
	}
	return fetch(url, {headers : headers}).then(function(res){
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(err){
		throw new Error("some error detected");
	});
}
 
 
export const POST = (url, obj) => {
	let headers = {
		"Content-Type" : 'application/x-www-form-urlencoded'
	}
	let params = '';
	for (let k in obj) {
		params += k + '=' + obj[k] + '&';
	}
	params = params.slice(0, -1);
	let data = {};
	data = { method: 'POST',  headers: headers, body: params };
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
	let headers = {
		"Content-Type" : 'application/x-www-form-urlencoded'
	}
	let params = '';
	for (let k in obj) {
		params += k + '=' + obj[k] + '&';
	}
	params = params.slice(0, -1);
	let data = {};
	data = { method: 'PUT', headers: headers, body: params };
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
	let headers = {
		"Content-Type" : 'application/x-www-form-urlencoded'
	}
	let params = '';
	for (let k in obj) {
		params += k + '=' + obj[k] + '&';
	}
	params = params.slice(0, -1);
	let data = {};
	data = { method: 'DELETE', headers: headers, body: params };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res;
	}).catch(function(error) {
		throw new Error("some error detected");
	});
 
}


export const PATCH = (url, obj) => {
	let headers = {
		"Content-Type" : 'application/x-www-form-urlencoded'
	}
	let params = '';
	for (let k in obj) {
		params += k + '=' + obj[k] + '&';
	}
	params = params.slice(0, -1);
	let data = {};
	data = { method: 'PATCH', headers: headers, body: params };
	return fetch(url, data).then(function(res) {
		if (res.status >= 400) {
			throw new Error("Bad response from server");
		}
		return res.json();
	}).catch(function(error) {
		throw new Error("some error detected");
	});
}