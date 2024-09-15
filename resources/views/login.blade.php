@include('layouts.header')
@include('layouts.navbar')
</div>

              <!-- breadcrumb start -->


<div class="breadcrumb-section">
  <div class="container">
    <div class="row">
      

      <div class="col-sm-6">
        <div class="page-title">

          
          
          
          <h2 class="lang_trans" data-trans="#account_breadcrumb_page_title">
            Account
          </h2>
          
          <span class="hide" id="account_breadcrumb_page_title">Account</span>
          

        </div>
      </div>
      <div class="col-sm-6">
        <nav aria-label="breadcrumb" class="theme-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html" data-trans-key="general.breadcrumb.home">Home</a></li>

            
            
            <li class="breadcrumb-item active lang_trans" data-trans="#account_breadcrumb_active_page_title">
              Account
            </li>
            
            <span class="hide" id="account_breadcrumb_active_page_title">Account</span>
            

          </ol>
        </nav>
      </div>

            
    </div>
  </div>
</div>

<!-- breadcrumb End -->


<!--section start-->
<section class="login-page section-b-space">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <div id="CustomerLoginForm">

          <h3 data-trans-key="customer.login.login">Login</h3>
          <div class="form-message form-message--success hide" id="ResetSuccess">
            We&#39;ve sent you an email with a link to update your password.
          </div>

          <div class="theme-card">

            <form method="post" action="https://ps-backey.myshopify.com/account/login" id="customer_login" accept-charset="UTF-8" data-login-with-shop-sign-in="true" class="theme-form"><input type="hidden" name="form_type" value="customer_login" /><input type="hidden" name="utf8" value="✓" />

            <div class="form-group">
              <label for="email" data-trans-key="customer.login.email">Email</label>
              <input type="email" name="customer[email]" id="CustomerEmail" placeholder="Email" class="form-control " autocorrect="off" autocapitalize="off" autofocus>
            </div>
            <div class="form-group">
              <label for="review" data-trans-key="customer.login.password">Password</label>
              <input type="password" value="" name="customer[password]" placeholder="Password" id="CustomerPassword" class="form-control ">
            </div>
            <button type="submit" class="btn btn-solid" data-trans-key="customer.login.login">Login</button>

            
            <p class="text-left"><a href="#recover" id="RecoverPassword" data-trans-key="customer.login.forgot_password">Forgot your password?</a></p>
            

            </form>

          </div>

        </div>

        <div id="RecoverPasswordForm" class="hide">
          <h3 data-trans-key="customer.recover_password.title">Reset your password</h3>

          <div class="theme-card">

            <form method="post" action="https://ps-backey.myshopify.com/account/recover" accept-charset="UTF-8" class="theme-form"><input type="hidden" name="form_type" value="recover_customer_password" /><input type="hidden" name="utf8" value="✓" />

            

            

            <div class="form-row">
              <div class="col-md-12">
                <label for="RecoverEmail" data-trans-key="customer.recover_password.email">Email</label>
                <input type="email" value="" name="email" id="RecoverEmail" class="form-control" placeholder="Email" autocorrect="off" autocapitalize="off">
              </div>
              <div class="col-md-12 mb-2">
                <button type="submit" class="btn btn-solid" data-trans-key="customer.recover_password.submit">Submit</button>
              </div>
              <div class="col-md-12">
                <button type="button" id="HideRecoverPasswordLink" class="btn btn-solid" data-trans-key="customer.recover_password.cancel">Cancel</button>
              </div>
            </div>
            </form>
          </div>
        </div>

      </div>
      <div class="col-lg-6 right-login">
        <h3 data-trans-key="customer.register.heading">New customer</h3>
        <div class="theme-card authentication-right">
          <h6 class="title-font" data-trans-key="customer.register.title">Create Account</h6>
          <p data-trans-key="customer.register.content">Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
          <a href="{{url('/register')}}" class="btn btn-solid" data-trans-key="customer.register.submit">Create</a>
        </div>
      </div>

      

    </div>
  </div>
