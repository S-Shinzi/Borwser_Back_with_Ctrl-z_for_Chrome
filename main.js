window.addEventListener('keydown', event => {
  if(event.ctrlKey) {
    if(event.code === "KeyZ"){
        window.history.back();
    }
  }
});