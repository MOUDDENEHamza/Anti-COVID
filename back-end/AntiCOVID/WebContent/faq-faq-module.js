(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "/6n6":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-routing.module */ "h79p");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.component */ "gN+M");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-website/about-website.component */ "c5te");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./others/others.component */ "Li5n");
/* harmony import */ var _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about-covid/about-covid.component */ "73zW");
/* harmony import */ var _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about-vaccine/about-vaccine.component */ "1bVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class FaqModule {
}
FaqModule.??fac = function FaqModule_Factory(t) { return new (t || FaqModule)(); };
FaqModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineNgModule"]({ type: FaqModule });
FaqModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["????setNgModuleScope"](FaqModule, { declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"],
        _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_13__["AboutWebsiteComponent"],
        _others_others_component__WEBPACK_IMPORTED_MODULE_14__["OthersComponent"],
        _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_15__["AboutCovidComponent"],
        _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_16__["AboutVaccineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _faq_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"]] }); })();


/***/ }),

/***/ "1bVB":
/*!**************************************************************!*\
  !*** ./src/app/faq/about-vaccine/about-vaccine.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutVaccineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutVaccineComponent", function() { return AboutVaccineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


class AboutVaccineComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutVaccineComponent.??fac = function AboutVaccineComponent_Factory(t) { return new (t || AboutVaccineComponent)(); };
AboutVaccineComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutVaccineComponent, selectors: [["app-about-vaccine"]], decls: 158, vars: 0, consts: [[1, "center"], ["mat-raised-button", "", "color", "warn", "href", "../../vaccin"], ["href", "https://www.who.int"]], template: function AboutVaccineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " What types of COVID-19 vaccines are being developed ? How would they work ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Scientists around the world are developing many potential vaccines for COVID-19.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " These vaccines are all designed to teach the body\u2019s immune system to safely recognize and block the virus that causes COVID-19.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Several different types of potential vaccines for COVID-19 are in development, including: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Inactivated or weakened virus vaccines, which use a form of the virus that has been inactivated or weakened so it doesn\u2019t cause disease, but still generates an immune response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Protein-based vaccines, which use harmless fragments of proteins or protein shells that mimic the COVID-19 virus to safely generate an immune response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Viral vector vaccines, which use a safe virus that cannot cause disease but serves as a platform to produce coronavirus proteins to generate an immune response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, " RNA and DNA vaccines, a cutting-edge approach that uses genetically engineered RNA or DNA to generate a protein that itself safely prompts an immune response. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Informations about the Oxford/AstraZeneca COVID-19 vaccine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Who should be vaccinated first? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, " While vaccine supplies are limited, it is recommended that priority be given to health workers at high risk of exposure and older people, including those aged 65 or older. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, " Who else can take the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, " Vaccination is recommended for persons with comorbidities that have been identified as increasing the risk of severe COVID-19, including obesity, cardiovascular disease, respiratory disease and diabetes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " What is the recommended dosage? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " The recommended dosage is two doses given intramuscularly (0.5ml each) with an interval of 8 to 12 weeks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Additional research is needed to understand longer-term potential protection after a single dose. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " How efficacious is the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " It has an efficacy of 63.09% against symptomatic SARS-CoV-2 infection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, " Longer dose intervals within the 8 to 12 weeks range are associated with greater vaccine efficacy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " Informations about the Pfizer BioNTech COVID-19 vaccine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " Who should be vaccinated first? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " While vaccine supplies are limited, it is recommended that priority be given to health workers at high risk of exposure and older people, including those aged 65 or older. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Who else can take the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " The vaccine has been found to be safe and effective in people with various conditions that are associated with increased risk of severe disease.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](63, " This includes hypertension, diabetes, asthma, pulmonary, liver or kidney disease, as well as chronic infections that are stable and controlled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Further studies are required for the impacts on immune-compromised persons. The interim recommendation is that immune-compromised persons who are part of a group recommended for vaccination may be vaccinated, though when possible, not before receiving information and counselling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Persons living with HIV are at higher risk of severe COVID-19 disease. Limited safety data exists on HIV-infected persons with well controlled disease from the clinical trials. Known HIV-positive vaccine recipients should be informed, and when possible, counselled in relation to the available data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69, " Vaccination can be offered to people who have had COVID-19 in the past. But given the limited vaccine supply, individuals may wish to defer their own COVID-19 vaccination for up to 6 months from the time of SARS-CoV-2 infection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](70, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, " The vaccine has not been studied in lactating women, but it is not a live virus vaccine, the mRNA does not enter the nucleus of the cell and is degraded quickly, so it cannot interfere with cell functions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " If a lactating woman is part of a group (e.g. health worker) recommended for vaccination, vaccination can be offered. SAGE does not recommend discontinuing breastfeeding after vaccination. More evidence is being sought in order to further inform WHO\u2019s policy recommendations on this subject. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " What is the recommended dosage? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " A protective effect starts to develop 12 days after the first dose, but full protection requires two doses which WHO recommends be administered with a 21 to 28-day interval. Additional research is needed to understand longer-term potential protection after a single dose. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " How efficacious is the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, " The Pfizer BioNTech vaccine against COVID-19 has an efficacy of 95% against symptomatic SARS-CoV-2 infection. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, " Informations about the Moderna COVID-19 (mRNA-1273) vaccine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](90, " Who should be vaccinated first? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](92, " As with all COVID-19 vaccines, health workers at high risk of exposure and older people should be prioritized for vaccination. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94, " As more vaccine becomes available, additional priority groups should be vaccinated, with attention to people disproportionately affected by COVID-19 or who face health inequities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, " Who else can take the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](98, " The vaccine is safe and effective in people with known medical conditions associated with increased risk of severe disease, such as hypertension, diabetes, asthma, pulmonary, liver or kidney disease, as well as chronic infections that are stable and controlled. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](99, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Although further studies are required for immunocompromised persons, people in this category who are part of a group recommended for vaccination may be vaccinated after receiving information and counselling. Persons living with HIV are at higher risk of severe COVID-19 disease. Known HIV-positive vaccine recipients should be provided with information and counselling. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, " Vaccination can be offered to people who have had COVID-19 in the past. But individuals may wish to defer their own COVID-19 vaccination for up to six months from the time of SARS-CoV-2 infection. The vaccine can be offered to a breastfeeding woman who is part of a group recommended for vaccination (e.g. health workers); discontinuing breastfeeding after vaccination is currently not recommended. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104, " What is the recommended dosage? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](106, " SAGE recommends the use of the Moderna mRNA-1273 vaccine at a schedule of two doses (100 \u00B5g, 0.5 ml each) 28 days apart. If necessary, the interval between the doses may be extended to 42 days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, " Compliance with the full schedule is recommended and the same product should be used for both doses. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](110, " How efficacious is the vaccine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, " The Moderna vaccine has been shown to have an efficacy of approximately 92 per cent in protecting against COVID-19, starting 14 days after the first dose.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](119, " What are the benefits of getting vaccinated ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, " The COVID-19 vaccines produce protection against the disease, as a result of developing an immune response to the SARS-Cov-2 virus. Developing immunity through vaccination means there is a reduced risk of developing the illness and its consequences. This immunity helps you fight the virus if exposed. Getting vaccinated may also protect people around you, because if you are protected from getting infected and from disease, you are less likely to infect someone else. This is particularly important to protect people at increased risk for severe illness from COVID-19, such as healthcare providers, older or elderly adults, and people with other medical conditions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](127, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](128, " Should I get vaccinated even if I have had COVID-19 ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](130, " Even if you have already had COVID-19, you should be vaccinated when it is offered to you. The protection that someone gains from having COVID-19 will vary from person to person, and we also don\u2019t know how long natural immunity might last. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](137, " You want to get vaccinted ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](139, " You can check the avaliables vaccination centers and make an appointment on our website by clicking here : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](140, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](141, "Vaccination Centers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](143, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](149, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](151, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](153, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](154, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](155, " Source : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](156, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](157, "who.int");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: ["h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 400;\n    line-height: 56px;\n    margin: 100px;\n    text-align: center;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 200;\n    line-height: 56px;\n    margin: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXZhY2NpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImFib3V0LXZhY2NpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "6UPI":
/*!***************************************!*\
  !*** ./src/app/faq/category-lists.ts ***!
  \***************************************/
