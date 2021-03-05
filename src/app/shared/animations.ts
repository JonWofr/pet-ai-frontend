import { animate, style, transition, trigger } from '@angular/animations';

export const slideInOutLeft = trigger('slideInOutLeft', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);

export const slideInOutRight = trigger('slideInOutRight', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateX(0)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateX(100%)' })),
  ]),
]);

export const slideInOutBottom = trigger('slideInOutBottom', [
  transition(':enter', [
    style({ transform: 'translateY(100%)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateY(0)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0)' }),
    animate('0.7s ease-in-out', style({ transform: 'translateY(100%)' })),
  ]),
]);
