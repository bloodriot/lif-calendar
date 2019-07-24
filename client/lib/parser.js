import {animalData} from '../data/animalData';
import {cropData} from '../data/cropsData';
import {treeData} from '../data/treeData';

export default class Parser {

    static getIcon(data, type) {
        return type + "-" + data;
    }

    static getIcons(data, type) {
        if (typeof data === typeof []) {
            return data;
        }

        data = Parser.convertVegies(data);
        data = Parser.convertCrops(data);

        let items = data.split(" ");
        let icons = [];
        items.forEach(function(item) {
            icons.push(Parser.getIcon(item, type));
        });
        return icons;
    }

    static convertVegies(crops) {
        return crops
        .replace('wCabbage wCarrot wOnion wPeas', 'wVegetable')
        .replace('cCabbage cCarrot cOnion cPeas', 'cVegetable')
    }

    static convertCrops(crops) {
        return crops
        .replace('wWheat wRye wBarley wOat', 'wCrops')
        .replace('cWheat cRye cBarley cOat', 'cCrops')
    }

    static parseCropData(day) {
        return {
            "sow": cropData[day].sow,
            "grow": cropData[day].grow,
            "harvest": cropData[day].harvest,
            "end": cropData[day].end
        }
    }

    static parseAnimalData(day) {
        return {
            "breed": animalData[day].breed,
            "harvest": animalData[day].harvest
        }
    }

    static parseTreeData(day) {
        return {
            "plant": treeData[day].plant,
            "grow": treeData[day].grow,
            "harvest": treeData[day].harvest,
            "sleep": treeData[day].sleep
        }
    }

    static parseDay(day) {
        return {
            "animals": this.parseAnimalData(day),
            "crops": this.parseCropData(day),
            "trees": this.parseTreeData(day)
        }
    }
}