</section>
<!--Section ends-->

              

            

          
<div id="shopify-section-footer-4" class="shopify-section"><!-- footer section -->
<div class="newsletter-wrapper "
         style="background-color: #f8f7f8;padding: 0px 0px 0px 0px;
                ">
  
    
    <div class="container">
      
        <section class="small-section">
          <div class="row">
            <div class="col-xl-12 ">
              <div class="text-center">
                <h4 style="color: #000000;" class="lang_trans" data-trans="#footer4_1537530775934_newsltr_title"> 
                  Newsletter
                </h4>
                
                <span class="hide" id="footer4_1537530775934_newsltr_title"></span>
                
                <img src="../cdn/shop/t/2/assets/ice-creamec445.png?v=107237478566481792191582522601" alt="image">
              </div>
            </div>
            <div class="col-xl-12">
              <div class="subscribe text-center">
                <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate form-inline subscribe-form classic-form" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <div class="form-group mx-sm-3">
                      <input type="email" class="required email form-control"  value="" name="EMAIL" placeholder="Enter Your Email" id="mce-EMAIL" required>
                    </div>
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style="display:none"></div>
                      <div class="response" id="mce-success-response" style="display:none"></div>
                    </div>
                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                    <div style="position: absolute; left: -5000px;" hidden>
                      <input type="text" name="b_17af379706d80b694776f991f_9ebb72e4d2" tabindex="-1" value="">
                    </div>
                    <button type="submit" class="btn btn-solid" name="subscribe" id="mc-embedded-subscribe" data-trans-key="general.newsletter_form.submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
  </div>
  
  
  
  
  
  
  
  
  
  
  
