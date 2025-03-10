import { FormBuilder } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsCompDeliveryMethodComponent } from './rds-comp-delivery-method.component';


export default {
    title: 'Components/Delivery Method',
    component: RdsCompDeliveryMethodComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompDeliveryMethodComponent],
            imports: [
                NgxTranslateModule, SharedModule
            ],
            providers: [
                FormBuilder,

            ],
        })
    ],
    argTypes: {
    }
} as Meta;
const Template: Story<RdsCompDeliveryMethodComponent> = (args: RdsCompDeliveryMethodComponent) => ({
    props: {
        ...args
    }
});
export const Template1 = Template.bind({});

Template1.args = {
    
}

