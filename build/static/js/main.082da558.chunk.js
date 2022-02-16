(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var s=a(3),r=a.n(s),n=a(22),i=a(37),c=a(6),o=a(12),l=a(13),h=a(15),u=a(14),d=a(10),p=a.n(d);function j(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function b(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var m=a(2),O=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).myInput=r.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("form",{action:"",className:"store-selector",onSubmit:this.goToStore,children:[Object(m.jsx)("h2",{children:"Please enter a store"}),Object(m.jsx)("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:b()}),Object(m.jsx)("button",{type:"submit",children:"Visit Store \u2192 "})]})}}]),a}(r.a.Component);O.propsTypes={history:p.a.object};var v=O,g=a(16),x=function(e){return Object(m.jsxs)("header",{className:"top",children:[Object(m.jsxs)("h1",{children:["Catch",Object(m.jsxs)("span",{className:"ofThe",children:[Object(m.jsx)("span",{className:"of",children:"Of"}),Object(m.jsx)("span",{className:"the",children:"The"})]}),"Day"]}),Object(m.jsx)("h3",{className:"tagline",children:Object(m.jsx)("span",{children:e.tagline})})]})},y=a(24),w=a.n(y),k=a(29),S=a(26),F=a(21),C=(a(31),a(35),a(33),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).nameRef=r.a.createRef(),e.priceRef=r.a.createRef(),e.statusRef=r.a.createRef(),e.descriptionRef=r.a.createRef(),e.imageRef=r.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,description:e.descriptionRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("form",{className:"fish-edit",onSubmit:this.createFish,children:[Object(m.jsx)("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),Object(m.jsx)("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),Object(m.jsxs)("select",{name:"status",ref:this.statusRef,type:"text",placeholder:"Status",children:[Object(m.jsx)("option",{value:"available",children:"Fresh!"}),Object(m.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(m.jsx)("textarea",{name:"description",ref:this.descriptionRef,placeholder:"Description"}),Object(m.jsx)("input",{name:"image",ref:this.imageRef,typed:"text",placeholder:"Image"}),Object(m.jsx)("button",{type:"submit",children:"+ Add Fish"})]})}}]),a}(r.a.Component));C.propTyes={addFish:p.a.func};var N=C,R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){var a=Object(g.a)(Object(g.a)({},e.props.fish),{},{[t.currentTarget.name]:t.currentTarget.value});e.props.updateFish(e.props.index,a)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"fish-edit",children:[Object(m.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),Object(m.jsx)("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),Object(m.jsxs)("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status,children:[Object(m.jsx)("option",{value:"available",children:"Fresh!"}),Object(m.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(m.jsx)("textarea",{name:"description",onChange:this.handleChange,value:this.props.fish.desc}),Object(m.jsx)("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),Object(m.jsx)("button",{onClick:function(){return e.props.deleteFish(e.props.index)},children:"Remove Fish"})]})}}]),a}(r.a.Component),T=R,I=function(e){return Object(m.jsxs)("nav",{className:"login",children:[Object(m.jsx)("h2",{children:"Inventory Login"}),Object(m.jsx)("p",{children:"Sign in to manage your store's inventory"}),Object(m.jsx)("button",{className:"github",onClick:function(){return e.authenticate("Github")},children:"Log In With Github"}),Object(m.jsx)("button",{className:"twitter",onClick:function(){return e.authenticate("Twitter")},children:"Log In With Twitter"})]})},A=a(36),D=a.n(A),L=F.default.initializeApp({apiKey:"AIzaSyDZgpWuuPn5_2HiyV4x80IqhDZsuLV3KXs",authDomain:"catch-amy.firebaseapp.com",databaseURL:"https://catch-amy-default-rtdb.firebaseio.com"}),M=D.a.createClass(L.database()),P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(k.a)(w.a.mark((function t(a){var s;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.fetch(e.props.storeId,{constext:Object(S.a)(e)});case 2:if((s=t.sent).owner){t.next=6;break}return t.next=6,M.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 6:e.setState({uid:a.user.uid,owner:s.owner||a.user.uid});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(F.default.auth["".concat(t,"AuthProvider")]);L.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(k.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging out"),t.next=3,F.default.auth().signOut();case 3:e.setState({uid:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;F.default.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=Object(m.jsx)("button",{onClick:this.logout,children:"Logout"});return this.state.uid?this.state.uid!==this.state.owner?Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:"Sorry you are not the owner"}),t]}):Object(m.jsxs)("div",{className:"inventory",children:[Object(m.jsx)("h2",{children:"Inventory!!!"}),t,Object.keys(this.props.fishes).map((function(t){return Object(m.jsx)(T,{index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish},t)})),Object(m.jsx)(N,{addFish:this.props.addFish}),Object(m.jsx)("button",{onClick:this.props.loadSampleFishes,children:"Load Sample Fishes"})]}):Object(m.jsx)(I,{authenticate:this.authenticate})}}]),a}(r.a.Component),W=P,H=a(58),J=a(59),U=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).renderOrder=function(t){var a=e.props.fishes[t],s=e.props.order[t],r=a&&"available"===a.status,n={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?r?Object(m.jsx)(H.a,Object(g.a)(Object(g.a)({},n),{},{children:Object(m.jsx)("li",{children:Object(m.jsxs)("span",{children:[Object(m.jsx)(J.a,{component:"span",className:"count",children:Object(m.jsx)(H.a,{classNames:"count",timeout:{enter:500,exit:500},children:Object(m.jsx)("span",{children:s})},s)}),"lbs ",a.name,j(s*a.price),Object(m.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]})},t)})):Object(m.jsx)(H.a,Object(g.a)(Object(g.a)({},n),{},{children:Object(m.jsxs)("li",{children:["Sorry ",a?a.name:"fish"," is no longer available"]},t)})):null},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var s=e.props.fishes[a],r=e.props.order[a];return s&&"available"===s.status?t+r*s.price:t}),0);return Object(m.jsxs)("div",{className:"order-wrap",children:[Object(m.jsx)("h2",{children:"Order"}),Object(m.jsx)(J.a,{component:"ul",className:"order",children:t.map(this.renderOrder)}),Object(m.jsxs)("div",{className:"total",children:["Total: ",Object(m.jsx)("strong",{children:j(a)})]})]})}}]),a}(r.a.Component);U.propsTypes={fishes:p.a.object,order:p.a.object,removeFromOrder:p.a.func};var q=U,z={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},V=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.addToOrder(e.props.index)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.name,s=e.desc,r=e.price,n="available"===e.status;return Object(m.jsxs)("li",{className:"menu-fish",children:[Object(m.jsx)("img",{src:t,alt:a}),Object(m.jsxs)("h3",{className:"fish-name",children:[a,Object(m.jsx)("span",{className:"price",children:j(r)})]}),Object(m.jsx)("p",{children:s}),Object(m.jsx)("button",{disabled:!n,onClick:this.handleClick,children:n?"Add To Order":"Sold Out!"})]})}}]),a}(r.a.Component),B=V,K=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(g.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var s=Object(g.a)({},e.state.fishes);s[t]=a,e.setState({fishes:s})},e.deleteFish=function(t){var a=Object(g.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:z})},e.addToOrder=function(t){var a=Object(g.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(g.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=M.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){M.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"catch-of-the-day",children:[Object(m.jsxs)("div",{className:"menu",children:[Object(m.jsx)(x,{tagline:"Fresh Seafood Market"}),Object(m.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(m.jsx)(B,{details:e.state.fishes[t],index:t,addToOrder:e.addToOrder},t)}))})]}),Object(m.jsx)(q,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),Object(m.jsx)(W,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId})]})}}]),a}(r.a.Component),G=K,Z=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"Not Found!!!!!"})})},E=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(c.a,{path:"/store/:storeId",component:G}),Object(m.jsx)(c.a,{component:Z})]})})};a(55);Object(n.render)(Object(m.jsx)(E,{}),document.querySelector("#main"))}},[[56,1,2]]]);
//# sourceMappingURL=main.082da558.chunk.js.map