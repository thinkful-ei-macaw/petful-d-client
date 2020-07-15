(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{25:function(e,t,n){e.exports=n(39)},26:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);n(26);var a=n(0),o=n.n(a),r=n(21),c=n.n(r),l=n(17),s=n(24),i=n(4),u=n(5),p=n(7),d=n(6),h=n(8),m=n(10),f=n(12);var E=function(){return o.a.createElement("div",{className:"landing-page"},o.a.createElement("p",null,"Looking for a pet to adopt? Get started by pressing the button below!"),o.a.createElement("p",null,"Sign up to get in line to adopt a cat or a dog."),o.a.createElement(f.b,{to:"/adopt"},"Click Me"))},g=o.a.createContext({people:[],cats:[],dogs:[]}),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={name:""},n.handleSubmit=function(e){e.preventDefault();var t=n.state.name;n.context.onAddPerson(t),n.props.add(t),n.props.queueLine(),n.setState({name:""})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("h2",null,"Please wait in line for your\xa0turn"),o.a.createElement("p",null,"Enter your info below to wait in line"),o.a.createElement("label",{htmlFor:"name"},"Please enter your name"),o.a.createElement("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}}),o.a.createElement("button",{type:"submit"},"Adopt a pet")))}}]),t}(a.Component);b.contextType=g;var v=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.cats,t=e.age,n=e.breed,a=e.description,r=e.gender,c=e.imageURL,l=e.name,s=e.story;return o.a.createElement("div",{className:"pet"},o.a.createElement("h2",null,l),o.a.createElement("img",{src:c,alt:"Cat up for adoption"}),o.a.createElement("p",null,"Age: ",t),o.a.createElement("p",null,"Breed: ",n),o.a.createElement("p",null,"Gender: ",r),o.a.createElement("p",null,"Description: ",a),o.a.createElement("p",null,"Story: ",s),this.props.adopt&&o.a.createElement("button",{onClick:this.props.demoAdopt},"Adopt Cat"))}}]),t}(a.Component);v.contextType=g;var j=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.dogs,t=e.age,n=e.breed,a=e.description,r=e.gender,c=e.imageURL,l=e.name,s=e.story;return o.a.createElement("div",{className:"pet"},o.a.createElement("h2",null,l),o.a.createElement("img",{src:c,alt:"pet up for adoption"}),o.a.createElement("p",null,"Age: ",t),o.a.createElement("p",null,"Breed: ",n),o.a.createElement("p",null,"Gender: ",r),o.a.createElement("p",null,"Description: ",a),o.a.createElement("p",null,"Story: ",s),this.props.adopt&&o.a.createElement("button",{onClick:this.props.demoAdopt},"Adopt Dog"))}}]),t}(a.Component);j.contextType=g;var y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={currentUser:"",userCanAdopt:!1,interval:null},n.componentWillUnmount=function(){clearInterval(n.state.interval)},n.addPerson=function(e){n.setState({currentUser:e})},n.getInLine=function(){var e=0,t=setInterval((function(){n.context.onDeletePerson(),n.context.onRandomAdoption(),n.context.people[1]===n.state.currentUser&&setInterval((function(){if(4===e)return clearInterval();n.context.onQueuePerson(),e++,console.log(e)}),2e3),n.userReady()}),2e3);n.setState({interval:t})},n.userReady=function(){n.context.people[1]===n.state.currentUser&&(clearInterval(n.state.interval),n.setState({userCanAdopt:!0}))},n.adoptCat=function(){n.context.onDeleteCat(),n.context.onDeletePerson(),n.props.history.push({pathname:"/congrats",state:n.context.cats})},n.adoptDog=function(){n.context.onDeleteDog(),n.context.onDeletePerson(),n.props.history.push({pathname:"/congrats",state:n.context.dogs})},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.context.people),o.a.createElement("div",{className:"adoption"},o.a.createElement("div",{className:"adopt-header"},o.a.createElement("h1",null,"Get Ready to Adopt!"),o.a.createElement("h2",null,"The following people are in line for adoption:")),o.a.createElement("div",{className:"people-list"},o.a.createElement("ul",null,this.context.people.map((function(t){return o.a.createElement("li",{key:e.context.people+Math.random()},t)})))),!this.state.currentUser&&o.a.createElement(b,{add:this.addPerson,queueLine:this.getInLine}),this.state.currentUser&&!this.state.userCanAdopt&&o.a.createElement("p",null,"Excellent! Please wait in line. When your name appears, you will be able to adopt a pet!"),this.state.userCanAdopt&&o.a.createElement("h2",null,"Your turn!"),o.a.createElement(j,{adopt:this.state.userCanAdopt,demoAdopt:this.adoptDog}),o.a.createElement(v,{adopt:this.state.userCanAdopt,demoAdopt:this.adoptCat}))}}]),t}(o.a.Component);y.contextType=g,n(36).config();var O="https://bref-chocolatine-21548.herokuapp.com/",P=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={people:[],cats:[],dogs:[]},n.addPeople=function(e){fetch("".concat(O,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:e})}),n.setState({people:[].concat(Object(s.a)(n.state.people),[e])})},n.queuePerson=function(){fetch("".concat(O,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:"Test Person ".concat(Math.floor(100*Math.random()))})}).then((function(e){if(201===e.status)return fetch("".concat(O,"/people")).then((function(e){return e.json()})).then((function(e){n.setState({people:e})}));throw new Error("The post request failed")})).catch((function(e){console.error(e)}))},n.deletePeople=function(){fetch("".concat(O,"/people"),{method:"DELETE"}).then((function(e){if(201===e.status)return fetch("".concat(O,"/people")).then((function(e){return e.json()})).then((function(e){n.setState({people:e})}));throw new Error("The delete request failed")})).catch((function(e){console.error(e)}))},n.deleteDog=function(){fetch("".concat(O,"/pets/dogs"),{method:"DELETE"}).then((function(e){if(201===e.status)return fetch("".concat(O,"/pets/dogs")).then((function(e){return e.json()})).then((function(e){n.setState({dogs:e})}));throw new Error("The delete request failed")})).catch((function(e){console.error(e)}))},n.deleteCat=function(){fetch("".concat(O,"/pets/cats"),{method:"DELETE"}).then((function(e){if(201!==e.status)throw new Error("Delete request failed");fetch("".concat(O,"/pets/cats")).then((function(e){return e.json()})).then((function(e){n.setState({cats:e})}))})).catch((function(e){console.err(e)}))},n.randomAdoption=function(){1===Math.floor(2*Math.random())?n.deleteCat():n.deleteDog()},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("".concat(O,"/people")),fetch("".concat(O,"/pets/cats")),fetch("".concat(O,"/pets/dogs"))]).then((function(e){var t=Object(l.a)(e,3),n=t[0],a=t[1],o=t[2];return n.ok?a.ok?o.ok?Promise.all([n.json(),a.json(),o.json()]):o.json().then((function(e){return Promise.reject(e)})):a.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(l.a)(t,3),a=n[0],o=n[1],r=n[2];return e.setState({people:a,cats:o,dogs:r})})).catch((function(e){console.error({error:e})}))}},{key:"render",value:function(){console.log(this.state.people);var e={people:this.state.people,cats:this.state.cats,dogs:this.state.dogs,onAddPerson:this.addPeople,onDeletePerson:this.deletePeople,onDeleteDog:this.deleteDog,onDeleteCat:this.deleteCat,onQueuePerson:this.queuePerson,onRandomAdoption:this.randomAdoption};return o.a.createElement("div",null,o.a.createElement(g.Provider,{value:e},o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:E}),o.a.createElement(m.a,{exact:!0,path:"/adopt",component:y}))))}}]),t}(a.Component);c.a.render(o.a.createElement(f.a,null,o.a.createElement(P,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d5717f8c.chunk.js.map