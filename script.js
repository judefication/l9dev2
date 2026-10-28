
var L9_FORM_KEY="";/* paste your free Web3Forms access key here */
document.documentElement.classList.remove('nojs');
var mb=document.getElementById('mb'),nv=document.getElementById('nv');
mb.onclick=function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
var dd=document.querySelector('.dd'),sb=dd.querySelector('.sb');
sb.onclick=function(){var o=dd.classList.toggle('open');sb.setAttribute('aria-expanded',o)};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){dd.classList.remove('open');nv.classList.remove('open')}});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
var HS={design:'Design: supply chains shaped around each product’s requirements, not a one-size model.',connect:'Connect: partners, providers and systems brought into one coordinated workflow.',visibility:'Visibility: relevant information made accessible where systems and data allow.',improve:'Improve: continuous refinement of workflows, resources and technology.'};
document.querySelectorAll('.hs button').forEach(function(b){b.onclick=function(){
document.querySelectorAll('.hs button').forEach(function(x){x.setAttribute('aria-pressed',x===b);});
document.querySelectorAll('.nd').forEach(function(n){n.classList.toggle('on',n.dataset.n===b.dataset.n)});
document.getElementById('hst').textContent=HS[b.dataset.n]}});
document.querySelectorAll('.nd').forEach(function(n){n.onclick=function(){document.querySelector('.hs [data-n='+n.dataset.n+']').click()}});
var f=document.getElementById('cf');
if(f){f.addEventListener('submit',function(e){e.preventDefault();var s=document.getElementById('fs'),ok=true;
f.querySelectorAll('[required]').forEach(function(i){var m=i.nextElementSibling,bad=!i.checkValidity();i.setAttribute('aria-invalid',bad);if(m&&m.className=='err')m.textContent=bad?'Please complete this field correctly.':'';if(bad)ok=false});
if(!ok){s.className='bad';s.textContent='Please correct the highlighted fields.';f.querySelector('[aria-invalid=true]').focus();return}
if(!L9_FORM_KEY){s.className='bad';s.textContent='This form is not yet connected to an inbox, so your enquiry was not sent. Please try again later.';return}
var b=f.querySelector('button');b.disabled=true;var d=new FormData(f);d.append('access_key',L9_FORM_KEY);d.append('subject','New L9 website enquiry');
fetch('https://api.web3forms.com/submit',{method:'POST',body:d}).then(function(r){return r.json()}).then(function(j){
if(j.success){s.className='ok';s.textContent='Thank you for contacting L9 Logistics. Your enquiry has been submitted. Our team will review the information provided and follow up using the contact details supplied.';f.reset()}else throw 0}).catch(function(){s.className='bad';s.textContent='Something went wrong and your enquiry was not sent. Please try again.'}).finally(function(){b.disabled=false})})}
