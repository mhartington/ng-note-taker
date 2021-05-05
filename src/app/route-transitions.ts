import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';
const OFF_BOTTOM = '40px';
export const slider = trigger('routeAnimations', [
  transition('1 => 2', slideForward()),
  transition('2 => 1', slideBack() ),
]);
function slideForward() {
  return [
    //  Init styles
    query( ':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':enter', [ style({ opacity: 0.01, transform: `translateY(${OFF_BOTTOM})`, zIndex: 1 }), ]),
    group([
      // when entering
      query(':enter', [
        animate(
          '200ms cubic-bezier(0.47,0,0.745,0.715)',
          style({ opacity:1, transform: 'translate3d(0, 0, 0)' })
        ),
      ]),
    ]),
  ];
}
function slideBack() {
  return [
    //  Init styles
    query( ':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', [ style({ opacity: 1, zIndex: 1, transform: `translateY(0)` }), ]),
    group([
      // when leading
      query(':leave', [
        animate(
          '280ms cubic-bezier(0.36,0.66,0.04,1)',
          style({opacity: 0, transform: `translateY(${OFF_BOTTOM})` })
        ),
      ]),

      // when entering
      query(':enter', [
        animate(
          '200ms cubic-bezier(0.47,0,0.745,0.715)',
          style({ opacity:1, transform: 'translate3d(0, 0, 0)' })
        ),
      ]),
    ]),
  ];
}
