var C=Object.defineProperty;var E=(o,t,e)=>t in o?C(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var s=(o,t,e)=>(E(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}})();function a(o,t={}){const e=document.createElement(o);if(e.id=t.id?t.id:e.id,e.className=t.className?t.className:e.className,t.style)for(const i of Object.entries(t.style))e.style[i[0]]=i[1];if(t.attributes)for(const i of Object.entries(t.attributes))e[i[0]]=i[1];return e}function g(o){if(Number.isNaN(o))return"";let t="",e="",i="";return o<=60?(e="00",o<10?t=`0${Math.floor(o)}`:t=`${Math.floor(o)}`,e+":"+t):o<=60*60?(o/=60,Math.floor(o)<10?e=`0${Math.floor(o)}`:e=`${Math.floor(o)}`,(o-Math.floor(o))*60<10?t=`0${Math.floor((o-Math.floor(o))*60)}`:t=`${Math.floor((o-Math.floor(o))*60)}`,e+":"+t):(i=`${Math.floor(o/(60*60))}`,i+":"+g((o/(60*60)-Math.floor(o/(60*60)))*60*60))}class N{constructor(){s(this,"bottomTitleContainer",a("div",{id:"bottom-title-section"}))}getContainer(){return this.bottomTitleContainer}updateTitle(t){this.bottomTitleContainer.textContent=t||"PR Media Player"}}const y=new N;class b{constructor(){s(this,"container",a("div",{id:"loading-indicator"}));s(this,"loadingIndicatorElement",a("div"));this.loadingIndicatorElement.textContent="Loading!",this.container.appendChild(this.loadingIndicatorElement),this.loadEnd()}getContainer(){return this.container}loadStart(){this.container.style.display="flex"}loadEnd(){this.container.style.display="none"}}const v=new b;class x{constructor(){s(this,"videoNavigationContainer",a("div",{id:"video-navigation-container"}));s(this,"videoNavigationElement",a("div",{id:"video-navigation-element"}));s(this,"elapsedTimeIndicator",a("div",{id:"elapsed-time-indocator"}));s(this,"currentTimeElement",a("div",{className:"time"}));s(this,"durationElement",a("div",{className:"time"}));s(this,"videoNavigationVideoElement",a("video",{style:{display:"none",position:"absolute",height:"100px",width:"100px"}}));s(this,"previewTimeElement",a("span",{id:"preview-time"}));s(this,"videoNavigationCanvas",a("canvas",{id:"preview-video-canvas"}));this.videoNavigationContainer.appendChild(this.currentTimeElement),this.videoNavigationElement.appendChild(this.elapsedTimeIndicator),this.videoNavigationContainer.appendChild(this.videoNavigationElement),this.videoNavigationContainer.appendChild(this.durationElement),this.currentTimeElement.textContent="00:00",this.durationElement.textContent="00:00",document.body.appendChild(this.previewTimeElement),document.body.appendChild(this.videoNavigationCanvas),document.body.appendChild(this.videoNavigationVideoElement),this.initMouseMoveEvent(),this.initClickEvent(),this.videoNavigationCanvas.width=200,this.videoNavigationCanvas.height=150}getContainer(){return this.videoNavigationContainer}attachVideoNavigationToVideo(t){this.videoNavigationVideoElement.muted=!0,this.videoNavigationVideoElement.src=t,this.videoNavigationVideoElement.play()}setDuration(t){this.durationElement.textContent=g(t)}updateCurrentTime(t){this.currentTimeElement.textContent=g(t);const e=t/d.getVideoElement().duration*100+"%";this.elapsedTimeIndicator.style.width=e}initMouseMoveEvent(){this.videoNavigationElement.onmousemove=t=>{if(Number.isNaN(d.getVideoElement().duration))return;const{width:e,x:i}=this.videoNavigationElement.getBoundingClientRect(),n=(t.clientX-i)/e,l=this.videoNavigationVideoElement.duration;this.previewTimeElement.style.display="block",this.previewTimeElement.style.left=t.clientX+10+"px",this.previewTimeElement.style.top=t.clientY+10+"px",this.previewTimeElement.textContent=g(n*l),this.videoNavigationVideoElement.currentTime=n*l;const r=this.videoNavigationCanvas.getContext("2d");r==null||r.drawImage(this.videoNavigationVideoElement,0,0,this.videoNavigationCanvas.width,this.videoNavigationCanvas.height),this.videoNavigationCanvas.style.display="block",t.clientX>=window.innerWidth-200?this.videoNavigationCanvas.style.left=window.innerWidth-200-10+"px":this.videoNavigationCanvas.style.left=t.clientX-10+"px",this.videoNavigationCanvas.style.top=t.clientY-this.videoNavigationCanvas.height-10+"px"},this.videoNavigationElement.onmouseleave=()=>{this.previewTimeElement.style.display="none",this.videoNavigationCanvas.style.display="none"},this.videoNavigationElement.onmouseenter=this.videoNavigationElement.onmousemove}initClickEvent(){this.videoNavigationElement.onclick=t=>{if(Number.isNaN(d.getVideoElement().duration))return;const{width:e,x:i}=this.videoNavigationElement.getBoundingClientRect(),n=(t.clientX-i)/e,l=d.getVideoElement(),r=l.duration;l.currentTime=n*r}}}const u=new x;class B{constructor(){s(this,"videoElement",a("video",{id:"video",attributes:{autoplay:"true"}}));s(this,"videoContainer",a("div",{id:"video-container"}));this.videoContainer.appendChild(this.videoElement),this.initializeDropEvents(),this.videoElement.onloadedmetadata=()=>{u.setDuration(this.videoElement.duration)},this.videoElement.ontimeupdate=()=>{u.updateCurrentTime(this.videoElement.currentTime)},this.videoElement.onended=()=>{p.playButton.className="fa fa-play",c.next()},this.videoElement.onplay=()=>{var t;p.playButton.className="fa fa-pause",document.title=((t=c.currentPlayingSong)==null?void 0:t.title)+" - PR Media Player",u.attachVideoNavigationToVideo(this.videoElement.src)},this.videoElement.onpause=()=>{p.playButton.className="fa fa-play"}}getVideoContainer(){return this.videoContainer}getVideoElement(){return this.videoElement}play(t){this.videoElement.src=t.url,y.updateTitle(t.title)}togglePause(t){var e;y.updateTitle((e=c.currentPlayingSong)==null?void 0:e.title),this.videoElement.paused?(this.videoElement.src||c.currentPlayingSong&&(this.play(c.currentPlayingSong),t.className="fa fa-pause"),this.videoElement.play().then(()=>{t.className="fa fa-pause"})):(d.videoElement.pause(),t.className="fa fa-play")}initializeDropEvents(){this.videoContainer.addEventListener("dragenter",function(t){t.preventDefault(),t.stopPropagation()}),this.videoContainer.addEventListener("dragleave",function(t){t.preventDefault(),t.stopPropagation()}),this.videoContainer.addEventListener("dragover",function(t){t.preventDefault(),t.stopPropagation()}),this.videoContainer.addEventListener("drop",t=>{var e;if(t.preventDefault(),t.stopPropagation(),t.dataTransfer)for(const i of(e=t.dataTransfer)==null?void 0:e.files){const n=new FileReader,l=i.name;n.onloadend=()=>{const r=URL.createObjectURL(new Blob([n.result]));this.videoElement.src=r,y.updateTitle(l),c.play(c.add({title:l,url:r})),v.loadEnd()},n.onloadstart=()=>{v.loadStart()},n.readAsArrayBuffer(i)}})}}const d=new B;class P{constructor(){s(this,"playlistElement",a("div",{id:"playlist-element"}));s(this,"isRepeated",!1);s(this,"currentPlayingSong");s(this,"playList",[]);s(this,"isFirst",t=>t===0);s(this,"isLast",t=>t===this.playList.length-1);this.initializeDropEvents()}getPlaylistElement(){return this.playlistElement}play(t){this.currentPlayingSong=t,d.play(t);for(let e=0;e<this.playList.length;e++)this.playList[e]===this.currentPlayingSong?this.playlistElement.children.item(e).className="playlist-item selected":this.playlistElement.children.item(e).className="playlist-item"}stop(){this.currentPlayingSong=void 0,d.getVideoElement().src=""}prev(){if(!this.currentPlayingSong)return;let t=this.currentPlayingSong.trackNumber;this.isRepeated?this.play(this.playList[t]):this.isFirst(t)?this.play(this.playList[this.playList.length-1]):this.play(this.playList[t-1]),d.getVideoElement().src=this.playList[t-1].url}next(){if(!this.currentPlayingSong)return;let t=this.currentPlayingSong.trackNumber;this.isRepeated?this.play(this.playList[t]):this.isLast(t)?this.play(this.playList[0]):this.play(this.playList[t+1])}add(t){let e=this.playList.length,i={title:t.title,url:t.url,trackNumber:e};return this.playList.push(i),this.addPlaylistItemToDOM(i),i}addPlaylistItemToDOM(t,e){const i=a("div",{className:"playlist-item",id:t.title}),n=a("span",{className:"track-title"});n.textContent=this.playList.length+". "+t.title;const l=a("span",{style:{width:"30px",height:"100%",background:"linear-gradient(to right, rgba(68, 68, 68, 0.2), rgba(68, 68, 68, 0.8))",position:"relative",left:"-30px"}}),r=a("span",{className:"playlist-delete-item"});r.textContent="x",i.appendChild(n),i.appendChild(l),i.appendChild(r),e&&(i.style.backgroundColor=e),this.playlistElement.appendChild(i),i.ondblclick=()=>{this.play(t)},r.onclick=()=>{for(let h=0;h<this.playList.length;h++)this.playList[h]===t&&this.playList.splice(h,1);i.remove(),this.updateTrackNumberInTheDOM()}}updateTrackNumberInTheDOM(){for(let t=0;t<this.playlistElement.children.length;t++){const e=this.playlistElement.children[t];e.children.item(0).textContent=`${t+1}. ${this.playList[t].title}`}}remove(t){this.playList.forEach((e,i)=>{t.url===e.url&&this.playList.splice(i,1),this.playList.forEach((n,l)=>{n.trackNumber=l})})}repeatOne(){const t=p.repeatButton;this.isRepeated?(this.isRepeated=!1,t.style.color="rgba(128, 128, 128, 0.897)",t.style.background="linear-gradient(to bottom, rgb(98, 98, 98), rgb(27, 27, 27), rgba(0, 0, 0, 0.568))"):(this.isRepeated=!0,t.style.color="black",t.style.background="rgba(128, 128, 128, 0.897)")}initializeDropEvents(){this.playlistElement.addEventListener("dragenter",function(t){t.preventDefault(),t.stopPropagation()}),this.playlistElement.addEventListener("dragleave",function(t){t.preventDefault(),t.stopPropagation()}),this.playlistElement.addEventListener("dragover",function(t){t.preventDefault(),t.stopPropagation()}),this.playlistElement.addEventListener("drop",t=>{var e;if(t.preventDefault(),t.stopPropagation(),t.dataTransfer)for(const i of(e=t.dataTransfer)==null?void 0:e.files){const n=new FileReader,l=i.name;n.onloadend=()=>{const r=URL.createObjectURL(new Blob([n.result])),h=this.add({title:l,url:r});this.currentPlayingSong=!this.currentPlayingSong&&h||this.currentPlayingSong,v.loadEnd()},n.onloadstart=()=>{v.loadStart()},n.readAsArrayBuffer(i)}})}}const c=new P;class w{constructor(){s(this,"controlsContainer",a("div",{id:"controls-container"}));s(this,"playButton",a("button",{className:"fa fa-play"}));s(this,"prevButton",a("button",{className:"fa fa-fast-backward"}));s(this,"stopButton",a("button",{className:"fa fa-stop"}));s(this,"nextButton",a("button",{className:"fa fa-fast-forward"}));s(this,"menuButton",a("button",{className:"fa fa-list"}));s(this,"repeatButton",a("button",{className:"fa fa-retweet"}));s(this,"volumeControl",a("span",{id:"volume-control"}));s(this,"toggleMuteButton",a("div",{className:"fa fa-volume-up",style:{color:"grey",position:"relative",left:"22px",padding:"0px",top:"5px",width:"20px"}}));s(this,"volumeElement",a("div",{style:{fontSize:"12px",position:"relative",color:"grey",backgroundColor:"transparent",height:"fit-content",zIndex:"30",left:"25px",top:"-5px"}}));this.activatePlayButton(),this.activatePrevButton(),this.activateStopButton(),this.activateNextButton(),this.activateMenuButton(),this.activateRepeatButton(),this.activateToggleMuteButton(),this.controlsContainer.appendChild(this.volumeElement),this.activatevolumeControl()}getContainer(){return this.controlsContainer}activateToggleMuteButton(){this.controlsContainer.appendChild(this.toggleMuteButton),this.toggleMuteButton.onclick=()=>{d.getVideoElement().muted?(d.getVideoElement().muted=!1,this.toggleMuteButton.className="fa fa-volume-up",this.toggleMuteButton.style.color="grey"):(d.getVideoElement().muted=!0,this.toggleMuteButton.className="fa fa-volume-off",this.toggleMuteButton.style.color="#f22f")}}activatevolumeControl(){this.controlsContainer.appendChild(this.volumeControl);const t=a("div");this.volumeControl.appendChild(t);const e=a("div",{style:{backgroundColor:"#000a",color:"#ffff",position:"absolute",display:"none",zIndex:"20"}});document.body.appendChild(e),t.style.height="100%",t.style.background="linear-gradient(to right, #dfdf, #7f7f, #2a2f, #2a2f)",t.style.width=d.getVideoElement().volume*100+"%",this.volumeElement.textContent="100%",this.volumeControl.onclick=i=>{const n=this.volumeControl.getBoundingClientRect().x,l=this.volumeControl.getBoundingClientRect().width,r=(i.clientX-n)/l;d.getVideoElement().volume=r,this.volumeElement.textContent=Math.ceil(r*100)+"%",t.style.width=Math.ceil(r*100)+"%"},this.volumeControl.onmousemove=i=>{e.style.display="block",e.style.left=i.clientX+"px",e.style.top=i.clientY-20+"px";const n=this.volumeControl.getBoundingClientRect().x,l=this.volumeControl.getBoundingClientRect().width,r=(i.clientX-n)/l;e.textContent=Math.ceil(r*100)+"%"},this.volumeControl.onmouseleave=()=>{e.style.display="none"}}activatePlayButton(){this.controlsContainer.appendChild(this.playButton),this.playButton.onclick=()=>{d.togglePause(this.playButton)}}activatePrevButton(){this.controlsContainer.appendChild(this.prevButton),this.prevButton.onclick=()=>{c.prev()}}activateStopButton(){this.controlsContainer.appendChild(this.stopButton),this.stopButton.onclick=()=>{u.updateCurrentTime(0),c.stop(),this.playButton.className="fa fa-play"}}activateNextButton(){this.controlsContainer.appendChild(this.nextButton),this.nextButton.onclick=()=>{c.next()}}activateRepeatButton(){this.controlsContainer.appendChild(this.repeatButton),this.repeatButton.onclick=()=>{c.repeatOne()}}activateMenuButton(){this.controlsContainer.appendChild(this.menuButton),this.menuButton.onclick=()=>{c.getPlaylistElement().style.display!=="none"?(c.getPlaylistElement().style.display="none",d.getVideoContainer().style.justifyContent="center",d.getVideoContainer().style.flex="1",d.getVideoContainer().style.width="",d.getVideoElement().style.width="100%",d.getVideoElement().style.height="100%"):(c.getPlaylistElement().style.display="flex",d.getVideoContainer().style.justifyContent="flex-end",d.getVideoElement().style.height="",d.getVideoContainer().style.width="250px",d.getVideoContainer().style.flex="")}}}const p=new w,f=a("div",{style:{display:"flex",flexDirection:"row",flex:"1",maxWidth:"100vw",width:"100%",height:"auto"}});f.appendChild(d.getVideoContainer());f.appendChild(c.getPlaylistElement());const T={backgroundColor:"#555f",width:"100vw",height:"100vh",overflow:"hidden",maxHeight:"100vh",display:"flex",flexDirection:"column"},m=a("div",{id:"video-player",style:T});m.appendChild(f);m.appendChild(u.getContainer());m.appendChild(p.getContainer());m.appendChild(y.getContainer());document.body.appendChild(m);document.body.appendChild(v.getContainer());
