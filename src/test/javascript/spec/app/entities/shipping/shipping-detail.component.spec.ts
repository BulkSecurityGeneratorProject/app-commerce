/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { AppcommerceTestModule } from '../../../test.module';
import { ShippingDetailComponent } from 'app/entities/shipping/shipping-detail.component';
import { Shipping } from 'app/shared/model/shipping.model';

describe('Component Tests', () => {
    describe('Shipping Management Detail Component', () => {
        let comp: ShippingDetailComponent;
        let fixture: ComponentFixture<ShippingDetailComponent>;
        const route = ({ data: of({ shipping: new Shipping(123) }) } as any) as ActivatedRoute;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [AppcommerceTestModule],
                declarations: [ShippingDetailComponent],
                providers: [{ provide: ActivatedRoute, useValue: route }]
            })
                .overrideTemplate(ShippingDetailComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ShippingDetailComponent);
            comp = fixture.componentInstance;
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(comp.shipping).toEqual(jasmine.objectContaining({ id: 123 }));
            });
        });
    });
});
