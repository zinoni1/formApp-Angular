"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[182],{3182:(K,h,o)=>{o.r(h),o.d(h,{AuthModule:()=>X});var c=o(6814),p=o(1643),l=o(95),e=o(4946);let y=(()=>{class s{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.cantBeStrider=t=>"strider"===t.value.trim().toLowerCase()?{noStrider:!0}:null}isFieldOneEqualFieldTwo(t,r){return i=>{const a=i.get(t)?.value,m=i.get(r)?.value;return a!==m?(i.get(r)?.setErrors({notEqual:!0}),{notEqual:!0}):(i.get(r)?.setErrors(null),null)}}isValidField(t,r){return t.controls[r].errors&&t.controls[r].touched}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var f=o(5592),T=o(7394);class F extends T.w0{constructor(n,t){super()}schedule(n,t=0){return this}}const d={setInterval(s,n,...t){const{delegate:r}=d;return r?.setInterval?r.setInterval(s,n,...t):setInterval(s,n,...t)},clearInterval(s){const{delegate:n}=d;return(n?.clearInterval||clearInterval)(s)},delegate:void 0};var U=o(9039);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class u{constructor(n,t=u.now){this.schedulerActionCtor=n,this.now=t}schedule(n,t=0,r){return new this.schedulerActionCtor(this,n).schedule(r,t)}}u.now=g.now;const Z=new class w extends u{constructor(n,t=u.now){super(n,t),this.actions=[],this._active=!1}flush(n){const{actions:t}=this;if(this._active)return void t.push(n);let r;this._active=!0;do{if(r=n.execute(n.state,n.delay))break}while(n=t.shift());if(this._active=!1,r){for(;n=t.shift();)n.unsubscribe();throw r}}}(class q extends F{constructor(n,t){super(n,t),this.scheduler=n,this.work=t,this.pending=!1}schedule(n,t=0){var r;if(this.closed)return this;this.state=n;const i=this.id,a=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(a,i,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(a,this.id,t),this}requestAsyncId(n,t,r=0){return d.setInterval(n.flush.bind(n,this),r)}recycleAsyncId(n,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&d.clearInterval(t)}execute(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(n,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,t){let i,r=!1;try{this.work(n)}catch(a){r=!0,i=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:n,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,U.P)(r,this),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null,super.unsubscribe()}}}),I=Z;var C=o(5211),v=o(8180),x=o(9360),V=o(8251),b=o(2420),S=o(975),N=o(1631),j=o(4829);function A(s,n){return n?t=>(0,C.z)(n.pipe((0,v.q)(1),function P(){return(0,x.e)((s,n)=>{s.subscribe((0,V.x)(n,b.Z))})}()),t.pipe(A(s))):(0,N.z)((t,r)=>(0,j.Xf)(s(t,r)).pipe((0,v.q)(1),(0,S.h)(t)))}var z=o(671);let R=(()=>{class s{validate(t){const r=t.value;return new f.y(a=>{console.log({email:r}),"zenropru@gmail.com"===r&&(a.next({emailTaken:!0}),a.complete()),a.next(null),a.complete()}).pipe(function J(s,n=Z){const t=function L(s=0,n,t=I){let r=-1;return null!=n&&((0,z.K)(n)?t=n:r=n),new f.y(i=>{let a=function E(s){return s instanceof Date&&!isNaN(s)}(s)?+s-t.now():s;a<0&&(a=0);let m=0;return t.schedule(function(){i.closed||(i.next(m++),0<=r?this.schedule(void 0,r):i.complete())},a)})}(s,n);return A(()=>t)}(2500))}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();function Y(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function O(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function B(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function Q(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function k(s,n){1&s&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const M=[{path:"",children:[{path:"sign-up",component:(()=>{class s{constructor(t,r,i){this.fb=t,this.ValidatorService=r,this.emailValidator=i,this.myForm=this.fb.group({name:["",[l.kI.required,l.kI.pattern(this.ValidatorService.firstNameAndLastnamePattern)]],email:["",[l.kI.required,l.kI.pattern(this.ValidatorService.emailPattern)],[this.emailValidator]],username:["",[l.kI.required,this.ValidatorService.cantBeStrider]],password:["",[l.kI.required,l.kI.minLength(6)]],password2:["",[l.kI.required]]},{validators:[this.ValidatorService.isFieldOneEqualFieldTwo("password","password2")]})}isValidField(t){return this.ValidatorService.isValidField(this.myForm,t)}onSubmit(){this.myForm.markAllAsTouched()}static#e=this.\u0275fac=function(r){return new(r||s)(e.Y36(l.qu),e.Y36(y),e.Y36(R))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:76,vars:27,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(r,i){1&r&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,Y,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,O,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,B,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,Q,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,k,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors: "),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"h5"),e._uU(57,"Email"),e.qZA(),e.TgZ(58,"pre"),e._uU(59),e.ALo(60,"json"),e.qZA(),e.TgZ(61,"h5"),e._uU(62,"Username"),e.qZA(),e.TgZ(63,"pre"),e._uU(64),e.ALo(65,"json"),e.qZA(),e.TgZ(66,"h5"),e._uU(67,"Password"),e.qZA(),e.TgZ(68,"pre"),e._uU(69),e.ALo(70,"json"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Confirmar"),e.qZA(),e.TgZ(73,"pre"),e._uU(74),e.ALo(75,"json"),e.qZA()),2&r&&(e.xp6(5),e.Q6J("formGroup",i.myForm),e.xp6(6),e.Q6J("ngIf",i.isValidField("name")),e.xp6(6),e.Q6J("ngIf",i.isValidField("email")),e.xp6(6),e.Q6J("ngIf",i.isValidField("username")),e.xp6(6),e.Q6J("ngIf",i.isValidField("password")),e.xp6(6),e.Q6J("ngIf",i.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",i.myForm.valid," "),e.xp6(2),e.hij("Form Status: ",i.myForm.status," "),e.xp6(2),e.hij("Form Pending: ",i.myForm.pending," "),e.xp6(4),e.Oqu(e.lcZ(50,15,i.myForm.errors)),e.xp6(5),e.Oqu(e.lcZ(55,17,i.myForm.controls.name.errors)),e.xp6(5),e.Oqu(e.lcZ(60,19,i.myForm.controls.email.errors)),e.xp6(5),e.Oqu(e.lcZ(65,21,i.myForm.controls.username.errors)),e.xp6(5),e.Oqu(e.lcZ(70,23,i.myForm.value.password)),e.xp6(5),e.Oqu(e.lcZ(75,25,i.myForm.controls.password2.errors)))},dependencies:[c.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,c.Ts],encapsulation:2})}return s})()},{path:"**",redirectTo:"sign-up"}]}];let D=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(M),p.Bz]})}return s})(),X=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[c.ez,D,l.UX]})}return s})()}}]);