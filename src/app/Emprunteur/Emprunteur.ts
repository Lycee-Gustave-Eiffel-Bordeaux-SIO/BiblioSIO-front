export interface Emprunteur {
  id: Number
  nom: string
  prenom: string
  mail: string
  promo: string
  classe: Classe
  emprunts: Record<'id'|'url', string>[]
}
export enum Classe {
  SIO1A = "SIO1A",
  SIO1B = "SIO1B",
  SIO2A = "SIO2A",
  SIO2B = "SIO2B",
}
