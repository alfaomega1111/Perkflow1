const form=document.getElementById('leadForm');
form?.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const topic=document.getElementById('topic').value.trim();
 if(!name||!topic)return;
 const message=`Здравствуйте! Меня зовут ${name}.\nТематика канала: ${topic}.\n\nХочу обсудить привлечение целевых подписчиков и тестовую рассылку.`;
 const url='https://t.me/kenelmoder?text='+encodeURIComponent(message);
 document.getElementById('formStatus').textContent='Открываем Telegram с подготовленным сообщением…';
 window.open(url,'_blank','noopener,noreferrer');
});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{
 let nav=document.querySelector('.mobile-panel');
 if(!nav){nav=document.createElement('div');nav.className='mobile-panel';nav.innerHTML='<a href="#result">Кейс</a><a href="#process">Как работаем</a><a href="#why">Почему мы</a><a href="faq.html">Частые вопросы ↗</a><a href="#contact">Оставить заявку ↗</a>';document.querySelector('.topbar').after(nav)}
 nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'×':'☰';
});
/* ВИДЕО: чтобы добавить ролик, замени блок .video-frame в index.html на iframe YouTube/VK или video с собственным файлом. */
