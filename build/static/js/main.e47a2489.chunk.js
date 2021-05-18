(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(31),r=c.n(s),i=(c(43),c(20)),o=c(9),l=(c(44),c(13)),j=c(3),d=c(10),h=c.n(d),b=a.a.createContext({theme:"",updateTheme:function(e){}}),u=c(17),O=c(32),x=c(0),p=function(){var e=Object(n.useContext)(b),t=e.theme,c=e.updateTheme;return Object(x.jsxs)("div",{className:"header-container ".concat(t+"-el"),children:[Object(x.jsx)("h1",{children:"Where in the world?"}),Object(x.jsxs)("div",{onClick:function(){c("light"===t?"dark":"light")},className:"toggler-dark-mode",children:["light"===t?Object(x.jsx)(u.a,{icon:["far","moon"]}):Object(x.jsx)(u.a,{icon:O.a}),Object(x.jsx)("h2",{children:t+" Mode"})]})]})},m=function(e){var t=e.countries,c=e.i,a=Object(n.useContext)(b).theme;return Object(x.jsx)(l.b,{to:{pathname:"/detail/".concat(t[c].name),state:{country:t[c]}},className:"deco",children:Object(x.jsxs)("div",{className:"card ".concat(a+"-el"),children:[Object(x.jsx)("img",{alt:"countries images",src:t[c].flag}),Object(x.jsxs)("div",{className:"info",children:[Object(x.jsx)("h1",{children:t[c].name}),Object(x.jsxs)("h2",{children:["Population: ",Object(x.jsxs)("span",{children:[t[c].population," "]})," "]}),Object(x.jsxs)("h2",{children:["Region: ",Object(x.jsxs)("span",{children:[t[c].region," "]})]}),Object(x.jsxs)("h2",{children:["Capital: ",Object(x.jsxs)("span",{children:[t[c].capital," "]})]})]})]})})},f=function(e){for(var t=e.countries,c=[],n=0;n<t.length;n++)c.push(Object(x.jsx)(m,{countries:t,i:n},n));return Object(x.jsx)("div",{className:"card-container",children:c})},g=function(e){var t=e.filter,c=e.setFilter,a=e.countries,s=e.setSearchInput,r=e.setCurrentCountry,i=Object(n.useContext)(b).theme,l=Object(n.useState)(!1),j=Object(o.a)(l,2),d=j[0],h=j[1];return Object(x.jsxs)("div",{className:"".concat(i+"-bg"," body-container "),children:[Object(x.jsxs)("div",{className:"input-select-container",children:[Object(x.jsxs)("div",{className:"input-container",children:[Object(x.jsx)("input",{onChange:function(e){s(e.target.value)},className:"".concat(i+"-el"," ").concat("light"===i?"color-light":"color-dark"),placeholder:"Search for a country..."}),Object(x.jsx)("span",{className:"search-logo ".concat("light"===i?"color-light":"color-dark")})]}),Object(x.jsxs)("div",{className:"select-container",onClick:function(){h(!d)},children:[Object(x.jsxs)("div",{className:"select ".concat(i+"-el"," ").concat("light"===i?"color-light":"color-dark"),children:[Object(x.jsx)("p",{children:t}),Object(x.jsx)("span",{})]}),Object(x.jsxs)("div",{className:"select-options \n                ".concat(i+"-el","\n                ").concat("light"===i?"color-light":"color-dark","\n                ").concat(d?"":"hidden","\n                "),children:[Object(x.jsx)("span",{onClick:function(){c("Africa")},children:"Africa"}),Object(x.jsx)("span",{onClick:function(){c("Americas")},children:"Americas"}),Object(x.jsx)("span",{onClick:function(){c("Asia")},children:"Asia"}),Object(x.jsx)("span",{onClick:function(){c("Europe")},children:"Europe"}),Object(x.jsx)("span",{onClick:function(){c("Oceania")},children:"Oceania"})]})]})]}),Object(x.jsx)("div",{className:"countries-container",children:Object(x.jsx)(f,{countries:a,setCurrentCountry:r})})]})},v=c(34),N=c(35),C=c(38),y=c(37),k=function(e){Object(C.a)(c,e);var t=Object(y.a)(c);function c(){var e;Object(v.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={borderCountry:[],finalBorder:[]},e}return Object(N.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=[];this.props.location.state.country.borders.map((function(t){return e.state.borderCountry.push(t)}));for(var c=0;c<this.state.borderCountry.length;c++)h.a.get("https://restcountries.eu/rest/v2/alpha/".concat(this.state.borderCountry[c])).then((function(c){t.push(c.data.name),e.setState({finalBorder:t})}))}},{key:"render",value:function(){var e=this,t=this.props.location.state.country;return Object(x.jsxs)("div",{className:"detail ".concat(this.context.theme+"-bg"),children:[Object(x.jsx)("div",{className:"back-container",children:Object(x.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)("div",{className:"back ".concat(this.context.theme+"-el"),children:Object(x.jsx)("p",{children:"Back"})})})}),Object(x.jsxs)("div",{className:"detail-container",children:[Object(x.jsx)("div",{className:"detail-flag",children:Object(x.jsx)("img",{alt:"country flag",src:t.flag})}),Object(x.jsxs)("div",{className:"detail-info-container",children:[Object(x.jsxs)("div",{className:"top-info",children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)("h1",{children:t.name}),Object(x.jsxs)("p",{className:"p",children:["Native Name: ",Object(x.jsxs)("span",{children:[t.nativeName," "]})," "]}),Object(x.jsxs)("p",{className:"p",children:["Population: ",Object(x.jsxs)("span",{children:[t.population," "]})," "]}),Object(x.jsxs)("p",{className:"p",children:["Region: ",Object(x.jsxs)("span",{children:[t.region," "]})," "]}),Object(x.jsxs)("p",{className:"p",children:["Sub Region: ",Object(x.jsxs)("span",{children:[t.subregion," "]})," "]}),Object(x.jsxs)("p",{className:"p",children:["Capital: ",Object(x.jsxs)("span",{children:[t.capital," "]})," "]})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsxs)("p",{children:["Top Level Domain: ",Object(x.jsxs)("span",{children:[t.topLevelDomain," "]})," "]}),Object(x.jsxs)("p",{children:["Currencies: ",Object(x.jsxs)("span",{children:[t.currencies[0].name," "]})," "]}),Object(x.jsxs)("p",{children:["Languages: ",t.languages.map((function(e,t){return Object(x.jsxs)("span",{children:[" ",e.name,", "]},t)})),"  "]})]})]}),Object(x.jsxs)("div",{className:"bot-info",children:[t.borders.length>0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:"Border Countries:"}),Object(x.jsx)("div",{className:"borders-container",children:this.state.finalBorder.map((function(t,c){return Object(x.jsxs)("span",{className:"borders ".concat(e.context.theme+"-el"),children:[t," "]},c)}))})]}):Object(x.jsxs)("h3",{children:["Border Countries: ",Object(x.jsx)("span",{className:"none ".concat(this.context.theme+"-el"),children:" None"})]}),Object(x.jsx)("div",{})]})]})]})]})}}]),c}(a.a.Component);k.contextType=b;var S=k,A=c(11),B=c(36);A.b.add(B.a);var F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("light"),r=Object(o.a)(s,2),d=r[0],u=r[1],O=Object(n.useState)([]),m=Object(o.a)(O,2),f=m[0],v=m[1],N=Object(n.useState)("Filter by Region"),C=Object(o.a)(N,2),y=C[0],k=C[1],A=Object(n.useState)(""),B=Object(o.a)(A,2),F=B[0],T=B[1],I=Object(n.useState)(""),D=Object(o.a)(I,2),E=D[0],L=D[1],P={theme:d,updateTheme:u};Object(n.useCallback)((function(){h.a.get("https://restcountries.eu/rest/v2/name/".concat(E)).then((function(e){a(e)}))}),[E]);var R=function(e){h.a.get("https://restcountries.eu/rest/v2/all").then((function(e){for(var t=[],c=0;c<e.data.length;c++)"Albania"!==e.data[c].name&&"United States of America"!==e.data[c].name&&"Brazil"!==e.data[c].name&&"Afghanistan"!==e.data[c].name&&"\xc5land Islands"!==e.data[c].name&&"Algeria"!==e.data[c].name&&"Germany"!==e.data[c].name&&"Iceland"!==e.data[c].name||t.push(e.data[c]);v(t)}))};return Object(n.useEffect)((function(){"Filter by Region"!==y?h.a.get("https://restcountries.eu/rest/v2/region/".concat(y)).then((function(e){for(var t=[],c=0;c<e.data.length;c++)t.push(e.data[c]);v(t)})):R()}),[y]),Object(n.useEffect)((function(){F?h.a.get("https://restcountries.eu/rest/v2/name/".concat(F)).then((function(e){for(var t=[],c=0;c<e.data.length;c++)t.push(e.data[c]);v(t)})).catch((function(e){v([])})):R()}),[F]),Object(x.jsx)(l.a,{children:Object(x.jsxs)(b.Provider,{value:P,children:[Object(x.jsx)(p,{}),Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",exact:!0,children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(g,{countries:f,filter:y,setFilter:k,setSearchInput:T,setCurrentCountry:a})})}),Object(x.jsx)(j.a,{path:"/detail/:name",exact:!0,render:function(e){return Object(x.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{currentCountry:c,setName:L,name:E}))}})]})]})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.e47a2489.chunk.js.map