</div>
<footer class="footer-wrapper  p-0 full-banner parallax   bg-img-footer overlay-cls effect-cls footer-effect" 
        style="background-image: url(../cdn/shop/files/slider_banner16586.png?v=1613185821);">


  <section class="footer-outer-section "
           style="padding: 70px 0px 70px 0px;
                  ">
    
    <div class="container">
      
        <div class="row footer-theme partition-f">
          
          
          
          <div class="col-lg-3 col-md-6 offset-right">
            <div class="footer-title footer-mobile-title">
              <h4 style="color: #000000" class="lang_trans" data-trans="#footer4_1537530692285_title">
                About
              </h4>
              
              <span class="hide" id="footer4_1537530692285_title"></span>
              
            </div>
            <div class="footer-contant">
              
              
              <div class="footer-logo" itemscope itemtype="http://schema.org/Organization">
                <img class="lazyload " src="../cdn/shop/files/logo1_180x385d.png?v=1613185519" alt="ps-bakery" />
              </div>
              
              
              <p style="color: #020202" class="lang_trans" data-trans="#footer4_1537530692285_text">
                
              </p>
              
              <span class="hide" id="footer4_1537530692285_text"></span>
              
              
              <div class="footer-contant">
                <ul class="contact-list">
                
                <li style="color: #020202"><i class="ti-home"></i>
                  <span class="lang_trans" data-trans="#footer4_1537530692285_address">
                    Fiot Fashion Demo Store Demo Store USA
                  </span>
                  
                  <span class="hide" id="footer4_1537530692285_address"></span>
                    
                </li>
                
                
                <li style="color: #020202;padding-top: 10px;"><i class="fa fa-phone"></i>
                  <span class="lang_trans" data-trans="#footer4_1537530692285_contact_info">
                    Call Us: 123-456-7898
                  </span>
                  
                  <span class="hide" id="footer4_1537530692285_contact_info"></span>
                  
                </li>
                
                
                <li style="color: #020202;padding-top: 10px ;"><i class="fa fa-envelope-o"></i>
                  <span class="lang_trans" data-trans="#footer4_1537530692285_email">
                    Email Us: Support@Fiot.com
                  </span>
                  
                  <span class="hide" id="footer4_1537530692285_email"></span>
                  
                </li>
                
                
                <li style="color: #020202;padding-top: 10px;"><i class="fa fa-fax"></i>
                  <span class="lang_trans" data-trans="#footer4_1537530692285_fax">
                    Fax: 123456
                  </span>
                  
                  <span class="hide" id="footer4_1537530692285_fax"></span>
                  
                </li>
                
         
              </ul>
              </div>
            </div>
          </div>
          
         
          
          
          
         
          
          
          
         
          
          
          
          <div class="col-lg-3 col-md-6 link-wrapper">
            <div class="sub-title">
              <div class="footer-title">
                <h4 style="color: #000000" class="lang_trans" data-trans="#footer4_1537530778691_menu_title">
                  Shop By Size
                </h4>
                
                <span class="hide" id="footer4_1537530778691_menu_title"></span>
                
              </div>
              <div class="footer-contant">
                <ul>
                   
                  
                  <li>
                    
                    
                    <a href="../pages/about-us.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_about-us">
                      About Us
                    </a>
                    
                    <span class="hide" id="footer4_about-us">About Us</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../pages/contact-us.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_contact-us">
                      Contact US
                    </a>
                    
                    <span class="hide" id="footer4_contact-us">Contact US</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../pages/look-book.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_look-book">
                      Look Book
                    </a>
                    
                    <span class="hide" id="footer4_look-book">Look Book</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../pages/porfolio.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_porfolio">
                      Porfolio
                    </a>
                    
                    <span class="hide" id="footer4_porfolio">Porfolio</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../pages/faqs.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_faqs">
                      Faqs
                    </a>
                    
                    <span class="hide" id="footer4_faqs">Faqs</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../pages/wishlist.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_wishlist">
                      Wishlist
                    </a>
                    
                    <span class="hide" id="footer4_wishlist">Wishlist</span>
                    
                  </li>
                  
                  <li>
                    
                    
                    <a href="../search.html" style="color: #020202; border-color: #020202;" class="lang_trans" data-trans="#footer4_search">
                      Search
                    </a>
                    
                    <span class="hide" id="footer4_search">Search</span>
                    
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
          
         
          
          
          
          <div class="col-lg-3 col-md-6 opening-hours">
            <div class="sub-title">
              <div class="footer-title">
                <h4 style="color: #000000" class="lang_trans" data-trans="#footer4_1537530784532_info_title">
                  Opening Hours
                </h4>
                
                <span class="hide" id="footer4_1537530784532_info_title"></span>
                
              </div>
              <div class="footer-contant">
                <ul class="contact-list">
                  
                  <li style="color: #020202; padding-left:0px;">
                    
                    <span class="lang_trans" data-trans="#footer1_1537530784532_address">
                      Monday &nbsp  &nbsp : &nbsp 2 noon to 22 pm
                    </span>
                    
                    <span class="hide" id="footer1_1537530784532_address"></span>
                    
                  </li>
                  
                  
                  <li style="color: #020202;padding-left:0px;">
                    
                    <span class="lang_trans" data-trans="#footer1_1537530784532_contact_info">
                      Sunday   &nbsp &nbsp : &nbsp 123-456-7898
                    </span>
                    
                    <span class="hide" id="footer1_1537530784532_contact_info"></span>
                    
                  </li>
                  
                  
                  <li style="color: #020202;padding-left:0px;">
                    
                    <span class="lang_trans" data-trans="#footer1_1537530784532_email">
                      Mon - Thu  : &nbsp   10 am to 22 pm
                    </span>
                    
                    <span class="hide" id="footer1_1537530784532_email"></span>
                    
                  </li>
                  
                  
                  <li style="color: #020202;padding-left:0px;">
                    
                    <span class="lang_trans" data-trans="#footer1_1537530784532_fax">
                      Fri - Sat  &nbsp &nbsp : &nbsp 9 am to 20 pm
                    </span>
                    
                    <span class="hide" id="footer1_1537530784532_fax"></span>
                    
                  </li>
                  
                  
                  <li style="color: #020202;padding-left:0px;">
                    <span class="lang_trans" data-trans="#footer4_1537530784532text_id">
                      Every sunday : 1pm - 2pm
                    </span>
                    
                    <span class="hide" id="footer4_1537530784532text_id"></span>
                    
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          
          
         
          
          
          
          <div class="col-lg-3 col-md-6 ratio_square instagram-wrapper">
            
            <div class="sub-title">
              <div class="footer-title ">
                <h4 style="color: #000000" class="lang_trans" data-trans="#footer4_1580447176643instagram_title">
                  #Instagram
                </h4>
                
                <span class="hide" id="footer4_1580447176643instagram_title"></span>
                
              </div>
              <div class="footer-contant">
              <div class="instagram">
                <div>
  <!--                 <div class="instagram-banner">
                    
                    <h5 class="title-borderless lang_trans" data-trans="#insta_1580447176643_title">
                       
                    </h5>
                    
                  </div> -->
                  <div id="instagram_section" data-id="8295761913" data-token="8295761913.aa0cb6f.2914e9f04dd343b8a57d9dc9baca91cc">
                    <div class="container" >
                      <div class="row" id="insta_first_grid">
                      </div>
                    </div>
                    <div class="container" >
                      <div class="row" id="insta_second_grid">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  
                <div class="footer-social">
                  <ul>
                    
                    <li>
                      <a href="https://facebook.com/shopify"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    </li>
                    
                    
                    <li>
                      <a href="https://plus.google.com/shopify"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                    </li>
                    
                    
                    <li>
                      <a href="https://twitter.com/shopify"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    
                    
                    <li>
                      <a href="http://instagram.com/shopify"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    </li>
                    
                    
                  </ul>
                </div>
              </div>
              
            </div>
            
          </div>
          
         
          
        </div>
        
      </div>
      
  </section>

  <div class="sub-footer dark-subfooter">
    
    <div class="container">
            
        
        
        
        
        
        
        <div class="row">
          <div class="col-xl-6 col-md-6 col-sm-12">
            
            <div class="footer-end lang_trans" data-trans="#footer4_1537530724450_copyright_text">
              <p>2018 - 19 Copy Right by Themeforest Powered by Pixelstrap</p>              
            </div>
            
            <span class="hide" id="footer4_1537530724450_copyright_text"></span>
            
            
          </div>
          
          <div class="col-xl-6 col-md-6 col-sm-12">
            <div class="payment-card-bottom">
              
            </div>
          </div>
          
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      </div>
      
  </div>
