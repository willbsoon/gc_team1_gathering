import { PetType } from "./pet-type";
import { PhoneNumber } from "./phone-number";
import { ShopServiceVo } from "./shop-service-vo";
import { EmployeeVo } from "./employee-vo";
import { ServiceItemVo } from "./service-item-vo";
import { ConsentTemplateVo } from "./consent-template-vo";
import { ShopBreedVo } from "./shop-breed-vo";
import { AlimtalkSettingsVo } from "./alimtalk-settings-vo";

export interface ShopVo {
    shopId: string;
    state: string;
    shopName: string;
    phoneNumber: PhoneNumber;

    services: ShopServiceVo[];
    employees: EmployeeVo[];
    consentTemplates: ConsentTemplateVo[];
    alimtalkTemplates: AlimtalkSettingsVo[];

    serviceItems: ServiceItemVo[];
    shopBreeds: {
        [key in PetType]: ShopBreedVo[]
    };
}
