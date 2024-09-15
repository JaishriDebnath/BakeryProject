
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.97fc9d618983c3548741.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6721.baseline.en.ea072d74bee78ea81ad4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9268.baseline.en.7fc43c222889823977de.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/7623.baseline.en.0efb2b3e54c45005b085.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.08b37041c0ea8117e280.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9033.baseline.en.b2c4084858957d3ee950.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1377.baseline.en.8bc93eda316aa22e1abc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1519.baseline.en.f13d9ed41bb1b1676af3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/646.baseline.en.28d54549f837d0f34c63.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8510.baseline.en.f87d052e74e2b0aae89f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/411.baseline.en.3b86415f3119f9c6385e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4760.baseline.en.00760a11c6636393465a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/737.baseline.en.6ed1d1570b15eb9bdef0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4253.baseline.en.548809f3e9cd4c86329f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3337.baseline.en.bc3bff45ecb4a98df7d8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.baseline.en.fb8c057f50214842b8af.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/6721.baseline.en.da9100fd2fe26f1ba2eb.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.dd34e026e89cca1a222b.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.baseline.en.b8cf1e86bc9af4497761.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  