</footer>
<!-- footer section end-->

</div>

        <!-- tap to top -->
        
        <div class="tap-top ">
          <div>
            <i class="fa fa-angle-double-up"></i>
          </div>
        </div>
        
        <!-- tap to top end -->


    
    <div id="fb-root"></div>
    
    <!-- Your customer chat code -->
    <div class="fb-customerchat"
         attribution=setup_tool
         page_id="2123438804574660"
         theme_color="#ff4c3b"
         logged_in_greeting="Hi! Welcome to PixelStrap Themes :) How can we help you?"
         logged_out_greeting="Hi! Welcome to PixelStrap Themes :) How can we help you?">
    </div>
    

    <script src="../cdn/shop/t/2/assets/lazysizes.min208b.js?v=113104124934720948131580122585" ></script>
    <script src="../cdn/shop/t/2/assets/jquery.elevatezoomb7b9.js?v=91531011408487407581580122583" ></script>
    <script src="../cdn/shop/t/2/assets/handlebars-v4.0.55081.js?v=80476021048693028311580122580" ></script>
    <script src="../cdn/shop/t/2/assets/popper.min4052.js?v=25779780939553813221580122590" ></script>    
    <script src="../cdn/shop/t/2/assets/slick721d.js?v=83456930977184519751580122595" ></script>
    <script src="../cdn/shop/t/2/assets/menub98c.js?v=98334354017222112751580122588" ></script>
    <script src="../cdn/shop/t/2/assets/bootstrap94cc.js?v=128046245826323404341580122568" ></script>
    <script src="../cdn/shop/t/2/assets/jquery.vide.mincfce.js?v=153020459184295646061580122585" ></script>
    <script src="../cdn/shop/t/2/assets/jquery.magnific-popupe3a0.js?v=44455051036509594451580122585" ></script>
    <script src="../cdn/shop/t/2/assets/isotope.min23c3.js?v=50278611712892327101580122582" ></script>
    <script src="../cdn/shop/t/2/assets/plugins1227.js?v=102015852782240400131656106686" ></script>
    <script src="../cdn/shop/t/2/assets/script84c3.js?v=131739509739953696491581682533" ></script>
    <script src="../cdn/shop/t/2/assets/theme.minc7d2.js?v=156599590619707575161588230664" ></script>    

    
    <div class="cart-upsell-popup" id="cart-upsell-popup">
  <div class="upsell-modal" style="background-image: url(../cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif);">
    <div class="upsell-body">
      <div class="media">
        <a href="#">
          <img class="img-fluid pro-img" src="#" alt="">
        </a>
        <div class="media-body align-self-center">
          <a href="#">
            <h6></h6>
          </a>
          <div class="buttons">
            <a href="../cart.html" class="view-cart" data-trans-key="cart.general.title">Your cart</a>
            <button type="submit" name="checkout" class="checkout" data-trans-key="cart.general.checkout">Check out</button>
            <a href="../index.html" class="continue" data-trans-key="cart.general.continue_shopping">Continue shopping</a>
          </div>
          
          <div class="upsell_payment">
            <img src="../cdn/shop/files/paymentf3f2.png?v=1613182699" class="lazyload  img-fluid" alt="Upsell_payment">
          </div>
          
        </div>
      </div>
      
      <div class="col-12 product-upsell">
        <h4 class="lang_trans" data-trans="#cart_upsell_related_pro_title">
          Customers who bought this item also.
        </h4>
        
        <span class="hide" id="cart_upsell_related_pro_title">{"en":"Customers who bought this item also.", "fr":"Les clients qui ont acheté cet article aussi.", "ar":"الزبائن الذين اشتروا هذا البند أيضا.",  "de":"Kunden, die diesen Artikel auch gekauft haben.", "it":"I clienti che hanno acquistato questo articolo anche"}</span>
        
      </div>
      <div class="no-arrow" id="upsell_product">  
      </div>
      
      <span class="close_upsell">x
      </span>
    </div>
  </div>
