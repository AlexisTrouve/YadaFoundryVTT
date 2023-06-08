export default class YadaItemSheet extends ItemSheet
{
    get template() {
        return (`systems/YadaFoundryVTT/templates/sheets/${this.item.data.type}-sheet.html`);
    }

    getData() {
        const baseData = super.getData();
        let sheetData = {
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.yada
        }

        return sheetData;
    }
}