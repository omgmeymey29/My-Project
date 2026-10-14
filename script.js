var A=["ftec.net.au","pelicanglass.com.au","midcoastboundaryfencing.com.au","ejfbuilt.com.au","figtreedayspa.com.au","winningblinds.com.au","everyoccasioncatering.com.au","psychsolutionsnt.com.au","alsmechanical.com.au","burnetttrees.com.au","abrushwithcolour.com.au","canetocoastdentures.com.au"],
B=["ivylaneflowersandgifts.com.au","tdflooring.com.au","nqplaques.com.au","mackaykawasaki.com.au","billabongsprings.com.au"];
function cards(list,id,label){document.getElementById(id).innerHTML=list.map(function(d,i){return '<a class="proj" href="https://www.'+d+'/" target="_blank" rel="noopener"><span class="n">'+String(i+1).padStart(2,"0")+'</span><b>'+d+'</b><small>'+label+'</small><span class="go">Visit site →</span></a>'}).join("")}
cards(A,"p1","Duda Website");cards(B,"p2","Duda Ecommerce");
var t=["Duda Web Design","Web QA","Ecommerce","Responsive Testing","Website Audits"],h="";
for(var k=0;k<8;k++)t.forEach(function(x){h+=x+"<span>✦</span>"});
document.getElementById("mq").innerHTML=h;