</div>


    
    

<div id="quick-view-product" style="display:none;">
  <div class="quickview-overlay"></div>
  <div class="quick-view-product"  style="background-image: url(../cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif);"></div>
  <div id="quickview-modal" style="display:none;">
    <div class="block-quickview primary_block row no-margin">
      <div class="product-left-column col-xs-12 col-sm-6 col-md-6 no-padding">
        <div class="clearfix image-block">
          <span class="view_full_size">
            <a class="img-product" title="" href="#">
              <img id="product-featured-image-quickview" class="img-responsive product-featured-image-quickview" src="../cdn/shop/t/2/assets/productDefault.png" alt="Quickview"  />
            </a>
          </span>
          <div class="loading-imgquickview" style="display:none;"></div>
        </div>
        <div class="more-view-wrapper clearfix">
          <div id="thumbs_list_quickview">
            <ul class="product-photo-thumbs quickview-more-views-owlslider list-unstyled" id="thumblist_quickview"></ul>
          </div>
        </div>
      </div>
      <div class="product-center-column product-info col-xs-12 col-sm-6 col-md-6 ">
        <div>
          <h3 class="qwp-name">
          </h3>
          <div class="product-description"></div>
          
          <div class="box-price">
            <span class="prices"></span>
            <span class="price-product-detail old-price product-price compare-price"></span>
          </div>
          

          <div class="availability"></div>
          <h6 class="brand"></h6>


          <div class="product-right-column product-item ">
            <div>
              <form action="https://ps-backey.myshopify.com/cart/add" method="post" enctype="multipart/form-data" class="variants form-ajaxtocart">
                <select name='id' style="display:none"></select>
                
                <div class="cart_qty clearfix">
                  <div class="quantity_wanted_p">
                    <label for="quantity-detail" class="quantity-selector">Quantity</label>
                    <input type="number" id="quantity-detail" name="quantity" value="1" min="1" class="quantity-selector">
                  </div>
                  <button type="submit" name="add" class="add_to_cart_detail ajax_addtocart btn btn-solid">
                    <span >Add to cart</span>
                  </button>
                </div>
                
              </form>
              <a class="product-url" title="View Detail" href="#">View Detail</a> 
            </div>
          </div>


        </div>
      </div>
    </div>      
    <a title="Close" class="quickview-close" href="javascript:void(0)"><i class="fa fa-close"></i></a>
  </div>    
