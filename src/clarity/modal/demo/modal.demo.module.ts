import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity.module";
import {ROUTING} from "./modal.demo.routing";

import {ModalDemo} from "./modal.demo";
import {ModalStaticDemo} from "./modal-static";
import {ModalAngularNotClosableDemo} from "./modal-angular-not-closable";
import {ModalAngularShowDemo} from "./modal-angular-show";
import {ModalAngularSizeDemo} from "./modal-angular-size";
import {ModalAngularStaticBackdropDemo} from "./modal-angular-static-backdrop";
import {ModalAnimationDemo} from "./modal-animation";
import {ModalBackdropDemo} from "./modal-backdrop";
import {ModalSizesDemo} from "./modal-sizes";


@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        ModalDemo,
        ModalStaticDemo,
        ModalAngularNotClosableDemo,
        ModalAngularShowDemo,
        ModalAngularSizeDemo,
        ModalAngularStaticBackdropDemo,
        ModalAnimationDemo,
        ModalBackdropDemo,
        ModalSizesDemo
    ],
    exports: [
        ModalDemo,
        ModalStaticDemo,
        ModalAngularNotClosableDemo,
        ModalAngularShowDemo,
        ModalAngularSizeDemo,
        ModalAngularStaticBackdropDemo,
        ModalAnimationDemo,
        ModalBackdropDemo,
        ModalSizesDemo
    ]
})
export default class ModalDemoModule {
}
