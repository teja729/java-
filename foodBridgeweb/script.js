const donateBtn = document.getElementById('donateBtn') || document.getElementById('openDonate')
const modal = document.getElementById('donateModal')
const close = document.getElementById('closeModal')
const form = document.getElementById('donationForm')
const formMsg = document.getElementById('formMsg')
const donorList = document.getElementById('donorList')


if(donateBtn) donateBtn.addEventListener('click', ()=> modal.style.display='flex')
if(close) close.addEventListener('click', ()=> modal.style.display='none')
window.addEventListener('click', e=>{ if(e.target===modal) modal.style.display='none' })


form.addEventListener('submit', async (e)=>{
e.preventDefault()
formMsg.textContent = 'Sending...'
const data = new FormData(form)
try{
const res = await fetch('donate.php',{method:'POST',body:data})
const j = await res.json()
if(j.success){
formMsg.textContent = 'Thank you — donation recorded.'
form.reset()
modal.style.display='none'
loadDonors() // refresh list
} else {
formMsg.textContent = j.error || 'Something went wrong'
}
}catch(err){
formMsg.textContent = 'Network error'
}
})


async function loadDonors(){
try{
const res = await fetch('admin.php?list=1')
const j = await res.json()
donorList.innerHTML = ''
if(Array.isArray(j)){
j.forEach(d=>{
const el = document.createElement('div')
el.className = 'donor-card'
el.innerHTML = `<h4>${escapeHtml(d.donor_name)}</h4><p>${escapeHtml(d.description)}</p><small>${escapeHtml(d.meals)} meals — ${escapeHtml(d.address)}</small>`
if(d.image_path) el.innerHTML += `<div><img src="${escapeHtml(d.image_path)}" alt="photo" style="width:100%;border-radius:8px;margin-top:8px"></div>`
donorList.appendChild(el)
})
} else {
donorList.innerHTML = '<p>No donations yet.</p>'
}
}catch(e){ donorList.innerHTML = '<p>Cannot load donors.</p>' }
}


function escapeHtml(s){ if(!s) return ''; return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') }


// initial load
loadDonors()