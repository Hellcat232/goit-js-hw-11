import{i as u,S as p}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),l=document.querySelector(".gallery"),m=document.querySelector("input"),a=document.querySelector(".loader"),f=()=>{a.style.display="block"};c.addEventListener("submit",s=>{f(),s.preventDefault(),l.innerHTML="";const n="41249104-77dc8b1e0563744cb8297ef15",i=m.value;fetch(`https://pixabay.com/api/?key=${n}&q=${encodeURIComponent(i)}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0)u.error({title:"",backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=o.hits.map(r=>`<li class="gallery-item"><a href="${r.webformatURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"></a>
          <p><b>Likes: </b>${r.likes}</p>
          <p><b>Views: </b>${r.views}</p>
          <p><b>Comments: </b>${r.comments}</p>
          <p><b>Downloads: </b>${r.downloads}</p>
          </li>`).join("");l.insertAdjacentHTML("afterbegin",e);const t=new p(".gallery a",y);t.on("show.simplelightbox"),t.refresh(),c.reset()}}).catch(o=>{console.log(o)}).finally(()=>{a.style.display="none"})});const y={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
