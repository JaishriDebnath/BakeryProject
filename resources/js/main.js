  $(document).ready(function() {
    var user_id = $('#instagram_section').attr('data-id');
    var access_token = $('#instagram_section').attr('data-token');
    var i, insta_first_grid = '', insta_second_grid = '';
    var ajax_url = 'https://api.instagram.com/v1/users/'+user_id+'/media/recent/?access_token='+access_token;

    $.ajax({
      url: ajax_url,
      type: "GET",
      async:false,
      dataType: "jsonp",
      headers: {
        "access-control-allow-origin": true,
        "content-type": "application/json"
      },
      success: function(object){         
        for(i=0; i<8; i++){
          if(typeof object.data[i] == "undefined"){
          } else{
            if(i < 4){
              insta_first_grid += '<div class="col p-0"><a href="'+object.data[i].link+'" target="_blank" id="'+object.data[i].id+'"><div class="instagram-box"><div>';
              insta_first_grid += '<img src="'+object.data[i].images.standard_resolution.url+'" alt="instagram" /></div>';
              insta_first_grid += '<div class="overlay"><i class="fa fa-instagram"  aria-hidden="true"></i></div></div></a>';
              insta_first_grid += '</div>';
            }  else {
              insta_second_grid += '<div class="col p-0"><a href="'+object.data[i].link+'" target="_blank" id="'+object.data[i].id+'"><div class="instagram-box"><div>';
              insta_second_grid += '<img src="'+object.data[i].images.standard_resolution.url+'" alt="instagram" /></div>';
              insta_second_grid += '<div class="overlay"><i class="fa fa-instagram"  aria-hidden="true"></i></div></div></a>';
              insta_second_grid += '</div>';
            } 
          }
        }
        $('#insta_first_grid').append(insta_first_grid);
        $('#insta_second_grid').append(insta_second_grid);

      },
      error: function (xhr, status, error) {
        console.log(status);
        console.log(error);
      }
    });
  });
      jQuery(function($) {
        ajaxCart.init({
          formSelector: '.AddToCartForm_id',
          cartContainer: '#cart_container_id',
          addToCartSelector: '.add_to_cart_btn_cls',
          enableQtySelectors: true,
          moneyFormat: ""
        });
      });

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '../connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

      $(function() {
        $.exitIntent('enable');
        $(document).bind('exitintent', function() {
          if(typeof(Storage) !== "undefined") {
            if(sessionStorage.exit_popup == 'true'){
            }
            else{
              sessionStorage.exit_popup = 'true';
              setTimeout(function () {
                if( $.cookie("exit-popup") == 'hide_exit_popup' ){
                }
                else{
                  $("#exit_popup").show();
                }
              }, 100);
            }
          }
        });
        $("#exit_popup a").bind('click', function() {
          $("#exit_popup").hide();
          return false;
        });
      });

      var shop_currency_val = $('#shop-currency').text();
      Shopify.doNotTriggerClickOnThumb = false;
      function changeImageQuickView(img, selector) {
        var src = $(img).attr("src");
        src = src.replace("_compact", "");
        $(selector).attr("src", src);
      }
      var selectCallbackQuickView = function(variant, selector) {
        var productItem = jQuery('.quick-view-product .product-item');
        addToCart = productItem.find('.add_to_cart_detail');
        if (variant) {
          //console.log(variant.available);
          if (variant.available) {
            addToCart.removeClass('disabled').removeAttr('disabled');
            $(addToCart).find("span").text("Add to cart");
          } else {
            addToCart.addClass('disabled').attr('disabled', 'disabled');
            $(addToCart).find("span").text("sold Out");
          }  
          var form = jQuery('#' + selector.domIdPrefix).closest('form');
          for (var i=0,length=variant.options.length; i<length; i++) {
            var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
            if (radioButton.size()) {
              radioButton.get(0).checked = true;
            }
          }
    
          /*begin variant image*/
          if (variant && variant.featured_image) {
            var originalImage = $(".img-quick img");
            var newImage = variant.featured_image;
            var element = originalImage[0];
            Shopify.Image.switchImage(newImage, element, function (newImageSizedSrc, newImage, element) {
              $('#thumblist_quickview img').each(function(index) {
                var parentThumbImg = $(this).parent();
                var productImage = $(this).parent().data("image");
                if (newImageSizedSrc.includes(productImage)) {
                  $(this).parent().trigger('click');
                  var slider = $('#thumblist_quickview');
                  slider[0].slick.slickGoTo(index-1);
                  return false;
                }
              });
            });
          }
        } else {
          addToCart.addClass('disabled').attr('disabled', 'disabled');
          $(addToCart).find("span").text("Unavailable");
        }
      };

      
  $(function() {
    // Current Ajax request.
    var currentAjaxRequest = null;
    // Grabbing all search forms on the page, and adding a .search-results list to each.
    var searchForms = $('form[action="/search"]').css('position','relative').each(function() {
      // Grabbing text input.
      var input = $(this).find('input[name="q"]');
      // Adding a list for showing search results.
      var offSet = input.position().top + input.innerHeight();
      $('<ul class="search-results"></ul>').css( { 'position': 'absolute', 'left': '0px', 'top': offSet } ).appendTo($(this)).hide();    
      // Listening to keyup and change on the text field within these search forms.
      input.attr('autocomplete', 'off').bind('keyup change', function() {
        // What's the search term?
        var term = $(this).val();
        // What's the search form?
        var form = $(this).closest('form');
        // What's the search URL?
        var searchURL = '/search?type=product&q=' + term;
        // What's the search results list?
        var resultsList = form.find('.search-results');
        // If that's a new term and it contains at least 3 characters.
        if (term.length > 3 && term != $(this).attr('data-old-term')) {
          // Saving old query.
          $(this).attr('data-old-term', term);
          // Killing any Ajax request that's currently being processed.
          if (currentAjaxRequest != null) currentAjaxRequest.abort();
          // Pulling results.
          currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
            // Reset results.
            resultsList.empty();
            // If we have no results.
            if(data.results_count == 0) {
              // resultsList.html('<li><span class="title">No results.</span></li>');
              // resultsList.fadeIn(200);
              resultsList.hide();
            } else {
              // If we have results.
              $.each(data.results, function(index, item) {
                var link = $('<a></a>').attr('href', item.url);

                var _name = item.title;
                var _name_default = _name.split('|')[0];
                var _name_json = _name.substr(_name.indexOf(":") + 1);
                var _id = item.id;

                link.append('<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>');
                link.append('<p class="title"><span class="lang_trans" data-trans="#'+_id+'_pro_title">' + _name_default + '</span><span class="hide" id="'+_id+'_pro_title">'+_name_json+'</span></p>');
                link.append('<span class="price">' + item.price + '</span>');
                link.wrap('<li></li>');
                resultsList.append(link.parent());
              });
              // The Ajax request will return at the most 10 results.
              // If there are more than 10, let's link to the search results page.
              if(data.results_count > 8) {
                resultsList.append('<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>');
              }
              resultsList.fadeIn(200);
            }        
          });
        }
      });
    });
    // Clicking outside makes the results disappear.
    $('body').bind('click', function(){
      $('.search-results').hide();
    });
  });


  Currency.format = 'money_with_currency_format';

  var shopCurrency = 'USD';

  /* Sometimes merchants change their shop currency, let's tell our JavaScript file */
  Currency.moneyFormats[shopCurrency].money_with_currency_format = " USD";
  Currency.moneyFormats[shopCurrency].money_format = "";

  /* Default currency */
  var defaultCurrency = 'USD';

  /* Cookie currency */
  var cookieCurrency = Currency.cookie.read();

  /* Fix for customer account pages */
  jQuery('span.money span.money').each(function() {
    jQuery(this).parents('span.money').removeClass('money');
  });

  /* Saving the current price */
  jQuery('span.money').each(function() {
    jQuery(this).attr('data-currency-USD', jQuery(this).html());
                      });

    // If there's no cookie.
    if (cookieCurrency == null) {
      if (shopCurrency !== defaultCurrency) {
        Currency.convertAll(shopCurrency, defaultCurrency);
      }
      else {
        Currency.currentCurrency = defaultCurrency;
      }
      Currency.cookie.write(defaultCurrency);
    }
    // If the cookie value does not correspond to any value in the currency dropdown.
    else if (jQuery('[name=currencies]').size() && jQuery('[name=currencies] option[value=' + cookieCurrency + ']').size() === 0) {
      Currency.currentCurrency = shopCurrency;
      Currency.cookie.write(shopCurrency);
    }
    else if (cookieCurrency === shopCurrency) {
      Currency.currentCurrency = shopCurrency;
    }
    else {
      Currency.convertAll(shopCurrency, cookieCurrency);
    } 

    jQuery('[name=currencies]').val(Currency.currentCurrency).change(function() {
      var newCurrency = jQuery(this).val();
      Currency.convertAll(Currency.currentCurrency, newCurrency);
      jQuery('.selected-currency').text(Currency.currentCurrency);
    });

    var original_selectCallback = window.selectCallback;
    var selectCallback = function(variant, selector) {
      original_selectCallback(variant, selector);
      Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
      jQuery('.selected-currency').text(Currency.currentCurrency);
    };


    function currenciesCallbackSpecial(id){
      jQuery(id).each(function() {
        //alert(jQuery(id).text());
        jQuery(this).attr('data-currency-USD', jQuery(this).html());
      });
      Currency.convertAll(shopCurrency, Currency.cookie.read(), id, 'money_with_currency_format');
      //alert(jQuery(id).text());
    }

 jQuery(function() {
    jQuery('.swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
    });
  });


    
      $(window).on('load',function(){
        Wishlist.init();
      });

    
      
 var arrlang = 
            
