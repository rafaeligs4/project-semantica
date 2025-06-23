import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { LiveAnnouncer} from '@angular/cdk/a11y'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dropdown-component',
  imports: [CommonModule],
  templateUrl: './dropdown-component.component.html',
  styleUrl: './dropdown-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponentComponent {
   isOpen = false;
  selectedOption: string | null = null;
  options = ['Perfil', 'Configuración', 'Cerrar sesión'];

  constructor(private liveAnnouncer:LiveAnnouncer) {}

  toggleMenu() {
    this.isOpen = !this.isOpen;
    const message = this.isOpen ? 'Menú abierto' : 'Menú cerrado';
    this.liveAnnouncer.announce(message, 'polite');
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
    this.liveAnnouncer.announce(`Seleccionado: ${option}`, 'assertive');
  }

  // Manejo de teclado
  @HostListener('keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isOpen = false;
      this.liveAnnouncer.announce('Menú cerrado', 'polite');
    }
  }
 }
