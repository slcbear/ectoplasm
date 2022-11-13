declare class Ghost {
  private ectoplasm;
  private shadow;
  constructor(ectoplasm: SVGGraphicsElement, shadow: SVGEllipseElement);
  float(): void;
  addShadow(shadow: SVGEllipseElement): void;
}