{
	"en":{
  "general": {
    "accessibility": {
      "skip_to_content": "Skip to content",
      "close_modal": "Close (esc)",
      "link_messages": {
        "new_window": "Opens in a new window.",
        "external": "Opens external website.",
        "new_window_and_external": "Opens external website in a new window."
      }
    },
    "meta": {
      "tags": "Tagged \"\"",
      "page": "Page "
    },
    "404": {
      "title": "404",
      "subtext": "Page Not Found",
      "link": "Back to home"
    },
    "password_page": {
      "opening_soon": "Opening Soon",
      "login_form_heading": "Enter store using password",
      "login_form_password_label": "Password",
      "login_form_password_placeholder": "Your password",
      "login_form_submit": "Enter",
      "signup_form_email_label": "Email",
      "signup_form_success": "We will send you an email right before we open!",
      "admin_link_html": "Are you the store owner? <a href=\"\/admin\" class=\"text-link\">Log in here<\/a>",
      "password_link": "Enter using password",
      "powered_by_shopify_html": "This shop will be powered by "
    },
    "social": {
      "share_on_facebook": "Share",
      "share_on_twitter": "Tweet",
      "share_on_pinterest": "Pin it",
      "share_on_google": "Google it",
      "share_on_linkedin": "Linkedin it",
      "alt_text": {
        "share_on_facebook": "Share on Facebook",
        "share_on_twitter": "Tweet on Twitter",
        "share_on_pinterest": "Pin on Pinterest",
        "share_on_google": "Share on Google",
        "share_on_linkedin": "Share on Linkedin"
      }
    },
    "search": {
      "no_results_html": "Sorry! Couldn't find the product you were looking For!!!",
      "no_results_html_desc": "Please check if you have misspelt something or try searching with other words.",
      "results_with_count": {
        "one": " result for \"\"",
        "other": " results for \"\""
      },
      "title": "Search our site",
      "subtitle": "Search",
      "placeholder": "Search products",
      "submit": "Submit"
    },
  
    "breadcrumb": {
      "home": "Home"
    },
    "wishlist": {
      "title": "wishlist",
      "image": "Image",
      "product_name": "Product Name",
      "price": "Price",
      "avalibility": "Avalibility",
      "in_stock": "In Stock",
      "out_of_stock": "Out of stock",
      "action": "Action",
      "empty_wishlist": "Your wish list is currently empty.",
      "continue_shoppping": "Continue Shoppping",
      "add_wishlist_html": "To create a wish list you must <a href='\/account\/login'>sign in<\/a> or <a href='\/account\/register'>create an account<\/a>."
    },
    "payment": {
      "method": "Payment methods"
    }
  },
  "sections": {
    "featured_product": {
      "shop_now": "Shop now",
      "view_more": "view more",
      "new_tag": "new",
      "sale_tag": "sale"
    }
  },
  "blogs": {
    "article": {
      "posted_by": "Posted By :",
      "back_to_blog": "Back to ",
      "tags": "Tags"
    },
    "comments": {
      "title": "Leave a comment",
      "name": "Name",
      "email": "Email",
      "message": "Message",
      "post": "Post comment",
      "moderated": "Please note, comments must be approved before they are published",
      "success_moderated": "Your comment was posted successfully. We will publish it in a little while, as our blog is moderated.",
      "success": "Your comment was posted successfully! Thank you!",
      "comments": "comments"
    }
  },
  "cart": {
    "general": {
      "title": "Your cart",
      "remove": "Remove",
      "subtotal": "Subtotal",
      "total": "Total price:",
      "savings": "You're saving",
      "taxes_and_shipping_at_checkout": "Taxes and shipping calculated at checkout",
      "taxes_and_shipping_policy_at_checkout_html": "Taxes and <a href=\"\">shipping calculated<\/a> at checkout",
      "taxes_included_but_shipping_at_checkout": "Tax included and shipping calculated at checkout",
      "taxes_included_and_shipping_policy_html": "Tax included. <a href=\"\">Shipping calculated<\/a> at checkout.",
      "update": "Update",
      "checkout": "Check out",
      "clear_cart": "Clear cart",
      "empty": "Your cart is currently empty.",
      "cookies_required": "Enable cookies to use the shopping cart",
      "edit": "Edit",
      "cancel": "Cancel",
      "continue_shopping": "Continue shopping"
    },
    "label": {
      "image": "Image",
      "product": "Product Name",
      "price": "Price",
      "quantity": "Quantity",
      "action": "Action",
      "total": "Total"
    }
  },
  "collections": {
    "general": {
      "view_all": "View all",
      "view_all_label": "View all products in the  collection",
      "loading": "Loading...",
      "load_more_pro": "Load More Products",
      "no_more_product": "No More Products",
      "no_matches": "Sorry, No products in this collection"
    },
    "sorting": {
      "title": "Sort by",
      "featured": "Featured",
      "best_selling": "Best Selling",
      "az": "Alphabetically, A-Z",
      "za": "Alphabetically, Z-A",
      "price_ascending": "Price, low to high",
      "price_descending": "Price, high to low",
      "date_descending": "Date, new to old",
      "date_ascending": "Date, old to new",
      "warning_message": "choosing a selection results in a full page refresh"
    },
    "filters": {
      "title_tags": "Filter",
      "clear_all": "Clear all",
      "apply": "Apply",
      "all_tags": "All products"
    }
  },
  "contact": {
    "form": {
      "name": "Name",
      "email": "Email",
      "phone": "Phone Number",
      "message": "Message",
      "submit": "Send",
      "post_success": "Thanks for contacting us. We'll get back to you as soon as possible."
    }
  },
  "customer": {
    "account": {
      "title": "My Account",
      "details": "Account Details",
      "view_addresses": "View Addresses",
      "return": "Return to Account Details",
      "log_out": "Logout"
    },
    "activate_account": {
      "title": "Activate Account",
      "subtext": "Create your password to activate your account.",
      "password": "Password",
      "password_confirm": "Confirm Password",
      "submit": "Activate Account",
      "cancel": "Decline Invitation"
    },
    "addresses": {
      "title": "Your Addresses",
      "heading": "Manage Account Address",
      "default": "Default",
      "another": "Another",
      "add_new": "Add a New Address",
      "edit_address": "Edit address",
      "first_name": "First Name",
      "last_name": "Last Name",
      "company": "Company",
      "address1": "Address1",
      "address2": "Address2",
      "city": "City",
      "country": "Country",
      "province": "Province",
      "zip": "Postal\/Zip Code",
      "phone": "Phone",
      "set_default": "Set as default address",
      "add": "Add Address",
      "update": "Update Address",
      "cancel": "Cancel",
      "edit": "Edit",
      "delete": "Delete",
      "delete_confirm": "Are you sure you wish to delete this address?"
    },
    "login": {
      "title": "Customer’s Login",
      "email": "Email",
      "password": "Password",
      "forgot_password": "Forgot your password?",
      "login": "Login",
      "guest_title": "Continue as a guest",
      "guest_continue": "Continue"
    },
    "orders": {
      "title": "Order History",
      "order_number": "Order",
      "date": "Date",
      "payment_status": "Payment Status",
      "fulfillment_status": "Fulfillment Status",
      "total": "Total",
      "none": "You haven't placed any orders yet."
    },
    "order": {
      "title": "Order ",
      "date": "Placed on ",
      "cancelled": "Order Cancelled on ",
      "cancelled_reason": "Reason: ",
      "billing_address": "Billing Address",
      "payment_status": "Payment Status",
      "shipping_address": "Shipping Address",
      "fulfillment_status": "Fulfillment Status",
      "discount": "Discount",
      "shipping": "Shipping",
      "tax": "Tax",
      "product": "Product",
      "sku": "SKU",
      "price": "Price",
      "quantity": "Quantity",
      "total": "Total",
      "fulfilled_at": "Fulfilled ",
      "subtotal": "Subtotal",
      "track_shipment": "Track shipment"
    },
    "recover_password": {
      "title": "Reset your password",
      "email": "Email",
      "submit": "Submit",
      "cancel": "Cancel",
      "subtext": "We will send you an email to reset your password.",
      "success": "We've sent you an email with a link to update your password."
    },
    "reset_password": {
      "title": "Reset account password",
      "password": "Password",
      "password_confirm": "Confirm Password",
      "submit": "Reset Password"
    },
    "register": {
      "page_title": "register",
      "heading": "New customer",
      "title": "Create Account",
      "first_name": "First Name",
      "last_name": "Last Name",
      "email": "Email",
      "password": "Password",
      "submit": "Create",
      "content": "Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register."
    }
  },
  "homepage": {
    "onboarding": {
      "product_title": "Product's title",
      "product_description": "This area is used to describe your product’s details. Tell customers about the look, feel, and style of your product. Add details on color, materials used, sizing, and where it was made.",
      "collection_title": "Collection's title",
      "blog_title": "Your post's title",
      "blog_excerpt": "Your store hasn’t published any blog posts yet. A blog can be used to talk about new product launches, tips, or other news you want to share with your customers. You can check out Shopify’s ecommerce blog for inspiration and advice for your own store and blog.",
      "blog_author": "Author name",
      "no_content": "This section doesn’t currently include any content. Add content to this section using the sidebar."
    }
  },
  "layout": {
    "navigation": {
      "search": "Search",
      "expand": "expand",
      "collapse": "collapse",
      "menu": "Menu",
      "back": "back"
    },
    "cart": {
      "title": "Cart",
      "items_count": {
        "one": "item",
        "other": "items"
      }
    },
    "customer": {
      "account": "Account",
      "log_out": "Log out",
      "log_in": "Log in",
      "create_account": "register"
    },
    "footer": {
      "social_platform": " on "
    }
  },
  "products": {
    "product": {
      "prev": "prev",
      "next": "next",
      "pro_details": "product details",
      "size_chart": "Size chart",
      "sold_out": "Sold out",
      "availability": "Availability:",
      "in_stock": "In stock",
      "out_of_stock": "Out of stock",
      "on_sale": "Sale",
      "brand": "Brand:",
      "sku": "SKU:",
      "product_type": "Product Type:",
      "quantity": "Quantity",
      "add_to_cart": "Add to cart",
      "but_now": "Buy Now",
      "back_to_collection": "Back to ",
      "add_wishlist": "Add to Wishlist",
      "include_taxes": "Tax included.",
      "social_share": "Share it",
      "select_options": "Select options",
      "secure_payment": "100% Secure Payment",
      "ask_abt_pro": "inquiry about product?",
      "login_to_see_price": "Login To see price",
      "shipping_policy_html": "<a href=\"\">Shipping calculated<\/a> at checkout."
    },
    "compare": {
      "compare_products": "Compare Products",
      "compare_at": "Compare at",
      "product_name": "Product Name",
      "product_image": "Product Image",
      "product_desc": "Product Description",
      "availability": "Availability",
      "available_stock": "Available In stock",
      "unavailable_stock": "Unavailable In stock",
      "compare_note": "Your Compare list is full! Remove Any product ?",
      "added_to_cmp": "Added to compare",
      "add_to_cmp": "Add to compare",
      "confirm_box": "Yes,I want view it!",
      "cancelButtonText": "Continue"
    }
  },
  "gift_cards": {
    "issued": {
      "title_html": "Here's your  gift card for ShopDrop!",
      "subtext": "Your gift card",
      "gift_card_code": "Gift card code",
      "disabled": "Disabled",
      "expired": "Expired on ",
      "active": "Expires on ",
      "redeem_html": "Use this code at checkout to redeem your  gift card",
      "shop_link": "Start shopping",
      "print": "Print this gift card",
      "remaining_html": " left",
      "add_to_apple_wallet": "Add to Apple Wallet",
      "qr_image_alt": "QR code — scan to redeem gift card"
    }
  },
  "date_formats": {
    "month_day_year": "%B %d, %Y"
  }
},
	
	
	
	
	
	
	
	
	"fr":{
  "general": {
    "accessibility": {
      "skip_to_content": "Aller au contenu",
      "close_modal": "close (Esc)",
      "link_messages": {
        "new_window": "Ouvre dans une nouvelle fenêtre.",
        "external": "Ouvre un site externe.",
        "new_window_and_external": "Ouvre un site Web externe dans une nouvelle fenêtre."
      }
    },
    "meta": {
      "tags": "Tagged \"\"",
      "page": "Page"
    },
    "404": {
      "title": "404",
      "subtext": "Page non trouvée",
      "link": "De retour à la maison"
    },
    "password_page": {
      "opening_soon": "Ouverture prochaine",
      "login_form_heading": "Entrer en magasin avec mot de passe",
      "login_form_password_label": "Mot de passe",
      "login_form_password_placeholder": "Votre mot de passe",
      "login_form_submit": "Entrer",
      "signup_form_email_label": "Email",
      "signup_form_success": "Nous vous enverrons un email juste avant l'ouverture!",
      "admin_link_html": "Are you the store owner? <a href=\"\/admin\" class=\"text-link\">Log in here<\/a>",
      "password_link": "Entrer avec un mot de passe",
      "powered_by_shopify_html": "Ce magasin sera alimenté par "
    },
    "social": {
      "share_on_facebook": "Partager",
      "share_on_twitter": "Tweet",
      "share_on_pinterest": "Pin le",
      "share_on_google": "recherche le sur Google",
      "share_on_linkedin": "Linkedin it",
      "alt_text": {
        "share_on_facebook": "Partager sur Facebook",
        "share_on_twitter": "Tweet sur Twitter",
        "share_on_pinterest": "Pin sur Pinterest",
        "share_on_google": "Partager sur Google",
        "share_on_linkedin": "Partager sur Linkedin"
      }
    },
    "search": {
      "no_results_html": "Pardon! Impossible de trouver le produit que vous recherchez !!! ",
      "no_results_html_desc": "Veuillez vérifier si vous avez mal épelé quelque chose ou essayez de chercher avec d'autres mots.",
      "results_with_count": {
        "one": " résultat pour \"\"",
        "other": " résultats pour \"\""
      },
      "title": "Rechercher sur notre site",
      "subtitle": "Chercher",
      "placeholder": "Recherche de produits",
      "submit": "Soumettre"
    },
   
    "breadcrumb": {
      "home": "Accueil"
    },
    "wishlist": {
      "title": "liste de souhaits",
      "image": "Image",
      "product_name": "Nom du produit",
      "price": "Prix",
      "avalibility": "Disponibilité",
      "in_stock": "En stock",
      "out_of_stock": "En rupture de stock",
      "action": "action",
      "empty_wishlist": "Votre liste de souhaits est actuellement vide.",
      "continue_shoppping": "Continuer vos achats",
      "add_wishlist_html": "Pour créer une liste de souhaits, vous devez <a href='\/account\/login'>se connecter<\/a> or <a href='\/account\/register'>créer un compte<\/a>."
    },
    "payment": {
      "method": "Méthodes de payement"
    }
  },
  "sections": {
    "featured_product": {
      "shop_now": "Achetez maintenant",
      "view_more": "Afficher plus",
      "new_tag": "nouvelle",
      "sale_tag": "vente"
    }
  },
  "blogs": {
    "article": {
      "posted_by": "Posté par :",
      "back_to_blog": "Back to ",
      "tags": "Mots clés"
    },
    "comments": {
      "title": "Laissez un commentaire",
      "name": "prénom",
      "email": "Email",
      "message": "Message",
      "post": "Poster un commentaire",
      "moderated": "Veuillez noter que les commentaires doivent être approuvés avant d'être publiés ",
      "success_moderated": "Votre commentaire a été posté avec succès. Nous le publierons dans un instant, notre blog étant modéré..",
      "success": "Votre commentaire a été posté avec succès! Je vous remercie!",
      "comments": "commentaires"
    }
  },
  "cart": {
    "general": {
      "title": "Votre panier",
      "remove": "Retirer",
      "subtotal": "Total",
      "total": "Prix total:",
      "savings": "Vous enregistrez",
      "taxes_and_shipping_at_checkout": "Taxes et frais d'expédition calculés à la caisse ",
      "taxes_and_shipping_policy_at_checkout_html": "Taxes and <a href=\"\">shipping calculated<\/a> at checkout",
      "taxes_included_but_shipping_at_checkout": "Taxes incluses et frais de livraison calculés à la caisse ",
      "taxes_included_and_shipping_policy_html": "Taxe inclu. <a href=\"\">Expédition calculée<\/a> à la caisse.",
      "update": "Mettre à jour",
      "checkout": "Check-out",
      "clear_cart": "Voiture clairet",
      "empty": "Votre carte est actuellement vide.",
      "cookies_required": "Autoriser les cookies à utiliser le panier",
      "edit": "modifier",
      "cancel": "Annuler",
      "continue_shopping": "Continuer vos achats"
    },
    "label": {
      "image": "Image",
      "product": "Nom du produit",
      "price": "Prix",
      "quantity": "Quantité",
      "action": "action",
      "total": "Totale"
    }
  },
  "collections": {
    "general": {
      "view_all": "Voir tout",
      "view_all_label": "Voir tous les produits dans le  collection",
      "loading": "Chargement...",
      "load_more_pro": "Charger plus de produits",
      "no_more_product": "Plus de produits",
      "no_matches": "Désolé, aucun produit dans cette collection"
    },
    "sorting": {
      "title": "Sort by",
      "featured": "En vedette",
      "best_selling": "Meilleure vente",
      "az": "Alphabétiquement, AZ",
      "za": "Alphabétiquement, ZA",
      "price_ascending": "Prix croissant",
      "price_descending": "Prix décroissant",
      "date_descending": "Date, nouveau à ancien",
      "date_ascending": "Date, ancien à nouveau",
      "warning_message": "choisir une sélection entraîne un rafraîchissement de la page complète"
    },
    "filters": {
      "title_tags": "Filtre",
      "clear_all": "Tout effacer",
      "apply": "Appliquer",
      "all_tags": "Tous les produits"
    }
  },
  "contact": {
    "form": {
      "name": "prénom",
      "email": "Email",
      "phone": "Numéro de téléphone",
      "message": "Message",
      "submit": "Envoyer",
      "post_success": "Merci de nous avoir contacté. Nous reviendrons vers vous dès que possible. "
    }
  },
  "customer": {
    "account": {
      "title": "Mon compte",
      "details": "details du compte",
      "view_addresses": "Voir les adresses",
      "return": "Retour aux détails du compte",
      "log_out": "Connectez - Out"
    },
    "activate_account": {
      "title": "Activate Account",
      "subtext": "Create your password to activate your account.",
      "password": "Password",
      "password_confirm": "Confirm Password",
      "submit": "Activer le compte",
      "cancel": "Refuser l'invitation"
    },
    "addresses": {
      "title": "Vos adresses",
      "heading": "Gérer l'adresse du compte",
      "default": "Défaut",
      "another": "Un autre",
      "add_new": "Ajouter une nouvelle adresse",
      "edit_address": "Modifier l'adresse",
      "first_name": "Prénom",
      "last_name": "Nom de famille",
      "company": "Entreprise",
      "address1": "Adresse 1",
      "address2": "Adresse 2",
      "city": "Ville",
      "country": "Pays",
      "province": "Province",
      "zip": "Code postal / postal",
      "phone": "Téléphone",
      "set_default": "Définir comme adresse par défaut",
      "add": "Ajoutez l'adresse",
      "update": "Mettre à jour l'adresse",
      "cancel": "Annuler",
      "edit": "modifier",
      "delete": "Effacer",
      "delete_confirm": "Êtes-vous sûr de vouloir supprimer cette adresse??"
    },
    "login": {
      "title": "Login du client",
      "email": "Email",
      "password": "Mot de passe",
      "forgot_password": "Mot de passe oublié?",
      "login": "S'identifier",
      "guest_title": "Continuer en tant qu'invité",
      "guest_continue": "Continuer"
    },
    "orders": {
      "title": "Historique des commandes",
      "order_number": "Ordre",
      "date": "Rendez-vous amoureux",
      "payment_status": "Statut de paiement",
      "fulfillment_status": "État de réalisation",
      "total": "Totale",
      "none": "Vous n'avez pas encore passé de commande."
    },
    "order": {
      "title": "Ordre ",
      "date": "Placé sur",
      "cancelled": "Commande annulée le",
      "cancelled_reason": "Raison: ",
      "billing_address": "Adresse de facturation",
      "payment_status": "Statut de paiement",
      "shipping_address": "Adresse de livraison",
      "fulfillment_status": "État de réalisation",
      "discount": " Remise",
      "shipping": "livraison",
      "tax": "Impôt",
      "product": "Produit",
      "sku": "SKU",
      "price": "Prix",
      "quantity": "Quantité",
      "total": "Totale",
      "fulfilled_at": "Remplie ",
      "subtotal": "Total",
      "track_shipment": "Suivi de livraison"
    },
    "recover_password": {
      "title": "réinitialisez votre mot de passe",
      "email": "Email",
      "submit": "Soumettre",
      "cancel": "Annuler",
      "subtext": "Nous vous enverrons un email pour réinitialiser votre mot de passe.",
      "success": "Nous vous avons envoyé un email avec un lien pour mettre à jour votre mot de passe."
    },
    "reset_password": {
      "title": "Réinitialiser le mot de passe du compte",
      "password": "Mot de passe",
      "password_confirm": "Confirmez le mot de passe",
      "submit": "réinitialiser le mot de passe"
    },
    "register": {
      "page_title": "registre",
      "heading": "Nouveau client",
      "title": "Créer un compte",
      "first_name": "Prénom",
      "last_name": "Nom de famille",
      "email": "Email",
      "password": "Mot de passe",
      "submit": "Créer",
      "content": "Inscrivez-vous pour un compte gratuit dans notre magasin. L'inscription est rapide et facile. Cela vous permet de commander depuis notre magasin. Pour commencer à magasiner, cliquez sur enregistrer."
    }
  },
  "homepage": {
    "onboarding": {
      "product_title": "Titre du produit",
      "product_description": "Cette zone est utilisée pour décrire les détails de votre produit. Informez les clients de l'apparence, du style et du style de votre produit. Ajoutez des détails sur la couleur, les matériaux utilisés, la taille et le lieu de fabrication.",
      "collection_title": "Titre de la collection",
      "blog_title": "Titre de votre message",
      "blog_excerpt": "Votre magasin n’a pas encore publié de blog. Un blog peut être utilisé pour parler de lancements de nouveaux produits, de conseils ou d'autres informations que vous souhaitez partager avec vos clients. Vous pouvez consulter le blog de commerce électronique de Shopify pour trouver de l’inspiration et des conseils pour votre propre magasin et votre blog..",
      "blog_author": "Nom de l'auteur",
      "no_content": "Cette section ne contient actuellement aucun contenu. Ajouter du contenu à cette section en utilisant la barre latérale."
    }
  },
  "layout": {
    "navigation": {
      "search": "Chercher",
      "expand": "développer",
      "collapse": "effondrer",
      "menu": "Menu",
      "back": "retour"
    },
    "cart": {
      "title": "Chariot",
      "items_count": {
        "one": "article",
        "other": "articles"
      }
    },
    "customer": {
      "account": "Compte",
      "log_out": "Connectez - Out",
      "log_in": "s'identifier",
      "create_account": "registre"
    },
    "footer": {
      "social_platform": " on "
    }
  },
  "products": {
    "product": {
      "prev": "prev",
      "next": "suivante",
      "pro_details": "détails du produit",
      "size_chart": "Tableau des tailles",
      "sold_out": "Épuisé",
      "availability": "Disponibilité",
      "in_stock": "En stock",
      "out_of_stock": "En rupture de stock",
      "on_sale": "Vente",
      "brand": "Marque",
      "sku": "SKU",
      "product_type": "type de produit",
      "quantity": "Quantité",
      "add_to_cart": "Ajouter au panier",
      "but_now": "Acheter maintenant",
      "back_to_collection": "Retour à ",
      "add_wishlist": "Ajouter à la liste de souhaits",
      "include_taxes": "Taxe inclu.",
      "social_share": "Partagez-le",
      "select_options": "Sélectionnez les options",
      "secure_payment": "Paiement 100% sécurisé",
      "ask_abt_pro": "enquête sur le produit?",
      "login_to_see_price": "Connectez-vous pour voir le prix",
      "shipping_policy_html": "<a href=\"\">Expédition calculée<\/a> à la caisse."
    },
    "compare": {
      "compare_products": "comparer les produits",
      "compare_at": "Comparer à",
      "product_name": "Nom du produit",
      "product_image": "Image du produit",
      "product_desc": "Description du produit",
      "availability": "Disponibilité",
      "available_stock": "Disponible en stock",
      "unavailable_stock": "Indisponible En stock",
      "compare_note": "Votre liste de comparaison est complète! Supprimer tout produit ?",
      "added_to_cmp": "Ajouté pour comparer",
      "add_to_cmp": "Ajouter pour comparer",
      "confirm_box": "Oui, je veux le voir!",
      "cancelButtonText": "Continuer"
    }
  },
  "gift_cards": {
    "issued": {
      "title_html": "Voici votre  carte-cadeau pour ShopDrop!",
      "subtext": "Votre carte cadeau",
      "gift_card_code": "Code de la carte cadeau",
      "disabled": "Désactivé",
      "expired": "A expiré le ",
      "active": "Expire le ",
      "redeem_html": "Utilisez ce code à la caisse pour échanger vos  carte cadeau",
      "shop_link": "Commencez vos achats",
      "print": "Imprimer cette carte cadeau ",
      "remaining_html": " la gauche",
      "add_to_apple_wallet": "Ajouter au portefeuille Apple",
      "qr_image_alt": "QR code - numériser pour utiliser une carte-cadeau"
    }
  },
  "date_formats": {
    "month_day_year": "%B %d, %Y"
  }
},
	
	
	
	
	
	
	
	
	"ar":{
  "general": {
    "accessibility": {
      "skip_to_content": "تخطى الى المحتوى",
      "close_modal": "إغلاق (esc)",
      "link_messages": {
        "new_window": "يفتح في نافذة جديدة.",
        "external": "يفتح موقع خارجي.",
        "new_window_and_external": "يفتح موقع خارجي في نافذة جديدة."
      }
    },
    "meta": {
      "tags": "Tagged \"\"",
      "page": "Page "
    },
    "404": {
      "title": "404",
      "subtext": "الصفحة غير موجودة",
      "link": "العودة إلى المنزل"
    },
    "password_page": {
      "opening_soon": "قريبا الافتتاح",
      "login_form_heading": "أدخل المتجر باستخدام كلمة المرور",
      "login_form_password_label": "كلمه السر",
      "login_form_password_placeholder": "كلمة السر خاصتك",
      "login_form_submit": "أدخل",
      "signup_form_email_label": "البريد الإلكتروني",
      "signup_form_success": "سوف نرسل لك بريدًا إلكترونيًا قبل فتحه!",
      "admin_link_html": "هل أنت مالك المتجر? <a href=\"\/admin\" class=\"text-link\">سجل الدخول هنا<\/a>",
      "password_link": "أدخل باستخدام كلمة المرور",
      "powered_by_shopify_html": "سيتم تشغيل هذا المحل من قبل "
    },
    "social": {
      "share_on_facebook": "شارك",
      "share_on_twitter": "سقسقة",
      "share_on_pinterest": "ثبتها",
      "share_on_google": "ابحث في جوجل",
      "share_on_linkedin": "Linkedin ذلك",
      "alt_text": {
        "share_on_facebook": "انشر في الفيسبوك",
        "share_on_twitter": "التغريد على تويتر",
        "share_on_pinterest": "دبوس على بينتيريست",
        "share_on_google": "حصة على جوجل",
        "share_on_linkedin": "حصة على ينكدين"
      }
    },
    "search": {
      "no_results_html": "آسف! لا يمكن العثور على المنتج الذي كنت تبحث عنه !!!",
      "no_results_html_desc": "يرجى التحقق مما إذا كان لديك شيء إملائي أو محاولة البحث بكلمات أخرى.",
      "results_with_count": {
        "one": " result for \"\"",
        "other": " results for \"\""
      },
      "title": "ابحث في موقعنا",
      "subtitle": "بحث",
      "placeholder": "البحث عن المنتجات",
      "submit": "خضع"
    },
    
    "breadcrumb": {
      "home": "الصفحة الرئيسية"
    },
    "wishlist": {
      "title": "الأماني",
      "image": "صورة",
      "product_name": "اسم المنتج",
      "price": "السعر",
      "avalibility": "توفر",
      "in_stock": "في المخزن",
      "out_of_stock": "إنتهى من المخزن",
      "action": "عمل",
      "empty_wishlist": "قائمة رغباتك فارغة حاليًا.",
      "continue_shoppping": "مواصلة التسوق",
      "add_wishlist_html": "لإنشاء قائمة أمنيات يجب عليك <a href='\/account\/login'>تسجيل الدخول<\/a> or <a href='\/account\/register'>انشئ حساب<\/a>."
    },
    "payment": {
      "method": "طرق الدفع"
    }
  },
  "sections": {
    "featured_product": {
      "shop_now": "تسوق الآن",
      "view_more": "عرض المزيد",
      "new_tag": "الجديد",
      "sale_tag": "تخفيض السعر"
    }
  },
  "blogs": {
    "article": {
      "posted_by": "منشور من طرف:",
      "back_to_blog": "رجوع إلى ",
      "tags": "الكلمات"
    },
    "comments": {
      "title": "اترك تعليقا",
      "name": "اسم",
      "email": "البريد الإلكتروني",
      "message": "رسالة",
      "post": "أضف تعليقا",
      "moderated": "الرجاء ملاحظة أنه يجب الموافقة على التعليقات قبل نشرها",
      "success_moderated": "تم نشر تعليقك بنجاح. سننشره بعد قليل ، نظرًا لأن مدونتنا خاضعة للإشراف",
      "success": "تم نشر تعليقك بنجاح! نشكرك!",
      "comments": "تعليقات"
    }
  },
  "cart": {
    "general": {
      "title": "عربتك",
      "remove": "إزالة",
      "subtotal": "المجموع",
      "total": "السعر الكلي:",
      "savings": "أنت تنقذ",
      "taxes_and_shipping_at_checkout": "الضرائب وتحسب الشحن عند الخروج",
      "taxes_and_shipping_policy_at_checkout_html": "Taxes and <a href=\"\">الشحن تحسب<\/a> at checkout",
      "taxes_included_but_shipping_at_checkout": "الضريبة المشمولة والشحن المحسوبة عند الدفع",
      "taxes_included_and_shipping_policy_html": "شامل الضريبة. <a href=\"\">يحسب الشحن<\/a> عند الخروج.",
      "update": "تحديث",
      "checkout": "الدفع",
      "clear_cart": "مسح العربة",
      "empty": "عربة التسوق فارغة حاليا.",
      "cookies_required": "تمكين ملفات تعريف الارتباط لاستخدام سلة التسوق",
      "edit": "تصحيح",
      "cancel": "إلغاء",
      "continue_shopping": "مواصلة التسوق"
    },
    "label": {
      "image": "صورة",
      "product": "اسم المنتج",
      "price": "السعر",
      "quantity": "كمية",
      "action": "عمل",
      "total": "مجموع"
    }
  },
  "collections": {
    "general": {
      "view_all": "عرض الكل",
      "view_all_label": "عرض جميع المنتجات في مجموعة ",
      "loading": "جار التحميل...",
      "load_more_pro": "تحميل المزيد من المنتجات",
      "no_more_product": "لا مزيد من المنتجات",
      "no_matches": "عذرًا ، لا توجد منتجات في هذه المجموعة"
    },
    "sorting": {
      "title": "ترتيب حسب",
      "featured": "متميز",
      "best_selling": "أفضل مبيعات",
      "az": "حسب الترتيب الأبجدي ، A-Z ",
      "za": "أبجديا ، Z-A ",
      "price_ascending": "السعر من الارخص للاعلى",
      "price_descending": "السعر الاعلى الى الادنى",
      "date_descending": "التاريخ ، جديد إلى قديم",
      "date_ascending": "التاريخ ، قديم إلى جديد",
      "warning_message": "اختيار نتائج التحديد في تحديث صفحة كاملة"
    },
    "filters": {
      "title_tags": "منقي",
      "clear_all": "امسح الكل",
      "apply": "تطبيق",
      "all_tags": "جميع المنتجات"
    }
  },
  "contact": {
    "form": {
      "name": "اسم",
      "email": "البريد الإلكتروني",
      "phone": "رقم الهاتف",
      "message": "رسالة",
      "submit": "إرسال",
      "post_success": "شكرا لإتصالك بنا. سنرد عليك في أقرب وقت ممكن."
    }
  },
  "customer": {
    "account": {
      "title": "حسابي",
      "details": "تفاصيل الحساب",
      "view_addresses": "عرض العناوين",
      "return": "العودة إلى تفاصيل الحساب",
      "log_out": "الخروج"
    },
    "activate_account": {
      "title": "تفعيل حساب",
      "subtext": "قم بإنشاء كلمة المرور الخاصة بك لتنشيط حسابك.",
      "password": "كلمه السر",
      "password_confirm": "تأكيد كلمة المرور",
      "submit": "تفعيل حساب",
      "cancel": "رفض الدعوة"
    },
    "addresses": {
      "title": "عناوينك",
      "heading": "إدارة عنوان الحساب",
      "default": "افتراضي",
      "another": "آخر",
      "add_new": "أضف عنوانا جديدا",
      "edit_address": "تعديل العنوان",
      "first_name": "الاسم الاول",
      "last_name": "الكنية",
      "company": "شركة",
      "address1": "العنوان 1",
      "address2": "العنوان 2",
      "city": "مدينة",
      "country": "بلد",
      "province": "المحافظة",
      "zip": "البريد  \/ الرمز البريدي",
      "phone": "هاتف",
      "set_default": "تعيين كعنوان افتراضي",
      "add": "اضف عنوان",
      "update": "تحديث العنوان",
      "cancel": "إلغاء",
      "edit": "تصحيح",
      "delete": "حذف",
      "delete_confirm": "هل أنت متأكد من رغبتك في حذف هذا العنوان؟"
    },
    "login": {
      "title": "تسجيل دخول العميل",
      "email": "البريد الإلكتروني",
      "password": "كلمه السر",
      "forgot_password": "نسيت رقمك السري؟",
      "login": "تسجيل الدخول",
      "guest_title": "تواصل كضيف",
      "guest_continue": "استمر"
    },
    "orders": {
      "title": "تاريخ الطلب",
      "order_number": "طلب",
      "date": "تاريخ",
      "payment_status": "حالة السداد",
      "fulfillment_status": "حالة الاكتمال",
      "total": "مجموع",
      "none": "أنت لم تضع أي طلبات حتى الآن."
    },
    "order": {
      "title": "طلب ",
      "date": "موضوع على ",
      "cancelled": "تم إلغاء الطلب ",
      "cancelled_reason": "السبب: ",
      "billing_address": "عنوان وصول الفواتير",
      "payment_status": "حالة السداد",
      "shipping_address": "عنوان الشحن",
      "fulfillment_status": "حالة الاكتمال",
      "discount": "خصم",
      "shipping": "الشحن",
      "tax": "ضريبة",
      "product": "المنتج",
      "sku": "SKU",
      "price": "السعر",
      "quantity": "كمية",
      "total": "مجموع",
      "fulfilled_at": "استيفاء ",
      "subtotal": "حاصل الجمع",
      "track_shipment": "شحنة المسار"
    },
    "recover_password": {
      "title": "اعد ضبط كلمه السر",
      "email": "البريد الإلكتروني",
      "submit": "خضع",
      "cancel": "إلغاء",
      "subtext": "سوف نرسل لك رسالة بريد إلكتروني لإعادة تعيين كلمة المرور الخاصة بك.",
      "success": "لقد أرسلنا إليك رسالة بريد إلكتروني تحتوي على رابط لتحديث كلمة المرور الخاصة بك."
    },
    "reset_password": {
      "title": "إعادة تعيين كلمة مرور الحساب",
      "password": "كلمه السر",
      "password_confirm": "تأكيد كلمة المرور",
      "submit": "إعادة تعيين كلمة المرور"
    },
    "register": {
      "page_title": "تسجيل",
      "heading": "عميل جديد",
      "title": "إنشاء حساب",
      "first_name": "الاسم الاول",
      "last_name": "الكنية",
      "email": "البريد الإلكتروني",
      "password": "كلمه السر",
      "submit": "خلق",
      "content": "اشترك للحصول على حساب مجاني في متجرنا. تسجيل سريع وسهل. انها تسمح لك أن تكون قادرة على طلب من متجر لدينا. لبدء التسوق انقر فوق التسجيل."
    }
  },
  "homepage": {
    "onboarding": {
      "product_title": "عنوان المنتج",
      "product_description": "تُستخدم هذه المنطقة لوصف تفاصيل منتجك. أخبر العملاء عن شكل ومظهر وأسلوب منتجك. أضف تفاصيل عن اللون والمواد المستخدمة والمقاسات ومكان صنعها.",
      "collection_title": "عنوان المجموعة",
      "blog_title": "عنوان مشاركتك",
      "blog_excerpt": "لم ينشر متجرك أي مشاركات مدونة حتى الآن. يمكن استخدام المدونة للتحدث عن إطلاق المنتجات الجديدة أو التلميحات أو الأخبار الأخرى التي تريد مشاركتها مع عملائك. يمكنك الاطلاع على مدونة التجارة الإلكترونية في Shopify للحصول على الإلهام والمشورة لمتجرك الخاص and blog.",
      "blog_author": "اسم المؤلف",
      "no_content": "لا يتضمن هذا القسم حاليًا أي محتوى. أضف محتوى إلى هذا القسم باستخدام الشريط الجانبي."
    }
  },
  "layout": {
    "navigation": {
      "search": "بحث",
      "expand": "وسعت",
      "collapse": "انهدام",
      "menu": "قائمة طعام",
      "back": "الى الخلف"
    },
    "cart": {
      "title": "عربة التسوق",
      "items_count": {
        "one": "بند",
        "other": "العناصر"
      }
    },
    "customer": {
      "account": "الحساب",
      "log_out": "الخروج",
      "log_in": "تسجيل الدخول",
      "create_account": "تسجيل"
    },
    "footer": {
      "social_platform": " on "
    }
  },
  "products": {
    "product": {
      "prev": "سابق",
      "next": "التالى",
      "pro_details": "تفاصيل المنتج",
      "size_chart": "حجم الرسم البياني",
      "sold_out": "بيعت كلها",
      "availability": "توفر:",
      "in_stock": "في المخزن",
      "out_of_stock": "إنتهى من المخزن",
      "on_sale": "تخفيض السعر",
      "brand": "علامة تجارية",
      "sku": "SKU",
      "product_type": "نوع المنتج",
      "quantity": "كمية:",
      "add_to_cart": "أضف إلى السلة",
      "but_now": "اشتري الآن",
      "back_to_collection": "ارجع الى ",
      "add_wishlist": "أضف إلى قائمة الامنيات",
      "include_taxes": "وشملت الضرائب.",
      "social_share": "أنشرها",
      "select_options": "اشر على الخيارات",
      "secure_payment": "الدفع الآمن 100 ٪",
      "ask_abt_pro": "استفسار عن المنتج?",
      "login_to_see_price": "تسجيل الدخول لرؤية السعر",
      "shipping_policy_html": "<a href=\"\">يحسب الشحن<\/a> عند الخروج."
    },
    "compare": {
      "compare_products": "قارن بين المنتجات",
      "compare_at": "مقارنة في",
      "product_name": "اسم المنتج",
      "product_image": "صورة المنتج",
      "product_desc": "وصف المنتج",
      "availability": "توفر",
      "available_stock": "موجود في المستودع",
      "unavailable_stock": "غير متوفر في المخزون",
      "compare_note": "قائمة المقارنة الخاصة بك ممتلئة! قم بإزالة أي منتج ?",
      "added_to_cmp": "أضيفت للمقارنة",
      "add_to_cmp": "أضف للمقارنة",
      "confirm_box": "نعم ، أريد مشاهدته!",
      "cancelButtonText": "استمر"
    }
  },
  "gift_cards": {
    "issued": {
      "title_html": "وهنا لديك  بطاقة هدية ل ShopDrop!",
      "subtext": "بطاقة الهدية الخاصة بك",
      "gift_card_code": "رمز بطاقة الهدايا",
      "disabled": "معاق",
      "expired": "انتهت يوم ",
      "active": "تنتهي صلاحيته في ",
      "redeem_html": "استخدم هذا الرمز عند الخروج لاسترداد قيمة  كرت هدية",
      "shop_link": "ابدأ بالتسوق",
      "print": "اطبع بطاقة الهدايا هذه",
      "remaining_html": " اليسار",
      "add_to_apple_wallet": "إضافة إلى محفظة Apple",
      "qr_image_alt": "رمز الاستجابة السريعة - المسح الضوئي لاسترداد بطاقة الهدايا"
    }
  },
  "date_formats": {
    "month_day_year": "%B %d, %Y"
  }
},
	
	
	
	
	
	
	
	
	"de":{
  "general": {
    "accessibility": {
      "skip_to_content": "Zum Inhalt springen",
      "close_modal": "Schließen (Esc)",
      "link_messages": {
        "new_window": "Öffnet sich in einem neuen Fenster.",
        "external": "Öffnet eine externe Website.",
        "new_window_and_external": "Öffnet die externe Website in einem neuen Fenster."
      }
    },
    "meta": {
      "tags": "Tagged \"\"",
      "page": "Page "
    },
    "404": {
      "title": "404",
      "subtext": "Seite nicht gefunden",
      "link": "Zurück nach Hause"
    },
    "password_page": {
      "opening_soon": "Öffnet bald",
      "login_form_heading": "Store mit Passwort eingeben",
      "login_form_password_label": "Passwort",
      "login_form_password_placeholder": "Ihr Passwort",
      "login_form_submit": "Eingeben",
      "signup_form_email_label": "Email",
      "signup_form_success": "Wir senden Ihnen eine E-Mail, bevor wir öffnen! ",
      "admin_link_html": "Bist du der Ladenbesitzer? <a href=\"\/admin\" class=\"text-link\"> Hier anmelden < \/ a> ",
      "password_link": "Geben Sie Ihr Passwort ein",
      "powered_by_shopify_html": "Dieser Shop wird mit Strom versorgt "
    },
    "social": {
      "share_on_facebook": "Aktie",
      "share_on_twitter": "Tweet",
      "share_on_pinterest": "Pin es",
      "share_on_google": "Google es",
      "share_on_linkedin": "Linkedin es",
      "alt_text": {
        "share_on_facebook": "Auf Facebook teilen",
        "share_on_twitter": "Tweet auf Twitter",
        "share_on_pinterest": "Pin auf Pinterest",
        "share_on_google": "Auf Google teilen",
        "share_on_linkedin": "Teilen Sie auf Linkedin"
      }
    },
    "search": {
      "no_results_html": "Es tut uns leid! Das gewünschte Produkt wurde nicht gefunden !!! ",
      "no_results_html_desc": "Bitte überprüfen Sie, ob Sie etwas falsch geschrieben haben oder suchen Sie mit anderen Wörtern. ",
      "results_with_count": {
        "one": " result for \"\"",
        "other": " results for \"\""
      },
      "title": "Durchsuchen Sie unsere Website ",
      "subtitle": "Suche",
      "placeholder": "Produktsuche",
      "submit": "einreichen"
    },
  
    "breadcrumb": {
      "home": "Zuhause"
    },
    "wishlist": {
      "title": "Wunschzettel",
      "image": "Bild",
      "product_name": "Produktname",
      "price": "Preis",
      "avalibility": "Verfügbarkeit",
      "in_stock": "Auf Lager",
      "out_of_stock": "Ausverkauft",
      "action": "Aktion",
      "empty_wishlist": "Ihre Wunschliste ist derzeit leer.",
      "continue_shoppping": "Mit dem Einkaufen fortfahren",
      "add_wishlist_html": "Um eine Wunschliste erstellen zu können, müssen Sie <a href='\/account\/login'>Zeichen in<\/a> or <a href='\/account\/register'>ein Konto erstellen<\/a>."
    },
    "payment": {
      "method": "Zahlungsarten"
    }
  },
  "sections": {
    "featured_product": {
      "shop_now": "Jetzt einkaufen",
      "view_more": "mehr sehen",
      "new_tag": "Neu",
      "sale_tag": "Verkauf"
    }
  },
  "blogs": {
    "article": {
      "posted_by": "Geschrieben von :",
      "back_to_blog": "Zurück zu",
      "tags": "Stichworte"
    },
    "comments": {
      "title": "Hinterlasse einen Kommentar",
      "name": "Name",
      "email": "Email",
      "message": "Botschaft",
      "post": "Kommentar posten",
      "moderated": "Bitte beachten Sie, dass Kommentare vor ihrer Veröffentlichung genehmigt werden müssen ",
      "success_moderated": "Ihr Kommentar wurde erfolgreich veröffentlicht. Wir werden es in Kürze veröffentlichen, da unser Blog moderiert ist.",
      "success": "Ihr Kommentar wurde erfolgreich veröffentlicht! Vielen Dank!",
      "comments": "Bemerkungen"
    }
  },
  "cart": {
    "general": {
      "title": "Ihr Warenkorb",
      "remove": "Löschen",
      "subtotal": "Zwischensumme",
      "total": "Gesamtpreis:",
      "savings": "Du sparst",
      "taxes_and_shipping_at_checkout": "Steuern und Versand an der Kasse berechnet ",
      "taxes_and_shipping_policy_at_checkout_html": "Steuern und <a href=\"\"> Versand berechnet < \/ a> an der Kasse ",
      "taxes_included_but_shipping_at_checkout": "Inkl. MwSt. Und Versandkosten an der Kasse berechnet ",
      "taxes_included_and_shipping_policy_html": "TAxt enthalten. <a href=\"\"> Versand berechnet an der Kasse.",
      "update": "Aktualisieren",
      "checkout": "Auschecken",
      "clear_cart": "Warenkorb löschen",
      "empty": "Ihr Warenkorb ist derzeit leer.",
      "cookies_required": "Aktivieren Sie Cookies, um den Einkaufswagen zu verwenden",
      "edit": "Bearbeiten",
      "cancel": "Stornieren",
      "continue_shopping": "Mit dem Einkaufen fortfahren"
    },
    "label": {
      "image": "Bild",
      "product": "Produktname",
      "price": "Preis",
      "quantity": "Menge",
      "action": "Aktion",
      "total": "Gesamt"
    }
  },
  "collections": {
    "general": {
      "view_all": "Alle ansehen",
      "view_all_label": "Alle Produkte im ansehen Sammlung",
      "loading": "Wird geladen...",
      "load_more_pro": "Laden Sie mehr Produkte",
      "no_more_product": "Keine weiteren Produkte",
      "no_matches": "Sorry, keine Produkte in dieser Kollektion"
    },
    "sorting": {
      "title": "Sortiere nach",
      "featured": "Vorgestellt",
      "best_selling": "Meistverkauft",
      "az": "Alphabetisch A-Z",
      "za": "Alphabetisch Z-A",
      "price_ascending": "Preis niedrig bis hoch",
      "price_descending": "Preis hoch bis niedrig",
      "date_descending": "Datum, neu zu alt",
      "date_ascending": "Datum, alt bis neu",
      "warning_message": "Die Auswahl einer Auswahl führt zu einer vollständigen Seitenaktualisierung. "
    },
    "filters": {
      "title_tags": "Filter",
      "clear_all": "Alles löschen",
      "apply": "Sich bewerben",
      "all_tags": "Alle Produkte"
    }
  },
  "contact": {
    "form": {
      "name": "Name",
      "email": "Email",
      "phone": "Telefonnummer",
      "message": "Botschaft",
      "submit": "Senden",
      "post_success": "Danke, dass sie uns kontaktiert haben. Wir melden uns so schnell wie möglich bei Ihnen."
    }
  },
  "customer": {
    "account": {
      "title": "Mein Konto",
      "details": "Kontodetails",
      "view_addresses": "Adressen anzeigen ",
      "return": "Zurück zu den Kontodetails",
      "log_out": "Ausloggen"
    },
    "activate_account": {
      "title": "Konto aktivieren",
      "subtext": "Erstellen Sie Ihr Passwort, um Ihr Konto zu aktivieren.",
      "password": "Passwort",
      "password_confirm": "Passwort bestätigen",
      "submit": "Konto aktivieren",
      "cancel": "Einladung ablehnen"
    },
    "addresses": {
      "title": "Deine Adresses",
      "heading": "Kontoadresse verwalten",
      "default": "Standard",
      "another": "Ein weiterer",
      "add_new": "Füge eine neue Adresse hinzu",
      "edit_address": "Adresse bearbeiten",
      "first_name": "Vorname",
      "last_name": "Nachname",
      "company": "Unternehmen",
      "address1": "Adresse 1",
      "address2": "Adresse 2",
      "city": "Stadt",
      "country": "Land",
      "province": "Provinz",
      "zip": "PLZ \/ Postleitzahl",
      "phone": "Telefon",
      "set_default": "Als Standardadresse festlegen",
      "add": "Adresse hinzufügen",
      "update": "Adresse aktualisieren",
      "cancel": "Stornieren",
      "edit": "Bearbeiten",
      "delete": "Löschen",
      "delete_confirm": "Möchten Sie diese Adresse wirklich löschen??"
    },
    "login": {
      "title": "Kundenlogin",
      "email": "Email",
      "password": "Passwort",
      "forgot_password": "Haben Sie Ihr Passwort vergessen?",
      "login": "Anmeldung",
      "guest_title": "Weiter als Gast",
      "guest_continue": "Fortsetzen"
    },
    "orders": {
      "title": "Bestellverlauf",
      "order_number": "Auftrag",
      "date": "Datum",
      "payment_status": "Zahlungsstatus",
      "fulfillment_status": "Erfüllungsstatus",
      "total": "Gesamt",
      "none": "Sie haben noch keine Bestellungen aufgegeben."
    },
    "order": {
      "title": "Auftrag",
      "date": "Platziert auf ",
      "cancelled": "Bestellung storniert am",
      "cancelled_reason": "Grund:",
      "billing_address": "Rechnungsadresse",
      "payment_status": "Zahlungsstatus",
      "shipping_address": "Lieferanschrift",
      "fulfillment_status": "Erfüllungsstatus",
      "discount": "Rabatt",
      "shipping": "Versand",
      "tax": "MwSt",
      "product": "Produkt",
      "sku": "SKU",
      "price": "Preis",
      "quantity": "Menge",
      "total": "Gesamt",
      "fulfilled_at": "Erfüllt ",
      "subtotal": "Zwischensumme",
      "track_shipment": "Sendung verfolgen"
    },
    "recover_password": {
      "title": "Setze dein Passwort zurück",
      "email": "Email",
      "submit": "einreichen",
      "cancel": "Stornieren",
      "subtext": "Wir senden Ihnen eine E-Mail, um Ihr Passwort zurückzusetzen.",
      "success": "Wir haben Ihnen eine E-Mail mit einem Link zum Aktualisieren Ihres Passworts gesendet."
    },
    "reset_password": {
      "title": "Setzen Sie das Kontopasswort zurück",
      "password": "Passwort",
      "password_confirm": "Passwort bestätigen",
      "submit": "Passwort zurücksetzen"
    },
    "register": {
      "page_title": "registrieren",
      "heading": "Neukunde",
      "title": "Benutzerkonto anlegen",
      "first_name": "Vorname",
      "last_name": "Nachname",
      "email": "Email",
      "password": "Passwort",
      "submit": "Erstellen",
      "content": "Melden Sie sich für ein kostenloses Konto bei uns an. Die Registrierung ist schnell und einfach. Damit können Sie in unserem Shop bestellen. Um mit dem Einkauf zu beginnen, klicken Sie auf Registrieren."
    }
  },
  "homepage": {
    "onboarding": {
      "product_title": "Titel des Produkts",
      "product_description": "In diesem Bereich werden die Details Ihres Produkts beschrieben. Erzählen Sie Ihren Kunden das Aussehen, das Gefühl und den Stil Ihres Produkts. Fügen Sie Details zu Farbe, verwendeten Materialien, Größen und Herstellungsort hinzu.",
      "collection_title": "Titel der Sammlung ",
      "blog_title": "Titel Ihres Beitrags",
      "blog_excerpt": "Ihr Geschäft hat noch keine Blogbeiträge veröffentlicht. In einem Blog können Sie über Produkteinführungen, Tipps oder andere Neuigkeiten sprechen, die Sie mit Ihren Kunden teilen möchten. Besuchen Sie den E-Commerce-Blog von Shopify, um Anregungen und Ratschläge für Ihr eigenes Geschäft und Blog zu erhalten.",
      "blog_author": "Autorenname",
      "no_content": "Dieser Abschnitt enthält derzeit keine Inhalte. Fügen Sie diesem Abschnitt mithilfe der Seitenleiste Inhalt hinzu."
    }
  },
  "layout": {
    "navigation": {
      "search": "Suche",
      "expand": "erweitern",
      "collapse": "Zusammenbruch",
      "menu": "Speisekarte",
      "back": "zurück"
    },
    "cart": {
      "title": "Wagen",
      "items_count": {
        "ein": "Artikel",
        "andere": "Artikel"
      }
    },
    "customer": {
      "account": "Konto",
      "log_out": "Ausloggen",
      "log_in": "Anmeldung",
      "create_account": "registrieren"
    },
    "footer": {
      "social_platform": " auf "
    }
  },
  "products": {
    "product": {
      "prev": "vorheriges",
      "next": "Nächster",
      "pro_details": "Produktdetails",
      "size_chart": "Größentabelle",
      "sold_out": "Ausverkauft",
      "availability": "Verfügbarkeit:",
      "in_stock": "Auf Lager",
      "out_of_stock": "Ausverkauft",
      "on_sale": "Verkauf",
      "brand": "Marke:",
      "sku": "SKU:",
      "product_type": "Produktart:",
      "quantity": "Menge:",
      "add_to_cart": "In den Warenkorb legen",
      "but_now": "Kaufe jetzt",
      "back_to_collection": "Zurück zu",
      "add_wishlist": "Zur Wunschliste hinzufügen",
      "include_taxes": "Steuern inklusive.",
      "social_share": "Teilt es",
      "select_options": "wähle Optionen",
      "secure_payment": "100% sichere Zahlung",
      "ask_abt_pro": "Anfrage zum Produkt?",
      "login_to_see_price": "Login Preis anzeigen",
      "shipping_policy_html": "<a href=\"\">Shipping berechnet<\/a> at checkout."
    },
    "compare": {
      "compare_products": "Produkte vergleichen",
      "compare_at": "Vergleichen, um",
      "product_name": "Produktname",
      "product_image": "Produktbild",
      "product_desc": "Produktbeschreibung",
      "availability": "Verfügbarkeit",
      "available_stock": "Auf Lager",
      "unavailable_stock": "Nicht verfügbar Auf Lager",
      "compare_note": "Ihre Vergleichsliste ist voll! Entfernen Sie ein beliebiges Produkt?",
      "added_to_cmp": "Zum Vergleich hinzugefügt",
      "add_to_cmp": "Hinzufügen zum vergleichen",
      "confirm_box": "Ja, ich möchte es sehen!",
      "cancelButtonText": "Fortsetzen"
    }
  },
  "gift_cards": {
    "issued": {
      "title_html": "Hier ist dein    Geschenkkarte für ShopDrop!",
      "subtext": "Ihre Geschenkkarte",
      "gift_card_code": "Gutscheincode ",
      "disabled": "Deaktiviert",
      "expired": "Abgelaufen am ",
      "active": "Läuft aus am",
      "redeem_html": "Verwenden Sie diesen Code an der Kasse, um Ihren Geschenkkarte",
      "shop_link": "Beginn mit dem Einkauf",
      "print": "Drucken Sie diese Geschenkkarte aus",
      "remaining_html": " left",
      "add_to_apple_wallet": "Zu Apple Wallet hinzufügen",
      "qr_image_alt": "QR-Code - scannen, um die Geschenkkarte einzulösen"
    }
  },
  "date_formats": {
    "month_day_year": "%B %d, %Y"
  }
},
	
	
	
	
	
	
	
	
	"it":{
  "general": {
    "accessibility": {
      "skip_to_content": "Salta al contenuto",
      "close_modal": "Close (Esc)",
      "link_messages": {
        "new_window": "Si apre in una nuova finestra.",
        "external": "Apre un sito esterno.",
        "new_window_and_external": "Apre il sito Web esterno in una nuova finestra."
      }
    },
    "meta": {
      "tags": "Tagged \"\"",
      "page": "Pagina "
    },
    "404": {
      "title": "404",
      "subtext": "Pagina non trovata",
      "link": "Tornare a casa"
    },
    "password_page": {
      "opening_soon": "Prossima apertura",
      "login_form_heading": "Inserisci il negozio utilizzando la password",
      "login_form_password_label": "Parola d'ordine",
      "login_form_password_placeholder": "La tua password",
      "login_form_submit": "accedere",
      "signup_form_email_label": "E-mail",
      "signup_form_success": "Ti invieremo un'email appena prima dell'apertura!",
      "admin_link_html": "Sei il proprietario del negozio? <a href=\"\/admin\" class=\"text-link\">Log in here<\/a>",
      "password_link": "Inserisci la password",
      "powered_by_shopify_html": "Questo negozio sarà alimentato da"
    },
    "social": {
      "share_on_facebook": "Condividere",
      "share_on_twitter": "Tweet",
      "share_on_pinterest": "Fissalo",
      "share_on_google": "Google it",
      "share_on_linkedin": "Linkedin ",
      "alt_text": {
        "share_on_facebook": "Condividi su Facebook",
        "share_on_twitter": "Tweet su Twitter",
        "share_on_pinterest": "Pin su Pinterest",
        "share_on_google": "Condividi su Google",
        "share_on_linkedin": "Condividi su Linkedin"
      }
    },
    "search": {
      "no_results_html": "Scusate! Impossibile trovare il prodotto che stavi cercando!!!",
      "no_results_html_desc": "Controlla se hai sbagliato qualcosa o prova a cercare con altre parole.",
      "results_with_count": {
        "una": " risultato per \"\"",
        "altra": " risultati per \"\""
      },
      "title": "Cerca il nostro postoe",
      "subtitle": "Ricerca",
      "placeholder": "Cerca prodotti",
      "submit": "Sottoscrivi"
    },
  
    "breadcrumb": {
      "home": "Casa"
    },
    "wishlist": {
      "title": "wishlist",
      "image": "Immagine",
      "product_name": "nome del prodotto",
      "price": "Prezzo",
      "avalibility": "Disponibilità",
      "in_stock": "Disponibile",
      "out_of_stock": "Esaurito",
      "action": "Azione",
      "empty_wishlist": "La tua lista dei desideri è attualmente vuota.",
      "continue_shoppping": "Continua a fare acquisti",
      "add_wishlist_html": "Per creare una lista dei desideri devi <a href='\/account\/login'>accedi <\ / a> o <a href='\/account\/register'> crea un account <\ / a>. "
    },
    "payment": {
      "method": "Modalità di pagamento"
    }
  },
  "sections": {
    "featured_product": {
      "shop_now": "Acquistare ora",
      "view_more": "vedi di più ",
      "new_tag": "nuova",
      "sale_tag": "saldi"
    }
  },
  "blogs": {
    "article": {
      "posted_by": "Pubblicato da:",
      "back_to_blog": "Torna a ",
      "tags": "tag"
    },
    "comments": {
      "title": "lascia un commento",
      "name": "Nome",
      "email": "E-mail",
      "message": "Messaggio",
      "post": "Posta un commento",
      "moderated": "Si prega di notare che i commenti devono essere approvati prima di essere pubblicati",
      "success_moderated": "Il tuo commento è stato pubblicato con successo. Lo pubblicheremo tra un po ', dato che il nostro blog è moderato.",
      "success": "Il tuo commento è stato pubblicato con successo! Grazie!",
      "comments": "Commenti"
    }
  },
  "cart": {
    "general": {
      "title": "Il tuo carrello",
      "remove": "Rimuovere",
      "subtotal": "totale parziale",
      "total": "totale parziale ...:",
      "savings": "Stai risparmiando",
      "taxes_and_shipping_at_checkout": "Tasse e spese di spedizione calcolate al momento del pagamento",
      "taxes_and_shipping_policy_at_checkout_html": "Tasse e <a href=\"\"> spedizione calcolata <\ / a> al checkout ",
      "taxes_included_but_shipping_at_checkout": "Tasse incluse e spese di spedizione calcolate al momento del pagamento",
      "taxes_included_and_shipping_policy_html": "Tasse incluse. <a href=\"\"> Spedizione calcolata <\ / a> al checkout. ",
      "update": "Aggiornare",
      "checkout": "Check-out",
      "clear_cart": "Cancella il carrello",
      "empty": "Il carrello è vuoto.",
      "cookies_required": "Abilita i cookie per utilizzare il carrello",
      "edit": "modificare",
      "cancel": "Annulla",
      "continue_shopping": "Continua a fare acquisti"
    },
    "label": {
      "image": "Immagine",
      "product": "nome del prodotto",
      "price": "Prezzo",
      "quantity": "Quantità",
      "action": "Azione",
      "total": "Totale"
    }
  },
  "collections": {
    "general": {
      "view_all": "Guarda tutto",
      "view_all_label": "Visualizza tutti i prodotti in  collezione",
      "loading": "Caricamento in corso...",
      "load_more_pro": "Carica altri prodotti",
      "no_more_product": "Nessun altro prodotto ",
      "no_matches": "Siamo spiacenti, nessun prodotto in questa collezione"
    },
    "sorting": {
      "title": "Ordina per",
      "featured": "In primo piano",
      "best_selling": "La migliore vendita",
      "az": "Alfabetico, A-Z",
      "za": "Alfabetico, A-Z, Z-A",
      "price_ascending": "Prezzo, da basso a alto",
      "price_descending": "Prezzo, da alto a basso",
      "date_descending": "Data, nuovo al vecchio",
      "date_ascending": "Data, da vecchio a nuovo",
      "warning_message": "scegliendo una selezione si ottiene un aggiornamento completo della pagina"
    },
    "filters": {
      "title_tags": "Filtro",
      "clear_all": "Cancella tutto",
      "apply": "Applicare",
      "all_tags": "Tutti i prodotti"
    }
  },
  "contact": {
    "form": {
      "name": "Nome",
      "email": "E-mail",
      "phone": "Numero di telefono",
      "message": "Messaggio",
      "submit": "Inviare",
      "post_success": "Grazie per averci contattato. Ti risponderemo il prima possibile."
    }
  },
  "customer": {
    "account": {
      "title": "Il mio account",
      "details": "Dettagli account",
      "view_addresses": "Visualizza indirizzi",
      "return": "Torna ai dettagli dell'account ",
      "log_out": "Disconnettersi"
    },
    "activate_account": {
      "title": "Attiva account",
      "subtext": "Crea la tua password per attivare il tuo account.",
      "password": "Parola d'ordine",
      "password_confirm": "conferma password",
      "submit": "Attiva account",
      "cancel": "Rifiuta l'invito"
    },
    "addresses": {
      "title": "I tuoi indirizzi",
      "heading": "Gestisci l'indirizzo dell'account",
      "default": "Predefinita",
      "another": "Un altro",
      "add_new": "Aggiungi un nuovo indirizzo",
      "edit_address": "Modifica indirizzo",
      "first_name": "Nome di battesimo",
      "last_name": "Cognome",
      "company": "Azienda",
      "address1": "Indirizzo 1",
      "address2": "Indirizzo 2",
      "city": "Città",
      "country": "Nazione",
      "province": "Provincia",
      "zip": "Codice postale",
      "phone": "Telefono",
      "set_default": "Imposta come indirizzo predefinito",
      "add": "Aggiungi indirizzo",
      "update": "Indirizzo di aggiornamento",
      "cancel": "Annulla",
      "edit": "modificare",
      "delete": "Delete",
      "delete_confirm": "Sei sicuro di voler cancellare questo indirizzo?"
    },
    "login": {
      "title": "Login del cliente",
      "email": "E-mail",
      "password": "Parola d'ordine",
      "forgot_password": "Hai dimenticato la password?",
      "login": "Accesso",
      "guest_title":"Continua come ospite",
      "guest_continue": "Continua"
    },
    "orders": {
      "title": "Cronologia ordini",
      "order_number": "Ordine",
      "date": "Date",
      "payment_status": "Stato del pagamento",
      "fulfillment_status": "stato di adempimento",
      "total": "Totale",
      "none": "Non hai ancora effettuato alcun ordine."
    },
    "order": {
      "title": "Ordine ",
      "date": "Posto su ",
      "cancelled": "Ordine cancellato su",
      "cancelled_reason": "Ragionare: ",
      "billing_address": "Indirizzo Di Fatturazione",
      "payment_status": "Stato del pagamento",
      "shipping_address": "Indirizzo di spedizione",
      "fulfillment_status": "stato di adempimento",
      "discount": "Sconto",
      "shipping": "spedizione",
      "tax": "Imposta",
      "product": "Prodotto",
      "sku": "SKU",
      "price": "Prezzo",
      "quantity": "Quantità",
      "total": "Totale",
      "fulfilled_at": "Soddisfatto ",
      "subtotal": "totale parziale",
      "track_shipment": "Tracciare la spedizione"
    },
    "recover_password": {
      "title": "reimposta la tua password",
      "email": "E-mail",
      "submit": "Sottoscrivi",
      "cancel": "Annulla",
      "subtext": "Ti invieremo un'email per reimpostare la password.",
      "success": "Ti abbiamo inviato un'email con un link per aggiornare la tua password."
    },
    "reset_password": {
      "title": "Reimposta la password dell'account",
      "password": "Parola d'ordine",
      "password_confirm": "conferma password",
      "submit": "Resetta la password"
    },
    "register": {
      "page_title": "Registrare",
      "heading": "Nuovo cliente",
      "title": "Creare un profilo",
      "first_name": "Nome di battesimo",
      "last_name": "Cognome",
      "email": "E-mail",
      "password": "Parola d'ordine",
      "submit": "Creare",
      "content": "Iscriviti per un account gratuito presso il nostro negozio. La registrazione è semplice e veloce. Ti permette di essere in grado di ordinare dal nostro negozio. Per iniziare a fare acquisti, fai clic su registrati."
    }
  },
  "homepage": {
    "onboarding": {
      "product_title": "Titolo del prodotto",
      "product_description": "Questa area è usata per descrivere i dettagli del tuo prodotto. Racconta ai clienti l'aspetto, la sensazione e lo stile del tuo prodotto. Aggiungi dettagli su colore, materiali utilizzati, dimensionamento e dove è stato pazzoe.",
      "collection_title": "Titolo della collezione",
      "blog_title": "Il titolo del tuo post",
      "blog_excerpt": "Il tuo negozio non ha ancora pubblicato nessun post sul blog. Un blog può essere utilizzato per parlare di lanci di nuovi prodotti, suggerimenti o altre notizie che desideri condividere con i tuoi clienti. Puoi consultare il blog di e-commerce di Shopify per trovare ispirazione e consigli per il tuo negozio e blog.",
      "blog_author": "Nome dell'autore",
      "no_content": "Questa sezione al momento non include alcun contenuto. Aggiungi contenuto a questa sezione usando la barra laterale."
    }
  },
  "layout": {
    "navigation": {
      "search": "Ricerca",
      "expand": "espandere",
      "collapse": "crollo",
      "menu": "Menu",
      "back": "indietro"
    },
    "cart": {
      "title": "Carrello",
      "items_count": {
        "one": "articolo",
        "other": "elementi"
      }
    },
    "customer": {
      "account": "account",
      "log_out": "Disconnettersi",
      "log_in": "accesso",
      "create_account": "Registrare"
    },
    "footer": {
      "social_platform": " sopra "
    }
  },
  "products": {
    "product": {
      "prev": "prev",
      "next": "Il prossimo",
      "pro_details": "Dettagli del prodotto",
      "size_chart": "Tabella di formato",
      "sold_out": "Esaurito",
      "availability": "Disponibilità",
      "in_stock": "disponibile",
      "out_of_stock": "Esaurito",
      "on_sale": "saldi",
      "brand": "Marca",
      "sku": "SKU",
      "product_type": "Tipologia di prodotto",
      "quantity": "Quantità",
      "add_to_cart": "Aggiungi al carrello",
      "but_now": "Acquista ora",
      "back_to_collection": "Torna a ",
      "add_wishlist": "Aggiungi alla lista dei desideri",
      "include_taxes": "Tasse incluse.",
      "social_share": "Condividilo",
      "select_options": "Selezionare le opzioni",
      "secure_payment": "Pagamento sicuro al 100% ",
      "ask_abt_pro": "richiesta di informazioni sul prodotto?",
      "login_to_see_price": "Login per vedere il prezzo",
      "shipping_policy_html": "<a href=\"\"> Spedizione calcolata <\ / a> al momento del pagamento."
    },
    "compare": {
      "compare_products": "Confronta Prodotti",
      "compare_at": "Confronta a",
      "product_name": "nome del prodotto",
      "product_image": "Immagine del prodotto",
      "product_desc": "Descrizione del prodotto",
      "availability": "Disponibilità",
      "available_stock": "Disponibile Disponibile",
      "unavailable_stock": "Non disponibile In stock",
      "compare_note": "La tua lista dei Confronti è piena! Rimuovi qualsiasi prodotto?",
      "added_to_cmp": "Aggiunto per confrontare",
      "add_to_cmp": "Aggiungi a confronto",
      "confirm_box": "Sì, voglio vederlo!",
      "cancelButtonText": "Continua"
    }
  },
  "gift_cards": {
    "issued": {
      "title_html": "Ecco la tua carta regalo  per ShopDrop!",
      "subtext": "La tua carta regalo",
      "gift_card_code": "Codice della carta regalo ",
      "disabled": "Disabilitata",
      "expired": "Scaduto ",
      "active": "Scade il ",
      "redeem_html": "Usa questo codice al momento del pagamento per riscattare il tuo  carta regalo",
      "shop_link": "Inizia lo shopping",
      "print": "Stampa questa carta regalo",
      "remaining_html": " sinistra",
      "add_to_apple_wallet": "Aggiungi al portafoglio Apple",
      "qr_image_alt": "Codice QR: scansiona per riscattare la carta regalo"
    }
  },
  "date_formats": {
    "month_day_year": "%B %d, %Y"
  }
}
	
	
}
jQuery(function() {
    jQuery('.swatch :radio').change(function() {
      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      jQuery(this)
      .closest('form')
      .find('.single-option-selector')
      .eq(optionIndex)
      .val(optionValue)
      .trigger('change');
    });
  });

  $(function() {
    $('#someone-purchased').show();
    var mytimeAgo = ['20 seconds', '34 seconds','35 seconds', '43 seconds','1 minute', '5 minutes', '10 minutes', '12 minutes', '14 minutes', '16 minutes', '18 minutes', '20 minutes', '25 minutes', '30 minutes', '35 minutes', '40 minutes','42 minutes','45 minutes', '50 minutes', '1 hours'];  
    var randomlytimeAgo = Math.floor(Math.random() * mytimeAgo.length);
    var currentmytimeAgo = mytimeAgo[randomlytimeAgo];

    $(".timeAgo").text(currentmytimeAgo+" ago"); 
    $("#someone-purchased > div:gt(0)").hide();

    setInterval(function() {
      $('#someone-purchased > div:first')
      .fadeOut(0)
      .next()
      .fadeIn(0)
      .end()
      .appendTo('#someone-purchased');

      var mytimeAgo = ['0 minute', '1 minute', '5 minutes', '10 minutes', '12 minutes', '14 minutes', '16 minutes', '18 minutes', '20 minutes', '25 minutes', '30 minutes', '35 minutes', '40 minutes','42 minutes','45 minutes', '50 minutes', '1 hours'];  
      var randomlytimeAgo = Math.floor(Math.random() * mytimeAgo.length);
      var currentmytimeAgo = mytimeAgo[randomlytimeAgo];

      $(".timeAgo").text(currentmytimeAgo+" ago");
    },  20000);

    setInterval(function() {
      $('#someone-purchased').fadeIn(function() {    $(this).removeClass("fade-out"); }).delay(5000).fadeIn( function() {  $(this).addClass("fade-out"); }).delay(15000); 
    }, 5000);

  });

  $(document).ready(function() {
    $('.close_sales_popup').click(function(){
      $(this).parent().closest('div').hide();
    });
  });


    
  $(window).on('load',function(){
    setTimeout(function(){
      $('#exampleModal').modal('show');
    }, 500);
  });
  
  //    tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  $(document).ready(function() {
    $('#ageModal').modal({
      backdrop: 'static',
      keyboard: false
    });
    
    var currentLang = localStorage.getItem("selectLang");
    if(currentLang != null){
      $("#translate option").each(function(){
        var val = $(this).attr('data-val');
        if(val == currentLang){ 
          $(this).attr('selected','selected');
        }
      });
      $('.lang_trans').each(function(index) {
        var item = $(this);
        var data_trans = $(this).attr('data-trans');
        var data_trans_val = data_trans.replace('#', '');
        var trans_id = $(this).next().attr('id');
        var trans_content = $(this).next().text();
        var array = trans_content.split(',');
        $.each(array,function(i){
          var val = array[i];
          var _name = val.split(':')[0];
          var lang_name = _name.replace(/[^A-Z0-9]/ig, "");
          var _content = val.substr(val.indexOf(":") + 1);
          var lang_content = _content.toString().replace(/"/g, "");
          var lang_content = lang_content.toString().replace(/[{}]/g, "");
          if(data_trans_val == trans_id){
            if(currentLang == lang_name){
              item.text(lang_content);
            }
          }
        });
      });
      $('.lang_desc_trans').each(function(index) {
        var item = $(this);
        var data_trans = $(this).attr('data-trans');
        var data_trans_val = data_trans.replace('#', '');
        var trans_id = $(this).next().attr('id');
//         console.log(trans_id);
        var trans_content = $(this).next().html();
        var array = trans_content.split(';;');
        $.each(array,function(i){
          var val = array[i];
          var _name = val.split(':-')[0];
          var lang_name = _name.replace(/[^A-Z0-9]/ig, "");
          var _content = val.substr(val.indexOf(":") + 1);
          var lang_content = _content.toString().replace(/"/g, "");
          var lang_content = lang_content.toString().replace(/[{}]/g, "");
		  var _lang_content = _lang_content.substring(_lang_content.indexOf('[') + 1, _lang_content.indexOf(']'));
          if(data_trans_val == trans_id){
            if(currentLang == lang_name){
              item.html(_lang_content);
            }
          }
        });
      });
//       $('[data-trans-key]').each(function(index) {
//         var item = jQuery(this);
//         var selector = item.attr('data-trans-key');
//         var lang_data_json = arrlang[currentLang];
//         var properties = selector.split('.');
//         item.text(lang_data_json[properties[0]][properties[1]][properties[2]]);
//       });
    }

    $('#translate').on('change', function (e) {
      var valueSelected = $(this).find(':selected').attr('data-val');

      localStorage.removeItem("selectLang");
      localStorage.setItem("selectLang", valueSelected);

      $('.lang_trans').each(function(index) {
        var item = $(this);
        var data_trans = $(this).attr('data-trans');
        var data_trans_val = data_trans.replace('#', '');
        var trans_id = $(this).next().attr('id');
        var trans_content = $(this).next().text();
        var array = trans_content.split(',');
        $.each(array,function(i){
          var val = array[i];
          var _name = val.split(':')[0];
          var lang_name = _name.replace(/[^A-Z0-9]/ig, "");
          var _content = val.substr(val.indexOf(":") + 1);
          var lang_content = _content.toString().replace(/"/g, "");
          var lang_content = lang_content.toString().replace(/[{}]/g, "");
          if(data_trans_val == trans_id){
            if(valueSelected == lang_name){
              item.text(lang_content);
            }
          }
        });
      });
      $('.lang_desc_trans').each(function(index) {
        var item = $(this);
        var data_trans = $(this).attr('data-trans');
        var data_trans_val = data_trans.replace('#', '');
        var trans_id = $(this).next().attr('id');
        var trans_content = $(this).next().html();
        var array = trans_content.split(';;');
        $.each(array,function(i){
          var val = array[i];
          var _name = val.split(':-')[0];
          var lang_name = _name.replace(/[^A-Z0-9]/ig, "");
          var _content = val.substr(val.indexOf(":") + 1);
          var lang_content = _content.toString().replace(/"/g, "");
          var lang_content = lang_content.toString().replace(/[{}]/g, "");
          var _lang_content = _lang_content.substring(_lang_content.indexOf('[') + 1, _lang_content.indexOf(']'));
          if(data_trans_val == trans_id){
            if(valueSelected == lang_name){
              item.html(_lang_content);
            }
          }
        });
      }); 
      $('[data-trans-key]').each(function(index) {
        var item = jQuery(this);
        var selector = item.attr('data-trans-key');
        var lang_data_json = arrlang[valueSelected];
        var properties = selector.split('.');
        item.text(lang_data_json[properties[0]][properties[1]][properties[2]]);
      });
    });
    

    
  });
  function openSearch() {
    document.getElementById("search-overlay").style.display = "block";
  }

  function closeSearch() {
    document.getElementById("search-overlay").style.display = "none";
  }  

  function openNav() {
    document.getElementById("mySidenav").classList.add('open-side');
  }
  function closeNav() {
    document.getElementById("mySidenav").classList.remove('open-side');
  }

  // add to cart sidebar js //

 function openCart() {
    document.getElementById("cart_side").classList.add('open-side');
    document.getElementsByClassName("fixed_cart").classList.add('open-side');
  }
 function closeCart() {
  document.getElementById("cart_side").classList.remove('open-side');
  }


  




      
       
    