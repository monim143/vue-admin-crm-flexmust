(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["auth-reminder2"],{db55:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-static d-flex align-items-center"},[s("div",{staticClass:"w-100"},[s("div",{staticClass:"bg-white"},[s("div",{staticClass:"content content-full"},[s("b-row",{staticClass:"justify-content-center"},[s("b-col",{staticClass:"py-4",attrs:{md:"8",lg:"6",xl:"4"}},[s("div",{staticClass:"text-center"},[s("p",{staticClass:"mb-2"},[s("i",{staticClass:"fa fa-2x fa-circle-notch text-primary"})]),t._v(" "),s("h1",{staticClass:"h4 mb-1"},[t._v("\n                Password Reminder\n              ")]),t._v(" "),s("h2",{staticClass:"h6 font-w400 text-muted mb-3"},[t._v("\n                Please provide your account’s email and we will send you your password.\n              ")])]),t._v(" "),s("b-form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmit(e)}}},[s("div",{staticClass:"form-group py-3"},[s("b-form-input",{staticClass:"form-control-alt",attrs:{size:"lg",id:"reminder",name:"reminder",placeholder:"Username or Email",state:!t.$v.form.reminder.$error&&null,"aria-describedby":"reminder-feedback"},model:{value:t.$v.form.reminder.$model,callback:function(e){t.$set(t.$v.form.reminder,"$model",e)},expression:"$v.form.reminder.$model"}})],1),t._v(" "),s("b-row",{staticClass:"form-group justify-content-center"},[s("b-col",{attrs:{md:"6",xl:"5"}},[s("b-button",{attrs:{type:"submit",variant:"primary",block:""}},[s("i",{staticClass:"fa fa-fw fa-envelope mr-1"}),t._v(" Send Mail\n                  ")])],1)],1)],1),t._v(" "),s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"font-size-sm",attrs:{to:"/auth/signin2"}},[t._v("Login?")])],1)],1)],1)],1)]),t._v(" "),s("div",{staticClass:"font-size-sm text-center text-muted py-3"},[s("strong",[t._v(t._s(t.$store.getters.appName+" "+t.$store.getters.appVersion))]),t._v(" © "+t._s(t.$store.getters.appCopyright)+"\n    ")])])])},a=[],i=s("1dce"),n=s("b5ae"),o={mixins:[i["validationMixin"]],data:function(){return{form:{reminder:null}}},validations:{form:{reminder:{required:n["required"],minLength:Object(n["minLength"])(3)}}},methods:{onSubmit:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.$router.push("/backend/pages/auth/all")}}},l=o,c=s("2877"),m=Object(c["a"])(l,r,a,!1,null,null,null);e["default"]=m.exports}}]);