(function(Wishlist,$){var $wishlistButton=$(".wishlist-btn"),$wishlistTile=$(".wishlist-tile-container"),$wishlistItemCount=$(".wishlist-item-count"),numProductTiles=$wishlistTile.length,wishlist=localStorage.getItem("user_wishlist")||[];wishlist.length>0&&(wishlist=JSON.parse(localStorage.getItem("user_wishlist")));var animateWishlist=function(self){$(self).toggleClass("is-active")},updateWishlist=function(self){var productHandle=$(self).attr("data-product-handle"),isRemove=$(self).hasClass("is-active");if(isRemove){console.log("remove");var removeIndex=wishlist.indexOf(productHandle);wishlist.splice(removeIndex,1),localStorage.setItem("user_wishlist",JSON.stringify(wishlist))}else console.log("addddd"),wishlist.push(productHandle),localStorage.setItem("user_wishlist",JSON.stringify(wishlist));console.log(JSON.stringify(wishlist))},activateItemsInWishlist=function(){$wishlistButton.each(function(){var productHandle=$(this).attr("data-product-handle");wishlist.indexOf(productHandle)>-1&&$(this).addClass("is-active")})},displayOnlyWishlistItems=function(){$wishlistTile.each(function(){var productHandle=$(this).attr("data-product-handle");wishlist.indexOf(productHandle)===-1&&($(this).remove(),numProductTiles--)})},loadWishlist=function(){displayOnlyWishlistItems(),$(".wishlist-loader").fadeOut(2e3,function(){$(".wishlist-grid").addClass("is_visible"),$(".wishlist-hero").addClass("is_visible"),numProductTiles==0?$(".wishlist-grid--empty-list").addClass("is_visible"):$(".wishlist-grid--empty-list").hide()})},updateWishlistItemCount=function(){wishlist&&$wishlistItemCount.text(wishlist.length+" item")},bindUIActions=function(){$wishlistButton.click(function(e){e.preventDefault(),setTimeout(function(){window.location.href="/pages/wishlist"},5e3),$(this).hasClass("is-active")?$.notify({icon:"fa fa-check",title:"Success!",message:"Item Successfully removed to your Wishlist",url:"/pages/wishlist",target:"_blank"},{element:"body",position:null,type:"success",allow_dismiss:!0,newest_on_top:!1,showProgressbar:!0,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">\xD7</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'}):$.notify({icon:"fa fa-check",title:"Success!",message:"Item Successfully added to your Wishlist",url:"/pages/wishlist",target:"_blank"},{element:"body",position:null,type:"success",allow_dismiss:!0,newest_on_top:!1,showProgressbar:!0,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">\xD7</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'}),updateWishlist(this),animateWishlist(this)})};Wishlist.init=function(){bindUIActions(),activateItemsInWishlist(),loadWishlist(),updateWishlistItemCount()}})(window.Wishlist=window.Wishlist||{},jQuery,void 0);
//# sourceMappingURL=/cdn/shop/t/2/assets/wishlist.js.map?v=48912498786032647531580122604
