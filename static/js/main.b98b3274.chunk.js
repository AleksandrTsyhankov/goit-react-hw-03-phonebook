(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"App_title__1EP0H"}},18:function(t,e,n){},2:function(t,e,n){t.exports={form:"ContactStyles_form__3SnRU",label:"ContactStyles_label__1Ai-X",inputName:"ContactStyles_inputName__3-EZq",inputTel:"ContactStyles_inputTel__uCBI6",btn:"ContactStyles_btn__NWRCW",delBtn:"ContactStyles_delBtn__3HaPw",contactsList:"ContactStyles_contactsList__3jgp7",contactsListItem:"ContactStyles_contactsListItem__hI-kS"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(18),n(7)),o=n(13),l=n(3),u=n(4),b=n(6),m=n(5),h=n(2),j=n.n(h),d=n(21),f=n(0),p=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.clearState=function(){return t.setState({name:"",number:""})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.clearState()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=Object(d.a)(),c=Object(d.a)();return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{className:j.a.label,htmlFor:a,children:"Name"}),Object(f.jsx)("input",{id:a,className:j.a.inputName,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:e}),Object(f.jsx)("label",{className:j.a.label,htmlFor:c,children:"Number"}),Object(f.jsx)("input",{id:c,className:j.a.inputTel,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:n}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=p,C=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.deleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:j.a.contactsList,children:e.map((function(t){return Object(f.jsxs)("li",{className:j.a.contactsListItem,children:[" ",t.name,": ",t.number,Object(f.jsx)("span",{onClick:function(){return n(t.id)},className:j.a.delBtn,children:"-"})]},t.id)}))})})}}]),n}(a.Component),v=C,g=n(9),S=n.n(g),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onChange,n=t.value,a=Object(d.a)();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{htmlFor:a,className:S.a.filter,children:"Find contacts by name"}),Object(f.jsx)("input",{id:a,className:S.a.filterInput,type:"text",name:"filter",value:n,onChange:e})]})}}]),n}(a.Component),y=_,x=n(10),N=n.n(x),F=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmit=function(e,n){var a=t.state.contacts,c=a.find((function(t){return t.name===e})),r={id:Object(d.a)(),name:e,number:n};return c?alert("".concat(e," is already in contacts.")):t.setState({contacts:[r].concat(Object(o.a)(a))})},t.handleFilterChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(i.a)({},a,c))},t.filterContactsList=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.deleteNameFromList=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));return t.setState({contacts:n})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){e!==this.state&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:N.a.title,children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.handleSubmit}),Object(f.jsx)("h2",{className:N.a.title,children:"Contacts"}),Object(f.jsx)(y,{onChange:this.handleFilterChange,value:t}),Object(f.jsx)(v,{deleteContact:this.deleteNameFromList,contacts:this.filterContactsList()})]})}}]),n}(a.Component),L=F,k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root")),k()},9:function(t,e,n){t.exports={filter:"Filter_filter__rAZKQ"}}},[[20,1,2]]]);
//# sourceMappingURL=main.b98b3274.chunk.js.map