import config from './config';

const PetfulApi = {
	url: config.API_ENDPOINT,

	getAllCats() {
		return fetch(this.url + '/pets/cats', {}).then(
			(res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json())
		);
	},
	adoptCat() {
		return fetch(this.url + '/pets/cats', { method: 'DELETE' }).then((res) => {
			if (!res.ok) {
				return res.json().then((e) => Promise.reject(e));
			}
			return res.json();
		});
	},
	getAllDogs() {
		return fetch(this.url + '/pets/dogs', {}).then(
			(res) => (!res.ok ? res.json().then((e) => Promise.reject(e)) : res.json())
		);
	},
	adoptDog() {
		return fetch(this.url + '/pets/dogs', { method: 'DELETE' }).then((res) => {
			if (!res.ok) {
				return res.json().then((e) => Promise.reject(e));
			}
			return res.json();
		});
	},
	enqueueCat(cat) {
		return fetch(this.url + '/pets/cats', { 
			method: 'POST', 
			headers: {
				'content-type':'application/json'
			},  
			body:JSON.stringify({cat})
		 })
		 .then((res) => {
			if (!res.ok) {
				return res.json().then((e) => Promise.reject(e));
			}
			return res.json();
		});
	},
	enqueueDog(dog) {
		return fetch(this.url + '/pets/dogs', { 
			method: 'POST', 
			headers: {
				'content-type':'application/json'
			},  
			body:JSON.stringify({dog})
		 })
		 .then((res) => {
			if (!res.ok) {
				return res.json().then((e) => Promise.reject(e));
			}
			return res.json();
		});
	},
};

export default PetfulApi