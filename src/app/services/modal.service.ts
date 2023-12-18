import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string): void {
    if (!this.modals.find((x) => x.id === id)) {
      this.modals.push({ id, visible: false });
    }
  }

  unregister(id: string): void {
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  isModalOpen(id: string): boolean {
    return this.modals.find((x) => x.id === id)?.visible || false;
  }

  toggleModal(id: string): void {
    const modal = this.modals.find((x) => x.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
