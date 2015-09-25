
import { Cloak } from '../../definitions/equipment';
import { AC } from '../../lib/default-calculations';
import Materials from '../../constants/materials';

export class OrdinaryCloak extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 50; }
}

export class MummyWrapping extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 10; }
  Invisible() { return -1; }
}

export class OrcishCloak extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 20; }
}

export class DwarvenCloak extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 20; }
}

export class LeatherCloak extends Cloak {
  get material() { return Materials.Leather; }
  static get rarity() { return 2; }
  ac() {
    return AC(this, 1);
  }
}

export class AlchemySmock extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 1; }
  ac() {
    return AC(this, 1);
  }
  PoisonResistance() { return 1; }
  AcidResistance() { return 1; }
}

export class InvisibilityCloak extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 1; }
  Invisible() { return 1; }
}

export class ElvenCloak extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 1; }
  Stealth() { return this.buc * 10; }
}

export class Robe extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 1; }
  ac() {
    return AC(this, 2);
  }
}

export class CloakOfProtection extends Cloak {
  get material() { return Materials.Cloth; }
  static get rarity() { return 5; }
  get fakeName() { return 'rigid cloak'; }
  Protection() {
    return this.buc * -2;
  }
}