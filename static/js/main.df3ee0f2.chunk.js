(this.webpackJsonpmovie_web_2021=this.webpackJsonpmovie_web_2021||[]).push([[0],{14:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),r=s(15),i=s.n(r),c=s(3),o=s.n(c),m=s(5),d=s(16),u=s(17),l=s(20),j=s(19),v=s(18),b=s.n(v),h=(s(14),s(0));function p(e){var t=e.id,s=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",id:t,children:[Object(h.jsx)("img",{className:"movie_poster",src:r,alt:a,title:a}),Object(h.jsxs)("div",{className:"movie_data",children:[Object(h.jsx)("h2",{className:"movie_data_title",children:a}),Object(h.jsx)("h3",{className:"movie_data_year",children:s}),Object(h.jsx)("p",{className:"movie_data_summary",children:n.length>=250?n.substring(0,250)+"...":n}),Object(h.jsx)("ul",{className:"movie_data_genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"movie_data_genres_genre",children:e},t)}))})]})]})}s(45);var O="https://yts-proxy.now.sh/list_movies.json&sort_by=rating",_=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.componentDidMount=Object(m.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getMovies();case 2:e.setState({isLoading:!1});case 3:case"end":return t.stop()}}),t)}))),e.getMovies=Object(m.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get(O);case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a});case 5:case"end":return t.stop()}}),t)}))),e.renderMovies=function(){return e.state.movies.map((function(e){return Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,poster:e.medium_cover_image,summary:e.summary,genres:e.genres},e.id)}))},e}return Object(u.a)(s,[{key:"render",value:function(){var e=this.state.isLoading;return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:e?"Loading....":""})}),Object(h.jsx)("div",{className:"movies",children:this.renderMovies()})]})}}]),s}(a.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.df3ee0f2.chunk.js.map