import {Modal} from "../../main";


window['openModal'] = openModal;
window['removeModal'] = removeModal;
window['openModalSecond'] = openModalSecond;

function openModal(id: string): void {
    const template: "<div>MyModal</div>" = "<div>MyModal</div>";
    const modal: ModalService = new ModalService(id);
    modal.open(template);

}
function removeModal():void {
    Modal.removeById;
}
function openModalSecond(id = null):void {
    const template = "<div>MyModal 2</div>";
    const modal = new Modal(id);
    modal.open(template);
}
class ModalService {

}