"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var DeductionListComponent = (function () {
    function DeductionListComponent() {
        this.onSelected = new core_1.EventEmitter();
    }
    DeductionListComponent.prototype.ngOnInit = function () { };
    DeductionListComponent.prototype.selected = function (deduction) {
        this.selectedCard = deduction;
        this.onSelected.emit(deduction);
    };
    return DeductionListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DeductionListComponent.prototype, "deductions", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DeductionListComponent.prototype, "onSelected", void 0);
DeductionListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'deduction-list',
        templateUrl: 'deduction_list.component.html',
        styles: ['../deduction_styles.css']
    }),
    __metadata("design:paramtypes", [])
], DeductionListComponent);
exports.DeductionListComponent = DeductionListComponent;
//# sourceMappingURL=deduction_list.component.js.map