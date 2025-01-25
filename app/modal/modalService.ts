window['openModal'] = openModal;
window['removeModal'] = removeModal;
window['openModalSecond'] = openModalSecond;
function openModal(id: string): void {
    const template: "<div>MyModal</div>" = "<div>MyModal</div>";
    const modal: ModalService = new ModalService(id);
    modal.open(template);

}
function removeModal(): void {
    ModalService.removeById();
}
function openModalSecond(id = null): void {
    const template: "<div>MyModal 2</div>" = "<div>MyModal 2</div>";
    const modal: ModalService = new ModalService(id);
    modal.open(template);
}
class ModalService {

}