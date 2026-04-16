
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Ba0kryUm.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BLArQDYv.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.UXHC-FjC.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CoBnjGd8.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.D5nf2z1H.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.1nNNmo0r.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.BfnDmL6R.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.OFe690M_.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.ChAiPLLo.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection.x-XTbwH-.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation.-ELK4PNN.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.B5q5rI4Q.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.CeyXWaun.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DmWG3DTh.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.D4kvkWHk.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.D08SRaqf.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.AGvlt7bE.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.CquQKfwG.js","/cdn/shopifycloud/checkout-web/assets/c1/index.DReDgNMq.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.BIXN04gI.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.Du6SSCMk.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.Dx_lrSVd.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryMethodSelectorSection.BvrdqG-K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useEditorShopPayNavigation.CBpWLJzT.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.CKAakmU8.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/inter/inter_n4.b2a3f24c19b4de56e8871f609e73ca7f6d2e2bb9.woff2?h1=dmFsb3IuY29tLmJk&hmac=d5cadbf534bd49e17264323a64155618a5d2347a2b8bf0aa40e579236ff04159","https://fonts.shopifycdn.com/inter/inter_n7.02711e6b374660cfc7915d1afc1c204e633421e4.woff2?h1=dmFsb3IuY29tLmJk&hmac=d15fb1131f3eb2b3d70dffeb3cb538b4de8ecd285bd08ba86bbcede93e9ca7d4","https://fonts.shopifycdn.com/montserrat/montserrat_n4.81949fa0ac9fd2021e16436151e8eaa539321637.woff2?h1=dmFsb3IuY29tLmJk&hmac=18352fafaa2a416f904a30c7ae7f734d5ebe6c8aa5436c5bee03c9db3fca8797","https://fonts.shopifycdn.com/montserrat/montserrat_n7.3c434e22befd5c18a6b4afadb1e3d77c128c7939.woff2?h1=dmFsb3IuY29tLmJk&hmac=cee13329244ca52b2f3ac7244166efeabe84b1e5ca8c200c90fcf329a443bdfa"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0839/5826/8221/files/Asset_1_4x_6092cc03-103a-4b6d-93f7-9cda653ca6cc_x320.png?v=1763741611"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
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
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  