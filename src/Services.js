import config from './config'

const Services = {
  getDog() {
    return fetch(`${config.API_ENDPOINT}/pets/dog`)
      .then((dog) => {
      if (!dog.ok) {
        throw new Error('no available dogs')
      }
      return dog.json();
    })
},

  getCat() {
    return fetch(`${config.API_ENDPOINT}/pets/cat`)
      .then((cat) => {
        if (!cat.ok) {
          throw new Error('no available cats')
        }
        return cat.json();
      })
},

  getPeople() {
    return fetch(`${config.API_ENDPOINT}/people`)
      .then((people) => {
      if (!people.ok) {
        throw new Error('empty queue')
      }
      return people.json();
    })
},

  addPerson(name) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        person: name,
      }),
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
  },

  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/pets/dog`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/pets/cat`, {
      method: "DELETE",
    })
      .then((res) =>
        !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
      )
},

  deletePerson(person) {
    return fetch(`${config.API_ENDPOINT}/people`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: person,
    }),
  })
    .then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    )
  },
}

export default Services