</div>

<!-- Some styles to get you started. -->
<style>
  .search-results {
    z-index: 8889;
    list-style-type: none;   
    width: 100%;
    margin: 0;
    padding: 0;
    background: #ffffff;
    border: 1px solid #eee;
    border-radius: 3px;
    -webkit-box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 4px 7px 0px rgba(0,0,0,0.1);
    overflow: scroll;
    top: 66px !important;
    height: 350px;
  }
  .search-results li {
    display: block;
    width: 100%;
    height: auto;
    margin: 0;
    padding: 4px;
    border-top: 1px solid #eee;
    line-height: 38px;
    overflow: hidden;
  }
  .search-results li:first-child {
    border-top: none;
  }
  .search-results .title {
    float: left;
    width: 90%;
    padding: 20px 10px 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    text-align: left;
    border: none;
    line-height: 16px;
    font-size: 16px !important;
    text-transform: capitalize;
    color: #e5ae49;
  }
  .search-results .price {
    width: auto;
    float: left;
    font-size: 15px;
    padding: 6px 10px;
    line-height: 16px;
    color: #222;
    font-weight: 600;}
  .search-results .thumbnail {
    float: left;
    display: block;
    width: 8%;    
    margin: 0 8px 0;
    padding: 0;
    text-align: center;
    overflow: hidden;
  }
  @media(max-width: 991px) {
    .search-results .thumbnail {
      width: 20%;
      margin: 0;
    }
    .search-results .title {
      width: 75%;
    }
  }
</style>

<div id="someone-purchased" class="customized fade-in" style="display:none;">

  
  
</div>




    <div class="ajax-success-compare-modal compare_modal" id="moda-compare" tabindex="-1" role="dialog" style="display:none">
  <div class="modal-dialog modal-compare-cls" style="background-image: url(../cdn/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c.gif);">
    <div class="modal-content content" id="compare-modal">
      <div class="modal-header">
        <h2 class="modal-title" data-trans-key="products.compare.compare_products">Compare Products</h4>
      </div>
      <div class="modal-body">
        <div class="table-wrapper">
          <table class="table table-responsive">
            <thead>
              <tr class="th-compare">
                <th></th>
              </tr>
            </thead>
            <tbody id="table-compare">

            </tbody>

          </table>
        </div>
      </div>
      <div class="modal-footer">
        <a href="javascript:void(0)" class="close-modal"><i class="fa fa-close"></i></a>
      </div>         
    </div>
  </div>
</div>


    
@push('js')
<script src="{{url('js/main.js')}}"></script>
<script src="../cdn/s/javascripts/currencies.js" type="text/javascript"></script>
<script src="../cdn/shop/t/2/assets/jquery.currencies.min2791.js?v=175057760772006623221580122583" type="text/javascript"></script>
<script src="../cdn/shop/t/2/assets/wishlistb0da.js?v=48912498786032647531580122604" type="text/javascript"></script> 
    
@endpush
    <span id="locale_data" class="hide">
    </span>

  </body>
  </html>