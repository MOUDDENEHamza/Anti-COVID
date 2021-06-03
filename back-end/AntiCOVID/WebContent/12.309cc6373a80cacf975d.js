(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{BjQp:function(t,e,r){"use strict";r.r(e),r.d(e,"ContactModule",function(){return N});var n=r("ofXK"),a=r("3Pt+"),o=r("Wp6s"),c=r("kmnG"),i=r("qFsG"),s=r("bTqV"),b=r("NFeN"),l=r("0IaG"),m=r("tyNb"),d=r("fXoL");let u=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Ib({type:t,selectors:[["app-failed-sending-email"]],decls:9,vars:0,consts:[["mat-dialog-title",""],["src","../../../assets/failed.png","alt","Success","width","25px","height","25px"],[1,"mat-typography"],["mat-button","","mat-dialog-close",""]],template:function(t,e){1&t&&(d.Ub(0,"h2",0),d.Pb(1,"img",1),d.Dc(2," Failed\n"),d.Tb(),d.Ub(3,"mat-dialog-content",2),d.Ub(4,"h3"),d.Dc(5,"Something bad happened, please try again later."),d.Tb(),d.Tb(),d.Ub(6,"mat-dialog-actions"),d.Ub(7,"button",3),d.Dc(8,"Close"),d.Tb(),d.Tb())},directives:[l.g,l.e,l.c,s.b,l.d],styles:[""]}),t})(),p=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d.Ib({type:t,selectors:[["app-success-sending-email"]],decls:9,vars:0,consts:[["mat-dialog-title",""],["src","../../../assets/success.png","alt","Success","width","25px","height","25px"],[1,"mat-typography"],["mat-button","","mat-dialog-close",""]],template:function(t,e){1&t&&(d.Ub(0,"h2",0),d.Pb(1,"img",1),d.Dc(2," Success\n"),d.Tb(),d.Ub(3,"mat-dialog-content",2),d.Ub(4,"h3"),d.Dc(5,"Your email has been sent with success"),d.Tb(),d.Tb(),d.Ub(6,"mat-dialog-actions"),d.Ub(7,"button",3),d.Dc(8,"Close"),d.Tb(),d.Tb())},directives:[l.g,l.e,l.c,s.b,l.d],styles:[""]}),t})();var f=r("z6cu"),g=r("JIr8"),h=r("tk/3");class U{constructor(t,e,r,n,a){this.firstName=t,this.lastName=e,this.email=r,this.subject=n,this.content=a}}let T=(()=>{class t{constructor(t){this.http=t,this.baseURL="http://localhost:8080/AntiCOVID/rest/"}handleError(t){return t.status>=400?(t.error instanceof ErrorEvent?console.error("An error occurred:",t.error.message):console.error(`Backend returned code ${t.status}, body was: ${t.error}`),Object(f.a)("Something bad happened; please try again later.")):0===t.status?Object(f.a)("Error while connect to server"):"o"}sendEmail(t,e,r,n,a){const o=JSON.stringify(new U(t,e,r,n,a));return this.http.post(this.baseURL+"contact",o,{headers:{"content-type":"application/json"}}).pipe(Object(g.a)(this.handleError))}}return t.\u0275fac=function(e){return new(e||t)(d.Yb(h.a))},t.\u0275prov=d.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function C(t,e){if(1&t&&(d.Ub(0,"mat-error"),d.Dc(1),d.Tb()),2&t){const t=d.fc();d.Cb(1),d.Ec(t.getErrorMessage("firstName"))}}function w(t,e){if(1&t&&(d.Ub(0,"mat-error"),d.Dc(1),d.Tb()),2&t){const t=d.fc();d.Cb(1),d.Ec(t.getErrorMessage("lastName"))}}function v(t,e){if(1&t&&(d.Ub(0,"mat-error"),d.Dc(1),d.Tb()),2&t){const t=d.fc();d.Cb(1),d.Ec(t.getErrorMessage("email"))}}function E(t,e){if(1&t&&(d.Ub(0,"mat-error"),d.Dc(1),d.Tb()),2&t){const t=d.fc();d.Cb(1),d.Ec(t.getErrorMessage("subject"))}}function I(t,e){if(1&t&&(d.Ub(0,"mat-error"),d.Dc(1),d.Tb()),2&t){const t=d.fc();d.Cb(1),d.Ec(t.getErrorMessage("content"))}}const y=[{path:"",component:(()=>{class t{constructor(t,e){this.contactService=t,this.dialog=e,this.title="Contact"}ngOnInit(){this.contactForm=new a.d({firstName:new a.b("",[a.m.required]),lastName:new a.b("",[a.m.required]),email:new a.b("",[a.m.required,a.m.email]),subject:new a.b("",[a.m.required]),content:new a.b("",[a.m.required])})}getErrorMessage(t){return this.contactForm.get(t).hasError("required")?"You should fill this field.":this.contactForm.get(t).hasError("email")?"Not a valid email":void 0}enable(){return this.contactForm.invalid}onSubmit(){this.contactService.sendEmail(this.contactForm.get("firstName").value,this.contactForm.get("lastName").value,this.contactForm.get("email").value,this.contactForm.get("subject").value,this.contactForm.get("content").value).subscribe(t=>{console.log(t),this.dialog.open(p)},t=>{this.dialog.open(u)}),this.ngOnInit()}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(T),d.Ob(l.b))},t.\u0275cmp=d.Ib({type:t,selectors:[["app-contact"]],decls:42,vars:8,consts:[[1,"wrapper"],[1,"container"],[3,"formGroup"],["appearance","fill",1,"meduimField"],["matInput","","placeholder","Marine","formControlName","firstName","required",""],[4,"ngIf"],["matInput","","placeholder","Dupont","formControlName","lastName","required",""],["appearance","fill",1,"largeField"],["matInput","","placeholder","xyz@gmail.com","formControlName","email","required",""],["matInput","","placeholder","Informations","formControlName","subject","required",""],["matInput","","placeholder","Write your message here...","formControlName","content","required",""],["mat-raised-button","","color","primary",3,"disabled","click"],["aria-hidden","false","aria-label","Example email icon"]],template:function(t,e){1&t&&(d.Ub(0,"div",0),d.Ub(1,"mat-card",1),d.Ub(2,"h1"),d.Dc(3),d.Tb(),d.Ub(4,"form",2),d.Ub(5,"mat-form-field",3),d.Ub(6,"mat-label"),d.Dc(7,"First name"),d.Tb(),d.Ub(8,"label"),d.Pb(9,"input",4),d.Tb(),d.Bc(10,C,2,1,"mat-error",5),d.Tb(),d.Ub(11,"mat-form-field",3),d.Ub(12,"mat-label"),d.Dc(13,"Last name"),d.Tb(),d.Ub(14,"label"),d.Pb(15,"input",6),d.Tb(),d.Bc(16,w,2,1,"mat-error",5),d.Tb(),d.Pb(17,"br"),d.Ub(18,"mat-form-field",7),d.Ub(19,"mat-label"),d.Dc(20,"Email"),d.Tb(),d.Ub(21,"label"),d.Pb(22,"input",8),d.Tb(),d.Bc(23,v,2,1,"mat-error",5),d.Tb(),d.Pb(24,"br"),d.Ub(25,"mat-form-field",7),d.Ub(26,"mat-label"),d.Dc(27,"Subject"),d.Tb(),d.Ub(28,"label"),d.Pb(29,"input",9),d.Tb(),d.Bc(30,E,2,1,"mat-error",5),d.Tb(),d.Pb(31,"br"),d.Ub(32,"mat-form-field",7),d.Ub(33,"mat-label"),d.Dc(34,"Content"),d.Tb(),d.Ub(35,"label"),d.Pb(36,"textarea",10),d.Tb(),d.Bc(37,I,2,1,"mat-error",5),d.Tb(),d.Tb(),d.Ub(38,"button",11),d.bc("click",function(){return e.onSubmit()}),d.Ub(39,"mat-icon",12),d.Dc(40,"email"),d.Tb(),d.Dc(41," Send "),d.Tb(),d.Tb(),d.Tb()),2&t&&(d.Cb(3),d.Ec(e.title),d.Cb(1),d.kc("formGroup",e.contactForm),d.Cb(6),d.kc("ngIf",e.contactForm.get("firstName").invalid),d.Cb(6),d.kc("ngIf",e.contactForm.get("lastName").invalid),d.Cb(7),d.kc("ngIf",e.contactForm.get("email").invalid),d.Cb(7),d.kc("ngIf",e.contactForm.get("subject").invalid),d.Cb(7),d.kc("ngIf",e.contactForm.get("content").invalid),d.Cb(1),d.kc("disabled",e.enable()))},directives:[o.a,a.n,a.i,a.e,c.c,c.f,i.a,a.a,a.h,a.c,a.l,n.l,s.b,b.a,c.b],styles:[".wrapper[_ngcontent-%COMP%]{background-color:#f5f5f5;padding:50px;text-align:center}.container[_ngcontent-%COMP%]{width:60%;padding:50px;background-color:#fff;margin:auto}h1[_ngcontent-%COMP%]{font-size:56px;font-weight:300;line-height:56px;margin:50px;text-align:center}form[_ngcontent-%COMP%]{width:100%;padding-top:50px;padding-bottom:50px}mat-form-field[_ngcontent-%COMP%]{margin:10px}.largeField[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:425px}"]}),t})()}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({imports:[[m.c.forChild(y)],m.c]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({imports:[[n.c,F,a.k,o.f,c.e,i.b,s.c,b.b,l.f]]}),t})()}}]);