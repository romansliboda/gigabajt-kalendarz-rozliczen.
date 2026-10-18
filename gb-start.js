/* GB v2.5: samodzielny ekran startowy, bez zmian w logice kalendarza */
(()=>{
  const splash=document.createElement('div');splash.id='gb-splash';splash.setAttribute('role','dialog');splash.setAttribute('aria-label','Ekran powitalny GB Kalendarz rozliczeń');
  const picture=document.createElement('img');picture.src='gb-ekran-startowy.png?v=2.5.0';picture.alt='GB Kalendarz rozliczeń — ekran powitalny';
  const skip=document.createElement('button');skip.id='gb-splash-skip';skip.type='button';skip.textContent='Pomiń ›';
  splash.append(picture,skip);document.body.appendChild(splash);
  let done=false;let timer;
  function close(){if(done)return;done=true;clearTimeout(timer);splash.classList.add('gb-splash-out');setTimeout(()=>splash.remove(),420)}
  skip.addEventListener('click',close);
  picture.addEventListener('error',close);
  timer=setTimeout(close,3200);
})();