/*! exports provided: CATEGORY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY", function() { return CATEGORY; });
const CATEGORY = [
    {
        name: 'About this website',
    },
    {
        name: 'Covid Informations',
    },
    {
        name: 'Vaccines Informations',
    },
    {
        name: 'Others',
    }
];


/***/ }),

/***/ "73zW":
/*!**********************************************************!*\
  !*** ./src/app/faq/about-covid/about-covid.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutCovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutCovidComponent", function() { return AboutCovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


class AboutCovidComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutCovidComponent.??fac = function AboutCovidComponent_Factory(t) { return new (t || AboutCovidComponent)(); };
AboutCovidComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutCovidComponent, selectors: [["app-about-covid"]], decls: 103, vars: 0, consts: [[1, "center"], ["mat-raised-button", "", "color", "warn", "href", "../../statistics"], ["href", "https://www.who.int"]], template: function AboutCovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " What is COVID-19? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " COVID-19 is the disease caused by a new coronavirus called SARS-CoV-2. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " How to prevent COVID-19? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " To prevent infection and to slow transmission of COVID-19, do the following: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, " Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Maintain at least 1 metre distance between you and people coughing or sneezing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Avoid touching your face. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Cover your mouth and nose when coughing or sneezing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Stay home if you feel unwell. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Refrain from smoking and other activities that weaken the lungs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " What are the symptoms of COVID-19 ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, " COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, " Most common symptoms: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " fever.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, " dry cough.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, " tiredness.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Less common symptoms: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " aches and pains.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, " sore throat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, " diarrhoea.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, " conjunctivitis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, " headache.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " loss of taste or smell.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " a rash on skin, or discolouration of fingers or toes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, " Serious symptoms: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, " difficulty breathing or shortness of breath.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, " chest pain or pressure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, " loss of speech or movement.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, " Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, " People with mild symptoms who are otherwise healthy should manage their symptoms at home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, " On average it takes 5\u20136 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](82, " What are the statistics of COVID-19? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, " You can check our Covid overview by clicking here : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "Covid Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](90, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](92, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, " Source : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "who.int");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: ["h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-weight: 400;\n    line-height: 56px;\n    margin: 100px;\n    text-align: center;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 200;\n    line-height: 56px;\n    margin: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LWNvdmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJhYm91dC1jb3ZpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "Li5n":
/*!************************************************!*\
  !*** ./src/app/faq/others/others.component.ts ***!
  \************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


class OthersComponent {
    constructor() { }
    ngOnInit() {
    }
}
OthersComponent.??fac = function OthersComponent_Factory(t) { return new (t || OthersComponent)(); };
OthersComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OthersComponent, selectors: [["app-others"]], decls: 18, vars: 0, consts: [[1, "center"], ["mat-raised-button", "", "href", "../../forum"], ["mat-raised-button", "", "href", "../../contact"]], template: function OthersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Didn't find what you were looking for ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Go check our forum : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Forum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Still didn't find what you were looking for ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " Contact us : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"]], styles: ["h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 200;\n    line-height: 56px;\n    margin: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90aGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJvdGhlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "c5te":
/*!**************************************************************!*\
  !*** ./src/app/faq/about-website/about-website.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutWebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWebsiteComponent", function() { return AboutWebsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutWebsiteComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutWebsiteComponent.??fac = function AboutWebsiteComponent_Factory(t) { return new (t || AboutWebsiteComponent)(); };
AboutWebsiteComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AboutWebsiteComponent, selectors: [["app-about-website"]], decls: 12, vars: 0, template: function AboutWebsiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Credits : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Hamza MOUDDENE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Salma MEJBAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Anass TYOUBI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Axelle PAGNIER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, " ENSEEIHT engineering students ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 200;\n    line-height: 56px;\n    margin: 30px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXdlYnNpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYWJvdXQtd2Vic2l0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "gN+M":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-website/about-website.component */ "c5te");
/* harmony import */ var _category_lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-lists */ "6UPI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-covid/about-covid.component */ "73zW");
/* harmony import */ var _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-vaccine/about-vaccine.component */ "1bVB");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./others/others.component */ "Li5n");
















function FaqComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", category_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", category_r2.name, " ");
} }
function FaqComponent_div_32_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-about-website");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FaqComponent_div_32_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-about-covid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FaqComponent_div_32_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-about-vaccine");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FaqComponent_div_32_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-others");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function FaqComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](5, FaqComponent_div_32_div_5_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, FaqComponent_div_32_div_6_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, FaqComponent_div_32_div_7_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, FaqComponent_div_32_div_8_Template, 3, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.nameInformations);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.nameInformations === "About this website");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.nameInformations === "Covid Informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.nameInformations === "Vaccines Informations");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.nameInformations === "Others");
} }
class FaqComponent {
    constructor() {
        this.title = 'FAQ';
        this.hide = true;
        this.categoryList = _category_lists__WEBPACK_IMPORTED_MODULE_2__["CATEGORY"];
        this.component = _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_1__["AboutWebsiteComponent"];
    }
    ngOnInit() {
        this.coordinatesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    onSubmit() {
        this.nameInformations = this.coordinatesForm.get('category').value.name;
        this.hide = false;
    }
    hideForm() {
        return this.hide;
    }
}
FaqComponent.??fac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 39, vars: 5, consts: [[1, "wrapper"], [1, "container"], [1, "container2"], [1, "select"], [3, "formGroup"], ["appearance", "fill"], ["formControlName", "category", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["aria-hidden", "false", "aria-label", "Example search icon"], [4, "ngIf"], [3, "value"], ["class", "center", 4, "ngIf"], [1, "center"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, " Frequently Asked Questions : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, " Looking for infomations ? We may have the answers here ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, " Please choose a category : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](20, FaqComponent_mat_option_20_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function FaqComponent_Template_button_click_26_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](29, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, FaqComponent_div_32_Template, 9, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.coordinatesForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.categoryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", ctx.coordinatesForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.hideForm());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_1__["AboutWebsiteComponent"], _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_11__["AboutCovidComponent"], _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_12__["AboutVaccineComponent"], _others_others_component__WEBPACK_IMPORTED_MODULE_13__["OthersComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n    background-color: #f5f5f5;\n    padding-top: 1%;\n    min-height: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 300;\n    line-height: 56px;\n    margin: 50px;\n    text-align: center;\n}\n\nh2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 300;\n    line-height: 56px;\n    margin: 50px;\n    text-align: center;\n}\n\n.container2[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n    text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    padding-right: 20px;\n}\n\nselect[_ngcontent-%COMP%] {\n    font-size: .9rem;\n    padding: 2px 5px;\n}\n\nh3[_ngcontent-%COMP%] {\n    font-size: 56px;\n    font-weight: 300;\n    line-height: 56px;\n    margin: 50px;\n    text-align: center;\n}\n\n.block[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin: 2%;\n}\n\n.select[_ngcontent-%COMP%] {\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgcGFkZGluZy10b3A6IDElO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogNTZweDtcbiAgICBtYXJnaW46IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyMiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbnNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xufVxuXG5oMyB7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgbWFyZ2luOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAyJTtcbn1cblxuLnNlbGVjdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });


/***/ }),

/***/ "h79p":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqRoutingModule", function() { return FaqRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-covid/about-covid.component */ "73zW");
/* harmony import */ var _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-vaccine/about-vaccine.component */ "1bVB");
/* harmony import */ var _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-website/about-website.component */ "c5te");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.component */ "gN+M");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./others/others.component */ "Li5n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"] },
    { path: 'aboutWebsite', component: _about_website_about_website_component__WEBPACK_IMPORTED_MODULE_3__["AboutWebsiteComponent"] },
    { path: 'others', component: _others_others_component__WEBPACK_IMPORTED_MODULE_5__["OthersComponent"] },
    { path: 'covid', component: _about_covid_about_covid_component__WEBPACK_IMPORTED_MODULE_1__["AboutCovidComponent"] },
    { path: 'vaccine', component: _about_vaccine_about_vaccine_component__WEBPACK_IMPORTED_MODULE_2__["AboutVaccineComponent"] }
];
class FaqRoutingModule {
}
FaqRoutingModule.??fac = function FaqRoutingModule_Factory(t) { return new (t || FaqRoutingModule)(); };
FaqRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: FaqRoutingModule });
FaqRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](FaqRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=faq-faq-module.js.map