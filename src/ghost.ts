export class GhostAccessory {
  private element:SVGGraphicsElement;
  private animation:Animation;
  constructor(
    element:SVGGraphicsElement,
    effect:Keyframe[]
  ) {
    this.element = element;
    let ke = new KeyframeEffect(
      this.element, {
        easing: 'ease-in-out',
        direction: 'alternate',
        iterations: 'Infinity'});
    this.animation=new Animation(
      ke, document.timeline);
  }
}

export class Ghost {
  private ectoplasm:SVGGraphicsElement;
  private shadow:SVGEllipseElement;
  private accessory:SVGGraphicsElement;
  // private punctuation:SVGGraphicsElement;
  static keys = [
    { transform: 'translateY(-10px)'},
    { transform: 'translateY(10px)'}
  ];
  static invkeys = [
    { transform: 'translateY(10px) scale(1.01)'},
    { transform: 'translateY(-10px) scale(0.99)'}
  ];
  private timing:KeyframeAnimationOptions = {
    direction: (Math.random() > 0.5 ? 'alternate' : 'alternate-reverse'),
    duration: (1500 * Math.random() + 1500),
    easing: 'ease-in-out',
    iterations: Infinity
  }
  constructor(ectoplasm:SVGGraphicsElement, shadow:SVGEllipseElement)
  {
    this.ectoplasm = ectoplasm;
    this.shadow=shadow;
  }
  hover() {
    console.log(this.ectoplasm)
    this.ectoplasm.animate(Ghost.keys, this.timing);
    this.shadow.animate(Ghost.invkeys, this.timing);
  }
  addAccessory(accessory:SVGElement)
  {
    this.accessory=<SVGGraphicsElement>accessory;
  }
  addShadow(shadow:SVGEllipseElement) {
    this.shadow=shadow;
  }
  applyAnimation(k:Keyframe[], o:KeyframeEffectOptions) {
    let ke=new KeyframeEffect(this.ectoplasm, k, o);
    let ks=new KeyframeEffect(this.shadow, k, o);
    let a=new Animation(ke, document.timeline);
    let ab=new Animation(ks, document.timeline);
    a.play();
    ab.play();
  }
}

export default { Ghost }