(this["webpackJsonpsnap-high-score"]=this["webpackJsonpsnap-high-score"]||[]).push([[0],{213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(91),c=n(19),o=n(218),i=n(293),l=n(267),s=n(266),j=n(265),u=n(215),b=n(134),d=n.n(b),O=n(71),h=n.n(O),x=n(135),m=n.n(x),f=n(81),g=n.p+"static/media/background-2.ae4e673b.png",p=n(128),v=n.n(p),k=n(129),C=n.n(k),A=function e(){Object(f.a)(this,e)};function S(e){var t=e%10,n=e%100;return"".concat(e,1===t&&11!==n?"st":2===t&&12!==n?"nd":3===t&&13!==n?"rd":"th")}function y(e){return e.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(function(e,t){return t.toUpperCase()}))}function E(e){return e.replace("_"," ").replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}A.tableCell={color:"#FFFFFF",border:0},A.tableHead={backgroundColor:"#000000",opacity:.7},A.green={color:v.a[500]},A.transparent={backgroundColor:"transparent"},A.darkRed={color:C.a[700]},A.centerFloating={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},A.form={padding:16,margin:"auto",maxWidth:"80%",opacity:.7},A.formPaper={padding:16},A.formScoreParts={height:"100%",paddingTop:5},A.formMultiOption={height:"100%",paddingTop:10},A.formEmulated={height:"100%",paddingTop:20},A.formProof={height:"100%",paddingTop:25},A.formButton={marginTop:16},A.formImage={marginTop:12,marginLeft:16},A.formFilename={marginTop:24,marginLeft:8},A.formBackground={backgroundImage:"url(".concat(g,")"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",height:"100vh",backgroundRepeat:"repeat"},A.title={fontFamily:"Roboto",fontSize:36,color:"#FFFFFF"},A.leaderboardBackground={backgroundImage:"url(".concat(g,")"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",height:"100vh",backgroundRepeat:"no-repeat"},A.button={minWidth:50,maxHeight:30,backgroundColor:"transparent"},A.activeButton={minWidth:50,maxHeight:30,backgroundColor:"rgba(250, 0, 0, 0.7)"},A.rulesButton={minWidth:50,maxHeight:30},A.autocomplete={minWidth:200,height:30},A.noDisplay={display:"none"};var R=function(e){var t=e.getTimezoneOffset();return new Date(e.getTime()-60*t*1e3).toISOString().split("T")[0]},V=function(e){return Object.entries(null!==e&&void 0!==e?e:{}).map((function(e,t){var n=Object(a.a)(e,2),r=n[0],c=n[1];return"".concat(r,": ").concat(c)}))},T=n(0),I=n.n(T),P=n(130),U=n.n(P),B=n(1),N=function(e){var t=e.proofLink,n=Object(T.useState)(!1),r=Object(a.a)(n,2),c=r[0],b=r[1],O=Object(T.useState)(!1),x=Object(a.a)(O,2),f=x[0],g=x[1],p=null!==(null!==t&&void 0!==t?t:"").match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i),v=!!t&&(function(e){return null!==e.match(/\.(jpeg|jpg|gif|png)$/)}(t)||p),k=!!t&&function(e){return null!==e.match(/(mp4|mkv|mov|wmv|avi|webm|html5|youtube|youtu.be)/)}(t);if(!v&&!k)return Object(B.jsx)(u.a,{disabled:!0,children:Object(B.jsx)(d.a,{})});var C=function(){return b(!1)},S=function(){return g(!1)};return Object(B.jsxs)(B.Fragment,{children:[v&&p&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(u.a,{onClick:function(){return b(!0)},"aria-label":"link",children:v&&Object(B.jsx)(h.a,{style:A.green})}),Object(B.jsxs)(i.a,{open:c,onClose:C,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(j.a,{id:"alert-dialog-title",children:"Proof Pic"}),Object(B.jsx)(s.a,{dividers:!0,children:Object(B.jsx)("img",{src:null!==t&&void 0!==t?t:"",alt:"Proof Pic",width:"400",height:"300"})}),Object(B.jsx)(l.a,{children:Object(B.jsx)(o.a,{onClick:C,color:"primary",children:"Close"})})]})]}),v&&!p&&Object(B.jsx)(u.a,{href:t,target:"_blank","aria-label":"link",children:Object(B.jsx)(h.a,{style:A.green})}),k&&Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(u.a,{onClick:function(){return g(!0)},"aria-label":"link",children:Object(B.jsx)(m.a,{style:A.green})}),Object(B.jsxs)(i.a,{open:f,onClose:S,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",maxWidth:"md",children:[Object(B.jsx)(j.a,{id:"alert-dialog-title",children:"Proof Video"}),Object(B.jsx)(s.a,{dividers:!0,children:Object(B.jsx)(U.a,{url:null!==t&&void 0!==t?t:"",controls:!0})}),Object(B.jsx)(l.a,{children:Object(B.jsx)(o.a,{onClick:S,color:"primary",children:"Close"})})]})]})]})},F=n(15),Q=n(287),L=n(298),W=n(268),w=n(294),M=n(146),z={minWidth:50},q=Object(W.a)((function(e){return Object(w.a)({popover:Object(F.a)({pointerEvents:"none"},z),typography:{padding:e.spacing(1)}})})),D=function(e){var t=q(),n=Object(T.useState)(null),r=Object(a.a)(n,2),c=r[0],o=r[1],i=function(){o(null)},l=Boolean(c),s=l?"simple-popover":void 0;return Object(B.jsxs)(Q.a,{children:[Object(B.jsx)(M.a,{"aria-owns":s,"aria-haspopup":"true",onMouseEnter:function(e){o(e.currentTarget)},onMouseLeave:i,children:e.label}),Object(B.jsx)(L.a,{id:s,className:t.popover,open:l,anchorEl:c,onClose:i,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},disableRestoreFocus:!0,children:e.texts.map((function(e){return Object(B.jsx)(M.a,{className:t.typography,children:e})}))})]})},Y=n(269);function Z(e,t){return function(e){var t=e.slice().sort((function(e,t){return t-e}));return new Map(e.map((function(e){return[e,t.indexOf(e)+1]})))}(t).get(e)}function J(e){return{color:1===e?"#FFD700":2===e?"#D9D9D9":3===e?"#CD7F32":4===e?"#FF0800":"#000000",border:0}}function H(e){return 1===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAACa0lEQVQoz4WSzUsUARjGf/O1ruuwKVqZpuIXdUnMUEo7hEWXDn0SVGjQIaL+gE7SoaBLdKmOEniIoEywki4rLZgHjaDM1TC/dtFd3V1n3d3Z2XVmdjosRgerB57T+z78Xnhe+Ifam/F1t+DsNJP/Fjp3lM4ihe5vS4zzP5naw47sELetD5WDD3owJp7scoz3VYb+Rh5cHaBjR+L4I9owFJ9Sf1EVLQE9+5ojx04hSiVu8rkL7q346fTQ2LB6PnsNQAR4d4+W5oYanxSZVEWlDvZf52CNhFjSBO4qMDXE8hOqp6zh6kI//QACwMJzd7S+9XIF6gHQxqG4loyewqOYkM+BtQlKBegBFn9Os7zOHbnvCjfLvK4KUt/BWILUFEgePOVtIKsFmynIBjHtHwjAfJg+2eOia8tIkk9OIYgSgqcJyo5DSTMU14CdgcQktrlMvvoscsJCDAQq5ZRB73wYTNtkT6mNIrnBscE2ILMMloYdeUsiOoHibSK7BasbIFWXc6u4CNXrAa/HAVPDsdJIgoUTHcGOfmRtYZzQSgZ9Y4bAlyATs7yQ9Sz3J+d4VuyCfB4QDFxBP151EpeYQQDiSQjFIDofZ02DiMYnAeBMO1rtbkpbG6CxSSUdSwMgiQUndAqBBIQ3YGAUQQRwHE6uxElXHTpMXfdTkjbMhCAQhK+LBVo8DeubsBJnGEACmFsl3LgPX2A60uMWZmWfP4aWLrScyRWIsSTktiCZoXdpnRXhz/+71EVn3sHvkpEVuXAmgCKD42Bt6tx9Ncbj38RtBUKE9pbid7uoE6BeEqFUhdgmo6EYN0Y+83J79xet2QWb+FsmKQAAAABJRU5ErkJggg==":2===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAQAAACMnYaxAAABQ0lEQVQYGW3BzS+CARzA8d9f5NChg0NHN5ewCZW3yp5DmzQbk81FszWzZV4ODl5aLiE1B/PEhJNQUY9ZjD0WS7PJ1qHD1zDzMp+P/NaoNiP/66jvpOFQ/ioZE8pRZLgaJllVI3GjfFsyFCsaObxcoJEjU0mE5NNsXeI5T4EnAlxzQ5ZbjllbkHfR0iV3nHNFljwXpMmTYp0FRQadO5yQ5ogcd9zzgM41Z2wwUZSRxS2SHHCMTplXXrhHQ2efAOJlkRh7nKBToswjGXa5IcEI0lkcJ8Q2e5xSIEuKOCtsEsQVkjbFRYBlVggTJUaMMEH8DGFRRMTyrOBniWmmmWGOScYYoBd512por6yiMYUPHz5GGcRJS1Q+WYzW6jw9OPHQjxsn3TQZ5Yut3lrrohcHDvroq9k98pPZZFO7cODGrppN8uENP0cDxJBlMdIAAAAASUVORK5CYII=":3===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAACmElEQVQoz32ST2hUVxjFf/fe9yZvZjLPqEmIYyEoZFEX0j+hVkUXChZESumypRZcuBEEoRBEBFtBcGOhULpyW9pNi4qC4LQGVEq2RbBdiDYxGTuZZOb9f/fdd18XoliqPbvD+T7O4XDgf/DFW63Omdlm9SrNed3TV7sbe6QSB3qr2b1X6eJl8lvnynvD32/PKq9x8MGtnw5vefNtz29vy2we3yjS8OKR05cX/uP489yH71Rl0Wm0Z0axJeiEiR27EKrmVZX52DP60M1vTl394OTXnwJIgB9PHtjZ3DrTMYOno7LmUZucxp9s49RbqBEPazTuhslRt7X5k2vnP7/8Iur1C8d6/szsuGr4FMMeymtSZjFSuVBZrMnB9bBJQLT0J/nw7xPOdx9tP64arfEyCbBZjEmGSOVQ8ydAOQjlUJUFVqcYnSEExP3eWSldZ2+ZpxTxgCJaQ9bquK1xZHMM1ZpEej5CSKxOcTe/wcimNkI5U9Lo7Gi2tkI+6GGNRggBlQVbUukYm4Xk/SWS5YdYU1CagiQY4ATr693GytLUmHJRI3V0tE4lJLUNE5hkSJlnJN2HFGGfIgkIFh8Q9nvfO1oX5/vLj79V7rMiQCCcRzh1H4QAKkwckA76DJ48IosCojC6KwDO7RpZ98f8sY1TW2lt2Y4OVgGQSoGQFGlMHgfkUUQURsz9uiYkgLUcjIIwGp3eyaZ3D1OWFdFql/DpMkF3iSwYUCQJaRwSBsFVAAUwv1yu7G+rznDxj8+ELZyV+wvkWYYUUBqNTlOyNMaYkjTLj97pVk/+tdUL+5p7rK3mHUc5UkrEs0BIpbAVRmfp3Jk78aUXjs/R+atYfH+8nJfKna6Q2xASr+4Rx+kv4TA49uWC/uH57T+LfEMa5C4ZtAAAAABJRU5ErkJggg==":4===e?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAACMElEQVQoz4WTT2sTURTFf3l5TYdJnaZtSkPrIqEY0SKIuNFFnYBbV+5F1M/RUjd+B1GkH8CNuC1NitBFKYgKNShaTW1jJomTZDqZTCfvuUhb/1V64cLlcg/3nHs5cEIYBnYmzQKnRPykZsrgzvmcseQHkfYDSv8Di5Oazz24Wg6YmWFpxTidAQAlWPhkSV3PoTXopUvoxxl0VaBfC1afgP37fOyoWIHVubmMPZUCJZtwJcEzJ8CasrhthoinPm92FRtQeADFY83LsDpuSnvGkITNHo0PAcnYMK7ZJ28bnOmGCMcknT9LVHHvXlO69AK25X2wO2DLMALhY1zOYvQUYlhw03HZfxRQqQQYpmAs1yYfKdaHWOSAogTmj6i3amDNKsT1PMxPw5ZL8t0eVqnM7lYNr+rREqD1QHs8BzcygkJSgxdEdDtd0ukRYpMp0EAzQDR8OtUWNTQOUNWQ0mi5B2u7CpICDAGNmk/08i2zm5/hQoLeOWiWm7SUwgN2BJQj6Bxd+xboi8AIMCZhyoKRNpCAliVQVYUCAgEbCj4OvhOLA4xKdEJQCBSEQD+EtoLvEbS6mjrgaPgag/cafFjcgZIE8CRrFWBCQN8Ezz28oAQOKUZAXYEPxXV4ePznesT26DS2UGR7IfTj0BPQjoMTQZtBHkDxFRT+MYY5zpehCbIxk+x+CN4QdOVg48HABMWi/gX8A+y6bH9zWJYTaDlJoZ8C34TuGDSSLG7+4N7fXvgJZFvrCPaEew8AAAAASUVORK5CYII=":""}function G(e){return e%2===1?{backgroundColor:"#666666",opacity:.9,border:0}:{backgroundColor:"#444444",opacity:.7,border:0}}var K,X=function(e){var t=Z(e.score,e.ranks),n=J(t),a=H(t);return Object(B.jsxs)(Y.a,{align:"center",style:n,children:[Object(B.jsx)("img",{src:a,alt:""}),S(t)]})},_=function(e){return Object(B.jsx)(Y.a,Object(F.a)(Object(F.a)({},e),{},{align:"center",style:A.tableCell,children:e.name}))},$=n(270),ee=n(271),te=n(290),ne=n(295),ae=n(21),re=n.n(ae),ce=function(e){var t=e.id,n=e.adminUsername,r=e.adminPassword,c=Object(T.useState)(),i=Object(a.a)(c,2),l=i[0],s=i[1],j=Object(T.useState)(!1),u=Object(a.a)(j,2),b=u[0],d=u[1];return Object(B.jsxs)($.a,{component:"fieldset",children:[Object(B.jsxs)(ne.a,{row:!0,"aria-label":"verify",name:"",value:l,onChange:function(e){return s(e.target.value)},children:[Object(B.jsx)(ee.a,{value:"verify",control:Object(B.jsx)(te.a,{disabled:b}),label:"Verify"}),Object(B.jsx)(ee.a,{value:"reject",control:Object(B.jsx)(te.a,{disabled:b}),label:"Reject"})]}),Object(B.jsx)(o.a,{variant:"contained",size:"small",disabled:b,style:A.rulesButton,color:"primary",onClick:function(e){"verify"===l?re.a.put("https://hs-pkmnsnap.ngrok.io/scoreAttack/validate",{id:t,userName:n,password:r}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})):re.a.put("https://hs-pkmnsnap.ngrok.io/scoreAttack/invalidate",{id:t,userName:n,password:r}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)})),d(!0)},children:"Submit"})]})},oe=n(272),ie=function(e){var t=e.scoreAttacks,n=e.adminUsername,a=e.adminPassword;return Object(B.jsx)(B.Fragment,{children:t.sort((function(e,t){return t.score-e.score})).map((function(e,r){var c=e.id,o=e.attacker,i=e.score,l=e.scoreParts,s=e.submittedOn,j=e.platform,u=e.proofLink,b=(e.isVerified,e.notes);return Object(B.jsxs)(oe.a,{style:G(r),children:[Object(B.jsx)(X,{index:r,score:i,ranks:t.map((function(e,t){return e.score}))}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:["This is a platform"],label:Object(B.jsx)("strong",{children:o})})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:V(l),label:i})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:[null!==b&&void 0!==b?b:s],label:s})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:["This is a platform"],label:j})}),Object(B.jsx)(_,{name:Object(B.jsx)(N,{proofLink:u})||"\u2014"}),Object(B.jsx)(_,{name:Object(B.jsx)(ce,{id:c,adminUsername:n,adminPassword:a})})]})}))})},le=function(e){return Object(B.jsx)(Y.a,Object(F.a)(Object(F.a)({},e),{},{align:"center",style:A.tableCell,children:Object(B.jsx)("strong",{children:e.name})}))},se=function(){return Object(B.jsx)(B.Fragment,{children:["Rank","Attacker","Score","Submission Date","Platform","Proof","Verified"].map((function(e){return Object(B.jsx)(le,{name:e})}))})},je=n(274),ue=n(273),be=function(){return Object(B.jsx)(oe.a,{style:A.centerFloating,children:Object(B.jsx)(ue.a,{style:A.transparent,"aria-label":"loading",size:"large",disabled:!0,children:Object(B.jsx)(je.a,{size:50,style:A.darkRed,disableShrink:!0})})})},de=n(275),Oe=n(277),he=n(276),xe=function(e){var t=e.scoreAttacks,n=e.isLoading,a=e.adminUsername,o=e.adminPassword,i=t.map((function(e){return{id:e.id,attacker:e.userName,score:e.totalScore,scoreParts:{special:e.special,size:e.size,pose:e.pose,isTechnique:e.isTechnique,samePokemon:e.samePokemon},submittedOn:R(Object(r.a)(Date,Object(c.a)(e.submittedOn))),platform:"".concat(e.console," \u2022 ").concat(e.region),proofLink:e.proof,isVerified:e.isVerified,notes:e.notes}}));return Object(B.jsxs)(de.a,{size:"small","aria-label":"a dense table",children:[Object(B.jsx)(he.a,{style:A.tableHead,children:Object(B.jsx)(se,{})}),Object(B.jsxs)(Oe.a,{children:[n&&Object(B.jsx)(be,{}),!n&&Object(B.jsx)(ie,{scoreAttacks:i,adminUsername:a,adminPassword:o})]})]})};!function(e){e.POKEMON="POKEMON",e.COURSE="COURSE",e.CHALLENGE="CHALLENGE",e.REPORT_SCORE="REPORT_SCORE",e.SITE_COURSE="SITE_COURSE",e.SITE_REPORT="SITE_REPORT",e.TIME_ATTACK="TIME_ATTACK"}(K||(K={}));var me,fe=function(e){var t=e.type,n=e.handleLeaderboardChange;return Object(B.jsx)(B.Fragment,{children:[[K.POKEMON,"Pok\xe9mon"],[K.REPORT_SCORE,"Report Score"],[K.COURSE,"Course"],[K.CHALLENGE,"Challenge"],[K.SITE_COURSE,"Site Course"],[K.SITE_REPORT,"Site Report"],[K.TIME_ATTACK,"Time Attack"]].map((function(e){var r=Object(a.a)(e,2),c=r[0],i=r[1];return Object(B.jsx)(o.a,{size:"small",disabled:t===c,style:t===c?A.activeButton:A.button,onClick:function(){n(c)},children:i})}))})},ge=n(278);!function(e){e.N64="N64",e.WII_VC="WII_VC",e.WIIU_VC="WIIU_VC"}(me||(me={}));var pe=function(e){var t=e.gameConsole,n=e.handleConsoleChange;return Object(B.jsx)(ge.a,{"aria-label":"button group",children:[[me.N64,"N64"],[me.WII_VC,"Wii VC"],[me.WIIU_VC,"WiiU VC"]].map((function(e){var r=Object(a.a)(e,2),c=r[0],i=r[1];return Object(B.jsx)(o.a,{size:"small",disabled:t===c,style:t===c?A.activeButton:A.button,onClick:function(){n(c)},children:i})}))})},ve=function(e){var t=e.type,n=e.attackSubVariant,a=e.gameConsole;return Object(B.jsx)(Q.a,{display:"flex",justifyContent:"center",borderRadius:16,children:Object(B.jsx)(M.a,{style:A.title,gutterBottom:!0,children:Object(B.jsxs)("strong",{children:[E(t).toUpperCase()," \u2022 ",null===n||void 0===n?void 0:n.toUpperCase()," \u2022 ",a]})})})},ke=n(285),Ce=n(288),Ae=function(e){var t=e.attackSubVariant,n=e.attackSubVariants,a=e.onSubVariantChange;return Object(B.jsx)(Ce.a,{id:"subvariant-search",value:t,onChange:a,options:n,getOptionLabel:function(e){return e},style:A.autocomplete,renderInput:function(e){return Object(B.jsx)(ke.a,Object(F.a)(Object(F.a)({},e),{},{size:"small",label:"SubVariant",variant:"outlined"}))}})},Se=n(280),ye=n(281),Ee=n(137),Re=n.n(Ee),Ve=n(92),Te=Object(W.a)((function(e){return Object(w.a)({root:{flexGrow:1,opacity:.7},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})})),Ie=function(){var e=Te();return Object(B.jsx)(Q.a,{className:e.root,children:Object(B.jsx)(Se.a,{position:"static",children:Object(B.jsxs)(ye.a,{variant:"dense",children:[Object(B.jsx)(u.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(B.jsx)(Re.a,{})}),Object(B.jsx)(M.a,{variant:"h6",className:e.title,children:"Pok\xe9mon Snap High Score"}),Object(B.jsx)(o.a,{component:Ve.a,to:"/attack",variant:"contained",color:"primary",children:"Submit"}),Object(B.jsx)(o.a,{component:Ve.a,to:"/leaderboard",variant:"contained",color:"primary",children:"Leaderboard"}),Object(B.jsx)(o.a,{component:Ve.a,to:"/admin",variant:"contained",color:"primary",children:"Admin"})]})})})},Pe=n(282),Ue=n(90),Be=n(13),Ne=function(e){Object(T.useEffect)((function(){re.a.get("data/attackVariants.json").then((function(e){return e.data})).then((function(t){return e(new Map(Object.entries(t)))}))}),[e])},Fe=function(e,t){Object(T.useEffect)((function(){y(e);re.a.get("").then((function(e){return e.data})).then((function(e){var n=new Set,a=e.filter((function(e){var t=e.userName;return!n.has(t)&&(n.add(t),!0)}));t(a)})).catch()}),[e,t])},Qe=function e(){Object(f.a)(this,e)};Qe.attacker={required:"Required"},Qe.score={required:"Required"},Qe.region={required:"Required"},Qe.console_={required:"Required"},Qe.emulated={required:"Required"},Qe.special={required:"Required"},Qe.size={required:"Required"},Qe.pose={required:"Required"},Qe.samePokemon={required:"Required"},Qe.technique={required:"Required"},Qe.videoLink={required:"Required"},Qe.proofImage={required:"Required"},Qe.notes={required:"Required"};var Le=n(14),We=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"attacker",as:Object(B.jsx)(ke.a,{id:"attacker",fullWidth:!0,required:!0,type:"text",label:"Attacker"}),control:t,defaultValue:"",rules:Qe.attacker})})},we=function(e){var t=e.title;return Object(B.jsx)(M.a,{style:A.title,variant:"h5",align:"center",component:"h1",gutterBottom:!0,children:Object(B.jsx)("strong",{children:t})})},Me=n(65),ze=function(e){var t=e.control,n=e.attackSubVariants,r=e.challengeValue;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{as:function(e){var t=e.onChange,a=Object(Me.a)(e,["onChange"]);return Object(B.jsx)(Ce.a,Object(F.a)({value:r,options:n,getOptionLabel:function(e){return E("".concat(e))},renderInput:function(e){return Object(B.jsx)(ke.a,Object(F.a)(Object(F.a)({},e),{},{label:"Challenge"}))},onChange:function(e,n){return t(n)}},a))},onChange:function(e){return Object(a.a)(e,2)[1]},defaultValue:"",name:"challenge",control:t})})},qe=n(279),De=function(e){var t=e.control,n=Object(T.useState)("N64"),r=Object(a.a)(n,2),c=r[0],o=r[1];return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"console",as:Object(B.jsxs)(Q.a,{children:[Object(B.jsx)(qe.a,{component:"legend",children:"Console"}),Object(B.jsxs)(ne.a,{row:!0,"aria-label":"console",id:"console",value:c,onChange:function(e){return o(e.target.value)},children:[Object(B.jsx)(ee.a,{value:"N64",control:Object(B.jsx)(te.a,{}),label:"Nintendo 64"}),Object(B.jsx)(ee.a,{value:"WII_VC",control:Object(B.jsx)(te.a,{}),label:"Wii VC"}),Object(B.jsx)(ee.a,{value:"WIIU_VC",control:Object(B.jsx)(te.a,{}),label:"WiiU VC"})]})]}),control:t,defaultValue:"N64",rules:Qe.console_})})},Ye=n(291),Ze=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(ee.a,{style:A.formEmulated,control:Object(B.jsx)(Le.a,{name:"isEmulated",control:t,render:function(e){return Object(B.jsx)(Ye.a,Object(F.a)(Object(F.a)({},e),{},{id:"isEmulated",checked:e.value,onChange:function(t){return e.onChange(t.target.checked)}}))},defaultValue:!1,rules:Qe.emulated}),label:"Emulated"})})},Je=function(e){var t=e.control,n=e.attackVariants,r=e.setValue,c=e.setType;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{as:function(e){var t=e.onChange,a=Object(Me.a)(e,["onChange"]);return Object(B.jsx)(Ce.a,Object(F.a)({options:Array.from(n.keys()),getOptionLabel:function(e){return E("".concat(e))},renderInput:function(e){return Object(B.jsx)(ke.a,Object(F.a)(Object(F.a)({},e),{},{label:"Leaderboard"}))},onChange:function(e,n){t(n),c(n),r("challenge",null)}},a))},onChange:function(e){return Object(a.a)(e,2)[1]},defaultValue:"",name:"leaderboard",control:t})})},He=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"notes",as:Object(B.jsx)(ke.a,{fullWidth:!0,id:"notes",multiline:!0,label:"Notes"}),control:t,defaultValue:"",rules:Qe.notes})})},Ge=n(138),Ke=n.n(Ge),Xe=function(e){var t=e.control,n=e.onImageUpload;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"proofImage",as:Object(B.jsxs)(Q.a,{children:[Object(B.jsx)("input",{accept:"image/*",id:"proofImage",name:"proofImage",style:A.noDisplay,onChange:n,type:"file"},"fileInput"),Object(B.jsx)("label",{htmlFor:"proofImage",children:Object(B.jsx)(u.a,{color:"primary","aria-label":"upload picture",component:"span",children:Object(B.jsx)(Ke.a,{})})})]}),control:t,defaultValue:"",rules:Qe.proofImage})})},_e=function(e){var t=e.control,n=Object(T.useState)("NTSC_J"),r=Object(a.a)(n,2),c=r[0],o=r[1];return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"region",as:Object(B.jsxs)(Q.a,{children:[Object(B.jsx)(qe.a,{component:"legend",children:"Region"}),Object(B.jsxs)(ne.a,{row:!0,"aria-label":"region",id:"region",value:c,onChange:function(e){return o(e.target.value)},children:[Object(B.jsx)(ee.a,{value:"NTSC_U",control:Object(B.jsx)(te.a,{}),label:"NTSC-USA"}),Object(B.jsx)(ee.a,{value:"NTSC_J",control:Object(B.jsx)(te.a,{}),label:"NTSC-JPN"}),Object(B.jsx)(ee.a,{value:"PAL",control:Object(B.jsx)(te.a,{}),label:"PAL"}),Object(B.jsx)(ee.a,{value:"PAL_M",control:Object(B.jsx)(te.a,{}),label:"PAL-M"})]})]}),control:t,defaultValue:"NTSC_J",rules:Qe.region})})},$e=function(e){var t=e.handleResetScoreAttack;return Object(B.jsx)(o.a,{id:"reset",type:"button",variant:"contained",onClick:t,children:"Reset"})},et=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"score",as:Object(B.jsx)(ke.a,{id:"score",fullWidth:!0,required:!0,type:"number",label:"Total Score"}),control:t,defaultValue:"",rules:Qe.score})})},tt=function(e){var t=e.control;return Object(B.jsx)(Le.a,{name:"pose",as:Object(B.jsx)(ke.a,{id:"pose",fullWidth:!0,required:!0,type:"number",label:"Pose"}),control:t,defaultValue:"",rules:Qe.pose})},nt=function(e){var t=e.control;return Object(B.jsx)(Le.a,{name:"samePokemon",as:Object(B.jsx)(ke.a,{id:"samePokemon",fullWidth:!0,required:!0,type:"number",label:"Same Pok\xe9mon"}),control:t,defaultValue:"",rules:Qe.samePokemon})},at=function(e){var t=e.control;return Object(B.jsx)(Le.a,{name:"size",as:Object(B.jsx)(ke.a,{id:"size",fullWidth:!0,required:!0,type:"number",label:"Size"}),control:t,defaultValue:"",rules:Qe.size})},rt=function(e){var t=e.control;return Object(B.jsx)(Le.a,{name:"special",as:Object(B.jsx)(ke.a,{id:"special",fullWidth:!0,required:!0,type:"number",label:"Special"}),control:t,defaultValue:"",rules:Qe.special})},ct=function(e){var t=e.control;return Object(B.jsx)(ee.a,{style:A.formMultiOption,control:Object(B.jsx)(Le.a,{name:"isTechnique",control:t,render:function(e){return Object(B.jsx)(Ye.a,Object(F.a)(Object(F.a)({},e),{},{id:"isTechnique",checked:e.value,onChange:function(t){return e.onChange(t.target.checked)}}))},defaultValue:!1,rules:Qe.technique}),label:"Technique"})},ot=function(){return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",style:A.formScoreParts,children:Object(B.jsx)(qe.a,{component:"legend",children:"Score Parts"})})},it=function(e){var t=e.imageFile,n=Object(T.useState)(!1),r=Object(a.a)(n,2),c=r[0],j=r[1],b=function(){return j(!1)};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(u.a,{onClick:function(){return j(!0)},"aria-label":"link",children:Object(B.jsx)(h.a,{style:null===t?{}:A.green})}),Object(B.jsxs)(i.a,{open:c,onClose:b,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(s.a,{dividers:!0,children:Object(B.jsx)("img",{src:t,alt:"Proof Pic",width:"400",height:"300"})}),Object(B.jsx)(l.a,{children:Object(B.jsx)(o.a,{onClick:b,color:"primary",children:"Close"})})]})]})},lt=function(e){var t=e.filename;return Object(B.jsx)(M.a,{children:Object(B.jsx)(Q.a,{fontWeight:"fontWeightBold",children:t})})},st=function(e){var t=e.handleSubmitScoreAttack;return Object(B.jsx)(o.a,{id:"submit",variant:"contained",color:"primary",type:"submit",onClick:t,children:"Submit"})},jt=n(141),ut=n(27),bt=n(286),dt=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"takenOn",render:function(e){return Object(B.jsx)(ut.a,{utils:jt.a,children:Object(B.jsx)(bt.a,{autoOk:!0,margin:"normal",id:"takenOn",label:"Picture/Video Taken On",variant:"inline",format:"yyyy-MM-dd",onChange:e.onChange,selected:e.selected,value:e.value})})},onChange:function(e){return e},control:t,defaultValue:new Date(2020,0,1)})})},Ot=function(e){var t=e.control;return Object(B.jsx)($.a,{fullWidth:!0,variant:"outlined",children:Object(B.jsx)(Le.a,{name:"videoLink",as:Object(B.jsx)(ke.a,{id:"videoLink",label:"Video Link"}),control:t,defaultValue:"",rules:Qe.videoLink})})},ht=n(283),xt=n(217),mt=function(e){var t=e.children,n=e.value,a=e.index,r=Object(Me.a)(e,["children","value","index"]);return Object(B.jsx)("div",Object(F.a)(Object(F.a)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},r),{},{children:n===a&&Object(B.jsx)(Q.a,{p:3,children:Object(B.jsx)(M.a,{children:t})})}))},ft=function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}},gt=n(284),pt=n(289),vt=function(e){var t=e.generalRules,n=e.allCategoryRules,r=Object(T.useState)(!1),c=Object(a.a)(r,2),s=c[0],u=c[1],b=Object(T.useState)(0),d=Object(a.a)(b,2),O=d[0],h=d[1],x=function(){return u(!1)};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(o.a,{variant:"contained",size:"small",style:A.rulesButton,color:"primary",onClick:function(){return u(!0)},children:"Rules"}),Object(B.jsxs)(i.a,{open:s,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(B.jsx)(j.a,{id:"alert-dialog-title",children:"Rules"}),Object(B.jsxs)(pt.a,{value:O,onChange:function(e,t){return h(t)},"aria-label":"simple tabs example",children:[Object(B.jsx)(gt.a,Object(F.a)({label:"General Rules"},ft(0))),Object(B.jsx)(gt.a,Object(F.a)({label:"Category Rules"},ft(1)))]}),Object(B.jsx)(mt,{value:O,index:0,children:null===t||void 0===t?void 0:t.map((function(e){return Object(B.jsx)(M.a,{gutterBottom:!0,children:e})}))}),Object(B.jsx)(mt,{value:O,index:1,children:null===n||void 0===n?void 0:n.map((function(e){return Object(B.jsx)(M.a,{gutterBottom:!0,children:e})}))}),Object(B.jsx)(l.a,{children:Object(B.jsx)(o.a,{onClick:x,color:"primary",children:"Close"})})]})]})},kt=function(e){var t=e.type,n=e.handleLeaderboardChange,a=e.generalRules,r=e.allCategoryRules;return Object(B.jsxs)(ge.a,{"aria-label":"button group",children:[Object(B.jsx)(fe,{type:t,handleLeaderboardChange:n}),Object(B.jsx)(vt,{generalRules:a.get("rules"),allCategoryRules:r.get(t)})]})},Ct=n(140),At=n.n(Ct),St=n(139),yt=n.n(St),Et=function(e){var t=e.isVerified;return Object(B.jsxs)(Q.a,{children:[t&&Object(B.jsx)(yt.a,{style:A.green}),!t&&Object(B.jsx)(At.a,{color:"secondary"})]})},Rt=function(e){var t=e.scoreAttacks;return Object(B.jsx)(B.Fragment,{children:t.sort((function(e,t){return t.score-e.score})).map((function(e,n){var a=e.attacker,r=e.score,c=e.scoreParts,o=e.submittedOn,i=e.platform,l=e.proofLink,s=e.isVerified,j=e.notes;return Object(B.jsxs)(oe.a,{style:G(n),children:[Object(B.jsx)(X,{index:n,score:r,ranks:t.map((function(e,t){return e.score}))}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:["This is a platform"],label:Object(B.jsx)("strong",{children:a})})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:V(c),label:r})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:[null!==j&&void 0!==j?j:o],label:o})}),Object(B.jsx)(_,{name:Object(B.jsx)(D,{texts:["This is a platform"],label:i})}),Object(B.jsx)(_,{name:Object(B.jsx)(N,{proofLink:l})||"\u2014"}),Object(B.jsx)(_,{name:Object(B.jsx)(Et,{isVerified:s})})]})}))})},Vt=function(e){var t=e.scoreAttacks,n=e.isLoading;return function(e,t){return Object(B.jsxs)(de.a,{size:"small","aria-label":"a dense table",children:[Object(B.jsx)(he.a,{style:A.tableHead,children:Object(B.jsx)(se,{})}),Object(B.jsxs)(Oe.a,{children:[t&&Object(B.jsx)(be,{}),!t&&Object(B.jsx)(Rt,{scoreAttacks:e})]})]})}(t.map((function(e){return{id:e.id,attacker:e.userName,score:e.totalScore,scoreParts:{special:e.special,size:e.size,pose:e.pose,isTechnique:e.isTechnique,samePokemon:e.samePokemon},submittedOn:R(Object(r.a)(Date,Object(c.a)(e.submittedOn))),platform:"".concat(e.console," \u2022 ").concat(e.region),proofLink:e.proof,isVerified:e.isVerified,notes:e.notes}})),n)},Tt=n(142),It=n(18),Pt=n.n(It),Ut=(n(213),Object(Tt.a)());Pt.a.render(Object(B.jsxs)(I.a.StrictMode,{children:[Object(B.jsx)(Be.c,{history:Ut,children:Object(B.jsxs)(Be.d,{children:[Object(B.jsx)(Be.b,{path:"/attack",component:function(){var e=Object(Le.b)(),t=e.handleSubmit,n=e.control,r=e.reset,c=e.getValues,o=e.setValue,i=Object(T.useState)(null),l=Object(a.a)(i,2),s=l[0],j=l[1],u=Object(T.useState)(""),b=Object(a.a)(u,2),d=b[0],O=b[1],h=Object(T.useState)(K.POKEMON),x=Object(a.a)(h,2),m=x[0],f=x[1],g=Object(T.useState)(new Map),p=Object(a.a)(g,2),v=p[0],k=p[1],C=Object(T.useState)([]),S=Object(a.a)(C,2),y=S[0],E=S[1];Ne(k),Object(T.useEffect)((function(){var e;E(null!==(e=v.get(m))&&void 0!==e?e:[])}),[v,m]);return Object(B.jsxs)(Q.a,{id:"container",style:A.formBackground,children:[Object(B.jsx)(Ie,{}),Object(B.jsxs)(Q.a,{style:A.form,children:[Object(B.jsx)(ht.a,{}),Object(B.jsx)(we,{title:"High Score Submission"}),Object(B.jsx)(xt.a,{style:A.formPaper,children:Object(B.jsx)("form",{onSubmit:t((function(e){})),children:Object(B.jsxs)(Pe.a,{container:!0,children:[Object(B.jsx)(Pe.a,{container:!0,xs:6,direction:"column",children:Object(B.jsxs)(Pe.a,{xs:12,container:!0,alignItems:"flex-start",spacing:2,children:[Object(B.jsx)(Pe.a,{item:!0,xs:12,children:Object(B.jsx)(We,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:6,children:Object(B.jsx)(Je,{control:n,attackVariants:v,setType:f,setValue:o})}),Object(B.jsx)(Pe.a,{item:!0,xs:6,children:Object(B.jsx)(ze,{control:n,attackSubVariants:y,challengeValue:c("challenge")})})]})}),Object(B.jsxs)(Pe.a,{container:!0,xs:6,direction:"column",children:[Object(B.jsx)(Pe.a,{container:!0,spacing:0,alignItems:"center",children:Object(B.jsx)(Pe.a,{item:!0,children:Object(B.jsx)(_e,{control:n})})}),Object(B.jsxs)(Pe.a,{container:!0,spacing:1,children:[Object(B.jsx)(Pe.a,{item:!0,style:A.formMultiOption,children:Object(B.jsx)(De,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,children:Object(B.jsx)(Ze,{control:n})})]})]}),Object(B.jsx)(ot,{}),Object(B.jsxs)(Pe.a,{container:!0,xs:12,alignItems:"flex-start",spacing:2,children:[Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(et,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(rt,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(at,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(tt,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(nt,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(ct,{control:n})})]}),Object(B.jsxs)(Pe.a,{container:!0,xs:12,alignItems:"flex-start",spacing:2,children:[Object(B.jsx)(Pe.a,{item:!0,xs:5,style:A.formProof,children:Object(B.jsx)(Ot,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,xs:1,style:A.formProof,children:Object(B.jsx)(Xe,{control:n,onImageUpload:function(e){var t=e.target.files[0];O(t.name),function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))}(t).then((function(e){return j(e)}))}})}),Object(B.jsx)(Pe.a,{item:!0,xs:6,children:Object(B.jsx)(dt,{control:n})})]}),Object(B.jsx)(Pe.a,{item:!0,xs:12,children:Object(B.jsx)(He,{control:n})}),Object(B.jsx)(Pe.a,{item:!0,style:A.formButton,children:Object(B.jsx)($e,{handleResetScoreAttack:r})}),Object(B.jsx)(Pe.a,{item:!0,style:A.formButton,children:Object(B.jsx)(st,{handleSubmitScoreAttack:function(){var e=c(),t={userName:e.attacker,challengeName:e.challenge,region:e.region,console:e.console,isEmulated:e.isEmulated,totalScore:parseInt(e.score),score:parseInt(e.score),special:parseInt(e.special),size:parseInt(e.size),pose:parseInt(e.pose),samePokemon:parseInt(e.samePokemon),isTechnique:e.isTechnique,takenOn:R(e.takenOn),proof:null!==s&&void 0!==s?s:e.videoLink,notes:e.notes};re.a.post("https://hs-pkmnsnap.ngrok.io/scoreAttack",t).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))}})}),Object(B.jsx)(Pe.a,{item:!0,style:A.formImage,children:Object(B.jsx)(it,{imageFile:s})}),Object(B.jsx)(Pe.a,{item:!0,style:A.formFilename,children:Object(B.jsx)(lt,{filename:d})})]})})})]})]})}}),Object(B.jsx)(Be.b,{path:"/leaderboard",component:function(){var e,t,n=Object(Be.g)(),r=Object(Be.h)(),c=Ue.parse(r.search),o=c.variant,i=c.challenge,l=c.gameConsole,s=Object(T.useState)(null!==(e=o)&&void 0!==e?e:K.POKEMON),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(T.useState)(new Map),O=Object(a.a)(d,2),h=O[0],x=O[1],m=Object(T.useState)(new Map),f=Object(a.a)(m,2),g=f[0],p=f[1],v=Object(T.useState)([]),k=Object(a.a)(v,2),C=k[0],S=k[1],E=Object(T.useState)(new Map),R=Object(a.a)(E,2),V=R[0],I=R[1],P=Object(T.useState)([]),U=Object(a.a)(P,2),N=U[0],F=U[1],L=Object(T.useState)(null!==i&&void 0!==i?i:"Bulbasaur"),W=Object(a.a)(L,2),w=W[0],M=W[1],z=Object(T.useState)(!0),q=Object(a.a)(z,2),D=q[0],Y=q[1],Z=Object(T.useState)(null!==(t=l)&&void 0!==t?t:me.N64),J=Object(a.a)(Z,2),H=J[0],G=J[1];!function(e){Object(T.useEffect)((function(){re.a.get("data/generalRules.json").then((function(e){return e.data})).then((function(t){e(new Map(Object.entries(t)))}))}),[e])}(x),function(e){Object(T.useEffect)((function(){re.a.get("data/categoryRules.json").then((function(e){return e.data})).then((function(t){e(new Map(Object.entries(t)))}))}),[e])}(p),Fe(u,S),Ne(I),Object(T.useEffect)((function(){y(u);re.a.get("https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/".concat(w)).then((function(e){return e.data})).then((function(e){var t=new Set,n=e.filter((function(e){var n=e.userName;return!t.has(n)&&(t.add(n),!0)}));S(n)})).finally((function(){return Y(!1)})).finally((function(){var e;return F(null!==(e=V.get(u))&&void 0!==e?e:[])})).finally((function(){return M(null)})).finally((function(){return n.replace({search:"?variant=".concat(u,"&challenge=").concat(w,"&console=").concat(H)})}))}),[u,V]),Object(T.useEffect)((function(){y(u);re.a.get("https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/".concat(w,"/console/").concat(H)).then((function(e){return e.data})).then((function(e){var t=new Set,n=e.filter((function(e){var n=e.userName;return!t.has(n)&&(t.add(n),!0)}));S(n)})).finally((function(){return Y(!1)})).finally((function(){return n.replace({search:"?variant=".concat(u,"&challenge=").concat(w,"&console=").concat(H)})})).catch((function(e){return console.log(e)}))}),[w,H]);return Object(B.jsxs)(Q.a,{id:"container",style:A.leaderboardBackground,children:[Object(B.jsx)(Ie,{}),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ve,{type:u,attackSubVariant:w,gameConsole:H}),Object(B.jsxs)(Pe.a,{container:!0,alignItems:"center",children:[Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(Ae,{attackSubVariant:w,attackSubVariants:N,onSubVariantChange:function(e,t){M(t),Y(!0)}})}),Object(B.jsxs)(Pe.a,{item:!0,xs:8,children:[Object(B.jsx)(kt,{type:u,handleLeaderboardChange:function(e){b(e),Y(!0)},generalRules:h,allCategoryRules:g}),Object(B.jsx)(pe,{gameConsole:H,handleConsoleChange:function(e){G(e),Y(!0)}})]}),Object(B.jsx)(Pe.a,{item:!0,xs:2})]}),Object(B.jsxs)(Pe.a,{container:!0,alignItems:"center",children:[Object(B.jsx)(Pe.a,{item:!0,xs:2}),Object(B.jsx)(Pe.a,{item:!0,xs:8,children:Object(B.jsx)(Vt,{scoreAttacks:C,isLoading:D})}),Object(B.jsx)(Pe.a,{item:!0,xs:2})]})]})]})}}),Object(B.jsx)(Be.b,{path:"/admin",component:function(){var e,t,n=Object(Be.g)(),r=Object(Be.h)(),c=Ue.parse(r.search),o=c.variant,i=c.challenge,l=c.gameConsole,s=Object(T.useState)(null!==(e=o)&&void 0!==e?e:K.POKEMON),j=Object(a.a)(s,2),u=j[0],b=j[1],d=Object(T.useState)([]),O=Object(a.a)(d,2),h=O[0],x=O[1],m=Object(T.useState)(new Map),f=Object(a.a)(m,2),g=f[0],p=f[1],v=Object(T.useState)([]),k=Object(a.a)(v,2),C=k[0],S=k[1],E=Object(T.useState)(null!==i&&void 0!==i?i:"Bulbasaur"),R=Object(a.a)(E,2),V=R[0],I=R[1],P=Object(T.useState)(!0),U=Object(a.a)(P,2),N=U[0],F=U[1],L=Object(T.useState)(null!==(t=l)&&void 0!==t?t:me.N64),W=Object(a.a)(L,2),w=W[0],M=W[1],z=Object(T.useState)(),q=Object(a.a)(z,2),D=q[0],Y=q[1],Z=Object(T.useState)(),J=Object(a.a)(Z,2),H=J[0],G=J[1];Fe(u,x),Ne(p),Object(T.useEffect)((function(){y(u);re.a.get("https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/".concat(V)).then((function(e){return e.data})).then((function(e){return x(e)})).finally((function(){return F(!1)})).finally((function(){var e;return S(null!==(e=g.get(u))&&void 0!==e?e:[])})).finally((function(){return I(null)})).finally((function(){return n.replace({search:"?variant=".concat(u,"&challenge=").concat(V,"&console=").concat(w)})}))}),[u,g]),Object(T.useEffect)((function(){y(u);re.a.get("https://hs-pkmnsnap.ngrok.io/scoreAttack/challenge/".concat(V,"/console/").concat(w,"/notVerified")).then((function(e){return e.data})).then((function(e){return x(e)})).finally((function(){return F(!1)})).finally((function(){return n.replace({search:"?variant=".concat(u,"&challenge=").concat(V,"&console=").concat(w)})})).catch((function(e){return console.log(e)}))}),[V,w]);return Object(B.jsxs)(Q.a,{id:"container",style:A.leaderboardBackground,children:[Object(B.jsx)(Ie,{}),Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(ve,{type:u,attackSubVariant:V,gameConsole:w}),Object(B.jsxs)(Pe.a,{container:!0,alignItems:"center",children:[Object(B.jsxs)(Pe.a,{item:!0,xs:2,children:[Object(B.jsx)(ke.a,{required:!0,id:"standard-required",label:"Admin Name",onChange:function(e){return Y(e.target.value)}}),Object(B.jsx)(ke.a,{id:"standard-password-input",label:"Admin Password",type:"password",autoComplete:"current-password",onChange:function(e){return G(e.target.value)}})]}),Object(B.jsxs)(Pe.a,{item:!0,xs:8,children:[Object(B.jsx)(fe,{type:u,handleLeaderboardChange:function(e){b(e),F(!0)}}),Object(B.jsx)(pe,{gameConsole:w,handleConsoleChange:function(e){M(e),F(!0)}})]}),Object(B.jsx)(Pe.a,{item:!0,xs:2,children:Object(B.jsx)(Ae,{attackSubVariant:V,attackSubVariants:C,onSubVariantChange:function(e,t){I(t),F(!0)}})})]}),Object(B.jsxs)(Pe.a,{container:!0,alignItems:"center",children:[Object(B.jsx)(Pe.a,{item:!0,xs:1}),Object(B.jsx)(Pe.a,{item:!0,xs:10,children:Object(B.jsx)(xe,{scoreAttacks:h,isLoading:N,adminUsername:D,adminPassword:H})}),Object(B.jsx)(Pe.a,{item:!0,xs:1})]})]})]})}}),Object(B.jsx)(Be.a,{exact:!0,from:"/",to:"/leaderboard"})]})}),","]}),document.getElementById("root"))}},[[214,14,15]]]);
//# sourceMappingURL=main.424bf95c.chunk.js.map