import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),m=t.elements.email,r=t.elements.message,s="feedback-form-state",a=JSON.parse(localStorage.getItem(s));a&&(r.value=a.message??"",m.value=a.email??"",e.email=a.email,e.message=a.message);t.addEventListener("input",l=>{e.email=m.value.trim(),e.message=r.value.trim(),localStorage.setItem(s,JSON.stringify(e))});t.addEventListener("submit",l=>{if(l.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(s),t.reset(),e.email="",e.message=""});
//# sourceMappingURL=2-form.js.map
