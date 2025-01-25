/** Modal - static fields & methods*/


// functions
    function openModal (id= null): void {
         // const findModal = Modal.modal.find(x => x.id === id);
         // if (!findModal) {
         // }
        const template = "<div>MyModal</div>";
        const modal = new Modal(id);
        modal.open(template);
}

function removeModal(): void {
Modal.removeById();
}

function openModalSecond(id= null):void {
 const template = "<div>MyModal 2</div>";
 const modal = new Modal(id);
 modal.open(template);
}

function removeAll(id = null): void {
        Modal.removeAll();
}

// base class
export class Modal {
    private readonly id: string;

    // static field
    public static modals: any[] = [];

    constructor(id = null) {
         const findModal = Modal.modals.find(x => x.id === id);
         if (findModal) {
         Modal.removeById(id);
         }

        Modal.modals.push(this);
        console.log("Modal.modals", Modal.modals);
        this.id = id || (Math.random() + Modal.modals.length);
    }


public open(template: string): void {
    // check if element exist in dom
    const divWrap = document.createElement('div');
    divWrap.innerHTML = template;
    divWrap.id = this.id;
    divWrap.setAttribute('modal-id', this.id);
    divWrap.classList.add('modal-element');
    document.body.appendChild(divWrap);

}

public remove(): void {
    const modalEl = document.getElementById(this.id);
    modalEl.parentNode.removeChild(modalEl);
}
// static method
public static removeById(id: string = null): void {
    let modalId = id;

    //remove modal from array of active modals
    const findEl = Modal.modals.find(x => x.id === modalId);
    if (findEl) {
        findEl.remove();
        Modal.modals = Modal.modals.filter((el) => el.id !== modalId);
} else {
    if(Array.isArray(Modal.modals)){
        const lastEl = Modal.modals.pop();
        if(lastEl) {
           lastEl.remove();
           }
        }
    }
}
// const modal =new Modal();
public static removeAll() {
        if (Array.isArray(Modal.modals)){
            Modal.modals.forEach((el) => {
                Modal.removeById(el.id);
            });
        }
    }
}
