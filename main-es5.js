(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkxavro"] = self["webpackChunkxavro"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/home-one/home-one.component */
      12489);
      /* harmony import */


      var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/home-two/home-two.component */
      56519);
      /* harmony import */


      var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/home-three/home-three.component */
      93562);
      /* harmony import */


      var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/home-four/home-four.component */
      17496);
      /* harmony import */


      var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/home-five/home-five.component */
      83806);
      /* harmony import */


      var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/home-six/home-six.component */
      56174);
      /* harmony import */


      var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/home-seven/home-seven.component */
      64616);
      /* harmony import */


      var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/home-eight/home-eight.component */
      83860);
      /* harmony import */


      var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/home-nine/home-nine.component */
      7747);
      /* harmony import */


      var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/home-ten/home-ten.component */
      90390);
      /* harmony import */


      var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/home-eleven/home-eleven.component */
      52505);
      /* harmony import */


      var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/home-twelve/home-twelve.component */
      27505);
      /* harmony import */


      var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/home-thirteen/home-thirteen.component */
      71011);
      /* harmony import */


      var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/blog-details/blog-details.component */
      88794);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
      }, {
        path: 'home-two',
        component: _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent
      }, {
        path: 'home-three',
        component: _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent
      }, {
        path: 'home-four',
        component: _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_3__.HomeFourComponent
      }, {
        path: 'home-five',
        component: _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_4__.HomeFiveComponent
      }, {
        path: 'home-six',
        component: _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_5__.HomeSixComponent
      }, {
        path: 'home-seven',
        component: _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_6__.HomeSevenComponent
      }, {
        path: 'home-eight',
        component: _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_7__.HomeEightComponent
      }, {
        path: 'home-nine',
        component: _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_8__.HomeNineComponent
      }, {
        path: 'home-ten',
        component: _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_9__.HomeTenComponent
      }, {
        path: 'home-eleven',
        component: _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_10__.HomeElevenComponent
      }, {
        path: 'home-twelve',
        component: _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_11__.HomeTwelveComponent
      }, {
        path: 'home-thirteen',
        component: _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_12__.HomeThirteenComponent
      }, {
        path: 'blog-details',
        component: _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__.BlogDetailsComponent
      }, // Here add new pages component
      {
        path: '**',
        component: _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
      } // This line will remain down from the whole pages component list
      ];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components/common/navbar/navbar.component */
      94173);
      /* harmony import */


      var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/common/footer/footer.component */
      71823);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(router) {
          _classCallCheck(this, _AppComponent);

          this.router = router;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recallJsFuntions();
          }
        }, {
          key: "recallJsFuntions",
          value: function recallJsFuntions() {
            var _this = this;

            this.routerSubscription = this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel;
            })).subscribe(function (event) {
              _this.location = _this.router.url;

              if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
        }])],
        decls: 3,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-footer");
          }
        },
        directives: [_components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-sticky-nav */
      1529);
      /* harmony import */


      var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-smart-modal */
      1025);
      /* harmony import */


      var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ngx-scrolltop */
      67385);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var ngx_countup__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! ngx-countup */
      75796);
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ngx-typed-js */
      43499);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-accordion */
      42065);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var ngx_tabset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-tabset */
      79532);
      /* harmony import */


      var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ng2-tooltip-directive */
      72292);
      /* harmony import */


      var ngx_particle__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ngx-particle */
      12626);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/common/preloader/preloader.component */
      14425);
      /* harmony import */


      var _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/home-one/home-one.component */
      12489);
      /* harmony import */


      var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/common/navbar/navbar.component */
      94173);
      /* harmony import */


      var _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _components_common_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/common/banner-home/banner-home.component */
      24358);
      /* harmony import */


      var _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/common/about/about.component */
      97042);
      /* harmony import */


      var _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/common/cta/cta.component */
      79769);
      /* harmony import */


      var _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/common/skill/skill.component */
      33649);
      /* harmony import */


      var _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/common/team/team.component */
      36278);
      /* harmony import */


      var _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/common/services/services.component */
      18211);
      /* harmony import */


      var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/common/footer/footer.component */
      71823);
      /* harmony import */


      var _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/common/partner/partner.component */
      16455);
      /* harmony import */


      var _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/common/blog/blog.component */
      13635);
      /* harmony import */


      var _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/common/faq/faq.component */
      82631);
      /* harmony import */


      var _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/common/work/work.component */
      53815);
      /* harmony import */


      var _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/common/contact/contact.component */
      17524);
      /* harmony import */


      var _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/home-two/home-two.component */
      56519);
      /* harmony import */


      var _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/home-three/home-three.component */
      93562);
      /* harmony import */


      var _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/home-four/home-four.component */
      17496);
      /* harmony import */


      var _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/home-five/home-five.component */
      83806);
      /* harmony import */


      var _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/home-six/home-six.component */
      56174);
      /* harmony import */


      var _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/home-seven/home-seven.component */
      64616);
      /* harmony import */


      var _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/home-eight/home-eight.component */
      83860);
      /* harmony import */


      var _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/home-nine/home-nine.component */
      7747);
      /* harmony import */


      var _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/home-ten/home-ten.component */
      90390);
      /* harmony import */


      var _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./components/home-eleven/home-eleven.component */
      52505);
      /* harmony import */


      var _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/home-twelve/home-twelve.component */
      27505);
      /* harmony import */


      var _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/home-thirteen/home-thirteen.component */
      71011);
      /* harmony import */


      var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./components/blog-details/blog-details.component */
      88794);
      /* harmony import */


      var _components_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./components/common/demo-sidebar/demo-sidebar.component */
      1669);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_46__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_47__.BrowserAnimationsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__.NgxSmartModalModule.forRoot(), ngx_scrolltop__WEBPACK_IMPORTED_MODULE_48__.NgxScrollTopModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_49__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_50__.FormsModule, ngx_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule, ngx_countup__WEBPACK_IMPORTED_MODULE_51__.CountUpModule, ngx_tabset__WEBPACK_IMPORTED_MODULE_3__.TabsModule, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_52__.TooltipModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_53__.NgxTypedJsModule, ngx_particle__WEBPACK_IMPORTED_MODULE_54__.ParticlesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _components_common_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_6__.PreloaderComponent, _components_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_7__.HomeOneComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__.NavbarComponent, _components_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__.WelcomeComponent, _components_common_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_10__.BannerHomeComponent, _components_common_about_about_component__WEBPACK_IMPORTED_MODULE_11__.AboutComponent, _components_common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_12__.StrategyComponent, _components_common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_13__.WhoWeAreComponent, _components_common_cta_cta_component__WEBPACK_IMPORTED_MODULE_14__.CtaComponent, _components_common_skill_skill_component__WEBPACK_IMPORTED_MODULE_15__.SkillComponent, _components_common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_16__.FunfactsComponent, _components_common_team_team_component__WEBPACK_IMPORTED_MODULE_17__.TeamComponent, _components_common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_18__.HowWeWorkComponent, _components_common_services_services_component__WEBPACK_IMPORTED_MODULE_19__.ServicesComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__.FooterComponent, _components_common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_21__.SubscribeComponent, _components_common_partner_partner_component__WEBPACK_IMPORTED_MODULE_22__.PartnerComponent, _components_common_blog_blog_component__WEBPACK_IMPORTED_MODULE_23__.BlogComponent, _components_common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_24__.FeedbackComponent, _components_common_faq_faq_component__WEBPACK_IMPORTED_MODULE_25__.FaqComponent, _components_common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_26__.PricingComponent, _components_common_work_work_component__WEBPACK_IMPORTED_MODULE_27__.WorkComponent, _components_common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_28__.WhyWeDifferentComponent, _components_common_contact_contact_component__WEBPACK_IMPORTED_MODULE_29__.ContactComponent, _components_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_30__.HomeTwoComponent, _components_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_31__.HomeThreeComponent, _components_home_four_home_four_component__WEBPACK_IMPORTED_MODULE_32__.HomeFourComponent, _components_home_five_home_five_component__WEBPACK_IMPORTED_MODULE_33__.HomeFiveComponent, _components_common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_34__.ServicesTwoComponent, _components_home_six_home_six_component__WEBPACK_IMPORTED_MODULE_35__.HomeSixComponent, _components_home_seven_home_seven_component__WEBPACK_IMPORTED_MODULE_36__.HomeSevenComponent, _components_home_eight_home_eight_component__WEBPACK_IMPORTED_MODULE_37__.HomeEightComponent, _components_home_nine_home_nine_component__WEBPACK_IMPORTED_MODULE_38__.HomeNineComponent, _components_home_ten_home_ten_component__WEBPACK_IMPORTED_MODULE_39__.HomeTenComponent, _components_home_eleven_home_eleven_component__WEBPACK_IMPORTED_MODULE_40__.HomeElevenComponent, _components_home_twelve_home_twelve_component__WEBPACK_IMPORTED_MODULE_41__.HomeTwelveComponent, _components_home_thirteen_home_thirteen_component__WEBPACK_IMPORTED_MODULE_42__.HomeThirteenComponent, _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_43__.BlogDetailsComponent, _components_common_demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_44__.DemoSidebarComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_46__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_47__.BrowserAnimationsModule, ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__.NgxSmartModalModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_48__.NgxScrollTopModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_49__.CarouselModule, _angular_forms__WEBPACK_IMPORTED_MODULE_50__.FormsModule, ngx_accordion__WEBPACK_IMPORTED_MODULE_2__.AccordionModule, ngx_countup__WEBPACK_IMPORTED_MODULE_51__.CountUpModule, ngx_tabset__WEBPACK_IMPORTED_MODULE_3__.TabsModule, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_52__.TooltipModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_53__.NgxTypedJsModule, ngx_particle__WEBPACK_IMPORTED_MODULE_54__.ParticlesModule]
        });
      })();
      /***/

    },

    /***/
    88794:
    /*!*******************************************************************!*\
      !*** ./src/app/components/blog-details/blog-details.component.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogDetailsComponent": function BlogDetailsComponent() {
          return (
            /* binding */
            _BlogDetailsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-tooltip-directive */
      72292);

      var _BlogDetailsComponent = /*#__PURE__*/function () {
        function _BlogDetailsComponent() {
          _classCallCheck(this, _BlogDetailsComponent);
        }

        _createClass(_BlogDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BlogDetailsComponent;
      }();

      _BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) {
        return new (t || _BlogDetailsComponent)();
      };

      _BlogDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BlogDetailsComponent,
        selectors: [["app-blog-details"]],
        decls: 160,
        vars: 0,
        consts: [[1, "page-title-area", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "fas", "fa-chevron-right"], [1, "active"], [1, "blog-details-area", "ptb-100"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12"], [1, "blog-details"], [1, "article-img"], ["src", "assets/img/blog-details.jpg", "alt", "blog-details"], [1, "date"], [1, "article-text"], [1, "category"], [1, "title"], [1, "mb-0"], [1, "blockquote"], [1, "author-share"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6"], [1, "article-author"], [1, "author-img"], ["src", "assets/img/client-avatar1.jpg", "alt", "client"], [1, "author-title"], [1, "social-share"], ["href", "#", "tooltip", "Share on Facebook"], [1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", "tooltip", "Share on Twitter"], [1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", "tooltip", "Share on Linkedin"], [1, "fab", "fa-linkedin-in"], ["href", "#", "target", "_blank", "tooltip", "Share on Instagram"], [1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", "tooltip", "Share on Vimeo"], [1, "fab", "fa-vimeo-v"], [1, "post-controls-buttons"], [1, "controls-left"], ["routerLink", "/blog-details"], [1, "fas", "fa-chevron-left"], [1, "controls-right"], [1, "post-comments"], [1, "title", "mt-0"], [1, "single-comment"], [1, "comment-img"], ["src", "assets/img/client-avatar2.jpg", "alt", "client"], [1, "comment-content"], [1, "single-comment", "left-m"], ["src", "assets/img/client-avatar3.jpg", "alt", "client"], [1, "single-comment", "mb-0"], [1, "leave-a-reply"], [1, "row"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "Full Name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "E-Mail", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "comment", "cols", "30", "rows", "5", "placeholder", "Your Comment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
        template: function BlogDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Single Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "20 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Dec");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "IT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "How to Be a Work From Home Professional");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In necessitatibus provident facere, reiciendis voluptate dolorem iste consectetur veniam aperiam suscipit ad ipsum et labore a repellendus debitis explicabo quisquam obcaecati....");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "blockquote", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque eum alias debitis suscipit, sint dignissimos minus quisquam recusandae nostrum quas eligendi odit, fugiat eius rem. Cumque, labore placeat! Velit, vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iste? Aut ipsam consequuntur non rem tenetur dolore consequatur ducimus a labore excepturi quae nisi, quisquam, maxime voluptates magnam aliquid. Cupiditate!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "John Smith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Back-End Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Prev Post");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Next Post ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Comments");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "David Warner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Dec 19, 2018 - 9:10AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Eva Amith");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Dec 19, 2018 - 9:10AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "James Andy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Dec 19, 2018 - 9:10AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Audy Kanna");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et minus, saepe porro a voluptatem, quidem aut libero consequatur unde molestiae quae impedit accusantium dolor est corporis! Dolores ut dignissimos doloribus?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Dec 19, 2018 - 9:10AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h3", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Leave a Reply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "input", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "input", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "textarea", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "button", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    97042:
    /*!************************************************************!*\
      !*** ./src/app/components/common/about/about.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AboutComponent": function AboutComponent() {
          return (
            /* binding */
            _AboutComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-smart-modal */
      1025);

      var _AboutComponent = /*#__PURE__*/function () {
        function _AboutComponent(ngxSmartModalService) {
          _classCallCheck(this, _AboutComponent);

          this.ngxSmartModalService = ngxSmartModalService;
        }

        _createClass(_AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AboutComponent;
      }();

      _AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || _AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalService));
      };

      _AboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AboutComponent,
        selectors: [["app-about"]],
        decls: 68,
        vars: 1,
        consts: [["id", "about", 1, "about-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-content"], [1, "features-list"], [1, "fas", "fa-check"], [1, "about-video"], ["src", "assets/img/about.jpg", "alt", "about"], [1, "video-btn"], [1, "popup-youtube", 3, "click"], [1, "fas", "fa-play"], [1, "video-popup"], [3, "identifier"], ["popupOne", ""], ["src", "#", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Why choose ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " DXPERTS ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "DXPERTS is a dream come true professional network & is a basic need of every Crypto Enthusiast. Decentralized network driven by its community members. Dxperts Community does not compete with any person, product or organization. It embraces all levels of crypto Enthusiasts, providing them an equal common platform to help each other shaping DLT industries Future.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Our success formula is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Your Growth");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "A Dream Platform of being a upfront core community member and an opportunity to witness a game changing milestone of DLT revolution by engaging in :");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Profiles");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Companies");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Polls");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Announcements");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Advertisements");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "DXPERTS network community do believe in delivering a real value to its members by providing real solutions being unique and outstanding in the DLT industry. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_62_listener() {
              return ctx.ngxSmartModalService.getModal("popupOne").open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ngx-smart-modal", 14, 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "iframe", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("identifier", "popupOne");
          }
        },
        directives: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    24358:
    /*!************************************************************************!*\
      !*** ./src/app/components/common/banner-home/banner-home.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BannerHomeComponent": function BannerHomeComponent() {
          return (
            /* binding */
            _BannerHomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _BannerHomeComponent = /*#__PURE__*/function () {
        function _BannerHomeComponent(viewportScroller) {
          _classCallCheck(this, _BannerHomeComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_BannerHomeComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BannerHomeComponent;
      }();

      _BannerHomeComponent.ɵfac = function BannerHomeComponent_Factory(t) {
        return new (t || _BannerHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _BannerHomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BannerHomeComponent,
        selectors: [["app-banner-home"]],
        decls: 2,
        vars: 0,
        consts: [[1, "home-center-banner"], ["src", "assets/img/DSTARLOGO2X2.png", "alt", "image", 1, "home-banner"]],
        template: function BannerHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXItaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    13635:
    /*!**********************************************************!*\
      !*** ./src/app/components/common/blog/blog.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogComponent": function BlogComponent() {
          return (
            /* binding */
            _BlogComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function BlogComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "The best gear for starting a small business");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tech");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get your first business suit right with these tips");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "How to Make a Font - Font Design Full Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Marketing & Trend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "10 Hot Marketing Trends You Need to Implement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function BlogComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "How to Be a Work From Home Professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Fusce vitae nulla at lorem pret ium semper. Curab itur laoreet, lectus ac digni ssim vest ibul lorem pretium semper lectus ac digni...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _BlogComponent = /*#__PURE__*/function () {
        function _BlogComponent(viewportScroller) {
          _classCallCheck(this, _BlogComponent);

          this.viewportScroller = viewportScroller;
          this.blogSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            rtl: true,
            margin: 30,
            navText: ["<i class='fa fa-angle-right'></i>", "<i class='fa fa-angle-left'></i>"],
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              1200: {
                items: 3
              }
            }
          };
        }

        _createClass(_BlogComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _BlogComponent;
      }();

      _BlogComponent.ɵfac = function BlogComponent_Factory(t) {
        return new (t || _BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BlogComponent,
        selectors: [["app-blog"]],
        decls: 18,
        vars: 1,
        consts: [["id", "blog", 1, "blog-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "blog-slides"], [3, "options"], ["carouselSlide", ""], [1, "single-blog-item", "bg1"], ["routerLink", "/blog-details"], ["routerLink", "/blog-details", "title", "Read More", 1, "link-btn"], [1, "fas", "fa-arrow-right"], [1, "single-blog-item", "bg2"], [1, "single-blog-item", "bg3"], [1, "single-blog-item", "bg4"], [1, "single-blog-item", "bg5"]],
        template: function BlogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Latest Blog ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Posts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "owl-carousel-o", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BlogComponent_ng_template_13_Template, 10, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BlogComponent_ng_template_14_Template, 10, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BlogComponent_ng_template_15_Template, 10, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BlogComponent_ng_template_16_Template, 10, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BlogComponent_ng_template_17_Template, 10, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.blogSlides);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    17524:
    /*!****************************************************************!*\
      !*** ./src/app/components/common/contact/contact.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactComponent": function ContactComponent() {
          return (
            /* binding */
            _ContactComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      function ContactComponent_div_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_24_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name is minimum ", _r1.errors.minlength.requiredLength, " character.");
        }
      }

      function ContactComponent_div_24_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is maximum 50 character.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_24_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_24_div_2_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_div_24_div_3_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.errors.maxlength);
        }
      }

      function ContactComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Address is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone subject is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _ContactComponent = /*#__PURE__*/function () {
        function _ContactComponent(viewportScroller) {
          _classCallCheck(this, _ContactComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_ContactComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submit",
          value: function submit(form) {
            var name = form.name;
            console.log(name);
            var email = form.email;
            console.log(email);
            var number = form.number;
            console.log(number);
            var subject = form.subject;
            console.log(subject);
            var message = form.message;
            console.log(message);
          }
        }]);

        return _ContactComponent;
      }();

      _ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || _ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContactComponent,
        selectors: [["app-contact"]],
        decls: 84,
        vars: 7,
        consts: [["id", "contact", 1, "contact-area", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], [1, "contact-form"], [3, "ngSubmit"], ["contactForm", "ngForm"], [1, "col-lg-6", "col-md-6"], [1, "form-group", "mb-3"], ["required", "", "minlength", "3", "maxlength", "50", "ngModel", "", "name", "name", "type", "text", "id", "name", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["required", "", "ngModel", "", "name", "email", "type", "text", "id", "email", 1, "form-control"], ["email", "ngModel"], ["required", "", "ngModel", "", "name", "subject", "type", "text", "id", "subject", 1, "form-control"], ["subject", "ngModel"], ["required", "", "ngModel", "", "name", "number", "type", "text", "id", "number", 1, "form-control"], ["number", "ngModel"], [1, "col-lg-12", "col-md-12"], ["required", "", "ngModel", "", "name", "message", "id", "message", "cols", "30", "rows", "4", 1, "form-control"], ["message", "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-lg-5", "col-md-12"], [1, "contact-info"], [1, "d-table"], [1, "d-table-cell"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-envelope"], ["href", "mailto:hello@xavro.com"], [1, "fas", "fa-phone-alt"], ["href", "tel:1244122445515"], [1, "fas", "fa-fax"], ["href", "tel:61724160055"], [1, "alert", "alert-danger"], [4, "ngIf"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in Touch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Let's ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

              return ctx.submit(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactComponent_div_24_Template, 4, 3, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 13, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ContactComponent_div_38_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 17, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ContactComponent_div_45_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "textarea", 20, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ContactComponent_div_52_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Send Message");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Location:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Exercisplan 4, 111 49 Stockholm, Sweden");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "hello@xavro.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Call:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "(+124)412-2445515");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Fax:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "+617-241-60055");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.touched && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && !_r3.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && !_r5.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && !_r7.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r9.touched && !_r1.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !_r0.valid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    79769:
    /*!********************************************************!*\
      !*** ./src/app/components/common/cta/cta.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CtaComponent": function CtaComponent() {
          return (
            /* binding */
            _CtaComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _CtaComponent = /*#__PURE__*/function () {
        function _CtaComponent(viewportScroller) {
          _classCallCheck(this, _CtaComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_CtaComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CtaComponent;
      }();

      _CtaComponent.ɵfac = function CtaComponent_Factory(t) {
        return new (t || _CtaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _CtaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CtaComponent,
        selectors: [["app-cta"]],
        decls: 35,
        vars: 0,
        consts: [["id", "cta", 1, "cta-area", "ptb-100"], [1, "container"], [1, "cta-content"], [1, "section-title", "mb-0"], ["href", "https://dxperts.org", "target", "_blank", 1, "btn", "btn-primary", 3, "click"], ["href", "https://dstar.network/dstarfactsheet.pdf", "target", "_blank", 1, "btn", "btn-primary", "view-work", 3, "click"], ["href", "https://dxpertscommunity.com", "target", "_blank", 1, "btn", "btn-primary", 3, "click"]],
        template: function CtaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Eager to join the DXPERTS network ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DXPERTS Community aka DLT EXPERTS professional Network");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtaComponent_Template_a_click_9_listener() {
              return ctx.onClick("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Visit DApp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Want to know more about DStar Reward Token ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DXPERTS DStar Fact Sheet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtaComponent_Template_a_click_21_listener() {
              return ctx.onClick("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Download ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Want to know more about DXPERTS & its scope ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "A Community forum of DXPERTS Blockhain network");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CtaComponent_Template_a_click_33_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Visit Forum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdGEuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    1669:
    /*!**************************************************************************!*\
      !*** ./src/app/components/common/demo-sidebar/demo-sidebar.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoSidebarComponent": function DemoSidebarComponent() {
          return (
            /* binding */
            _DemoSidebarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoSidebarComponent = /*#__PURE__*/function () {
        function _DemoSidebarComponent() {
          _classCallCheck(this, _DemoSidebarComponent);

          this.classApplied = false;
        }

        _createClass(_DemoSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleClass",
          value: function toggleClass() {
            this.classApplied = !this.classApplied;
          }
        }]);

        return _DemoSidebarComponent;
      }();

      _DemoSidebarComponent.ɵfac = function DemoSidebarComponent_Factory(t) {
        return new (t || _DemoSidebarComponent)();
      };

      _DemoSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DemoSidebarComponent,
        selectors: [["app-demo-sidebar"]],
        decls: 0,
        vars: 0,
        template: function DemoSidebarComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    82631:
    /*!********************************************************!*\
      !*** ./src/app/components/common/faq/faq.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FaqComponent": function FaqComponent() {
          return (
            /* binding */
            _FaqComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-accordion */
      42065);
      /* harmony import */


      var ngx_accordion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_accordion__WEBPACK_IMPORTED_MODULE_0__);

      var _FaqComponent = /*#__PURE__*/function () {
        function _FaqComponent(viewportScroller) {
          _classCallCheck(this, _FaqComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_FaqComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FaqComponent;
      }();

      _FaqComponent.ɵfac = function FaqComponent_Factory(t) {
        return new (t || _FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _FaqComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FaqComponent,
        selectors: [["app-faq"]],
        decls: 37,
        vars: 0,
        consts: [["id", "faq", 1, "faq-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], [1, "faq-accordion"], ["heading", "I am a beginner & I have no idea about Crypto space. How does joining DXPERTS community help me out ? "], ["heading", "I have heard much about crypto and have no idea how to get into crypto space. How does joining DXPERTS community help me out ? "], ["heading", "I am having domain knowledge professional and have realized that future is DLT Industry. I want get into DLT space. How does joining DXPERTS \n                        Community help me out ?"], ["heading", "I am a professional and looking for opportunities. How does joining DXPERTS Community help me out ? "], ["heading", "I have a good idea/project and I need support to make it realize. How does joining DXPERTS Community help me out ? "], ["heading", "I already have started a crypto project and I do need more funding to develop the same. How does joining DXPerts Community help me out ? "], ["heading", "I have an existing crypto project and have gained enough traction locally and want to seek more international presence. How does joining DXPerts Community help me out ? "], [1, "col-lg-5", "col-md-12"], [1, "faq-image"], ["src", "assets/img/faq-img.jpg", "alt", "image"]],
        template: function FaqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Frequently Asked ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Question");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "accordion");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "accordion-group", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "At present crypto related information\u2019s are so much scattered online & many beginners are confused about reliable information related crypto projects. A beginner can be an observer and have an access to participate in most of the features & acquire knowledge via must trusted resources by his peers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "accordion-group", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Providing basic information of each crypto asset and its uniqueness is a major help to the beginners. Most of the DXPERTS features like profile, company, projects & groups etc., are having 7 star ratings which are rated by DXPERTS members. Every member who has participated providing the star rating does receives DStar tokens as a reward compensating the time spent for the research & efforts to arrive at a certain conclusion. The higher the ratings received by the users represents top position of the grid & the lower rating profiles are followed in ascending order reflecting the trust, reliability & leadership claims in the crypto space & this gives you more confidence to further explore in that particular space. Member ratings on each features shall provide a substantial reliable evaluation & a strong reference to the new comers to make their own decision.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "accordion-group", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "It\u2019s very important to realize that DLT is the future & after a decade now, it is being recognized as a promising future and many main stream professionals and companies is getting into this DLT space. Upon listing your domain expertise in your membership profile, new project teams shall contact you for the offers and seek your consultation. Otherwise you can connect them offering your services. DXPERTS core feature Networking & Events provide a platform to present your expertise, connect with members of global crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "accordion-group", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "In DXPERTS we do have star ratings to each profile & these ratings given by the peers would increase your reliability within the community. People who has availed your services shall rate you based on their experience and this is the Green Key for you to go ahead with your passion / dream. Profile ratings shall provide trust & credibility, thus creating a personal Brand. Many new project postings shall be offered by upcoming / existing new projects and you can apply to them & negotiate your benifits directly with project offering experts. DXPERTS community is a facilitator to connect professionals and offer providers seamlessly. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "accordion-group", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "In DXPERTS we do have star ratings to each profile & these ratings given by the peers would increase your reliability within the community. People who interacting with you shall rate your profile based on their experience you had with them and this is the Green Key for you to go ahead with your passion/dream. Profile ratings shall provide trust & credibility, thus creating a personal Brand. Once you are confident enough you can announce your idea/project in DXPERTS community. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "accordion-group", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "DXPERTS Community has Project profile feature and exhibiting your project makes you to in touch with international crypto space globally and provide more followers providing engagement. The Buzz of your project value proposition has to get attention of VC / Investors DXPERTS Community. Besides we do provide project pitch events as one of the core feature of DXPERTS Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "accordion-group", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "DXPERTS is a global crypto Community & your Project profile Page shall keep you present in international space. Group Feature is also has 7 star rating feature where members do get DStar Token to rate your group and thus resulting your group on top of the grid providing more exposure to increase your following base. You also can reach relevant professionals to associate to expand your project on mutual understadnings. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_accordion__WEBPACK_IMPORTED_MODULE_0__.Accordion, ngx_accordion__WEBPACK_IMPORTED_MODULE_0__.AccordionGroup],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    46900:
    /*!******************************************************************!*\
      !*** ./src/app/components/common/feedback/feedback.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedbackComponent": function FeedbackComponent() {
          return (
            /* binding */
            _FeedbackComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);

      function FeedbackComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u201CKeep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "James Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Switzerland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FeedbackComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u201CThe difference between school and life? In school, you're taught a lesson and then given a test. In life, you're given a test that teaches you a lesson.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lina D'Souza");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Switzerland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FeedbackComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u201CIf a man empties his purse into his head, no man can take it away from him. An investment in knowledge always pays the best interest.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Warner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Switzerland");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _FeedbackComponent = /*#__PURE__*/function () {
        function _FeedbackComponent(viewportScroller) {
          _classCallCheck(this, _FeedbackComponent);

          this.viewportScroller = viewportScroller;
          this.feedbackSlides = {
            loop: true,
            nav: true,
            dots: false,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            autoplay: true,
            mouseDrag: false,
            items: 1,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
          };
        }

        _createClass(_FeedbackComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FeedbackComponent;
      }();

      _FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) {
        return new (t || _FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _FeedbackComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FeedbackComponent,
        selectors: [["app-feedback"]],
        decls: 7,
        vars: 1,
        consts: [[1, "feedback-area", "ptb-100"], [1, "container"], [1, "feedback-slides"], [3, "options"], ["carouselSlide", ""], [1, "single-feedback-item"], [1, "info"], ["src", "assets/img/user1.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user2.jpg", "alt", "image", 1, "shadow", "rounded-circle"], ["src", "assets/img/user3.jpg", "alt", "image", 1, "shadow", "rounded-circle"]],
        template: function FeedbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel-o", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeedbackComponent_ng_template_4_Template, 9, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeedbackComponent_ng_template_5_Template, 9, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FeedbackComponent_ng_template_6_Template, 9, 0, "ng-template", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.feedbackSlides);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    71823:
    /*!**************************************************************!*\
      !*** ./src/app/components/common/footer/footer.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FooterComponent": function FooterComponent() {
          return (
            /* binding */
            _FooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../demo-sidebar/demo-sidebar.component */
      1669);
      /* harmony import */


      var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-scrolltop */
      67385);

      var _FooterComponent = /*#__PURE__*/function () {
        function _FooterComponent(viewportScroller) {
          _classCallCheck(this, _FooterComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_FooterComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FooterComponent;
      }();

      _FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || _FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _FooterComponent,
        selectors: [["app-footer"]],
        decls: 31,
        vars: 0,
        consts: [[1, "footer-area"], [1, "container"], ["href", "https://dxperts.org", "target", "_blank", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "#", 1, "navbar-brand"], [1, "home-center-banner"], ["src", "assets/img/dstar_logo.png", "alt", "image", 1, "main-logo"], ["href", "#", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", 1, "fab", "fa-linkedin-in"], ["href", "#", "target", "_blank", 1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", 1, "fab", "fa-skype"], [1, "far", "fa-copyright"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Welcome to DXPERTS Professional network");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_6_listener() {
              return ctx.onClick("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Click here to join");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Copyright ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "DSTAR. 2021 All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "app-demo-sidebar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ngx-scrolltop");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _demo_sidebar_demo_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.DemoSidebarComponent, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_4__.NgxScrollTopComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    25357:
    /*!******************************************************************!*\
      !*** ./src/app/components/common/funfacts/funfacts.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FunfactsComponent": function FunfactsComponent() {
          return (
            /* binding */
            _FunfactsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-countup */
      75796);

      var _FunfactsComponent = /*#__PURE__*/function () {
        function _FunfactsComponent(viewportScroller) {
          _classCallCheck(this, _FunfactsComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_FunfactsComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _FunfactsComponent;
      }();

      _FunfactsComponent.ɵfac = function FunfactsComponent_Factory(t) {
        return new (t || _FunfactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _FunfactsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _FunfactsComponent,
        selectors: [["app-funfacts"]],
        decls: 35,
        vars: 4,
        consts: [[1, "funfacts-area", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-6", "col-sm-3"], [1, "funfact"], [1, "far", "fa-address-card"], [3, "countUp"], [1, "far", "fa-building"], [1, "fas", "fa-file-alt"], [1, "fas", "fa-user"]],
        template: function FunfactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profiles Only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Companies only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Projects Only");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Group LF Token ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", 360000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", 360000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", 360000);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("countUp", 360000);
          }
        },
        directives: [ngx_countup__WEBPACK_IMPORTED_MODULE_2__.CountUpDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdW5mYWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    14679:
    /*!************************************************************************!*\
      !*** ./src/app/components/common/how-we-work/how-we-work.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HowWeWorkComponent": function HowWeWorkComponent() {
          return (
            /* binding */
            _HowWeWorkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _HowWeWorkComponent = /*#__PURE__*/function () {
        function _HowWeWorkComponent(viewportScroller) {
          _classCallCheck(this, _HowWeWorkComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HowWeWorkComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HowWeWorkComponent;
      }();

      _HowWeWorkComponent.ɵfac = function HowWeWorkComponent_Factory(t) {
        return new (t || _HowWeWorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _HowWeWorkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HowWeWorkComponent,
        selectors: [["app-how-we-work"]],
        decls: 35,
        vars: 0,
        consts: [[1, "how-work-area", "pt-100", "pb-70"], ["id", "how-we-work", 1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-how-work"], [1, "icon"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-drafting-compass"], [1, "far", "fa-paper-plane"], [1, "shape1"]],
        template: function HowWeWorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DXPERTS LFT and how does it ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Works ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Limited Fungible Token (LFT) is a native token of DXPERTS Blockchain Network having provision of entering into smart contract to activate users profile, company, project & Groups in DXPERTS professional network DAapp. LFT's are auctionable & transferable Tokens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buy LFT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "LFT's are like DPage, DCompany, DProjects & DGroup can be purchased from DXPERTS Wallet, DEFI, DEX or via third party gateways of Dxperts Blockchain. Specific LFT is a must to exhibit your profile, company, project,group or to avail services within DXPERTS DApp of DXPERTS professional Network.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Lock LFT in DXPERTS DApp");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The user should lock specific LFT via smart contract within DApp as long as the user intends to exhibit their presence within community. All exhibited profiles, companies, projects, groups are eligible to receive 7star Ratings from dxperts community members resulting their popularity Grid.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "LFT's value and its Scope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "LFT's are limited in numbers and as the desire to have own profile, company or projects in DApp grows so the demand of LFT's drives the market value. Upon the expiration of DApp LFT smart Contract, the owner has the option to continue or liquidate its value based on market demand and supply conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3ctd2Utd29yay5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    94173:
    /*!**************************************************************!*\
      !*** ./src/app/components/common/navbar/navbar.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NavbarComponent": function NavbarComponent() {
          return (
            /* binding */
            _NavbarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-sticky-nav */
      1529);
      /* harmony import */


      var ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _NavbarComponent = /*#__PURE__*/function () {
        function _NavbarComponent(viewportScroller) {
          _classCallCheck(this, _NavbarComponent);

          this.viewportScroller = viewportScroller;
          this.classApplied = false;
        }

        _createClass(_NavbarComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleClass",
          value: function toggleClass() {
            this.classApplied = !this.classApplied;
          }
        }]);

        return _NavbarComponent;
      }();

      _NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || _NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 73,
        vars: 2,
        consts: [["ngStickyNav", "", "stickyClass", "sticky-box-shadow", "ngStickyNav", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "home-center-banner"], ["src", "assets/img/dstar_logo.png", "alt", "image", 1, "main-logo"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], [1, "nav-link", 3, "click"], [1, "fas", "fa-home"], [1, "fas", "fa-bullseye"], [1, "fab", "fa-adn"], [1, "fas", "fa-file-download"], [1, "fas", "fa-th"], [1, "fas", "fa-crown"], [1, "fas", "fa-question-circle"], [1, "navbar-nav", "ml-auto", "for-responsive"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener() {
              return ctx.toggleClass();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_13_listener() {
              return ctx.onClick("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_16_listener() {
              return ctx.onClick("welcome");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_19_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "DXPERTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_22_listener() {
              return ctx.onClick("dstar-uses");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_25_listener() {
              return ctx.onClick("cta");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_28_listener() {
              return ctx.onClick("skill");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "LFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_31_listener() {
              return ctx.onClick("services");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_34_listener() {
              return ctx.onClick("why-we-different");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_37_listener() {
              return ctx.onClick("faq");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_40_listener() {
              return ctx.onClick("strategy");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Blockchain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_44_listener() {
              ctx.toggleClass();
              return ctx.onClick("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_47_listener() {
              ctx.toggleClass();
              return ctx.onClick("welcome");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Object");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_50_listener() {
              ctx.toggleClass();
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "DXPERTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_53_listener() {
              ctx.toggleClass();
              return ctx.onClick("dstar-uses");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Advantage");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_56_listener() {
              ctx.toggleClass();
              return ctx.onClick("cta");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Fact Sheet download");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_59_listener() {
              ctx.toggleClass();
              return ctx.onClick("skill");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "LFT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_62_listener() {
              ctx.toggleClass();
              return ctx.onClick("services");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_65_listener() {
              ctx.toggleClass();
              return ctx.onClick("why-we-different");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Why Us");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_68_listener() {
              ctx.toggleClass();
              return ctx.onClick("faq");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "FAQ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_71_listener() {
              ctx.toggleClass();
              return ctx.onClick("strategy");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Blockchain");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.classApplied);
          }
        },
        directives: [ng2_sticky_nav__WEBPACK_IMPORTED_MODULE_0__.StickyNavDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    16455:
    /*!****************************************************************!*\
      !*** ./src/app/components/common/partner/partner.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PartnerComponent": function PartnerComponent() {
          return (
            /* binding */
            _PartnerComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);

      function PartnerComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PartnerComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _PartnerComponent = /*#__PURE__*/function () {
        function _PartnerComponent(viewportScroller) {
          _classCallCheck(this, _PartnerComponent);

          this.viewportScroller = viewportScroller;
          this.partnerSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
              0: {
                items: 2
              },
              576: {
                items: 3
              },
              768: {
                items: 4
              },
              1200: {
                items: 6
              }
            }
          };
        }

        _createClass(_PartnerComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PartnerComponent;
      }();

      _PartnerComponent.ɵfac = function PartnerComponent_Factory(t) {
        return new (t || _PartnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _PartnerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PartnerComponent,
        selectors: [["app-partner"]],
        decls: 22,
        vars: 1,
        consts: [[1, "partner-area", "ptb-70", "bg-fffdfd"], [1, "container"], [1, "cta-content"], [1, "section-title", "mb-0"], [1, "partner-slides"], [3, "options"], ["carouselSlide", ""], [1, "partner-item"], ["href", "https://bitcoin.org/en/", "target", "_blank"], ["src", "assets/img/btc.png", "alt", "partner"], ["href", "https://ethereum.org/en/", "target", "_blank"], ["src", "assets/img/eth.png", "alt", "partner"], ["href", "https://tether.to/", "target", "_blank"], ["src", "assets/img/usdt.png", "alt", "partner"], ["href", "https://www.binance.com/en", "target", "_blank"], ["src", "assets/img/bnb.png", "alt", "partner"], ["href", "https://polkadot.network/", "target", "_blank"], ["src", "assets/img/dot.png", "alt", "partner"], ["href", "https://cardano.org/", "target", "_blank"], ["src", "assets/img/ada.png", "alt", "partner"], ["href", "https://solana.com/", "target", "_blank"], ["src", "assets/img/sol.png", "alt", "partner"], ["href", "https://eos.io/", "target", "_blank"], ["src", "assets/img/eos.png", "alt", "partner"], ["href", "https://tron.network/", "target", "_blank"], ["src", "assets/img/trx.png", "alt", "partner"], ["href", "https://xrpl.org/", "target", "_blank"], ["src", "assets/img/xrp.png", "alt", "partner"], ["href", "https://www.stellar.org/", "target", "_blank"], ["src", "assets/img/xlm.png", "alt", "partner"]],
        template: function PartnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crypto Assets accepted in DXPERTS Network");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "owl-carousel-o", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PartnerComponent_ng_template_11_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PartnerComponent_ng_template_12_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PartnerComponent_ng_template_13_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PartnerComponent_ng_template_14_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PartnerComponent_ng_template_15_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PartnerComponent_ng_template_16_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PartnerComponent_ng_template_17_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PartnerComponent_ng_template_18_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PartnerComponent_ng_template_19_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PartnerComponent_ng_template_20_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PartnerComponent_ng_template_21_Template, 3, 0, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.partnerSlides);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0bmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    14425:
    /*!********************************************************************!*\
      !*** ./src/app/components/common/preloader/preloader.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PreloaderComponent": function PreloaderComponent() {
          return (
            /* binding */
            _PreloaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _PreloaderComponent = /*#__PURE__*/function () {
        function _PreloaderComponent() {
          _classCallCheck(this, _PreloaderComponent);
        }

        _createClass(_PreloaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PreloaderComponent;
      }();

      _PreloaderComponent.ɵfac = function PreloaderComponent_Factory(t) {
        return new (t || _PreloaderComponent)();
      };

      _PreloaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PreloaderComponent,
        selectors: [["app-preloader"]],
        decls: 6,
        vars: 0,
        consts: [[1, "preloader"], [1, "folding-cube"], [1, "cube1", "cube"], [1, "cube2", "cube"], [1, "cube4", "cube"], [1, "cube3", "cube"]],
        template: function PreloaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    62019:
    /*!****************************************************************!*\
      !*** ./src/app/components/common/pricing/pricing.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PricingComponent": function PricingComponent() {
          return (
            /* binding */
            _PricingComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _PricingComponent = /*#__PURE__*/function () {
        function _PricingComponent(viewportScroller) {
          _classCallCheck(this, _PricingComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_PricingComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PricingComponent;
      }();

      _PricingComponent.ɵfac = function PricingComponent_Factory(t) {
        return new (t || _PricingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _PricingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _PricingComponent,
        selectors: [["app-pricing"]],
        decls: 108,
        vars: 0,
        consts: [["id", "pricing", 1, "pricing-area", "pt-100", "pb-70", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "pricingTable"], [1, "title"], [1, "price-value"], [1, "currency"], [1, "amount"], [1, "month"], [1, "pricing-content"], [1, "fas", "fa-check"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]],
        template: function PricingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our Products ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Basic");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "39.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "/Per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Any Ware Access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " 10 GB Hosting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 2 Unique Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 12 GB Capacity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Weekly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Support 24 / hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Buy Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Standard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "49.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "/Per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Any Ware Access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 15 GB Hosting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 5 Unique Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " 17 GB Capacity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Weekly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Support 24 / hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Buy Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Premium");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "$");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "59.00");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "/Per month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Any Ware Access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " 20 GB Hosting");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " 10 Unique Users");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 21 GB Capacity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Weekly Backups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Support 24 / hour");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Buy Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmljaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    12784:
    /*!**************************************************************************!*\
      !*** ./src/app/components/common/services-two/services-two.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicesTwoComponent": function ServicesTwoComponent() {
          return (
            /* binding */
            _ServicesTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _ServicesTwoComponent = /*#__PURE__*/function () {
        function _ServicesTwoComponent(viewportScroller) {
          _classCallCheck(this, _ServicesTwoComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_ServicesTwoComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ServicesTwoComponent;
      }();

      _ServicesTwoComponent.ɵfac = function ServicesTwoComponent_Factory(t) {
        return new (t || _ServicesTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _ServicesTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ServicesTwoComponent,
        selectors: [["app-services-two"]],
        decls: 82,
        vars: 0,
        consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "fas", "fa-pencil-alt"], [1, "fab", "fa-linode"], [1, "fas", "fa-desktop"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-anchor"], [1, "fas", "fa-headphones"], [1, "fas", "fa-mobile-alt"], [1, "fas", "fa-camera"], [1, "fas", "fa-heartbeat"]],
        template: function ServicesTwoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Web Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Branding");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Marketing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Ui & Ux Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Responsive Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Photography");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Custom Support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy10d28uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    18211:
    /*!******************************************************************!*\
      !*** ./src/app/components/common/services/services.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ServicesComponent": function ServicesComponent() {
          return (
            /* binding */
            _ServicesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _ServicesComponent = /*#__PURE__*/function () {
        function _ServicesComponent(viewportScroller) {
          _classCallCheck(this, _ServicesComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_ServicesComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ServicesComponent;
      }();

      _ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
        return new (t || _ServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _ServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ServicesComponent,
        selectors: [["app-services"]],
        decls: 130,
        vars: 0,
        consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6"], [1, "single-services"], [1, "services-img"], ["src", "assets/img/pagegold.png", "alt", "services-img"], [1, "icon"], [1, "services-content"], ["src", "assets/img/compgold.png", "alt", "services-img"], ["src", "assets/img/projgold.png", "alt", "services-img"], ["src", "assets/img/grupgold.png", "alt", "services-img"], ["src", "assets/img/jobsgold.png", "alt", "services-img"], ["src", "assets/img/newsgold.png", "alt", "services-img"], ["src", "assets/img/pollgold.png", "alt", "services-img"], ["src", "assets/img/evntgold.png", "alt", "services-img"], ["src", "assets/img/resogold.png", "alt", "services-img"], ["src", "assets/img/anntgold.png", "alt", "services-img"], ["src", "assets/img/advtgold.png", "alt", "services-img"], ["src", "assets/img/srvcgold.png", "alt", "services-img"]],
        template: function ServicesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DXPERTS network ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Decentralised psychological infrastructure backed by crypto communities having its presence globally without any physical boundries. A community having given powers directly to its each member to make a proposal, vote, make decision influencing to shape the future of Distributed Ledger Technologies & beyond.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Profile Pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Position yourself as a unique professional & be recognised within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Companies");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Position your company as a front lead leader & be recognised within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Position your project as a unique value proposition & be at the front arena within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Increase your following base,be in constant touch with them & be at the front arena within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Jobs");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Explore more opportunities & get more assignments with aspiring project developments within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "News");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Be updated with the latest global DLT related news within a click & stay top of the events within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Polls");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Understand DLT industry market pulse and opinions & witness the trend projections within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Expose yourself to the top notch DLT industry related events via offline and online getherings within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Learn & update yourself with best knowledge & resources of DLT industry for free available within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Announcements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Update your project major mile stone achienvements & reach to larger fan base available within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Advertisements");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Promote, market your product & accelerate your reach to the larger like minded audience within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Services");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Promote, market your services & attract potential clients to avail your services within Global Crypto Community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    33649:
    /*!************************************************************!*\
      !*** ./src/app/components/common/skill/skill.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SkillComponent": function SkillComponent() {
          return (
            /* binding */
            _SkillComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-smart-modal */
      1025);

      var _SkillComponent = /*#__PURE__*/function () {
        function _SkillComponent(ngxSmartModalService) {
          _classCallCheck(this, _SkillComponent);

          this.ngxSmartModalService = ngxSmartModalService;
        }

        _createClass(_SkillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SkillComponent;
      }();

      _SkillComponent.ɵfac = function SkillComponent_Factory(t) {
        return new (t || _SkillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalService));
      };

      _SkillComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _SkillComponent,
        selectors: [["app-skill"]],
        decls: 67,
        vars: 1,
        consts: [["id", "skill", 1, "skill-area", "ptb-100", "bg-fffdfd"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "skill-content"], [1, "section-title"], [1, "skills-list"], [1, "skill-item"], [1, "skill-header"], [1, "skill-title"], [1, "skill-percentage"], [1, "count-box"], [1, "count-text"], [1, "skill-bar"], [1, "bar-inner"], ["data-width", "100", 1, "bar", "progress-line"], [1, "skill-video"], ["src", "assets/img/video-img.jpg", "alt", "video-img"], [1, "video-btn"], [1, "popup-youtube", 3, "click"], [1, "fas", "fa-play"], [1, "video-popup"], [3, "identifier"], ["popupTwo", ""], ["src", "#", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""]],
        template: function SkillComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "DXPERTS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " LFT ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Limited Fungible Token (LFT) is a native Token of DXPERTS Blockchain and should be locked via smart contract to activate users profile, company, project & Groups in DXPERTS professional network DApp. LFT's are transferable Tokens.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Pages");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "360K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Companies");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "360K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "360K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "360K");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SkillComponent_Template_button_click_61_listener() {
              return ctx.ngxSmartModalService.getModal("popupTwo").open();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ngx-smart-modal", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "iframe", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("identifier", "popupTwo");
          }
        },
        directives: [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_0__.NgxSmartModalComponent],
        styles: ["[data-width=\"1\"][_ngcontent-%COMP%] {\n  width: 1%;\n}\n\n[data-width=\"2\"][_ngcontent-%COMP%] {\n  width: 2%;\n}\n\n[data-width=\"3\"][_ngcontent-%COMP%] {\n  width: 3%;\n}\n\n[data-width=\"4\"][_ngcontent-%COMP%] {\n  width: 4%;\n}\n\n[data-width=\"5\"][_ngcontent-%COMP%] {\n  width: 5%;\n}\n\n[data-width=\"6\"][_ngcontent-%COMP%] {\n  width: 6%;\n}\n\n[data-width=\"7\"][_ngcontent-%COMP%] {\n  width: 7%;\n}\n\n[data-width=\"8\"][_ngcontent-%COMP%] {\n  width: 8%;\n}\n\n[data-width=\"9\"][_ngcontent-%COMP%] {\n  width: 9%;\n}\n\n[data-width=\"10\"][_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n[data-width=\"11\"][_ngcontent-%COMP%] {\n  width: 11%;\n}\n\n[data-width=\"12\"][_ngcontent-%COMP%] {\n  width: 12%;\n}\n\n[data-width=\"13\"][_ngcontent-%COMP%] {\n  width: 13%;\n}\n\n[data-width=\"14\"][_ngcontent-%COMP%] {\n  width: 14%;\n}\n\n[data-width=\"15\"][_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n[data-width=\"16\"][_ngcontent-%COMP%] {\n  width: 16%;\n}\n\n[data-width=\"17\"][_ngcontent-%COMP%] {\n  width: 17%;\n}\n\n[data-width=\"18\"][_ngcontent-%COMP%] {\n  width: 18%;\n}\n\n[data-width=\"19\"][_ngcontent-%COMP%] {\n  width: 19%;\n}\n\n[data-width=\"20\"][_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n[data-width=\"21\"][_ngcontent-%COMP%] {\n  width: 21%;\n}\n\n[data-width=\"22\"][_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n[data-width=\"23\"][_ngcontent-%COMP%] {\n  width: 23%;\n}\n\n[data-width=\"24\"][_ngcontent-%COMP%] {\n  width: 24%;\n}\n\n[data-width=\"25\"][_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n[data-width=\"26\"][_ngcontent-%COMP%] {\n  width: 26%;\n}\n\n[data-width=\"27\"][_ngcontent-%COMP%] {\n  width: 27%;\n}\n\n[data-width=\"28\"][_ngcontent-%COMP%] {\n  width: 28%;\n}\n\n[data-width=\"29\"][_ngcontent-%COMP%] {\n  width: 29%;\n}\n\n[data-width=\"30\"][_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n[data-width=\"31\"][_ngcontent-%COMP%] {\n  width: 31%;\n}\n\n[data-width=\"32\"][_ngcontent-%COMP%] {\n  width: 32%;\n}\n\n[data-width=\"33\"][_ngcontent-%COMP%] {\n  width: 33%;\n}\n\n[data-width=\"34\"][_ngcontent-%COMP%] {\n  width: 34%;\n}\n\n[data-width=\"35\"][_ngcontent-%COMP%] {\n  width: 35%;\n}\n\n[data-width=\"36\"][_ngcontent-%COMP%] {\n  width: 36%;\n}\n\n[data-width=\"37\"][_ngcontent-%COMP%] {\n  width: 37%;\n}\n\n[data-width=\"38\"][_ngcontent-%COMP%] {\n  width: 38%;\n}\n\n[data-width=\"39\"][_ngcontent-%COMP%] {\n  width: 39%;\n}\n\n[data-width=\"40\"][_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n[data-width=\"41\"][_ngcontent-%COMP%] {\n  width: 41%;\n}\n\n[data-width=\"42\"][_ngcontent-%COMP%] {\n  width: 42%;\n}\n\n[data-width=\"43\"][_ngcontent-%COMP%] {\n  width: 43%;\n}\n\n[data-width=\"44\"][_ngcontent-%COMP%] {\n  width: 44%;\n}\n\n[data-width=\"45\"][_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n[data-width=\"46\"][_ngcontent-%COMP%] {\n  width: 46%;\n}\n\n[data-width=\"47\"][_ngcontent-%COMP%] {\n  width: 47%;\n}\n\n[data-width=\"48\"][_ngcontent-%COMP%] {\n  width: 48%;\n}\n\n[data-width=\"49\"][_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n[data-width=\"50\"][_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n[data-width=\"51\"][_ngcontent-%COMP%] {\n  width: 51%;\n}\n\n[data-width=\"52\"][_ngcontent-%COMP%] {\n  width: 52%;\n}\n\n[data-width=\"53\"][_ngcontent-%COMP%] {\n  width: 53%;\n}\n\n[data-width=\"54\"][_ngcontent-%COMP%] {\n  width: 54%;\n}\n\n[data-width=\"55\"][_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n[data-width=\"56\"][_ngcontent-%COMP%] {\n  width: 56%;\n}\n\n[data-width=\"57\"][_ngcontent-%COMP%] {\n  width: 57%;\n}\n\n[data-width=\"58\"][_ngcontent-%COMP%] {\n  width: 58%;\n}\n\n[data-width=\"59\"][_ngcontent-%COMP%] {\n  width: 59%;\n}\n\n[data-width=\"60\"][_ngcontent-%COMP%] {\n  width: 60%;\n}\n\n[data-width=\"61\"][_ngcontent-%COMP%] {\n  width: 61%;\n}\n\n[data-width=\"62\"][_ngcontent-%COMP%] {\n  width: 62%;\n}\n\n[data-width=\"63\"][_ngcontent-%COMP%] {\n  width: 63%;\n}\n\n[data-width=\"64\"][_ngcontent-%COMP%] {\n  width: 64%;\n}\n\n[data-width=\"65\"][_ngcontent-%COMP%] {\n  width: 65%;\n}\n\n[data-width=\"66\"][_ngcontent-%COMP%] {\n  width: 66%;\n}\n\n[data-width=\"67\"][_ngcontent-%COMP%] {\n  width: 67%;\n}\n\n[data-width=\"68\"][_ngcontent-%COMP%] {\n  width: 68%;\n}\n\n[data-width=\"69\"][_ngcontent-%COMP%] {\n  width: 69%;\n}\n\n[data-width=\"70\"][_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n[data-width=\"71\"][_ngcontent-%COMP%] {\n  width: 71%;\n}\n\n[data-width=\"72\"][_ngcontent-%COMP%] {\n  width: 72%;\n}\n\n[data-width=\"73\"][_ngcontent-%COMP%] {\n  width: 73%;\n}\n\n[data-width=\"74\"][_ngcontent-%COMP%] {\n  width: 74%;\n}\n\n[data-width=\"75\"][_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n[data-width=\"76\"][_ngcontent-%COMP%] {\n  width: 76%;\n}\n\n[data-width=\"77\"][_ngcontent-%COMP%] {\n  width: 77%;\n}\n\n[data-width=\"78\"][_ngcontent-%COMP%] {\n  width: 78%;\n}\n\n[data-width=\"79\"][_ngcontent-%COMP%] {\n  width: 79%;\n}\n\n[data-width=\"80\"][_ngcontent-%COMP%] {\n  width: 80%;\n}\n\n[data-width=\"81\"][_ngcontent-%COMP%] {\n  width: 81%;\n}\n\n[data-width=\"82\"][_ngcontent-%COMP%] {\n  width: 82%;\n}\n\n[data-width=\"83\"][_ngcontent-%COMP%] {\n  width: 83%;\n}\n\n[data-width=\"84\"][_ngcontent-%COMP%] {\n  width: 84%;\n}\n\n[data-width=\"85\"][_ngcontent-%COMP%] {\n  width: 85%;\n}\n\n[data-width=\"86\"][_ngcontent-%COMP%] {\n  width: 86%;\n}\n\n[data-width=\"87\"][_ngcontent-%COMP%] {\n  width: 87%;\n}\n\n[data-width=\"88\"][_ngcontent-%COMP%] {\n  width: 88%;\n}\n\n[data-width=\"89\"][_ngcontent-%COMP%] {\n  width: 89%;\n}\n\n[data-width=\"90\"][_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n[data-width=\"91\"][_ngcontent-%COMP%] {\n  width: 91%;\n}\n\n[data-width=\"92\"][_ngcontent-%COMP%] {\n  width: 92%;\n}\n\n[data-width=\"93\"][_ngcontent-%COMP%] {\n  width: 93%;\n}\n\n[data-width=\"94\"][_ngcontent-%COMP%] {\n  width: 94%;\n}\n\n[data-width=\"95\"][_ngcontent-%COMP%] {\n  width: 95%;\n}\n\n[data-width=\"96\"][_ngcontent-%COMP%] {\n  width: 96%;\n}\n\n[data-width=\"97\"][_ngcontent-%COMP%] {\n  width: 97%;\n}\n\n[data-width=\"98\"][_ngcontent-%COMP%] {\n  width: 98%;\n}\n\n[data-width=\"99\"][_ngcontent-%COMP%] {\n  width: 99%;\n}\n\n[data-width=\"100\"][_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtBQUNKOztBQUNBO0VBQ0ksU0FBQTtBQUVKOztBQUFBO0VBQ0ksU0FBQTtBQUdKOztBQURBO0VBQ0ksU0FBQTtBQUlKOztBQUZBO0VBQ0ksU0FBQTtBQUtKOztBQUhBO0VBQ0ksU0FBQTtBQU1KOztBQUpBO0VBQ0ksU0FBQTtBQU9KOztBQUxBO0VBQ0ksU0FBQTtBQVFKOztBQU5BO0VBQ0ksU0FBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtBQVdKOztBQVRBO0VBQ0ksVUFBQTtBQVlKOztBQVZBO0VBQ0ksVUFBQTtBQWFKOztBQVhBO0VBQ0ksVUFBQTtBQWNKOztBQVpBO0VBQ0ksVUFBQTtBQWVKOztBQWJBO0VBQ0ksVUFBQTtBQWdCSjs7QUFkQTtFQUNJLFVBQUE7QUFpQko7O0FBZkE7RUFDSSxVQUFBO0FBa0JKOztBQWhCQTtFQUNJLFVBQUE7QUFtQko7O0FBakJBO0VBQ0ksVUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxVQUFBO0FBcUJKOztBQW5CQTtFQUNJLFVBQUE7QUFzQko7O0FBcEJBO0VBQ0ksVUFBQTtBQXVCSjs7QUFyQkE7RUFDSSxVQUFBO0FBd0JKOztBQXRCQTtFQUNJLFVBQUE7QUF5Qko7O0FBdkJBO0VBQ0ksVUFBQTtBQTBCSjs7QUF4QkE7RUFDSSxVQUFBO0FBMkJKOztBQXpCQTtFQUNJLFVBQUE7QUE0Qko7O0FBMUJBO0VBQ0ksVUFBQTtBQTZCSjs7QUEzQkE7RUFDSSxVQUFBO0FBOEJKOztBQTVCQTtFQUNJLFVBQUE7QUErQko7O0FBN0JBO0VBQ0ksVUFBQTtBQWdDSjs7QUE5QkE7RUFDSSxVQUFBO0FBaUNKOztBQS9CQTtFQUNJLFVBQUE7QUFrQ0o7O0FBaENBO0VBQ0ksVUFBQTtBQW1DSjs7QUFqQ0E7RUFDSSxVQUFBO0FBb0NKOztBQWxDQTtFQUNJLFVBQUE7QUFxQ0o7O0FBbkNBO0VBQ0ksVUFBQTtBQXNDSjs7QUFwQ0E7RUFDSSxVQUFBO0FBdUNKOztBQXJDQTtFQUNJLFVBQUE7QUF3Q0o7O0FBdENBO0VBQ0ksVUFBQTtBQXlDSjs7QUF2Q0E7RUFDSSxVQUFBO0FBMENKOztBQXhDQTtFQUNJLFVBQUE7QUEyQ0o7O0FBekNBO0VBQ0ksVUFBQTtBQTRDSjs7QUExQ0E7RUFDSSxVQUFBO0FBNkNKOztBQTNDQTtFQUNJLFVBQUE7QUE4Q0o7O0FBNUNBO0VBQ0ksVUFBQTtBQStDSjs7QUE3Q0E7RUFDSSxVQUFBO0FBZ0RKOztBQTlDQTtFQUNJLFVBQUE7QUFpREo7O0FBL0NBO0VBQ0ksVUFBQTtBQWtESjs7QUFoREE7RUFDSSxVQUFBO0FBbURKOztBQWpEQTtFQUNJLFVBQUE7QUFvREo7O0FBbERBO0VBQ0ksVUFBQTtBQXFESjs7QUFuREE7RUFDSSxVQUFBO0FBc0RKOztBQXBEQTtFQUNJLFVBQUE7QUF1REo7O0FBckRBO0VBQ0ksVUFBQTtBQXdESjs7QUF0REE7RUFDSSxVQUFBO0FBeURKOztBQXZEQTtFQUNJLFVBQUE7QUEwREo7O0FBeERBO0VBQ0ksVUFBQTtBQTJESjs7QUF6REE7RUFDSSxVQUFBO0FBNERKOztBQTFEQTtFQUNJLFVBQUE7QUE2REo7O0FBM0RBO0VBQ0ksVUFBQTtBQThESjs7QUE1REE7RUFDSSxVQUFBO0FBK0RKOztBQTdEQTtFQUNJLFVBQUE7QUFnRUo7O0FBOURBO0VBQ0ksVUFBQTtBQWlFSjs7QUEvREE7RUFDSSxVQUFBO0FBa0VKOztBQWhFQTtFQUNJLFVBQUE7QUFtRUo7O0FBakVBO0VBQ0ksVUFBQTtBQW9FSjs7QUFsRUE7RUFDSSxVQUFBO0FBcUVKOztBQW5FQTtFQUNJLFVBQUE7QUFzRUo7O0FBcEVBO0VBQ0ksVUFBQTtBQXVFSjs7QUFyRUE7RUFDSSxVQUFBO0FBd0VKOztBQXRFQTtFQUNJLFVBQUE7QUF5RUo7O0FBdkVBO0VBQ0ksVUFBQTtBQTBFSjs7QUF4RUE7RUFDSSxVQUFBO0FBMkVKOztBQXpFQTtFQUNJLFVBQUE7QUE0RUo7O0FBMUVBO0VBQ0ksVUFBQTtBQTZFSjs7QUEzRUE7RUFDSSxVQUFBO0FBOEVKOztBQTVFQTtFQUNJLFVBQUE7QUErRUo7O0FBN0VBO0VBQ0ksVUFBQTtBQWdGSjs7QUE5RUE7RUFDSSxVQUFBO0FBaUZKOztBQS9FQTtFQUNJLFVBQUE7QUFrRko7O0FBaEZBO0VBQ0ksVUFBQTtBQW1GSjs7QUFqRkE7RUFDSSxVQUFBO0FBb0ZKOztBQWxGQTtFQUNJLFVBQUE7QUFxRko7O0FBbkZBO0VBQ0ksVUFBQTtBQXNGSjs7QUFwRkE7RUFDSSxVQUFBO0FBdUZKOztBQXJGQTtFQUNJLFVBQUE7QUF3Rko7O0FBdEZBO0VBQ0ksVUFBQTtBQXlGSjs7QUF2RkE7RUFDSSxVQUFBO0FBMEZKOztBQXhGQTtFQUNJLFVBQUE7QUEyRko7O0FBekZBO0VBQ0ksVUFBQTtBQTRGSjs7QUExRkE7RUFDSSxVQUFBO0FBNkZKOztBQTNGQTtFQUNJLFVBQUE7QUE4Rko7O0FBNUZBO0VBQ0ksVUFBQTtBQStGSjs7QUE3RkE7RUFDSSxVQUFBO0FBZ0dKOztBQTlGQTtFQUNJLFVBQUE7QUFpR0o7O0FBL0ZBO0VBQ0ksVUFBQTtBQWtHSjs7QUFoR0E7RUFDSSxVQUFBO0FBbUdKOztBQWpHQTtFQUNJLFdBQUE7QUFvR0oiLCJmaWxlIjoic2tpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS13aWR0aD1cIjFcIl0ge1xuICAgIHdpZHRoOiAxJTtcbn1cbltkYXRhLXdpZHRoPVwiMlwiXSB7XG4gICAgd2lkdGg6IDIlO1xufVxuW2RhdGEtd2lkdGg9XCIzXCJdIHtcbiAgICB3aWR0aDogMyU7XG59XG5bZGF0YS13aWR0aD1cIjRcIl0ge1xuICAgIHdpZHRoOiA0JTtcbn1cbltkYXRhLXdpZHRoPVwiNVwiXSB7XG4gICAgd2lkdGg6IDUlO1xufVxuW2RhdGEtd2lkdGg9XCI2XCJdIHtcbiAgICB3aWR0aDogNiU7XG59XG5bZGF0YS13aWR0aD1cIjdcIl0ge1xuICAgIHdpZHRoOiA3JTtcbn1cbltkYXRhLXdpZHRoPVwiOFwiXSB7XG4gICAgd2lkdGg6IDglO1xufVxuW2RhdGEtd2lkdGg9XCI5XCJdIHtcbiAgICB3aWR0aDogOSU7XG59XG5bZGF0YS13aWR0aD1cIjEwXCJdIHtcbiAgICB3aWR0aDogMTAlO1xufVxuW2RhdGEtd2lkdGg9XCIxMVwiXSB7XG4gICAgd2lkdGg6IDExJTtcbn1cbltkYXRhLXdpZHRoPVwiMTJcIl0ge1xuICAgIHdpZHRoOiAxMiU7XG59XG5bZGF0YS13aWR0aD1cIjEzXCJdIHtcbiAgICB3aWR0aDogMTMlO1xufVxuW2RhdGEtd2lkdGg9XCIxNFwiXSB7XG4gICAgd2lkdGg6IDE0JTtcbn1cbltkYXRhLXdpZHRoPVwiMTVcIl0ge1xuICAgIHdpZHRoOiAxNSU7XG59XG5bZGF0YS13aWR0aD1cIjE2XCJdIHtcbiAgICB3aWR0aDogMTYlO1xufVxuW2RhdGEtd2lkdGg9XCIxN1wiXSB7XG4gICAgd2lkdGg6IDE3JTtcbn1cbltkYXRhLXdpZHRoPVwiMThcIl0ge1xuICAgIHdpZHRoOiAxOCU7XG59XG5bZGF0YS13aWR0aD1cIjE5XCJdIHtcbiAgICB3aWR0aDogMTklO1xufVxuW2RhdGEtd2lkdGg9XCIyMFwiXSB7XG4gICAgd2lkdGg6IDIwJTtcbn1cbltkYXRhLXdpZHRoPVwiMjFcIl0ge1xuICAgIHdpZHRoOiAyMSU7XG59XG5bZGF0YS13aWR0aD1cIjIyXCJdIHtcbiAgICB3aWR0aDogMjIlO1xufVxuW2RhdGEtd2lkdGg9XCIyM1wiXSB7XG4gICAgd2lkdGg6IDIzJTtcbn1cbltkYXRhLXdpZHRoPVwiMjRcIl0ge1xuICAgIHdpZHRoOiAyNCU7XG59XG5bZGF0YS13aWR0aD1cIjI1XCJdIHtcbiAgICB3aWR0aDogMjUlO1xufVxuW2RhdGEtd2lkdGg9XCIyNlwiXSB7XG4gICAgd2lkdGg6IDI2JTtcbn1cbltkYXRhLXdpZHRoPVwiMjdcIl0ge1xuICAgIHdpZHRoOiAyNyU7XG59XG5bZGF0YS13aWR0aD1cIjI4XCJdIHtcbiAgICB3aWR0aDogMjglO1xufVxuW2RhdGEtd2lkdGg9XCIyOVwiXSB7XG4gICAgd2lkdGg6IDI5JTtcbn1cbltkYXRhLXdpZHRoPVwiMzBcIl0ge1xuICAgIHdpZHRoOiAzMCU7XG59XG5bZGF0YS13aWR0aD1cIjMxXCJdIHtcbiAgICB3aWR0aDogMzElO1xufVxuW2RhdGEtd2lkdGg9XCIzMlwiXSB7XG4gICAgd2lkdGg6IDMyJTtcbn1cbltkYXRhLXdpZHRoPVwiMzNcIl0ge1xuICAgIHdpZHRoOiAzMyU7XG59XG5bZGF0YS13aWR0aD1cIjM0XCJdIHtcbiAgICB3aWR0aDogMzQlO1xufVxuW2RhdGEtd2lkdGg9XCIzNVwiXSB7XG4gICAgd2lkdGg6IDM1JTtcbn1cbltkYXRhLXdpZHRoPVwiMzZcIl0ge1xuICAgIHdpZHRoOiAzNiU7XG59XG5bZGF0YS13aWR0aD1cIjM3XCJdIHtcbiAgICB3aWR0aDogMzclO1xufVxuW2RhdGEtd2lkdGg9XCIzOFwiXSB7XG4gICAgd2lkdGg6IDM4JTtcbn1cbltkYXRhLXdpZHRoPVwiMzlcIl0ge1xuICAgIHdpZHRoOiAzOSU7XG59XG5bZGF0YS13aWR0aD1cIjQwXCJdIHtcbiAgICB3aWR0aDogNDAlO1xufVxuW2RhdGEtd2lkdGg9XCI0MVwiXSB7XG4gICAgd2lkdGg6IDQxJTtcbn1cbltkYXRhLXdpZHRoPVwiNDJcIl0ge1xuICAgIHdpZHRoOiA0MiU7XG59XG5bZGF0YS13aWR0aD1cIjQzXCJdIHtcbiAgICB3aWR0aDogNDMlO1xufVxuW2RhdGEtd2lkdGg9XCI0NFwiXSB7XG4gICAgd2lkdGg6IDQ0JTtcbn1cbltkYXRhLXdpZHRoPVwiNDVcIl0ge1xuICAgIHdpZHRoOiA0NSU7XG59XG5bZGF0YS13aWR0aD1cIjQ2XCJdIHtcbiAgICB3aWR0aDogNDYlO1xufVxuW2RhdGEtd2lkdGg9XCI0N1wiXSB7XG4gICAgd2lkdGg6IDQ3JTtcbn1cbltkYXRhLXdpZHRoPVwiNDhcIl0ge1xuICAgIHdpZHRoOiA0OCU7XG59XG5bZGF0YS13aWR0aD1cIjQ5XCJdIHtcbiAgICB3aWR0aDogNDklO1xufVxuW2RhdGEtd2lkdGg9XCI1MFwiXSB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbltkYXRhLXdpZHRoPVwiNTFcIl0ge1xuICAgIHdpZHRoOiA1MSU7XG59XG5bZGF0YS13aWR0aD1cIjUyXCJdIHtcbiAgICB3aWR0aDogNTIlO1xufVxuW2RhdGEtd2lkdGg9XCI1M1wiXSB7XG4gICAgd2lkdGg6IDUzJTtcbn1cbltkYXRhLXdpZHRoPVwiNTRcIl0ge1xuICAgIHdpZHRoOiA1NCU7XG59XG5bZGF0YS13aWR0aD1cIjU1XCJdIHtcbiAgICB3aWR0aDogNTUlO1xufVxuW2RhdGEtd2lkdGg9XCI1NlwiXSB7XG4gICAgd2lkdGg6IDU2JTtcbn1cbltkYXRhLXdpZHRoPVwiNTdcIl0ge1xuICAgIHdpZHRoOiA1NyU7XG59XG5bZGF0YS13aWR0aD1cIjU4XCJdIHtcbiAgICB3aWR0aDogNTglO1xufVxuW2RhdGEtd2lkdGg9XCI1OVwiXSB7XG4gICAgd2lkdGg6IDU5JTtcbn1cbltkYXRhLXdpZHRoPVwiNjBcIl0ge1xuICAgIHdpZHRoOiA2MCU7XG59XG5bZGF0YS13aWR0aD1cIjYxXCJdIHtcbiAgICB3aWR0aDogNjElO1xufVxuW2RhdGEtd2lkdGg9XCI2MlwiXSB7XG4gICAgd2lkdGg6IDYyJTtcbn1cbltkYXRhLXdpZHRoPVwiNjNcIl0ge1xuICAgIHdpZHRoOiA2MyU7XG59XG5bZGF0YS13aWR0aD1cIjY0XCJdIHtcbiAgICB3aWR0aDogNjQlO1xufVxuW2RhdGEtd2lkdGg9XCI2NVwiXSB7XG4gICAgd2lkdGg6IDY1JTtcbn1cbltkYXRhLXdpZHRoPVwiNjZcIl0ge1xuICAgIHdpZHRoOiA2NiU7XG59XG5bZGF0YS13aWR0aD1cIjY3XCJdIHtcbiAgICB3aWR0aDogNjclO1xufVxuW2RhdGEtd2lkdGg9XCI2OFwiXSB7XG4gICAgd2lkdGg6IDY4JTtcbn1cbltkYXRhLXdpZHRoPVwiNjlcIl0ge1xuICAgIHdpZHRoOiA2OSU7XG59XG5bZGF0YS13aWR0aD1cIjcwXCJdIHtcbiAgICB3aWR0aDogNzAlO1xufVxuW2RhdGEtd2lkdGg9XCI3MVwiXSB7XG4gICAgd2lkdGg6IDcxJTtcbn1cbltkYXRhLXdpZHRoPVwiNzJcIl0ge1xuICAgIHdpZHRoOiA3MiU7XG59XG5bZGF0YS13aWR0aD1cIjczXCJdIHtcbiAgICB3aWR0aDogNzMlO1xufVxuW2RhdGEtd2lkdGg9XCI3NFwiXSB7XG4gICAgd2lkdGg6IDc0JTtcbn1cbltkYXRhLXdpZHRoPVwiNzVcIl0ge1xuICAgIHdpZHRoOiA3NSU7XG59XG5bZGF0YS13aWR0aD1cIjc2XCJdIHtcbiAgICB3aWR0aDogNzYlO1xufVxuW2RhdGEtd2lkdGg9XCI3N1wiXSB7XG4gICAgd2lkdGg6IDc3JTtcbn1cbltkYXRhLXdpZHRoPVwiNzhcIl0ge1xuICAgIHdpZHRoOiA3OCU7XG59XG5bZGF0YS13aWR0aD1cIjc5XCJdIHtcbiAgICB3aWR0aDogNzklO1xufVxuW2RhdGEtd2lkdGg9XCI4MFwiXSB7XG4gICAgd2lkdGg6IDgwJTtcbn1cbltkYXRhLXdpZHRoPVwiODFcIl0ge1xuICAgIHdpZHRoOiA4MSU7XG59XG5bZGF0YS13aWR0aD1cIjgyXCJdIHtcbiAgICB3aWR0aDogODIlO1xufVxuW2RhdGEtd2lkdGg9XCI4M1wiXSB7XG4gICAgd2lkdGg6IDgzJTtcbn1cbltkYXRhLXdpZHRoPVwiODRcIl0ge1xuICAgIHdpZHRoOiA4NCU7XG59XG5bZGF0YS13aWR0aD1cIjg1XCJdIHtcbiAgICB3aWR0aDogODUlO1xufVxuW2RhdGEtd2lkdGg9XCI4NlwiXSB7XG4gICAgd2lkdGg6IDg2JTtcbn1cbltkYXRhLXdpZHRoPVwiODdcIl0ge1xuICAgIHdpZHRoOiA4NyU7XG59XG5bZGF0YS13aWR0aD1cIjg4XCJdIHtcbiAgICB3aWR0aDogODglO1xufVxuW2RhdGEtd2lkdGg9XCI4OVwiXSB7XG4gICAgd2lkdGg6IDg5JTtcbn1cbltkYXRhLXdpZHRoPVwiOTBcIl0ge1xuICAgIHdpZHRoOiA5MCU7XG59XG5bZGF0YS13aWR0aD1cIjkxXCJdIHtcbiAgICB3aWR0aDogOTElO1xufVxuW2RhdGEtd2lkdGg9XCI5MlwiXSB7XG4gICAgd2lkdGg6IDkyJTtcbn1cbltkYXRhLXdpZHRoPVwiOTNcIl0ge1xuICAgIHdpZHRoOiA5MyU7XG59XG5bZGF0YS13aWR0aD1cIjk0XCJdIHtcbiAgICB3aWR0aDogOTQlO1xufVxuW2RhdGEtd2lkdGg9XCI5NVwiXSB7XG4gICAgd2lkdGg6IDk1JTtcbn1cbltkYXRhLXdpZHRoPVwiOTZcIl0ge1xuICAgIHdpZHRoOiA5NiU7XG59XG5bZGF0YS13aWR0aD1cIjk3XCJdIHtcbiAgICB3aWR0aDogOTclO1xufVxuW2RhdGEtd2lkdGg9XCI5OFwiXSB7XG4gICAgd2lkdGg6IDk4JTtcbn1cbltkYXRhLXdpZHRoPVwiOTlcIl0ge1xuICAgIHdpZHRoOiA5OSU7XG59XG5bZGF0YS13aWR0aD1cIjEwMFwiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"]
      });
      /***/
    },

    /***/
    38181:
    /*!******************************************************************!*\
      !*** ./src/app/components/common/strategy/strategy.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StrategyComponent": function StrategyComponent() {
          return (
            /* binding */
            _StrategyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _StrategyComponent = /*#__PURE__*/function () {
        function _StrategyComponent(viewportScroller) {
          _classCallCheck(this, _StrategyComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_StrategyComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _StrategyComponent;
      }();

      _StrategyComponent.ɵfac = function StrategyComponent_Factory(t) {
        return new (t || _StrategyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _StrategyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _StrategyComponent,
        selectors: [["app-strategy"]],
        decls: 39,
        vars: 0,
        consts: [["id", "strategy", 1, "strategy-area"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "strategy-image"], ["src", "assets/img/about-strategy.jpg", "alt", "image"], [1, "strategy-content", "ptb-70"], [1, "section-title"], [1, "features-list"], [1, "fa", "fa-check"], [1, "shape1"]],
        template: function StrategyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "What is DXPERTS blockchain & DXPERTS Community ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "What is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "DXP Token ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DXPERTS Professional Network Community is a DApp built on DXPERTS Blockchain Network. DXP is the core utility token of DXPERTS Blockchain network and is widely used in the DXPERTS eco syste. DXPERTS Blockchain is ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DPOS Consensus Mechanism");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Decentralised ORG Structure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "SHA512 Algorithm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gateways");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "DEX");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Wallet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " DStar is a collatoral asset of DXPERTS Blockchain Network. It is 100% backed by DXP coin via smart contract on the DXPERTS Blockchain.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJhdGVneS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    39495:
    /*!********************************************************************!*\
      !*** ./src/app/components/common/subscribe/subscribe.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SubscribeComponent": function SubscribeComponent() {
          return (
            /* binding */
            _SubscribeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _SubscribeComponent = /*#__PURE__*/function () {
        function _SubscribeComponent(viewportScroller) {
          _classCallCheck(this, _SubscribeComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_SubscribeComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _SubscribeComponent;
      }();

      _SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) {
        return new (t || _SubscribeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _SubscribeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _SubscribeComponent,
        selectors: [["app-subscribe"]],
        decls: 9,
        vars: 0,
        consts: [[1, "subscribe-area", "ptb-100"], [1, "container"], [1, "newsletter"], [1, "newsletter-form"], ["type", "email", "placeholder", "Your Email Address", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"]],
        template: function SubscribeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Join Our Newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpYmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    36278:
    /*!**********************************************************!*\
      !*** ./src/app/components/common/team/team.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TeamComponent": function TeamComponent() {
          return (
            /* binding */
            _TeamComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);

      function TeamComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "John Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Warner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "James Andy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back-End Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamComponent_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Front-End Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamComponent_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "John Doe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Web Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TeamComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Olivia Smith");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Photographer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _TeamComponent = /*#__PURE__*/function () {
        function _TeamComponent(viewportScroller) {
          _classCallCheck(this, _TeamComponent);

          this.viewportScroller = viewportScroller;
          this.teamSlides = {
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 2
              },
              768: {
                items: 2
              },
              1200: {
                items: 3
              }
            }
          };
        }

        _createClass(_TeamComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TeamComponent;
      }();

      _TeamComponent.ɵfac = function TeamComponent_Factory(t) {
        return new (t || _TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _TeamComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TeamComponent,
        selectors: [["app-team"]],
        decls: 21,
        vars: 1,
        consts: [["id", "team", 1, "team-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "team-slides"], [3, "options"], ["carouselSlide", ""], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"], [1, "single-team-box"], [1, "image"], ["src", "assets/img/team-1.jpg", "alt", "team-img"], [1, "content"], [1, "title"], [1, "post"], [1, "social"], ["href", "#", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", 1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", 1, "fab", "fa-linkedin-in"], ["src", "assets/img/team-2.jpg", "alt", "team-img"], ["src", "assets/img/team-3.jpg", "alt", "team-img"], ["src", "assets/img/team-4.jpg", "alt", "team-img"], ["src", "assets/img/team-5.jpg", "alt", "team-img"], ["src", "assets/img/team-6.jpg", "alt", "team-img"]],
        template: function TeamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Meet Addax");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Creative ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "owl-carousel-o", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TeamComponent_ng_template_13_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TeamComponent_ng_template_14_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TeamComponent_ng_template_15_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TeamComponent_ng_template_16_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TeamComponent_ng_template_17_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TeamComponent_ng_template_18_Template, 18, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.teamSlides);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_2__.CarouselSlideDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    63416:
    /*!****************************************************************!*\
      !*** ./src/app/components/common/welcome/welcome.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WelcomeComponent": function WelcomeComponent() {
          return (
            /* binding */
            _WelcomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _WelcomeComponent = /*#__PURE__*/function () {
        function _WelcomeComponent(viewportScroller) {
          _classCallCheck(this, _WelcomeComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_WelcomeComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WelcomeComponent;
      }();

      _WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || _WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _WelcomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _WelcomeComponent,
        selectors: [["app-welcome"]],
        decls: 43,
        vars: 0,
        consts: [["id", "welcome", 1, "welcome-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "far", "fa-address-card"], ["title", "Read More", 1, "link-btn", 3, "click"], [1, "fa", "fa-arrow-right"], [1, "fas", "fa-star-half-alt"], [1, "fas", "fa-award"], [1, "shape2"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dxperts Professional network");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Objective of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " DXPERTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To be a Service platform by introducing, educating, facilitating reources via training, workshops, connecting, hosting networking events to its members as a one stop solution for news and media promotions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Position yourself as an Expert or a Professional Company within DXPERTS global community.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_a_click_20_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Star Ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Receive star ratings to your Profile or company by network peers and be at the top of pinnacle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_a_click_30_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Recognition");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Stand out from the crowd being unique & grow along with the future of DLT Eco System.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_a_click_40_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    79529:
    /*!**********************************************************************!*\
      !*** ./src/app/components/common/who-we-are/who-we-are.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhoWeAreComponent": function WhoWeAreComponent() {
          return (
            /* binding */
            _WhoWeAreComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _WhoWeAreComponent = /*#__PURE__*/function () {
        function _WhoWeAreComponent(viewportScroller) {
          _classCallCheck(this, _WhoWeAreComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_WhoWeAreComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WhoWeAreComponent;
      }();

      _WhoWeAreComponent.ɵfac = function WhoWeAreComponent_Factory(t) {
        return new (t || _WhoWeAreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _WhoWeAreComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _WhoWeAreComponent,
        selectors: [["app-who-we-are"]],
        decls: 64,
        vars: 0,
        consts: [["id", "dstar-uses", 1, "who-we-are-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-who-we-are"], [1, "fas", "fa-users"], [1, "fas", "fa-book"], [1, "far", "fa-handshake"], [1, "fas", "fa-project-diagram"], [1, "far", "fa-newspaper"], [1, "far", "fa-sun"]],
        template: function WhoWeAreComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Advantages of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " DXPERTS Professional Network");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Be a life time memeber of global crypto community & develop networking among all existing & future of crypto projects. A distributed networking, communication & engagement platform & a think tank to witness past, present and future of DLT revolution.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Life Time Membership");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Postion yourself as an Expert.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Access to Resources");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Access to unlimited Resources.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Networking & Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Exposure to Networking Events.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Project Collaborations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Receive project & collaborations offers.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "News & Events");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Be updated with the news and events.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "DLT Eco System");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Expose yourself as an Expert in DLT Industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aG8td2UtYXJlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    42337:
    /*!**********************************************************************************!*\
      !*** ./src/app/components/common/why-we-different/why-we-different.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WhyWeDifferentComponent": function WhyWeDifferentComponent() {
          return (
            /* binding */
            _WhyWeDifferentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _WhyWeDifferentComponent = /*#__PURE__*/function () {
        function _WhyWeDifferentComponent(viewportScroller) {
          _classCallCheck(this, _WhyWeDifferentComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_WhyWeDifferentComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WhyWeDifferentComponent;
      }();

      _WhyWeDifferentComponent.ɵfac = function WhyWeDifferentComponent_Factory(t) {
        return new (t || _WhyWeDifferentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.ViewportScroller));
      };

      _WhyWeDifferentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _WhyWeDifferentComponent,
        selectors: [["app-why-we-different"]],
        decls: 131,
        vars: 0,
        consts: [["id", "why-we-different", 1, "why-we-different", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "tabset", "why-we-different-tabset"], ["type", "radio", "name", "tabset", "id", "tab1", "aria-controls", "speed-flexibility", "checked", ""], ["for", "tab1"], ["type", "radio", "name", "tabset", "id", "tab2", "aria-controls", "profeesional-work"], ["for", "tab2"], ["type", "radio", "name", "tabset", "id", "tab3", "aria-controls", "experienced-staff"], ["for", "tab3"], ["type", "radio", "name", "tabset", "id", "tab4", "aria-controls", "custom-support"], ["for", "tab4"], [1, "tab-panels"], ["id", "speed-flexibility", 1, "tab-panel"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "why-we-different-img"], ["src", "assets/img/different-img1.png", "alt", "img"], [1, "why-we-different-content"], [1, "fas", "fa-check"], ["id", "profeesional-work", 1, "tab-panel"], ["src", "assets/img/different-img2.png", "alt", "img"], ["id", "experienced-staff", 1, "tab-panel"], ["src", "assets/img/different-img3.png", "alt", "img"], ["id", "custom-support", 1, "tab-panel"], ["src", "assets/img/different-img4.png", "alt", "img"]],
        template: function WhyWeDifferentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What makes DXPERTS ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Unique ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Global Crypto Community Network as a concept, completely decentralised, does not confined to any country or to its physical borders, peer to peer networking, adding value to its every member ensuring right path of sustainability, non violance & global prosperity of humanity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Right Tools");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Right Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Right Exposure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Right Context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Right Tools ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "To develop DLT resources, capacities as a distributed international cooperation through hosting meetings & events for greater networking to its members.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Learn & aquire right knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Analyze & classify knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Sort available types of Knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Be equipped with the right knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Make stronger global crypto community");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Education");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Provide opportunities to learn, engage, contribute & promote Communities core values within the DLT eco system.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Applying right knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Understadning implications of right Knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Advance research in right knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Spread, teach & improve applying right knowledge");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Create sustainable knowledge base");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Exposure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Encourage innovation, R&D, nurture & host, incubate new porjects, proposals thorugh online/offline collaborations.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "More opportunities at difference scenarios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Unmasking the facts at different levels");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Analyse the need and cause at different scenarios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "To be aquainted the knowledge within local scenarios");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "To be a resource to the global crypto community");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Right Context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Be updated with innovation, be a part of hosting new projects & proposals in the global crypto industry.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Exposure of fragmented context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Exposure of cicumstantial context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Exposure of event based context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Exposure of fact based context");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Exposure of interdependence & connections");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aHktd2UtZGlmZmVyZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    53815:
    /*!**********************************************************!*\
      !*** ./src/app/components/common/work/work.component.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WorkComponent": function WorkComponent() {
          return (
            /* binding */
            _WorkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_tabset__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-tabset */
      79532);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _WorkComponent = /*#__PURE__*/function () {
        function _WorkComponent(viewportScroller) {
          _classCallCheck(this, _WorkComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_WorkComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _WorkComponent;
      }();

      _WorkComponent.ɵfac = function WorkComponent_Factory(t) {
        return new (t || _WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
      };

      _WorkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _WorkComponent,
        selectors: [["app-work"]],
        decls: 264,
        vars: 0,
        consts: [["id", "work", 1, "work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "container-fluid"], [1, "work-tabs"], ["tabTitle", "All"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-work"], ["src", "assets/img/work-img1.jpg", "alt", "work-img"], [1, "work-content"], ["routerLink", "/"], ["src", "assets/img/work-img2.jpg", "alt", "work-img"], ["href", "#"], ["src", "assets/img/work-img3.jpg", "alt", "work-img"], ["src", "assets/img/work-img4.jpg", "alt", "work-img"], ["src", "assets/img/work-img5.jpg", "alt", "work-img"], ["src", "assets/img/work-img6.jpg", "alt", "work-img"], ["tabTitle", "Brand"], ["tabTitle", "Design"], ["tabTitle", "Graphic"], ["tabTitle", "Photoshop"], ["tabTitle", "Illustrator"]],
        template: function WorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngx-tabset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ngx-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Games Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "IT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Games");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "ngx-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "ngx-tab", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Games Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "IT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Games");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "ngx-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Games Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "IT");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " . ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Games");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "ngx-tab", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "ngx-tab", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Creative Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, ".");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_tabset__WEBPACK_IMPORTED_MODULE_0__.TabsetComponent, ngx_tabset__WEBPACK_IMPORTED_MODULE_0__.TabComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    83860:
    /*!***************************************************************!*\
      !*** ./src/app/components/home-eight/home-eight.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeEightComponent": function HomeEightComponent() {
          return (
            /* binding */
            _HomeEightComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-typed-js */
      43499);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _c0 = function _c0() {
        return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"];
      };

      var _HomeEightComponent = /*#__PURE__*/function () {
        function _HomeEightComponent(viewportScroller) {
          _classCallCheck(this, _HomeEightComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeEightComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeEightComponent;
      }();

      _HomeEightComponent.ɵfac = function HomeEightComponent_Factory(t) {
        return new (t || _HomeEightComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeEightComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeEightComponent,
        selectors: [["app-home-eight"]],
        decls: 36,
        vars: 6,
        consts: [[1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeEightComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "We Are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "ngx-typed-js", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeEightComponent_Template_a_click_13_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeEightComponent_Template_a_click_15_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
          }
        },
        directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    52505:
    /*!*****************************************************************!*\
      !*** ./src/app/components/home-eleven/home-eleven.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeElevenComponent": function HomeElevenComponent() {
          return (
            /* binding */
            _HomeElevenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-particle */
      12626);
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ngx-typed-js */
      43499);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _c0 = function _c0() {
        return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"];
      };

      var _HomeElevenComponent = /*#__PURE__*/function () {
        function _HomeElevenComponent(viewportScroller) {
          _classCallCheck(this, _HomeElevenComponent);

          this.viewportScroller = viewportScroller;
          this.myStyle = {};
          this.myParams = {};
          this.width = 100;
          this.height = 100;
        }

        _createClass(_HomeElevenComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myStyle = {
              'top': 0,
              'left': 0,
              'width': '100%',
              'height': '100%',
              'position': 'absolute'
            };
            this.myParams = {
              particles: {
                number: {
                  value: 80
                },
                color: {
                  value: '#ffffff'
                },
                shape: {
                  type: 'triangle'
                }
              }
            };
          }
        }]);

        return _HomeElevenComponent;
      }();

      _HomeElevenComponent.ɵfac = function HomeElevenComponent_Factory(t) {
        return new (t || _HomeElevenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeElevenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeElevenComponent,
        selectors: [["app-home-eleven"]],
        decls: 38,
        vars: 11,
        consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeElevenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "particles", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "We Are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "ngx-typed-js", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeElevenComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeElevenComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleMap"](ctx.myStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](10, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
          }
        },
        directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, ngx_typed_js__WEBPACK_IMPORTED_MODULE_22__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWVsZXZlbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    83806:
    /*!*************************************************************!*\
      !*** ./src/app/components/home-five/home-five.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeFiveComponent": function HomeFiveComponent() {
          return (
            /* binding */
            _HomeFiveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeFiveComponent = /*#__PURE__*/function () {
        function _HomeFiveComponent(viewportScroller) {
          _classCallCheck(this, _HomeFiveComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeFiveComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeFiveComponent;
      }();

      _HomeFiveComponent.ɵfac = function HomeFiveComponent_Factory(t) {
        return new (t || _HomeFiveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeFiveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeFiveComponent,
        selectors: [["app-home-five"]],
        decls: 40,
        vars: 0,
        consts: [[1, "main-banner", "item-bg-two"], [1, "creative-banner-one"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"], [1, "shape3"], ["src", "assets/img/shape2.png", "alt", "image"]],
        template: function HomeFiveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeFiveComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeFiveComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](38, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](39, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZpdmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    17496:
    /*!*************************************************************!*\
      !*** ./src/app/components/home-four/home-four.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeFourComponent": function HomeFourComponent() {
          return (
            /* binding */
            _HomeFourComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeFourComponent = /*#__PURE__*/function () {
        function _HomeFourComponent(viewportScroller) {
          _classCallCheck(this, _HomeFourComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeFourComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeFourComponent;
      }();

      _HomeFourComponent.ɵfac = function HomeFourComponent_Factory(t) {
        return new (t || _HomeFourComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeFourComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeFourComponent,
        selectors: [["app-home-four"]],
        decls: 37,
        vars: 0,
        consts: [[1, "main-banner", "item-bg-three", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text", "text-start"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeFourComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeFourComponent_Template_a_click_14_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeFourComponent_Template_a_click_16_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWZvdXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    7747:
    /*!*************************************************************!*\
      !*** ./src/app/components/home-nine/home-nine.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeNineComponent": function HomeNineComponent() {
          return (
            /* binding */
            _HomeNineComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-particle */
      12626);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeNineComponent = /*#__PURE__*/function () {
        function _HomeNineComponent(viewportScroller) {
          _classCallCheck(this, _HomeNineComponent);

          this.viewportScroller = viewportScroller;
          this.myStyle = {};
          this.myParams = {};
          this.width = 100;
          this.height = 100;
        }

        _createClass(_HomeNineComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myStyle = {
              'top': 0,
              'left': 0,
              'width': '100%',
              'height': '100%',
              'position': 'absolute'
            };
            this.myParams = {
              particles: {
                number: {
                  value: 80
                },
                color: {
                  value: '#ffffff'
                },
                shape: {
                  type: 'triangle'
                }
              }
            };
          }
        }]);

        return _HomeNineComponent;
      }();

      _HomeNineComponent.ɵfac = function HomeNineComponent_Factory(t) {
        return new (t || _HomeNineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeNineComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeNineComponent,
        selectors: [["app-home-nine"]],
        decls: 38,
        vars: 5,
        consts: [[1, "main-banner", "item-bg-one"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeNineComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "particles", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeNineComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeNineComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleMap"](ctx.myStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);
          }
        },
        directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW5pbmUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    12489:
    /*!***********************************************************!*\
      !*** ./src/app/components/home-one/home-one.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeOneComponent": function HomeOneComponent() {
          return (
            /* binding */
            _HomeOneComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/banner-home/banner-home.component */
      24358);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);

      var _HomeOneComponent = /*#__PURE__*/function () {
        function _HomeOneComponent(viewportScroller) {
          _classCallCheck(this, _HomeOneComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeOneComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeOneComponent;
      }();

      _HomeOneComponent.ɵfac = function HomeOneComponent_Factory(t) {
        return new (t || _HomeOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.ViewportScroller));
      };

      _HomeOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
        type: _HomeOneComponent,
        selectors: [["app-home-one"]],
        decls: 31,
        vars: 0,
        consts: [[1, "bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], ["id", "stars"], ["id", "stars2"], ["id", "stars3"], ["id", "title"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"]],
        template: function HomeOneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "app-banner-home");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "A reward Token of ");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "DXPERTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, " Community");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "A networking platform of global crypto & DLT communities eco-system.");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function HomeOneComponent_Template_a_click_17_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Know more");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "app-partner");
          }
        },
        directives: [_common_banner_home_banner_home_component__WEBPACK_IMPORTED_MODULE_0__.BannerHomeComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_1__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_8__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__.WhyWeDifferentComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_10__.FaqComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_11__.StrategyComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_12__.PartnerComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    64616:
    /*!***************************************************************!*\
      !*** ./src/app/components/home-seven/home-seven.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeSevenComponent": function HomeSevenComponent() {
          return (
            /* binding */
            _HomeSevenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeSevenComponent = /*#__PURE__*/function () {
        function _HomeSevenComponent(viewportScroller) {
          _classCallCheck(this, _HomeSevenComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeSevenComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeSevenComponent;
      }();

      _HomeSevenComponent.ɵfac = function HomeSevenComponent_Factory(t) {
        return new (t || _HomeSevenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeSevenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeSevenComponent,
        selectors: [["app-home-seven"]],
        decls: 38,
        vars: 0,
        consts: [[1, "main-banner", "item-bg-one"], [1, "creative-banner-three"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeSevenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeSevenComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeSevenComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNldmVuLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    56174:
    /*!***********************************************************!*\
      !*** ./src/app/components/home-six/home-six.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeSixComponent": function HomeSixComponent() {
          return (
            /* binding */
            _HomeSixComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeSixComponent = /*#__PURE__*/function () {
        function _HomeSixComponent(viewportScroller) {
          _classCallCheck(this, _HomeSixComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeSixComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeSixComponent;
      }();

      _HomeSixComponent.ɵfac = function HomeSixComponent_Factory(t) {
        return new (t || _HomeSixComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeSixComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeSixComponent,
        selectors: [["app-home-six"]],
        decls: 38,
        vars: 0,
        consts: [[1, "main-banner", "item-bg-three"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeSixComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeSixComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeSixComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNpeC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    90390:
    /*!***********************************************************!*\
      !*** ./src/app/components/home-ten/home-ten.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeTenComponent": function HomeTenComponent() {
          return (
            /* binding */
            _HomeTenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-typed-js */
      43499);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _c0 = function _c0() {
        return ["Professional", "Passionate", "Creative", "Designer", "Unique", "Best", "Support"];
      };

      var _HomeTenComponent = /*#__PURE__*/function () {
        function _HomeTenComponent(viewportScroller) {
          _classCallCheck(this, _HomeTenComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeTenComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeTenComponent;
      }();

      _HomeTenComponent.ɵfac = function HomeTenComponent_Factory(t) {
        return new (t || _HomeTenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeTenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeTenComponent,
        selectors: [["app-home-ten"]],
        decls: 37,
        vars: 6,
        consts: [[1, "main-banner", "item-bg-three"], [1, "creative-banner-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [3, "strings", "typeSpeed", "loop", "backSpeed", "showCursor"], [1, "typing"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeTenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "We Are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "ngx-typed-js", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](11, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeTenComponent_Template_a_click_14_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeTenComponent_Template_a_click_16_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](5, _c0))("typeSpeed", 100)("loop", true)("backSpeed", 100)("showCursor", false);
          }
        },
        directives: [ngx_typed_js__WEBPACK_IMPORTED_MODULE_21__.NgxTypedJsComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRlbi5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    71011:
    /*!*********************************************************************!*\
      !*** ./src/app/components/home-thirteen/home-thirteen.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeThirteenComponent": function HomeThirteenComponent() {
          return (
            /* binding */
            _HomeThirteenComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_particle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ngx-particle */
      12626);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeThirteenComponent = /*#__PURE__*/function () {
        function _HomeThirteenComponent(viewportScroller) {
          _classCallCheck(this, _HomeThirteenComponent);

          this.viewportScroller = viewportScroller;
          this.myStyle = {};
          this.myParams = {};
          this.width = 100;
          this.height = 100;
        }

        _createClass(_HomeThirteenComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myStyle = {
              'top': 0,
              'left': 0,
              'width': '100%',
              'height': '100%',
              'position': 'absolute'
            };
            this.myParams = {
              particles: {
                number: {
                  value: 80
                },
                color: {
                  value: '#ffffff'
                },
                shape: {
                  type: 'stroke'
                }
              }
            };
          }
        }]);

        return _HomeThirteenComponent;
      }();

      _HomeThirteenComponent.ɵfac = function HomeThirteenComponent_Factory(t) {
        return new (t || _HomeThirteenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeThirteenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeThirteenComponent,
        selectors: [["app-home-thirteen"]],
        decls: 38,
        vars: 5,
        consts: [[1, "main-banner", "item-bg-one"], [3, "params", "width", "height"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text", "text-end"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeThirteenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "particles", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](14, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeThirteenComponent_Template_a_click_15_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](16, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeThirteenComponent_Template_a_click_17_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleMap"](ctx.myStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("params", ctx.myParams)("width", ctx.width)("height", ctx.height);
          }
        },
        directives: [ngx_particle__WEBPACK_IMPORTED_MODULE_21__.ParticlesComponent, _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRoaXJ0ZWVuLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    93562:
    /*!***************************************************************!*\
      !*** ./src/app/components/home-three/home-three.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeThreeComponent": function HomeThreeComponent() {
          return (
            /* binding */
            _HomeThreeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services/services.component */
      18211);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeThreeComponent = /*#__PURE__*/function () {
        function _HomeThreeComponent(viewportScroller) {
          _classCallCheck(this, _HomeThreeComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeThreeComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeThreeComponent;
      }();

      _HomeThreeComponent.ɵfac = function HomeThreeComponent_Factory(t) {
        return new (t || _HomeThreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeThreeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeThreeComponent,
        selectors: [["app-home-three"]],
        decls: 39,
        vars: 0,
        consts: [[1, "main-banner"], ["loop", "", "muted", "", "autoplay", "", "poster", "#", 1, "video-background"], ["src", "assets/video/promo-video.mp4", "type", "video/mp4"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeThreeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "video", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "source", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeThreeComponent_Template_a_click_16_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeThreeComponent_Template_a_click_18_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](19, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-services");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](37, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](38, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXRocmVlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    27505:
    /*!*****************************************************************!*\
      !*** ./src/app/components/home-twelve/home-twelve.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeTwelveComponent": function HomeTwelveComponent() {
          return (
            /* binding */
            _HomeTwelveComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/welcome/welcome.component */
      63416);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      var _HomeTwelveComponent = /*#__PURE__*/function () {
        function _HomeTwelveComponent(viewportScroller) {
          _classCallCheck(this, _HomeTwelveComponent);

          this.viewportScroller = viewportScroller;
        }

        _createClass(_HomeTwelveComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeTwelveComponent;
      }();

      _HomeTwelveComponent.ɵfac = function HomeTwelveComponent_Factory(t) {
        return new (t || _HomeTwelveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.ViewportScroller));
      };

      _HomeTwelveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
        type: _HomeTwelveComponent,
        selectors: [["app-home-twelve"]],
        decls: 37,
        vars: 0,
        consts: [[1, "main-banner", "item-bg-three", "gradient-bg", "ripple-effect", "jquery-ripples"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-primary", "view-work", 3, "click"]],
        template: function HomeTwelveComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](6, "We Are Creative");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8, "The Best ");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11, " Experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeTwelveComponent_Template_a_click_14_listener() {
              return ctx.onClick("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15, "Get Started");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function HomeTwelveComponent_Template_a_click_16_listener() {
              return ctx.onClick("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17, "View Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](18, "app-welcome");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](19, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](20, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](21, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](22, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](23, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](24, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](25, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](26, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](27, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](28, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](29, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](30, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](31, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](32, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](33, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](34, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](35, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](36, "app-contact");
          }
        },
        directives: [_common_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent, _common_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_2__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_3__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_4__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_5__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_6__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_7__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_8__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_9__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_10__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_11__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_12__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_13__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_14__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_16__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_17__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3ZWx2ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    56519:
    /*!***********************************************************!*\
      !*** ./src/app/components/home-two/home-two.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeTwoComponent": function HomeTwoComponent() {
          return (
            /* binding */
            _HomeTwoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      67844);
      /* harmony import */


      var _common_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../common/about/about.component */
      97042);
      /* harmony import */


      var _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../common/strategy/strategy.component */
      38181);
      /* harmony import */


      var _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../common/who-we-are/who-we-are.component */
      79529);
      /* harmony import */


      var _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../common/cta/cta.component */
      79769);
      /* harmony import */


      var _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../common/skill/skill.component */
      33649);
      /* harmony import */


      var _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../common/funfacts/funfacts.component */
      25357);
      /* harmony import */


      var _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../common/team/team.component */
      36278);
      /* harmony import */


      var _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../common/how-we-work/how-we-work.component */
      14679);
      /* harmony import */


      var _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../common/services-two/services-two.component */
      12784);
      /* harmony import */


      var _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../common/why-we-different/why-we-different.component */
      42337);
      /* harmony import */


      var _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../common/work/work.component */
      53815);
      /* harmony import */


      var _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../common/pricing/pricing.component */
      62019);
      /* harmony import */


      var _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../common/faq/faq.component */
      82631);
      /* harmony import */


      var _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../common/feedback/feedback.component */
      46900);
      /* harmony import */


      var _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../common/blog/blog.component */
      13635);
      /* harmony import */


      var _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../common/partner/partner.component */
      16455);
      /* harmony import */


      var _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../common/subscribe/subscribe.component */
      39495);
      /* harmony import */


      var _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../common/contact/contact.component */
      17524);

      function HomeTwoComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "We Are Creative");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Nice To ");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "Meet");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, " You");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function HomeTwoComponent_ng_template_2_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

            return ctx_r3.onClick("work");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "View Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        }
      }

      function HomeTwoComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "We Are Professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Best ");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "Digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, " Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function HomeTwoComponent_ng_template_3_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

            return ctx_r5.onClick("work");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "View Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        }
      }

      function HomeTwoComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6, "We Are Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8, "Creativity is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, "Intelligence");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14, "Get Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function HomeTwoComponent_ng_template_4_Template_a_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();

            return ctx_r7.onClick("work");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16, "View Work");

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        }
      }

      var _HomeTwoComponent = /*#__PURE__*/function () {
        function _HomeTwoComponent(viewportScroller) {
          _classCallCheck(this, _HomeTwoComponent);

          this.viewportScroller = viewportScroller;
          this.homeSlides = {
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            items: 1,
            autoHeight: true,
            smartSpeed: 750,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
          };
        }

        _createClass(_HomeTwoComponent, [{
          key: "onClick",
          value: function onClick(elementId) {
            this.viewportScroller.scrollToAnchor(elementId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeTwoComponent;
      }();

      _HomeTwoComponent.ɵfac = function HomeTwoComponent_Factory(t) {
        return new (t || _HomeTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_19__.ViewportScroller));
      };

      _HomeTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
        type: _HomeTwoComponent,
        selectors: [["app-home-two"]],
        decls: 23,
        vars: 1,
        consts: [[1, "home-slides"], [3, "options"], ["carouselSlide", ""], [1, "main-banner", "item-bg-two"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text"], ["href", "#about", 1, "btn", "btn-primary"], [1, "btn", "btn-primary", "view-work", 3, "click"], [1, "main-banner", "item-bg-one"], [1, "main-banner", "item-bg-three"]],
        template: function HomeTwoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "owl-carousel-o", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, HomeTwoComponent_ng_template_2_Template, 18, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, HomeTwoComponent_ng_template_3_Template, 18, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, HomeTwoComponent_ng_template_4_Template, 17, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "app-strategy");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](7, "app-who-we-are");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "app-cta");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "app-skill");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "app-funfacts");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](11, "app-team");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "app-how-we-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](13, "app-services-two");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](14, "app-why-we-different");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](16, "app-pricing");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "app-faq");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](18, "app-feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "app-blog");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "app-partner");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](21, "app-subscribe");

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](22, "app-contact");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("options", ctx.homeSlides);
          }
        },
        directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_20__.CarouselSlideDirective, _common_about_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent, _common_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_1__.StrategyComponent, _common_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__.WhoWeAreComponent, _common_cta_cta_component__WEBPACK_IMPORTED_MODULE_3__.CtaComponent, _common_skill_skill_component__WEBPACK_IMPORTED_MODULE_4__.SkillComponent, _common_funfacts_funfacts_component__WEBPACK_IMPORTED_MODULE_5__.FunfactsComponent, _common_team_team_component__WEBPACK_IMPORTED_MODULE_6__.TeamComponent, _common_how_we_work_how_we_work_component__WEBPACK_IMPORTED_MODULE_7__.HowWeWorkComponent, _common_services_two_services_two_component__WEBPACK_IMPORTED_MODULE_8__.ServicesTwoComponent, _common_why_we_different_why_we_different_component__WEBPACK_IMPORTED_MODULE_9__.WhyWeDifferentComponent, _common_work_work_component__WEBPACK_IMPORTED_MODULE_10__.WorkComponent, _common_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__.PricingComponent, _common_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__.FaqComponent, _common_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__.FeedbackComponent, _common_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__.BlogComponent, _common_partner_partner_component__WEBPACK_IMPORTED_MODULE_15__.PartnerComponent, _common_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_16__.SubscribeComponent, _common_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__.ContactComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXR3by5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map