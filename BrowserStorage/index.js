//BrowserStorage

//LocalStorage - save and can be delete from browser or cache
//SessionStorage - удаляется автоматически если открываем новую вкладку
//Cookies - можем управлять ими на стороне клиента и удалять добавив время когда мы хотим что-бы они удалились

//example of cookie client-side
window.addEventListener('load', function(){
  let cookieBtn = document.querySelector('.cookie button');
  let cookieBlock = document.querySelector('.cookie');

  function setCookie(){
    document.cookie = 'cookie=cookieNotification; max-age='+3600*24*365; // one year
    try {
      if(document.cookie){
        cookieBlock.classList.add('hide');
      }
    }catch (e) {
      console.log(e.message);
    }
  }

  function checkCookie(){
    let checkCookie = document.cookie.includes('cookie=cookieNotification');
    if(!checkCookie){
      setTimeout(() => {
        cookieBlock.classList.add('show')
      }, 3000);
    }
  }

  if(navigator.cookieEnabled && typeof window.localStorage){
    cookieBtn.addEventListener('click', setCookie);
    checkCookie();
  }
});
