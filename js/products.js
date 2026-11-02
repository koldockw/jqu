$(document).ready(function(){
 let category='All';
 function highlight(text,term){if(!term)return text;let pos=text.toLowerCase().indexOf(term.toLowerCase());if(pos<0)return text;return text.slice(0,pos)+'<mark>'+text.slice(pos,pos+term.length)+'</mark>'+text.slice(pos+term.length);}
 function render(){let term=$('#search').val().trim().toLowerCase();let matches=perfumes.filter(p=>(category==='All'||p.category===category)&&(p.brand+' '+p.name).toLowerCase().includes(term));$('#products').empty();matches.forEach(p=>{$('#products').append(`<article class="product"><div class="product-art">${p.emoji}</div><div class="product-info"><small>${p.category}</small><h3>${highlight(p.brand+' '+p.name,term)}</h3><p class="price">${p.price} KZT</p><button class="btn add-cart" data-name="${p.name}">Add to wishlist</button></div></article>`);});$('#count').text(matches.length+' fragrances found');}
 $('#search').on('input',function(){let term=$(this).val().trim().toLowerCase();$('#suggestions').empty();if(term){perfumes.filter(p=>(p.brand+' '+p.name).toLowerCase().includes(term)).slice(0,4).forEach(p=>$('#suggestions').append($('<div>').text(p.brand+' '+p.name)));}render();});
 $('#suggestions').on('click','div',function(){$('#search').val($(this).text());$('#suggestions').empty();render();});
 $('.filter').on('click',function(){$('.filter').removeClass('selected');$(this).addClass('selected');category=$(this).data('category');render();});
 $('#products').on('click','.add-cart',function(){showToast($(this).data('name')+' added to wishlist');});render();
});
