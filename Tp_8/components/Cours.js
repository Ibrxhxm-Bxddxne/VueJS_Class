app.component("cours", {

props:{
islastversion:Boolean
},

template:`

<div>

<img :src="image">

<h1>Title : {{ title }}</h1>

<h3>Version : {{ version }}</h3>

<h4 v-show="islastversion">
* Is the last version
</h4>

<h4>Licence Price : {{ priceLicence }}</h4>

<h3 v-show="notAvailable">
Momentanément indisponible
</h3>

<p>
<b>Statut :</b>
{{ notAvailable ? 'Inactif' : 'Actif' }}
</p>

<button
:class="{notActiveBtn : notAvailable}"
:disabled="notAvailable"
@click="doSum">

Add to my Bag

</button>

</div>

`,

data(){
return{

title:"Vue.js Course",
version:3,
priceLicence:100,
notAvailable:false,
image:"https://vuejs.org/images/logo.png"

}
},

methods:{

doSum(){
this.$emit("add-course")
}

}

})